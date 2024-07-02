import { useEffect, useState } from "react";
import useNotifiCations from "./useNotifiCations";
import axios from "axios";

function useUpdateUsernameAndEmail(user, token, setLoading) {
  const { firstName, email, photo } = user;
  const [userFirstName, setUserFirstName] = useState(firstName);
  const [userEmail, setUserEmail] = useState(email);
  const [updatedData, setUpdatedData] = useState("");
  const [notifySuccess] = useNotifiCations("success", "Data Already Updated");
  const [notifyError] = useNotifiCations(
    "error",
    "Data Not Updated Email is already in use by another user"
  );

  // Update Data continuously
  useEffect(() => {
    setUpdatedData(() => {
      return {
        firstName: userFirstName,
        email: userEmail,
      };
    });
  }, [userFirstName, userEmail]);

  // Update firstName and Email
  const handelUpdateFirstNameAndEmail = async (e) => {
    e.preventDefault();
    setLoading(true);
    await axios
      .patch("http://localhost:8000/api/v1/users/updateUser", updatedData, {
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.data.status === "success") {
          localStorage.setItem("newUser", JSON.stringify(res.data.updatedUser));
          notifySuccess();
        }
      })
      .catch((err) => {
        notifyError();
      })
      .finally(() => {
        setLoading(false);
        setUpdatedData("");
      });
  };

  return {
    userFirstName,
    userEmail,
    photo,
    handelUpdateFirstNameAndEmail,
    setUserFirstName,
    setUserEmail,
  };
}

export default useUpdateUsernameAndEmail;
