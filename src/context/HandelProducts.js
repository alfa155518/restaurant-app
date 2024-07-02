import { createContext, useState } from "react";
import useNotifiCations from "../hooks/useNotifiCations";
import useFavorite from "../hooks/useFavorite";
export const contextData = createContext({});

function HandelProducts({ children }) {
  //Notification
  const [notify] = useNotifiCations("error", "Product has been already Added");
  const [notifySuccessAddedToFavorite] = useNotifiCations(
    "success",
    "Product has been already Added"
  );
  const [notifySuccessDeleted] = useNotifiCations(
    "success",
    "Product Already Removed"
  );

  // Save state in LocalStorage
  const [favoriteProducts, setFavoriteProducts] = useState(() => {
    const savedProducts = localStorage.getItem("favoriteProducts");
    return savedProducts ? JSON.parse(savedProducts) : [];
  });

  // Costume Favorite Hook
  const [handelFavoriteProducts, handelRemoveProduct] = useFavorite(
    favoriteProducts,
    setFavoriteProducts,
    notify,
    notifySuccessDeleted,
    notifySuccessAddedToFavorite
  );

  const [popularProducts, setPopularProducts] = useState([]);
  return (
    <contextData.Provider
      value={{
        favoriteProducts,
        setFavoriteProducts,
        handelRemoveProduct,
        handelFavoriteProducts,
        popularProducts,
        setPopularProducts,
      }}>
      {children}
    </contextData.Provider>
  );
}

export default HandelProducts;
