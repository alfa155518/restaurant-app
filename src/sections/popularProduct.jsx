import { Link } from "react-router-dom";
import Product from "../components/Product";
import useObserver from "../hooks/useObserver";
import products from "../api/popularProduct";
import "../sass/sections/popular-product.css";
function PopularProduct() {
  const [ref, inView] = useObserver();

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
        <Product products={products} />
      </section>
      <Link to={"/"} className="more-products roboto-bold">
        Explore More
      </Link>
    </>
  );
}

export default PopularProduct;
