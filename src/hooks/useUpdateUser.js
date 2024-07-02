import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Zoom, toast } from "react-toastify";

function useUpdateUser() {
  const { userId } = useParams();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [updatedData, setUpdatedData] = useState([]);
  const navigate = useNavigate();

  // Handel Notifications
  const notify = (status, message) =>
    toast(message, {
      transition: Zoom,
      type: status,
    });

  // Get Target User
  const getTargetUser = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8000/api/v1/admin/users/user/${userId}`,
        {
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${localStorage.getItem("uToken")}`,
          },
        }
      );
      const data = await response.data.selectedUser;
      setFirstName(data.firstName);
      setLastName(data.lastName);
      setEmail(data.email);
    } catch (error) {
      notify("error", error.response.message);
    }
  };

  // Get Data continuously
  useEffect(() => {
    getTargetUser();
  }, [userId]);

  // Update Data continuously
  useEffect(() => {
    setUpdatedData(() => {
      return {
        firstName,
        email,
        lastName,
      };
    });
  }, [firstName, email, lastName]);

  // Make patch request by axios to update firstName and lastName and email
  const handleUpdateUser = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(
        `http://localhost:8000/api/v1/admin/users/update/${userId}`,
        updatedData,
        {
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${localStorage.getItem("uToken")}`,
          },
        }
      );
      notify("success", "User updated successfully");
      navigate(-1);
    } catch (error) {
      notify("error", error.response.data.error);
    }
  };

  return {
    firstName,
    lastName,
    email,
    setFirstName,
    setLastName,
    setEmail,
    handleUpdateUser,
    updatedData,
  };
}

export default useUpdateUser;
