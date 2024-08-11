import { createContext, useState } from "react";

import useNotifications from "../hooks/useNotifiCations";
import useProductInCart from "../hooks/useProductInCart";
import axios from "axios";

export const contextProduct = createContext({});
function HandelCart({ children }) {
  // Notifications
  const [notifyErrorNumber] = useNotifications(
    "error",
    "Can`t minus Product Number"
  );
  const [notifyErrorProductExit] = useNotifications(
    "error",
    "Product has been Added"
  );
  const [notifySuccessAddProduct] = useNotifications(
    "success",
    "Product Already Added"
  );
  const [notifySuccessDeleteProduct] = useNotifications(
    "success",
    "Product Already Deleted"
  );
  const [notify] = useNotifications("success", "Done ");
  const [loading, setLoading] = useState(false);

  // Save state in LocalStorage
  const [productInCart, setProductInCart] = useState(() => {
    const savedProducts = localStorage.getItem("productInCart");
    return savedProducts ? JSON.parse(savedProducts) : [];
  });

  // Costume Hook Add Product To Cart
  const [
    handelAddProduct,
    handelPlusProductNumber,
    handelMinusProductNumber,
    handelDeleteProduct,
  ] = useProductInCart(
    productInCart,
    setProductInCart,
    notifyErrorProductExit,
    notifySuccessAddProduct,
    notifySuccessDeleteProduct,
    notifyErrorNumber
  );

  // Total Price
  const totalPrice = productInCart.reduce(
    (total, product) =>
      total + +product.price.replace(/\$/g, "") * product.quantity,
    0
  );

  // Post single order to by it
  const handelByProducts = async (e, product) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await axios.post(
        "http://localhost:8000/api/v1/orders/addOrder",
        { quantity: product.quantity, productId: product._id },
        {
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${localStorage.getItem("uToken")}`,
          },
        }
      );
      const data = await response.data;
      if (data.status === "success") {
        localStorage.removeItem("productInCart");
        notify();
        window.location.href = await data.checkoutUrl;
        return setProductInCart(() => {
          return productInCart.filter((p) => p._id !== product._id);
        });
      }
    } catch (error) {
      console.error("Error adding products to cart:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <contextProduct.Provider
      value={{
        productInCart,
        handelAddProduct,
        handelPlusProductNumber,
        handelMinusProductNumber,
        handelDeleteProduct,
        handelByProducts,
        loading,
        totalPrice,
      }}>
      {children}
    </contextProduct.Provider>
  );
}

export default HandelCart;
