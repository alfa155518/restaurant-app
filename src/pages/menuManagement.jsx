import { useContext } from "react"
import { contextAdmin } from "../context/AdminManageMent"
import { RiDeleteBinFill } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";

import "../sass/pages/menu-management.css"
import MenuCharts from "../charts/menuCharts";
import LazyLoad from "react-lazyload";
import { Link } from "react-router-dom";
function MenuManagement() {
  const {allProducts} = useContext(contextAdmin)

  return (
    <section className="menu-management-container">
      {
        allProducts.length === 0 ? <h2>There Is No Products </h2>
        :
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
            {
              allProducts.map((product,i) => {
                return (
                  <tr key={i}>
                    <td>
                      <LazyLoad height={100} offset={100}>
                      <img src={product.image} alt="product-img"/>
                      </LazyLoad>
                      </td>
                    <td className="name">{product.name}</td>
                    <td className="price">{product.price}</td>
                    <td className="description">{product.desc}</td>
                    <td className="type">{product.type}</td>
                    <td className="actions">
                      <button className="update" aria-label="btn update product"><FaEdit/></button>
                      <button className="delete" aria-label="btn delete product"><RiDeleteBinFill/></button>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
        <button className='btn-add-product roboto-black'>
      <Link to="/add-product">Add Product</Link>
    </button>
        <MenuCharts/>
      </>
      }
    </section>
  )
}

export default MenuManagement
