import { useEffect } from "react"

function useProductInCart(productInCart, setProductInCart,notifyErrorProductExit,notifySuccessAddProduct,notifySuccessDeleteProduct,notifyErrorNumber) {
  // Save Products State When Dom Loaded
  useEffect(() => {
    localStorage.setItem('productInCart', JSON.stringify(productInCart))
  },[productInCart])

    // handel Add Product To Cart 
    const handelAddProduct = (product) => { 
      // Check if the product has already been added
      let exit = productInCart.find((prevProductInCart) => {
        return prevProductInCart.id === product.id;
      });
      // If the product has not been exit, add it to the cart
      if (!exit) {
        notifySuccessAddProduct()
        return setProductInCart([...productInCart, {...product, quantity:1}])
      } else {
        notifyErrorProductExit()
      }
    }


    // Handle Increase quantity Product Number
  const handelPlusProductNumber = (product) => {
    const index = productInCart.findIndex(item => item.id === product.id)
    productInCart[index].quantity += 1
    setProductInCart([...productInCart])
  }

  // Handle Decrease quantity Product Number
  const handelMinusProductNumber = (product) => {
    const index = productInCart.findIndex(item => item.id === product.id)
    productInCart[index].quantity -= 1
    setProductInCart([...productInCart])
    if (productInCart[index].quantity === 1) {
      notifyErrorNumber()
    }
  }

  // handel Delete product from cart
  const handelDeleteProduct = (product) => {
    setProductInCart(productInCart.filter(item => item.id !== product.id))
    notifySuccessDeleteProduct()
  } 



  return (
    [handelAddProduct,handelPlusProductNumber, handelMinusProductNumber,handelDeleteProduct]
  )
}

export default useProductInCart
