import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { IoNotifications } from "react-icons/io5";

import { useContext } from "react";
import { contextAdmin } from "../context/AdminManageMent";
import "../sass/components/admin-bar.css";
import { Link } from "react-router-dom";
import useContactUs from "../hooks/useContactUs";

function AdminBar() {
  const { showSideBar, setShowSideBar, adminPhoto } = useContext(contextAdmin);
  const { notifications } = useContactUs();
  return (
    <nav className="admin-bar">
      <ul>
        <li
          className="bars-icon"
          onClick={() => setShowSideBar(() => !showSideBar)}>
          <HiMiniBars3BottomRight />
        </li>
        <li className="actions">
          <div className="notifications">
            <span className="notify-number">
              {notifications.messageNumbers}
            </span>
            <Link to="all-notifications">
              <IoNotifications />
            </Link>
          </div>
          <div className="admin-image">
            <img src={adminPhoto} alt="img" />
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default AdminBar;
