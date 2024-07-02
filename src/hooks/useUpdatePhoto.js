import { useState } from "react";
import axios from "axios";
import useNotifiCations from "./useNotifiCations";

function useUpdatePhoto(setLoading, token) {
  const [updatedPhoto, setUpdatedPhoto] = useState("");
  // Notifications
  const [notifySuccess] = useNotifiCations(
    "success",
    "Photo updated successfully"
  );
  const [notifyError] = useNotifiCations("error", "Upload failed");

  // Send Image
  const makeFormData = () => {
    const formData = new FormData();
    formData.append("photo", updatedPhoto);
    return formData;
  };
  // Update Photo
  const handelUpdatePhoto = async (e) => {
    e.preventDefault();
    const formData = makeFormData();
    setLoading(true);
    await axios
      .patch(`http://localhost:8000/api/v1/users/updateUserPhoto`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.data.status === "success") {
          localStorage.setItem("newUser", JSON.stringify(res.data.updatedUser));
          notifySuccess();
        }
      })
      .catch((error) => {
        if (error) {
          notifyError();
          console.log(error);
        }
      })
      .finally(() => {
        setLoading(false);
        setUpdatedPhoto("");
      });
  };
  return {
    handelUpdatePhoto,
    setUpdatedPhoto,
  };
}

export default useUpdatePhoto;
