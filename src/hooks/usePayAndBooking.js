import axios from "axios";
import useNotifiCations from "../hooks/useNotifiCations";
import { useState } from "react";

function usePayAndBooking(handelCancelBookingTable) {
  const [loading, setLoading] = useState(false);
  const [notifySuccess] = useNotifiCations(
    "success",
    "Done! You have successfully completed"
  );
  const [notifyError] = useNotifiCations(
    "error",
    "Oh no! Something went wrong"
  );
  const handelPayingAndBooking = async (table) => {
    try {
      setLoading(true);
      const response = await axios.post(
        `http://localhost:8000/api/v1/reservation/${table._id}`,
        {},
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem("uToken")}`,
          },
        }
      );
      if (response.status === 201) {
        notifySuccess();
        await handelCancelBookingTable(table);
      }
    } catch (error) {
      notifyError();
    } finally {
      setLoading(false);
    }
  };
  return {
    handelPayingAndBooking,
    loading,
  };
}

export default usePayAndBooking;
