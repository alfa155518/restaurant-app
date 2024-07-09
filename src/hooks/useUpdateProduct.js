import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useNotifiCations from "../hooks/useNotifiCations";

function useUpdateProduct() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [updatedData, setUpdatedData] = useState([]);
  const [loading, setLoading] = useState(false);

  // 1) Notifications
  const [notifySuccess] = useNotifiCations(
    "success",
    "Product updated successfully"
  );
  const [notifyError] = useNotifiCations("error", "Product Not Updated");

  // 2) Get product details to populate form fields when updating product.
  const getTargetProduct = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `http://localhost:8000/api/v1/allProducts/${productId}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("uToken")}`,
          },
        }
      );
      const data = await response.data.product;
      setName(data.name);
      setDescription(data.description);
      setPrice(data.price);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // 3) Get product details
  useEffect(() => {
    getTargetProduct();
  }, [productId]);

  // 4) Update product details when form is submitted.
  useEffect(() => {
    return setUpdatedData({
      name,
      description,
      price,
    });
  }, [name, description, price]);

  // 5) Update product details when form is submitted.
  const handleUpdateProduct = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await axios.patch(
        `http://localhost:8000/api/v1/allProducts/updateProduct/${productId}`,
        updatedData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("uToken")}`,
          },
        }
      );
      if (response.status === 200) {
        notifySuccess();
        navigate(-1);
      }
    } catch (err) {
      console.error(err);
      notifyError();
    } finally {
      setLoading(false);
    }
  };

  return {
    handleUpdateProduct,
    name,
    setName,
    description,
    setDescription,
    price,
    setPrice,
    loading,
  };
}

export default useUpdateProduct;
