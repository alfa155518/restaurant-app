import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import useNotifiCations from "./useNotifiCations";

function useUpdateUser() {
  const { userId } = useParams();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [updatedData, setUpdatedData] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Handle Notifications
  const [notifySuccess] = useNotifiCations(
    "success",
    "User Updated Successfully"
  );
  const [notifyError] = useNotifiCations("error", "User Not Updated");
  const [notifyNotFound] = useNotifiCations("error", "User Not FoundUpdated");

  // 2) Get Target User
  const getTargetUser = async () => {
    try {
      setLoading(true);
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
      if (response.status === 200) {
        setFirstName(data.firstName);
        setLastName(data.lastName);
        setEmail(data.email);
      }
    } catch (error) {
      notifyNotFound();
    } finally {
      setLoading(false);
    }
  };

  // 3) Get Data continuously
  useEffect(() => {
    getTargetUser();
  }, [userId]);

  // 4) Update Data continuously
  useEffect(() => {
    setUpdatedData(() => {
      return {
        firstName,
        email,
        lastName,
      };
    });
  }, [firstName, email, lastName]);

  // 5) Make patch request by axios to update firstName and lastName and email
  const handleUpdateUser = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await axios.patch(
        `http://localhost:8000/api/v1/admin/users/update/${userId}`,
        updatedData,
        {
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${localStorage.getItem("uToken")}`,
          },
        }
      );
      if (response.status === 201) {
        notifySuccess();
        navigate(-1);
      }
    } catch (error) {
      notifyError();
    } finally {
      setLoading(false);
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
    loading,
  };
}

export default useUpdateUser;
