import useObserver from "../hooks/useObserver";
import deliveryImg from "../images/delivery.WebP";

import "../sass/sections/delivery.css";

function Delivery() {
  const [ref, inView] = useObserver();
  return (
    <section className="delivery-container">
      <h2 className="section-name">
        Our <strong>Delivery</strong> Foods
      </h2>
      <div
        ref={ref}
        className={`delivery-content ${
          inView ? "animate__animated animate__zoomIn show" : ""
        }`}>
        <div className="right-text">
          <h3 className="title roboto-black-italic">
            Choose Your Favourite Food
          </h3>
          <p className="desc roboto-medium-italic">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
            molestiae! Lorem ipsum, dolor sit amet
          </p>
        </div>
        <div className="delivery-img">
          <img src={deliveryImg} alt="delivery-img" />
        </div>
        <div className="left-text">
          <h4 className="title roboto-black-italic">
            Order Online and Get Fast Delivery
          </h4>
          <p className="desc roboto-medium-italic">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex, ipsa.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Delivery;
