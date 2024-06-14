import { PiForkKnifeFill } from "react-icons/pi";
import { FaBurger } from "react-icons/fa6";
import { FaAward } from "react-icons/fa6";
import { Link } from "react-router-dom";
import useObserver from "../hooks/useObserver";
import deliver_img from "../images/deliver-quality.WebP";
import chef_img from "../images/award-chef.WebP";
import LazyLoad from "react-lazyload";
function AboutUsSection() {
  const [ref, inView] = useObserver();
  return (
    <>
      <h3 className="section-name">
        Why Choose <strong>Our Foods</strong>
        <p className="text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero atque
          itaque nihil odio neque doloribus, tenetur
        </p>
      </h3>
      <section
        className={`advantages  ${
          inView ? "animate__animated animate__slideInDown show" : ""
        }`}>
        <div ref={ref} className="advantage">
          <PiForkKnifeFill className="icon" />
          <div className="info">
            <p className="title roboto-black-italic">Delicious & Healthy</p>
            <span className="desc roboto-medium-italic">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex,
              ipsa.
            </span>
          </div>
        </div>
        <div className="advantage">
          <FaBurger className="icon" />
          <div className="info">
            <p className="title roboto-black-italic">Fresh Ingredients</p>
            <span className="desc roboto-medium-italic">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex,
              ipsa.
            </span>
          </div>
        </div>
        <div className="advantage">
          <FaAward className="icon" />
          <div className="info">
            <p className="title roboto-black-italic">Best Price & Offers</p>
            <span className="desc roboto-medium-italic">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex,
              ipsa.
            </span>
          </div>
        </div>
      </section>
      <section className="deliver-quality">
        <div
          ref={ref}
          className={`info ${
            inView ? "animate__animated animate__zoomIn animate__slow show" : ""
          }`}>
          <h4 className="section-name">
            We Deliver Quality <strong>Foods</strong>
          </h4>
          <p className="text roboto-black-italic">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non nemo
            nobis similique omnis sit! Voluptatibus consectetur praesentium
            dolore magni. Id, nisi dolor quas sunt ea quo, perferendis labore
            laudantium reiciendis mollitia facilis cum tempore consequatur!
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto
            ullam, cumque, delectus accusantium dolore veniam tenetur
            necessitatibus Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. Iusto ullam.
          </p>
          <Link to={"/menu"}>Order Now</Link>
        </div>
        <div className="deliver-img">
          <LazyLoad height={200} once={true}>
            <img src={deliver_img} alt="img" />
          </LazyLoad>
        </div>
      </section>
      <section className="award-chef">
        <div className="chef-img">
          <LazyLoad height={200} once={true}>
            <img src={chef_img} alt="img" className="chef" />
          </LazyLoad>
        </div>
        <div
          className={`info ${
            inView
              ? "animate__animated animate__fadeInUp animate__slow show"
              : ""
          }`}>
          <h5 className="section-name">
            Award Winning <strong>Chef</strong>
          </h5>
          <p className="text roboto-black-italic">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non nemo
            nobis similique omnis sit! Voluptatibus consectetur praesentium
            dolore magni. Id, nisi dolor quas sunt ea quo, perferendis labore
            laudantium reiciendis mollitia facilis cum tempore consequatur!
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto
            ullam, cumque, delectus accusantium dolore veniam tenetur
            necessitatibus Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. Iusto ullam.
          </p>
          <Link to={"/menu"}>Order Now</Link>
        </div>
      </section>
    </>
  );
}

export default AboutUsSection;
