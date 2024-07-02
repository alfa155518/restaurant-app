import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

function NoUser() {
  return (
    <div className="no-user roboto-black">
      <h2>No User Logged In</h2>
      <p>
        <Link to="/signup">
          <strong>Please log in or sing to access this page.</strong>
          <FaRegArrowAltCircleRight className="icon" />
        </Link>
      </p>
    </div>
  );
}

export default NoUser;
