// Component Swipper
import SwipperSlider from "../components/swipper";

// import Images
import categoryImg_1 from "../images/category-1.WebP";
import categoryImg_2 from "../images/category-2.WebP";
import categoryImg_3 from "../images/category-3.WebP";
import categoryImg_4 from "../images/category-4.WebP";
import categoryImg_5 from "../images/category-5.WebP";
import categoryImg_6 from "../images/category-6.WebP";
import categoryImg_7 from "../images/category-7.WebP";
import useObserver from "../hooks/useObserver";
import "../sass/sections/category.css";
function Category() {
  const [ref, inView] = useObserver();
  const arrayImages = [
    categoryImg_1,
    categoryImg_2,
    categoryImg_3,
    categoryImg_4,
    categoryImg_5,
    categoryImg_6,
    categoryImg_7,
  ];
  return (
    <section
      ref={ref}
      className={`category ${
        inView ? "animate__animated animate__bounceInUp show" : ""
      }`}>
      <SwipperSlider arrayImages={arrayImages} />
    </section>
  );
}

export default Category;
