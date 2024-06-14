import img_1 from "../images/menu/pizza-1.WebP";
import img_2 from "../images/menu/drinks-1.WebP";
import img_3 from "../images/menu/Fries-1.WebP";
import img_4 from "../images/menu/burger-1.WebP";
import img_5 from "../images/menu/sandwich-1.WebP";
import LazyLoad from "react-lazyload";
import useObserver from "../hooks/useObserver";

function ServicesProducts() {
  const [ref, inView] = useObserver();
  return (
    <>
      <h3 className="section-name">
        Products are always <strong>available</strong>
      </h3>
      <section
        className={`services-products ${
          inView ? "animate__animated animate__fadeInUp show" : ""
        }`}>
        <div ref={ref} className="service-product">
          <LazyLoad height={200} once={true}>
            <div className="product-img">
              <img src={img_1} alt="product-img" />
            </div>
          </LazyLoad>
          <div className="details">
            <h3 className="product-name roboto-black">Maxican Pizza</h3>
            <p className="text roboto-black-italic">
              A spicy pizza with buffalo chicken
            </p>
          </div>
        </div>
        <div ref={ref} className="service-product">
          <LazyLoad height={200} once={true}>
            <div className="product-img">
              <img src={img_2} alt="product-img" />
            </div>
          </LazyLoad>
          <div className="details">
            <h3 className="product-name roboto-black">Soft Drinks</h3>
            <p className="text roboto-black-italic">
              Freshly squeezed orange juice packed with
            </p>
          </div>
        </div>
        <div ref={ref} className="service-product">
          <LazyLoad height={200} once={true}>
            <div className="product-img">
              <img src={img_3} alt="product-img" />
            </div>
          </LazyLoad>
          <div className="details">
            <h3 className="product-name roboto-black">French Fry</h3>
            <p className="text roboto-black-italic">
              Crispy fries seasoned with a spicy blend
            </p>
          </div>
        </div>
        <div ref={ref} className="service-product">
          <LazyLoad height={200} once={true}>
            <div className="product-img">
              <img src={img_4} alt="product-img" />
            </div>
          </LazyLoad>
          <div className="details">
            <h3 className="product-name roboto-black">Burger Kingo</h3>
            <p className="text roboto-black-italic">
              A towering burgers with two beef patties
            </p>
          </div>
        </div>
        <div ref={ref} className="service-product">
          <LazyLoad height={200} once={true}>
            <div className="product-img">
              <img src={img_5} alt="product-img" />
            </div>
          </LazyLoad>
          <div className="details">
            <h3 className="product-name roboto-black">Chicken Masala</h3>
            <p className="text roboto-black-italic">
              A classic sandwiches with turkey, lettuce
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default ServicesProducts;
