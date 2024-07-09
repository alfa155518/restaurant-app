import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, Zoom } from "react-toastify";
function useAddProduct() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  console.log(name, description, price, image, category);

  const notify = (status, message) =>
    toast(message, {
      transition: Zoom,
      type: status,
    });

  const handleSubmitAddProduct = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await axios.post(
        "http://localhost:8000/api/v1/allProducts/addProduct",
        {
          name,
          description,
          price,
          image,
          category,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("uToken")}`,
          },
        }
      );
      console.log(response.data);
      if (response.status === 201) {
        notify("success", "Product added successfully");
        navigate(-1);
      }
    } catch (error) {
      notify("error", error.response.data.message[0]);
    } finally {
      setName("");
      setDescription("");
      setPrice("");
      setImage("");
      setCategory("");
      setLoading(false);
    }
  };
  return {
    handleSubmitAddProduct,
    name,
    setName,
    description,
    setDescription,
    price,
    setPrice,
    image,
    setImage,
    category,
    setCategory,
    loading,
  };
}

export default useAddProduct;
