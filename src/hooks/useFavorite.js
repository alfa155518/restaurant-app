import { useEffect } from "react";

function useFavorite(favoriteProducts,setFavoriteProducts,notify,notifySuccessDeleted) {


  // When Widow Loading save data in LocalStorage
  useEffect(() => {
    localStorage.setItem('favoriteProducts', JSON.stringify(favoriteProducts));
  }, [favoriteProducts]);

  const handelFavorite = (product, notifySuccess) => {
    setFavoriteProducts(prevProducts => {
      // Check if the product has already been exit
        let exit = favoriteProducts.find((productInCart) => {
          return productInCart.id === product.id;
        });
        // If the product has not been exit, add it to the cart
      if (!exit) {
        notifySuccess()
        return [...prevProducts, product];
      } else {
        notify()
      }
      
      return prevProducts;
    });
  }

   // Handel Remove Product
  function handelRemoveProduct(productId) {
    const newFavoriteProducts = favoriteProducts.filter(product => product.id !== productId.id)
    setFavoriteProducts(newFavoriteProducts)
    notifySuccessDeleted()
  }
  return (
    [handelFavorite,handelRemoveProduct]
  )
}

export default useFavorite
