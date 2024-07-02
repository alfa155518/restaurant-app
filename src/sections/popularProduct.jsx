import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { contextData } from "../context/HandelProducts";
import products from "../api/popularProduct";
import Product from "../components/Product";
import useObserver from "../hooks/useObserver";
import "../sass/sections/popular-product.css";

import axios from "axios";
function PopularProduct() {
  const [ref, inView] = useObserver();
  const { popularProducts, setPopularProducts } = useContext(contextData);
  // 1) Get Data And Show it
  async function getPopularProducts() {
    await setPopularProducts(products);
    try {
      const response = await axios.get(
        "http://localhost:8000/api/v1/popularProducts"
      );
      const data = await response?.data?.popularProducts;
      await setPopularProducts(data);
    } catch (error) {
      console.error(
        "There has been a problem with your fetch operation:",
        error
      );
    }
  }
  // 2) Update Data
  useEffect(() => {
    getPopularProducts();
  }, [setPopularProducts]);

  return (
    <>
      <h2 className={`section-name `}>
        Our Popular <strong>Tasty</strong> Foods
        <span>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam
          culpa impedit
        </span>
      </h2>
      <section
        ref={ref}
        className={`popular-wrapper ${
          inView ? "animate__animated animate__zoomIn" : ""
        }`}>
        <Product products={popularProducts} />
      </section>
      <Link to={"/"} className="more-products roboto-bold">
        Explore More
      </Link>
    </>
  );
}

export default PopularProduct;
