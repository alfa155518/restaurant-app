import { useEffect } from "react";

function useProductInCart(
  productInCart,
  setProductInCart,
  notifyErrorProductExit,
  notifySuccessAddProduct,
  notifySuccessDeleteProduct,
  notifyErrorNumber
) {
  // Save Products State When Dom Loaded
  useEffect(() => {
    localStorage.setItem("productInCart", JSON.stringify(productInCart));
  }, [productInCart]);

  // handel Add Product To Cart
  const handelAddProduct = (product) => {
    // Check if the product has already been added
    let exit = productInCart.find((prevProductInCart) => {
      return prevProductInCart._id === product._id;
    });
    // If the product has not been exit, add it to the cart
    if (!exit) {
      notifySuccessAddProduct();
      return setProductInCart([...productInCart, product]);
    } else {
      notifyErrorProductExit();
    }
  };

  // Handle Increase quantity Product Number
  const handelPlusProductNumber = (product) => {
    const targetProduct = productInCart.find(
      (item) => item._id === product._id
    );
    if (targetProduct) {
      targetProduct.quantity++;
      return setProductInCart([...productInCart]);
    }
  };

  // Handle Decrease quantity Product Number
  const handelMinusProductNumber = (product) => {
    const index = productInCart.findIndex((item) => item._id === product._id);
    productInCart[index].quantity -= 1;
    setProductInCart([...productInCart]);
    if (productInCart[index].quantity === 1) {
      notifyErrorNumber();
    }
  };

  // handel Delete product from cart
  const handelDeleteProduct = (product) => {
    setProductInCart(productInCart.filter((item) => item._id !== product._id));
    notifySuccessDeleteProduct();
  };

  return [
    handelAddProduct,
    handelPlusProductNumber,
    handelMinusProductNumber,
    handelDeleteProduct,
  ];
}

export default useProductInCart;
