import { useState } from "react";
import axios from "axios";
import { toast, Zoom } from "react-toastify";
import { useNavigate } from "react-router-dom";

function useAddEmployee() {
  const [name, setName] = useState("");
  const [job, setJob] = useState("");
  const [workTime, setWorkTime] = useState("");
  const [email, setEmail] = useState("");
  const [photo, setPhoto] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const notify = (status, message) =>
    toast(message, {
      transition: Zoom,
      type: status,
    });

  // Make post with formData
  const handleSubmitEmployee = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("job", job);
    formData.append("workTime", workTime);
    formData.append("email", email);
    formData.append("photo", photo);
    try {
      setLoading(true);
      const response = await axios.post(
        "http://localhost:8000/api/v1/employees/addEmployee",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            authorization: `Bearer ${localStorage.getItem("uToken")}`,
          },
        }
      );

      if (response.status === 201) {
        const data = await response.data.employee;
        console.log(data);
        notify("success", "Employee added successfully!");
        navigate(-1);
      }
    } catch (error) {
      console.log(error);
      if (error.response.data) {
        notify("error", error.response.data.message);
      }
      if (error.response.data.message?.[0].startsWith("P")) {
        notify("error", error.response.data.message?.[0]);
      }
    } finally {
      // Reset form
      setName("");
      setJob("");
      setWorkTime("");
      setEmail("");
      setPhoto(null);
      setLoading(false);
    }
  };

  return {
    handleSubmitEmployee,
    name,
    setName,
    job,
    setJob,
    workTime,
    setWorkTime,
    email,
    setEmail,
    photo,
    setPhoto,
    loading,
  };
}

export default useAddEmployee;
