import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { contextAdmin } from "../context/AdminManageMent";
import useNotifiCations from "../hooks/useNotifiCations";
function useMenuProducts() {
  // Container of product
  const { menuProducts, setMenuProducts } = useContext(contextAdmin);
  const [loading, setLoading] = useState(false);

  // Notify if there some thing success
  const [notifySuccess] = useNotifiCations(
    "success",
    "Product  Deleted Successfully"
  );

  // Notify if there some thing Error
  const [notifyError] = useNotifiCations("error", "Product Not Deleted");

  // Get all products from api
  const getMenuProducts = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        "http://localhost:8000/api/v1/allProducts"
      );
      const data = await response.data.products;
      return setMenuProducts(data);
    } catch (err) {
      console.log("Error fetching products: ", err);
    } finally {
      setLoading(false);
    }
  };

  // Start Get data Continually
  useEffect(() => {
    getMenuProducts();
  }, [setMenuProducts]);

  // Delete product
  const handelDeleteProduct = async (e, product) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await axios.delete(
        `http://localhost:8000/api/v1/allProducts/${product._id}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("uToken")}`,
          },
        }
      );
      if (response.status === 200) {
        setMenuProducts(menuProducts.filter((p) => p._id !== product._id));
        notifySuccess();
      }
    } catch (err) {
      notifyError();
    } finally {
      setLoading(false);
    }
  };

  return {
    menuProducts,
    handelDeleteProduct,
    loading,
  };
}

export default useMenuProducts;
