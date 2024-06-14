import { IoSettings } from "react-icons/io5";
import { BiSolidBookmarks } from "react-icons/bi";
import { FaStar } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { FaBarsStaggered } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Footer from "../layout/footer";
import ScrollToTop from "../components/scrollToTop";
import NavBar from "../components/NavBar";
import user from "../images/439771693_789249223132590_394557324656325282_n.WebP";
import "../sass/pages/profile.css";
import { useState } from "react";

function Profile() {
  const [showSideBar, setShowSideBar] = useState(false);
  return (
    <>
      <NavBar />
      <section className="profile-wrapper">
        <div className="profile-content p-relative">
          <div className="bars" onClick={() => setShowSideBar(!showSideBar)}>
            <FaBarsStaggered />
          </div>
          <div
            className={`side-bar p-relative ${
              showSideBar && "active-side-bar"
            }`}>
            <div
              className="close-bar"
              onClick={() => setShowSideBar(!showSideBar)}>
              <IoMdClose />
            </div>
            <div className="user-photo">
              <img src={user} alt="user" />
              <strong className="user-name roboto-bold">Alfa</strong>
            </div>
            <ul className="links">
              <li>
                <Link to="/profile">
                  <IoSettings />
                  <span>Settings</span>
                </Link>
              </li>
              <li>
                <Link to="/my-bookings">
                  <BiSolidBookmarks />
                  <span>My Booking</span>
                </Link>
              </li>
              <li>
                <Link to="/favorite">
                  <FaStar />
                  <span>Favorites</span>
                </Link>
              </li>
              <li>
                <Link to="/payment">
                  <FaCcMastercard />
                  <span>Payments</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="content">
            <h2 className="section-name">Your Account Settings</h2>
            <form className="public-data">
              <div className="form-group">
                <input
                  className="default-input"
                  type="text"
                  name="first-name"
                  id="first-name"
                  placeholder="First Name"
                  autoComplete="name complete"
                />
              </div>
              <div className="form-group">
                <input
                  className="default-input"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  autoComplete="email complete"
                />
              </div>
              <div className="form-group">
                <input
                  className="default-input"
                  type="file"
                  name="file"
                  id="file"
                  placeholder="Change Image"
                  autoComplete="file complete"
                />
                <label htmlFor="file" className="roboto-black-italic">
                  Change Img
                </label>
              </div>
            </form>

            {/* ******* Secret Data ****** */}
            <form className="secret-data">
              <h3 className="section-name">Password Change</h3>
              <div className="form-group">
                <input
                  className="default-input"
                  type="password"
                  name="current-password"
                  id="current-password"
                  placeholder="Current Password"
                  autoComplete="C-Password complete"
                />
              </div>
              <div className="form-group">
                <input
                  className="default-input"
                  type="password"
                  name="password"
                  id="new-password"
                  placeholder="New Password"
                  autoComplete="N-Password complete"
                />
              </div>
              <div className="form-group">
                <input
                  className="default-input"
                  type="password"
                  name="password"
                  id="confirm-password"
                  placeholder="confirm Password"
                  autoComplete="confirm-Password complete"
                />
              </div>
            </form>
          </div>
        </div>
      </section>
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default Profile;