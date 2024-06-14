

import { Link } from "react-router-dom"
import { FaUsers } from "react-icons/fa";
import { MdFastfood } from "react-icons/md";
import { FaBasketShopping } from "react-icons/fa6";
import { BsCalendar3 } from "react-icons/bs";
import { PiChefHatBold } from "react-icons/pi";
import { IoMdClose } from "react-icons/io";
import adminImage from "../images/439771693_789249223132590_394557324656325282_n.WebP"
import { useContext } from "react";
import { contextAdmin } from "../context/AdminManageMent";

function SideBarAdmin() {
  const {showSideBar,setShowSideBar} = useContext(contextAdmin)
  return (
    <aside className={showSideBar ? "active-admin-side-bar": ""}>
      <div className="close-bar" onClick={() => setShowSideBar(() => !showSideBar)}>
        <IoMdClose/>
      </div>
    <ul className="side-bar-admin">
      <li>
        <img src={adminImage} alt="adminImage" />
        <span className="admin-name roboto-black">Admin</span>
      </li>
      <li>
        <FaUsers className="icon"/>
        <Link to={"/"} aria-label="any thing">
        User Management
        </Link>
      </li>
      <li>
        <MdFastfood className="icon"/>
        <Link to={"/menu-management"} aria-label="any thing">
        Menu Management
        </Link>
      </li>
      <li>
        <FaBasketShopping className="icon"/>
        <Link to={"/order-management"} aria-label="any thing">
        Order Management
        </Link>
      </li>
      <li>
        <BsCalendar3 className="icon"/>
        <Link to={"/reservation-management"} aria-label="any thing">
        Reservation Management
        </Link>
      </li>
      <li>
        <PiChefHatBold className="icon"/>
        <Link to={"/employees-management"} aria-label="any thing">
        Employees Management
        </Link>
      </li>
    </ul>
    </aside>
  )
}

export default SideBarAdmin
