import axios from "axios";
import useNotifiCations from "./useNotifiCations";
import { useEffect, useState } from "react";
function useUserManageMent() {
  // 1) users Container
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  // 2) Notifications
  const [notifySuccess] = useNotifiCations(
    "success",
    "User Deleted Successfully"
  );
  const [notifyError] = useNotifiCations("error", "Failed To Delete User");

  // 3) Handel Get And Show All Users
  const getAllUsers = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        "http://localhost:8000/api/v1/admin/users",
        {
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${localStorage.getItem("uToken")}`,
          },
        }
      );
      const data = await response.data.allUsers;
      return setUsers(data);
    } catch (err) {
      console.error("Error fetching users", err);
    } finally {
      setLoading(false);
    }
  };

  // 4) Update Get users continually
  useEffect(() => {
    getAllUsers();
  }, [setUsers]);

  // 5) Handel Delete User
  const handelDeleteUser = async (e, user) => {
    e.preventDefault();
    try {
      setLoading(true)
      // 6) Get user  id
      const userId = user._id;
      // 7) Send DELETE request to server
      await axios.delete(
        `http://localhost:8000/api/v1/admin/users/delete/${userId}`,
        {
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${localStorage.getItem("uToken")}`,
          },
        }
      );
      notifySuccess();
      // 8) Update users state
      const updatedUsers = users.filter((u) => u._id !== userId);
      return setUsers(updatedUsers);
    } catch (error) {
      notifyError();
    } finally {
      setLoading(false);
    }
  };
  return {
    handelDeleteUser,
    users,
    loading,
  };
}

export default useUserManageMent;
