
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { IoNotifications } from "react-icons/io5";
import admin_Image from "../images/439771693_789249223132590_394557324656325282_n.WebP"
import "../sass/components/admin-bar.css"
import { useContext } from "react";
import { contextAdmin } from "../context/AdminManageMent";

function AdminBar() {
  const { showSideBar, setShowSideBar } = useContext(contextAdmin)
  
  return (
    <nav className="admin-bar">
      <ul>
        <li className="bars-icon" onClick={() => setShowSideBar(() => !showSideBar)}>
          <HiMiniBars3BottomRight />
        </li>
        <li className="actions">
          <div className="notifications">
            <IoNotifications />

          </div>
          <div className="admin-image">
            <img src={admin_Image} alt="img" />
          </div>
        </li>
      </ul>
    </nav>
  )
}

export default AdminBar
