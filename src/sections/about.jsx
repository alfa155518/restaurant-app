import { IoMdCheckmarkCircle } from "react-icons/io";

import about_img from "../images/about.WebP";
import "../sass/sections/about.css";
import useObserver from "../hooks/useObserver";
function About() {
  const [ref, inView] = useObserver();

  return (
    <section className="about-wrapper">
      <h2 className="section-name">
        About <strong>Foods</strong>
      </h2>
      <div className="about-container">
        <div
          ref={ref}
          className={`about-img ${
            inView ? "animate__animated animate__bounceInLeft show" : ""
          }`}>
          <img src={about_img} alt="about-img" />
        </div>
        <div className="about-info">
          <h3 className="title roboto-black-italic">
            About <strong>Foods</strong> Grill
          </h3>
          <p className="text roboto-black-italic">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <ul className="confirmations roboto-black-italic">
            <li>
              <IoMdCheckmarkCircle className="icon" />
              <span>Delicious & Healthy Foods</span>
            </li>
            <li>
              <IoMdCheckmarkCircle className="icon" />
              <span>Best Price & Offers</span>
            </li>
            <li>
              <IoMdCheckmarkCircle className="icon" />
              <span>Made by Fresh Ingredients</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
