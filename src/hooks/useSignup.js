import axios from "axios";
import { useState } from "react";
import { toast, Zoom } from "react-toastify";
import { useNavigate } from "react-router-dom";
function useSignup() {
  // Create states for all inputs
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [phone, setPhone] = useState("");
  const [photo, setPhoto] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const notify = (status, message) =>
    toast(message, {
      transition: Zoom,
      type: status,
    });

  async function handelSignUp(e) {
    e.preventDefault();
    // Make formData
    const formData = new FormData();
    formData.append("firstName", firstName);
    formData.append("lastName", lastName);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("passwordConfirm", passwordConfirm);
    formData.append("phone", phone);
    formData.append("photo", photo);
    // Set loading to true before the API call
    setLoading(true);

    // Create a function to handle submit
    await axios
      .post("http://localhost:8000/api/v1/users/signup", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => res)
      .then((data) => {
        localStorage.setItem("newUser", JSON.stringify(data.data.newUser));
        localStorage.setItem("uToken", data.data.token);
        console.log(data.data);
        // check if data is successfully
        if (data.data.status === "signup successful") {
          notify("success", data.data.status);
          setTimeout(() => {
            navigate("/login");
          }, 3000);
        }
      })
      .catch((err) => {
        if (err.response.data) {
          notify("error", err.response.data.message);
        }
        if (err.response.data.message?.[0].startsWith("P")) {
          notify("error", err.response.data.message?.[0]);
        }
      })
      .finally(() => {
        setLoading(false);
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setPasswordConfirm("");
        setPhone("");
        setPhoto("");
      });
  }

  return [
    handelSignUp,
    firstName,
    lastName,
    email,
    password,
    passwordConfirm,
    phone,
    setFirstName,
    setLastName,
    setEmail,
    setPassword,
    setPasswordConfirm,
    setPhone,
    setPhoto,
    loading,
  ];
}

export default useSignup;
