import { createContext, useState } from "react"

import useNotifications from "../hooks/useNotifiCations"
import useProductInCart from "../hooks/useProductInCart"


export const  contextProduct = createContext({})
function HandelCart({children}) {
  // Notifications
  const [notifyErrorNumber] = useNotifications("error","Can`t minus Product Number")
  const [notifyErrorProductExit] = useNotifications("error","Product has been Added")
  const [notifySuccessAddProduct] = useNotifications("success","Product Already Added")
  const [notifySuccessDeleteProduct] = useNotifications("success","Product Already Deleted")

  // Save state in LocalStorage
  const [productInCart, setProductInCart] = useState(() => {
    const savedProducts = localStorage.getItem('productInCart');
    return savedProducts? JSON.parse(savedProducts) : [];
  })

  // Costume Hook Add Product To Cart 
  const [handelAddProduct,handelPlusProductNumber, handelMinusProductNumber,handelDeleteProduct] = useProductInCart(productInCart, setProductInCart,notifyErrorProductExit,notifySuccessAddProduct,notifySuccessDeleteProduct,notifyErrorNumber)

  // Total Price 
  const totalPrice = productInCart.reduce((total, product) => total + +product.price.replace(/\$/g, '') * product.quantity, 0)

  return (
    <contextProduct.Provider value={{
      productInCart,
      setProductInCart,
      handelAddProduct,
      handelPlusProductNumber,
      handelMinusProductNumber,
      handelDeleteProduct,
      totalPrice,
    }}>
      {children}
    </contextProduct.Provider>
  )
}

export default HandelCart
