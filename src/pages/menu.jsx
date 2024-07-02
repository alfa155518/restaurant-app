import { useRef, useState, useEffect } from "react";
import axios from "axios";
import WrapperNav from "../components/wrapperNav";
import Footer from "../layout/footer";
import Product from "../components/Product";
import ScrollToTop from "../components/scrollToTop";
import Loader from "../components/loader";
import NoUser from "../components/noUser";
import "../sass/pages/menu.css";

function Menu() {
  const categoryName = useRef();
  const [allProducts, setAllProducts] = useState();
  const [products, setProducts] = useState([]);

  // Get All Products
  const getAllProducts = async () => {
    const response = await axios.get(
      "http://localhost:8000/api/v1/allProducts/"
    );
    const data = await response.data;
    await setAllProducts(() => {
      return data.products;
    });
  };

  // Get Products and show them
  const getProducts = async () => {
    const response = await axios.get(
      "http://localhost:8000/api/v1/allProducts/"
    );
    const data = await response.data;
    await setProducts(() => {
      return data.products;
    });
  };
  // Handel To Load All Products
  useEffect(() => {
    getAllProducts();
  }, [setAllProducts]);

  // Handel To Load  Products
  useEffect(() => {
    getProducts();
  }, [setProducts]);

  // Handle Active Categories name And Filter Products
  function handelActiveCategory(e) {
    const allLinks = categoryName.current.querySelectorAll("li");
    allLinks.forEach((li) => {
      li.classList.remove("active-link");
      e.target.classList.add("active-link");
    });

    // Filter Products
    const filteredProduct = allProducts.filter((product) => {
      if (e.target.innerHTML === "All Foods") {
        return products;
      }
      return product.category === e.target.innerHTML;
    });
    setProducts(filteredProduct);
  }

  return (
    <>
      {products.length <= 0 ? (
        <Loader />
      ) : (
        <>
          <WrapperNav sectionName={"Foods"} />
          {localStorage.getItem("newUser") ? (
            <section className="wrapper-menu">
              <h3 className="section-name">
                Our Tasty <strong>Foods</strong>
                <p className="text">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam,
                  eos. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
                </p>
              </h3>
              <div className="menu-content">
                <ul
                  className="categories roboto-black-italic"
                  ref={categoryName}>
                  <li className="active-link" onClick={handelActiveCategory}>
                    All Foods
                  </li>
                  <li onClick={handelActiveCategory}>burgers</li>
                  <li onClick={handelActiveCategory}>pizza</li>
                  <li onClick={handelActiveCategory}>sandwiches</li>
                  <li onClick={handelActiveCategory}>drinks</li>
                  <li onClick={handelActiveCategory}>pasta</li>
                  <li onClick={handelActiveCategory}>combes</li>
                  <li onClick={handelActiveCategory}>fries</li>
                </ul>
                <section className="menu-products">
                  <Product products={products} />
                </section>
              </div>
            </section>
          ) : (
            <NoUser />
          )}
          <Footer />
        </>
      )}
      <ScrollToTop />
    </>
  );
}

export default Menu;
