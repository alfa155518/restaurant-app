import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { IoNotifications } from "react-icons/io5";

import { useContext } from "react";
import { contextAdmin } from "../context/AdminManageMent";
import "../sass/components/admin-bar.css";

function AdminBar() {
  const { showSideBar, setShowSideBar, adminPhoto } = useContext(contextAdmin);
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
            <IoNotifications />
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
