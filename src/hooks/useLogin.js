import axios from "axios";
import { useState } from "react";
import { toast, Zoom } from "react-toastify";
import { useNavigate } from "react-router-dom";
function useLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const notify = (status, message) =>
    toast(message, {
      transition: Zoom,
      type: status,
    });

  let token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoiNjY4NGU0Yzg4NDlmNmIyYzJmYjk5MjcyIiwiaWF0IjoxNzE5OTg1MzUzLCJleHAiOjE3Mjc3NjEzNTN9.1FPQeX8OWMKf97eNkTtZflpEuaBTpQ3Zg33Cgv7Iv1Y";

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
            authorization: `Bearer ${
              localStorage.getItem("uToken")
                ? localStorage.getItem("uToken")
                : token
            }`,
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
      })
      .catch((err) => {
        console.log(err.response.data);
        notify("error", err.response.data.message);
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
