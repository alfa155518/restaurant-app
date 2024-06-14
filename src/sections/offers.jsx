import useObserver from "../hooks/useObserver";
import offer_img_1 from "../images/offer-1.WebP";
import offer_img_2 from "../images/offer-2.WebP";
import offer_img_3 from "../images/offer-3.WebP";

import "../sass/sections/offers.css";
function Offers() {
  const [ref, inView] = useObserver();
  return (
    <section className="offers roboto-bold">
      <h3 className="section-name roboto-black-italic ">
        Offers
        <strong>Foods</strong>
      </h3>
      <ul
        ref={ref}
        className={`offers-content ${
          inView ? "animate__animated animate__zoomIn show" : ""
        }`}>
        <li>
          <div className="info">
            <h4 className="product-name">Pasta</h4>
            <p className="text">
              Get 20% Discount on your FIRST ORDER{" "}
              <span className="price">$12.99</span>
            </p>
          </div>
          <div className="offer-img">
            <img src={offer_img_1} alt="offer-img" />
          </div>
        </li>
        <li>
          <div className="info">
            <h4 className="product-name">Burger</h4>
            <p className="text">
              Burger Get 20% Discount on your FIRST ORDER{" "}
              <span className="price">$7.99</span>
            </p>
          </div>
          <div className="offer-img">
            <img src={offer_img_2} alt="offer-img" />
          </div>
        </li>
        <li>
          <div className="info">
            <h4 className="product-name">Combo</h4>
            <p className="text">
              Combo Get 20% Discount on your FIRST ORDER{" "}
              <span className="price">$19.99</span>
            </p>
          </div>
          <div className="offer-img">
            <img src={offer_img_3} alt="offer-img" />
          </div>
        </li>
      </ul>
    </section>
  );
}

export default Offers;
