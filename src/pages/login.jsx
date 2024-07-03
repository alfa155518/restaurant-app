import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../layout/footer";
import ScrollToTop from "../components/scrollToTop";
import Loader from "../components/loader";
import useLogin from "../hooks/useLogin";
import "../sass/pages/login.css";

function Login({ admin, setAdmin }) {
  //Costume Hook Login
  const [email, setEmail, password, setPassword, loading, handelLogin] =
    useLogin((admin = { admin }), (setAdmin = { setAdmin }));
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  className="default-input"
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  autoComplete="password any thing"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button
                type="submit"
                className="submit-btn send-data"
                onClick={(e) => handelLogin(e)}>
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
      )}
      <ScrollToTop />
    </>
  );
}

export default Login;
