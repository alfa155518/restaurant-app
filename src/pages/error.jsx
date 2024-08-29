import { useNavigate } from "react-router-dom";
import "../sass/pages/error.css";

const ErrorPage = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/");
  };

  return (
    <div className="error-page">
      <h1 className="error-code">404</h1>
      <h2 className="error-message">Oops! Page Not Found</h2>
      <p className="error-description">
        Sorry, the page you are looking for does not exist. It might have been
        removed or the URL might be incorrect.
      </p>
      <button className="back-button" onClick={handleGoBack}>
        Go Back to Home
      </button>
    </div>
  );
};

export default ErrorPage;
