import axios from "axios";
import { useEffect, useState } from "react";
import { Zoom, toast } from "react-toastify";

function useUpdatePassword(setLoading, token) {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [passwordData, setPasswordData] = useState("");

  // Handel Notifications
  const notify = (status, message) =>
    toast(message, {
      transition: Zoom,
      type: status,
    });

  // Update State continuously
  useEffect(() => {
    setPasswordData(() => {
      return {
        currentPassword: currentPassword,
        newPassword: newPassword,
      };
    });
  }, [currentPassword, newPassword]);

  // Handel Change Password
  const handleChangePassword = async (e) => {
    e.preventDefault();
    setLoading(true);
    await axios
      .patch(
        "http://localhost:8000/api/v1/users/updatePassword",
        passwordData,
        {
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        if (res.data.status === "update password successful") {
          notify("success", res.data.status);
        }
      })
      .catch((err) => {
        notify("error", err.response.data.message);
      })
      .finally(() => {
        setLoading(false);
        setCurrentPassword("");
        setNewPassword("");
      });
  };
  return {
    handleChangePassword,
    currentPassword,
    newPassword,
    setCurrentPassword,
    setNewPassword,
  };
}

export default useUpdatePassword;
