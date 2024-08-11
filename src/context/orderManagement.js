import axios from "axios";
import { createContext, useState } from "react";
import { toast, Zoom } from "react-toastify";

export const orderContext = createContext({});
function OrderContextManagement({ children }) {
  const [orderProducts, setOrderProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  // 1) Handel all notifications
  const notify = (status, message) =>
    toast(message, {
      transition: Zoom,
      type: status,
    });

  // 2) Get all orders
  const getAllOrderProducts = async () => {
    try {
      setLoading(true);
      const response = await axios.get("http://localhost:8000/api/v1/orders/", {
        headers: {
          authorization: "Bearer " + localStorage.getItem("uToken"),
        },
      });
      const data = await response.data.allOrders;
      setOrderProducts(() => {
        return data;
      });
    } catch (err) {
      console.error("Failed to fetch order products");
    } finally {
      setLoading(false);
    }
  };

  // 3) Update order status
  const updateOrderStatus = async (e, order) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await axios.patch(
        `http://localhost:8000/api/v1/orders/${order._id}`,
        {
          orderStatus: "confirmed",
        },
        {
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${localStorage.getItem("uToken")}`,
          },
        }
      );
      if (response.status === 200) {
        notify("success", "Order status updated successfully");
        getAllOrderProducts();
      }
    } catch (err) {
      notify("error", err.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  // 4) Delete order
  const deleteOrder = async (e, order) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await axios.delete(
        `http://localhost:8000/api/v1/orders/${order._id}`,
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem("uToken")}`,
          },
        }
      );
      if (response.status === 200) {
        notify("success", "Order deleted successfully");
        getAllOrderProducts();
      }
    } catch (err) {
      notify("error", err.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <orderContext.Provider
      value={{
        orderProducts,
        loading,
        getAllOrderProducts,
        updateOrderStatus,
        deleteOrder,
      }}>
      {children}
    </orderContext.Provider>
  );
}

export default OrderContextManagement;
