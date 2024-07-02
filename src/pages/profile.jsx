import { IoSettings } from "react-icons/io5";
import { BiSolidBookmarks } from "react-icons/bi";
import { FaStar } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { FaBarsStaggered } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useState } from "react";
import Footer from "../layout/footer";
import ScrollToTop from "../components/scrollToTop";
import NavBar from "../components/NavBar";
import defaultPhoto from "../images/users/default.WebP";
import Loader from "../components/loader";
import useUpdateUsernameAndEmail from "../hooks/useUpdateUsernameAndEmail";
import useUpdatePhoto from "../hooks/useUpdatePhoto";
import "../sass/pages/profile.css";
import useUpdatePassword from "../hooks/useUpdatePassword";

function Profile() {
  // Control SideBar
  const [showSideBar, setShowSideBar] = useState(false);
  // Current User
  const user = JSON.parse(localStorage.getItem("newUser"));
  // User Token
  const token = localStorage.getItem("uToken");
  // Handel Loading
  const [loading, setLoading] = useState(false);

  // Costume Hook To Change Data
  const {
    handelUpdateFirstNameAndEmail,
    userFirstName,
    setUserFirstName,
    userEmail,
    setUserEmail,
    photo,
  } = useUpdateUsernameAndEmail(user, token, setLoading);

  // User Photo
  const userPhoto = photo?.url || defaultPhoto;

  // Costume Hook To update photo
  const { handelUpdatePhoto, setUpdatedPhoto } = useUpdatePhoto(
    setLoading,
    token
  );

  // Costume Hook Handle Change Password
  const {
    handleChangePassword,
    currentPassword,
    newPassword,
    setCurrentPassword,
    setNewPassword,
  } = useUpdatePassword(setLoading, token);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <NavBar />
          <section className="profile-wrapper">
            <div className="profile-content p-relative">
              <div
                className="bars"
                onClick={() => setShowSideBar(!showSideBar)}>
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
                  <img src={userPhoto} alt="user" />
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
                      name="firstName"
                      id="firstName"
                      placeholder="First Name"
                      autoComplete="name complete"
                      required
                      value={userFirstName}
                      onChange={(e) => setUserFirstName(e.target.value)}
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
                      required
                      value={userEmail}
                      onChange={(e) => setUserEmail(e.target.value)}
                    />
                  </div>
                  <button
                    type="submit"
                    onClick={(e) => handelUpdateFirstNameAndEmail(e)}
                    className="send-data">
                    Update data
                  </button>
                  <div className="form-group">
                    <input
                      className="default-input"
                      type="file"
                      name="file"
                      id="file"
                      placeholder="Change Image"
                      autoComplete="file complete"
                      accept="image/*"
                      onChange={(e) => setUpdatedPhoto(e.target.files[0])}
                    />
                    <label htmlFor="file" className="roboto-black-italic">
                      Change Img
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="send-data"
                    onClick={(e) => handelUpdatePhoto(e)}>
                    Update Photo
                  </button>
                </form>

                {/* ******* Secret Data ****** */}
                <form className="secret-data">
                  <h3 className="section-name">Password Change</h3>
                  <div className="form-group">
                    <input
                      className="default-input"
                      type="password"
                      name="currentPassword"
                      id="currentPassword"
                      placeholder="Current Password"
                      autoComplete="C-Password complete"
                      required
                      value={currentPassword}
                      onChange={(e) => setCurrentPassword(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      className="default-input"
                      type="password"
                      name="password"
                      id="password"
                      placeholder="New Password"
                      autoComplete="N-Password complete"
                      required
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                    />
                  </div>
                  <button
                    className="send-data"
                    type="submit"
                    onClick={(e) => handleChangePassword(e)}>
                    Change Password
                  </button>
                </form>
              </div>
            </div>
          </section>
          <Footer />
        </>
      )}
      <ScrollToTop />
    </>
  );
}

export default Profile;
