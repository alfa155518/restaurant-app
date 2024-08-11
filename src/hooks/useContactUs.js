import axios from "axios";
import { useEffect, useState } from "react";
import { toast, Zoom } from "react-toastify";

function useContactUs() {
  // State for input
  const [notifications, setNotifications] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  // 1) Handel all notifications
  const notify = (status, message) =>
    toast(message, {
      transition: Zoom,
      type: status,
    });

  // Handle form submission
  const handleSubmitMessage = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await axios.post(
        "http://localhost:8000/api/v1/contact",
        {
          firstName,
          lastName,
          email,
          message,
          phone,
        },
        {
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${localStorage.getItem("uToken")}`,
          },
        }
      );
      if (response.status === 201) {
        notify("success", "Your message has been sent successfully!");
      }
    } catch (err) {
      if (err) {
        notify("error", err.response.data.message[0]);
      }
    } finally {
      setLoading(false);
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
      setMessage("");
    }
  };

  // Get All Users notifications
  const getUsersNotifications = async () => {
    try {
      setLoading(true);
      const response = await axios.get("http://localhost:8000/api/v1/contact", {
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${localStorage.getItem("uToken")}`,
        },
      });
      if (response.status === 200) {
        const data = await response.data;
        return setNotifications(() => {
          return { ...data };
        });
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  // Update Data Continually
  useEffect(() => {
    getUsersNotifications();
  }, []);

  // handel delete message
  const handleDeleteMessage = async (e, message) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await axios.delete(
        `http://localhost:8000/api/v1/contact/${message._id}`,
        {
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${localStorage.getItem("uToken")}`,
          },
        }
      );
      if (response.status === 200) {
        notify("success", "Your message has been deleted successfully!");
      }
    } catch (err) {
      if (err) {
        notify("error", "Failed to delete message!");
      }
    } finally {
      setLoading(false);
    }
  };

  return {
    firstName,
    setFirstName,
    lastName,
    setLastName,
    email,
    setEmail,
    phone,
    setPhone,
    message,
    setMessage,
    handleSubmitMessage,
    loading,
    notifications,
    getUsersNotifications,
    handleDeleteMessage,
  };
}

export default useContactUs;
