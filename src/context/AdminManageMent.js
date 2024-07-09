import { createContext, useState } from "react";
import admin_Image from "../images/users/default-admin.WebP";
export const contextAdmin = createContext({});
function AdminManageMent({ children }) {
  const [showSideBar, setShowSideBar] = useState(false);
  const [admin, setAdmin] = useState("");
  const [menuProducts, setMenuProducts] = useState([]);
  const adminInfo = JSON.parse(localStorage.getItem("newUser"));
  const adminPhoto = adminInfo?.photo?.url || admin_Image;
  return (
    <contextAdmin.Provider
      value={{
        showSideBar,
        setShowSideBar,
        admin,
        setAdmin,
        menuProducts,
        setMenuProducts,
        adminPhoto,
      }}>
      {children}
    </contextAdmin.Provider>
  );
}

export default AdminManageMent;
