import { RiDeleteBinFill } from "react-icons/ri";
import LazyLoad from "react-lazyload";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import Loader from "../components/loader";
import MenuCharts from "../charts/menuCharts";
import ScrollToTop from "../components/scrollToTop";
import useMenuProducts from "../hooks/useMenuProducts";
import "../sass/pages/menu-management.css";
function MenuManagement() {
  // Costume Hook For handel Products in menu
  const { menuProducts, handelDeleteProduct, loading } = useMenuProducts();
  return (
    <section className="menu-management-container">
      {loading ? (
        <Loader />
      ) : (
        <>
          <table>
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
                <th>Desc</th>
                <th>Type</th>
                <th>ِActions</th>
              </tr>
            </thead>
            <tbody>
              {menuProducts.map((product, i) => {
                const defaultImagePath = require(`../images/menu/default-image.WebP`);
                let imagePath = defaultImagePath;
                try {
                  // Assuming the API response contains the image path
                  imagePath = require(`../images/menu/${product?.image}`);
                } catch (error) {
                  // Handle the error if the image file does not exist
                  console.error(`Image not found: ${product?.image}`);
                }
                return (
                  <tr key={i}>
                    <td>
                      <LazyLoad height={100} offset={100}>
                        <img
                          src={imagePath}
                          alt="product img"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = defaultImagePath;
                          }}
                        />
                      </LazyLoad>
                    </td>
                    <td className="name">{product.name}</td>
                    <td className="price">{product.price}</td>
                    <td className="description">{product.description}</td>
                    <td className="type">{product.category}</td>
                    <td className="actions">
                      <button
                        className="update"
                        aria-label="btn update product">
                        <Link to={`/updateProduct/${product._id}`}>
                          <FaEdit />
                        </Link>
                      </button>
                      <button
                        className="delete"
                        aria-label="btn delete product"
                        onClick={(e) => handelDeleteProduct(e, product)}>
                        <RiDeleteBinFill />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <button className="btn-add roboto-black">
            <Link to="/add-product">Add Product</Link>
          </button>
          <MenuCharts />
        </>
      )}
      <ScrollToTop />
    </section>
  );
}

export default MenuManagement;
