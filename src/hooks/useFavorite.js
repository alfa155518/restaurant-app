import { useEffect } from "react";

function useFavorite(
  favoriteProducts,
  setFavoriteProducts,
  notify,
  notifySuccessDeleted,
  notifySuccessAddedToFavorite
) {
  // When Widow Loading save data in LocalStorage
  useEffect(() => {
    localStorage.setItem("favoriteProducts", JSON.stringify(favoriteProducts));
  }, [favoriteProducts]);

  // Add Product to Favorite Page
  const handelFavoriteProducts = (product) => {
    if (favoriteProducts.some((p) => p._id === product._id)) {
      notify();
    } else {
      setFavoriteProducts([...favoriteProducts, product]);
      notifySuccessAddedToFavorite();
    }
  };

  // Handel Remove Product
  function handelRemoveProduct(productId) {
    const newFavoriteProducts = favoriteProducts.filter(
      (product) => product._id !== productId._id
    );
    setFavoriteProducts(newFavoriteProducts);
    notifySuccessDeleted();
  }
  return [handelFavoriteProducts, handelRemoveProduct];
}

export default useFavorite;
