import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../layout/footer";
import ScrollToTop from "../components/scrollToTop";
import "../sass/pages/sign-up.css";
import useSignup from "../hooks/useSignup";
import Loader from "../components/loader";
function SignUp() {
  // Costume Hook For Handel Signup
  const [
    handelSignUp,
    firstName,
    lastName,
    email,
    password,
    passwordConfirm,
    phone,
    setFirstName,
    setLastName,
    setEmail,
    setPassword,
    setPasswordConfirm,
    setPhone,
    setPhoto,
    loading,
  ] = useSignup();
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
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
                  name="firstName"
                  id="firstName"
                  placeholder="First Name"
                  required
                  autoComplete="any name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <input
                  className="default-input"
                  type="text"
                  name="lastName"
                  id="lastName"
                  placeholder="Last Name"
                  required
                  autoComplete="any name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  className="default-input"
                  type="tel"
                  name="phone"
                  id="phone"
                  autoComplete="phone any thing"
                  placeholder="+201111111"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <input
                  className="default-input"
                  type="password"
                  name="passwordConfirm"
                  id="passwordConfirm"
                  required
                  placeholder="confirm password"
                  autoComplete="confirm password any thing"
                  value={passwordConfirm}
                  onChange={(e) => setPasswordConfirm(e.target.value)}
                />
              </div>
              <label
                htmlFor="photo"
                style={{
                  width: "fit-content",
                }}>
                Select Image
              </label>
              <input
                className="default-input"
                type="file"
                name="photo"
                id="photo"
                placeholder="Photo"
                autoComplete="photo any thing"
                accept="image/*"
                onChange={(e) => setPhoto(e.target.files[0])}
              />
              <button
                type="submit"
                className="send-data"
                onClick={(e) => handelSignUp(e)}>
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
      )}
      <ScrollToTop />
    </>
  );
}

export default SignUp;
