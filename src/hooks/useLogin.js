import axios from "axios";
import { useState } from "react";
import { toast, Zoom } from "react-toastify";
import { useNavigate } from "react-router-dom";
function useLogin({ setAdmin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const notify = (status, message) =>
    toast(message, {
      transition: Zoom,
      type: status,
    });

  // Send login email and password by form data
  const handelLogin = async (e) => {
    e.preventDefault();
    // Set loading to true before the API call
    setLoading(true);
    await axios
      .post(
        "http://localhost:8000/api/v1/users/login",
        {
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${localStorage.getItem("uToken")}`,
          },
        }
      )
      .then((res) => res)
      .then((data) => {
        localStorage.setItem("uToken", data.data.newToken);
        localStorage.setItem("newUser", JSON.stringify(data.data.existingUser));
        console.log(data.data);
        // check if data is successfully
        if (data.data.status === "login successful") {
          notify("success", data.data.status);
          setTimeout(() => {
            navigate("/");
          }, 3000);
        }
        return setAdmin(data.data);
      })
      .catch((err) => {
        console.log(err?.response?.data);
        notify("error", err?.response?.data?.message);
      })
      .finally(() => {
        setLoading(false);
        setEmail("");
        setPassword("");
      });
  };
  return [email, setEmail, password, setPassword, loading, handelLogin];
}

export default useLogin;
