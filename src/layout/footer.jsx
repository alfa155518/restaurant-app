import { Link } from "react-router-dom";
import { ImLocation2 } from "react-icons/im";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import imgFooter from "../images/logo.WebP";
import "../sass/layout/footer.css";

function Footer() {
  return (
    <>
      <footer>
        <div className="subscription">
          <div className="logo">
            <img src={imgFooter} alt="logo" />
          </div>
          <div className="news-title">
            <h2 className="roboto-black ">Subscription News</h2>
            <span className="roboto-light-italic">
              Subscribe to the Weekly Newles Letter
            </span>
          </div>
          <form>
            <input
              type="email"
              placeholder="Enter your email"
              name="email"
              autoComplete="any email"
            />
            <button type="submit">Subscribe</button>
          </form>
        </div>
        <div className="footer-content">
          <ul className="links">
            <li>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </span>
            </li>
              <li>
            <p className="roboto-bold-italic">
              Book A Table
              <br />
              <span>+201555187474</span>
            </p>
              </li>
              <li>
            <p className="roboto-bold-italic">
              Opening Hours
              <br />
              <span>08:00AM - 12:00PM</span>
            </p>
              </li>
          </ul>
          <ul className="links">
            <li>
            <h3 className="title-link roboto-black ">Quick Links</h3>
            </li>
            <li>
              <Link to={"/about-us"}>About Us</Link>
            </li>
            <li>
              <Link to={"/menu"}>Menu</Link>
            </li>
            <li>
              <Link to={"/services"}>Services</Link>
            </li>
            <li>
              <Link to={"/contact-us"}>Contact Us</Link>
            </li>
          </ul>
          <ul className="links get-touch">
            <li>
            <h4 className="title-link roboto-black ">Get in Touch</h4>
            </li>
            <li>
              <ImLocation2 className="icon" />
              <strong>Egypt,Cairo</strong>
            </li>
            <li>
              <FaPhoneVolume className="icon" />
              <strong>+201555187474</strong>
            </li>
            <li>
              <MdEmail className="icon" />
              <strong>alfa@gmail.com</strong>
            </li>
          </ul>
        </div>
      </footer>
      <div className="copy-right">
        <p className="roboto-light-italic">
          Copyright &copy; <strong>Ahmed Hassob</strong> 2024. All rights
          reserved.
        </p>
      </div>
    </>
  );
}

export default Footer;
