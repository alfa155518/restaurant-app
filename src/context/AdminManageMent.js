import { createContext, useState } from "react"



import allProducts from "../api/allProduct"

export const contextAdmin = createContext({}) 


function AdminManageMent({children}) {
  const [showSideBar, setShowSideBar] = useState(false);

  const [orderProducts, setOrderProducts] = useState([])
  
  return (
    <contextAdmin.Provider value={{showSideBar, setShowSideBar, allProducts}}>
      {children}
    </contextAdmin.Provider>
  )
}

export default AdminManageMent
