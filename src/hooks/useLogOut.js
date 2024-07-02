import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Zoom, toast } from "react-toastify";

const useLogOut = (setLoading) => {
  const navigate = useNavigate();
  // Handel Notification
  const notify = (status, message) =>
    toast(message, {
      transition: Zoom,
      type: status,
    });
  // Handel Logout request
  const handelLogOut = async (e) => {
    e.preventDefault();
    setLoading(true);
    await axios
      .delete("http://localhost:8000/api/v1/users/logout", {
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${localStorage.getItem("uToken")}`,
        },
      })
      .then((res) => {
        if (res.data.status === "logout successful") {
          notify("success", res.data.status);
          localStorage.removeItem("newUser");
          localStorage.removeItem("uToken");
          setTimeout(() => {
            navigate("/signup");
          }, 3000);
        }
      })
      .catch((err) => {
        console.log(err);
        notify("error", err.response.data.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return {
    handelLogOut,
  };
};

export default useLogOut;
