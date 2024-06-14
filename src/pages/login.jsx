import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../layout/footer";
import "../sass/pages/login.css";
function Login() {
  return (
    <>
      <NavBar />
      <form>
        <h2 className="section-name">
          Welcome Back,
          <strong>Login</strong>
          <span className="text">
            Enter your details to sign in to your account
          </span>
        </h2>
        <div className="form-container">
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
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              autoComplete="password any thing"
            />
          </div>
          <button type="submit" className="submit-btn send-data">
            Login
          </button>
          <p className="have-account roboto-medium">
            Don't have an account? <Link to={"/signup"}>SingUp</Link>
            Now
          </p>
        </div>
      </form>
      <Footer />
    </>
  );
}

export default Login;
