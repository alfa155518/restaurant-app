import { FaRegClock } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";
import { IoCart } from "react-icons/io5";
import { FaBarsStaggered } from "react-icons/fa6";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import Logo from "../images/logo.WebP";
import user from "../images/439771693_789249223132590_394557324656325282_n.WebP";
import "../sass/layout/navbar.css";
function NavBar() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="navbar-layout roboto-medium">
      <div className={`overlay ${showMenu ? "active" : ""}`}></div>
      <header>
        <p className="header-text">
          <FaRegClock /> Mon-Fri: 8am - 11pm Sat-Sun: 8am - 12pm
        </p>
      </header>
      <nav>
        <h1 className="logo">
          <img src={Logo} alt="logo" />
        </h1>
        <div className={`container-links ${showMenu ? "appear" : ""}`}>
          <div className="close-icon" onClick={() => setShowMenu(!showMenu)}>
            <IoMdClose />
          </div>
          <ul className="links roboto-medium-italic">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/menu"}>Menu</Link>
            </li>
            <li>
              <Link to={"/tables"}>Tables</Link>
            </li>
            <li>
              <Link to={"/services"}>Services</Link>
            </li>
            <li>
              <Link to={"/about-us"}>About</Link>
            </li>
            <li>
              <Link to={"/contact-us"}>Contact</Link>
            </li>
          </ul>
        </div>
        <div className="call-us">
          <FaPhoneAlt />
          <span>+123456789</span>
        </div>
        <div className="actions">
          <div className="cart">
            <Link to={"/cart"} aria-label="cart product">
              <IoCart />
            </Link>
          </div>
          {/* <Link to={"/signup"} className="sing-up">
            Create Account
          </Link> */}
          <div className="profile">
            <Link to={"/profile"}>
              <img src={user} alt="user-img" />
            </Link>
          </div>
        </div>
        <div className="bars" onClick={() => setShowMenu(!showMenu)}>
          <FaBarsStaggered />
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
