import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../layout/footer";
import "../sass/pages/sign-up.css";
function SignUp() {
  return (
    <>
      <NavBar />
      <form>
        <h2 className="section-name">
          Create
          <strong>Account</strong>
          <span className="text">
            Get access to exculsive features by Creating Account
          </span>
        </h2>
        <div className="form-container">
          <div className="form-group">
            <input
              className="default-input"
              type="text"
              name="first-name"
              id="first-name"
              placeholder="First Name"
              required
              autoComplete="any name"
            />
            <input
              className="default-input"
              type="text"
              name="last-name"
              id="last-name"
              placeholder="Last Name"
              required
              autoComplete="any name"
            />
          </div>
          <div className="form-group">
            <input
              className="default-input"
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              required
              autoComplete="email any thing"
            />
            <input
              className="default-input"
              type="tel"
              name="phone"
              id="phone"
              autoComplete="phone any thing"
              placeholder="Phone"
            />
          </div>
          <div className="form-group">
            <input
              className="default-input"
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              autoComplete="password any thing"
            />
            <input
              className="default-input"
              type="password"
              name="confirm-password"
              id="confirm-password"
              required
              placeholder="confirm password"
              autoComplete="confirm password any thing"
            />
          </div>
          <button type="submit" className="send-data">
            Sing-Up
          </button>
          <p className="have-account roboto-medium">
            Already have an account? <Link to={"/login"}>Login</Link>
            Now
          </p>
        </div>
      </form>
      <Footer />
    </>
  );
}

export default SignUp;
