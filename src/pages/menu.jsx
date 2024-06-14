import WrapperNav from "../components/wrapperNav";
import Footer from "../layout/footer";
import Product from "../components/Product";
import allProducts from "../api/allProduct";
import "../sass/pages/menu.css";
import { useRef, useState } from "react";
import ScrollToTop from "../components/scrollToTop";
function Menu() {
  const categoryName = useRef();
  const [products, setProducts] = useState(allProducts);

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
      return product.type === e.target.innerHTML;
    });
    setProducts(filteredProduct);
  }
  return (
    <>
      <WrapperNav sectionName={"Foods"} />
      <section className="wrapper-menu">
        <h3 className="section-name">
          Our Tasty <strong>Foods</strong>
          <p className="text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam, eos.
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
          </p>
        </h3>
        <div className="menu-content">
          <ul className="categories roboto-black-italic" ref={categoryName}>
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
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default Menu;
