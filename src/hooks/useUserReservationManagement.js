import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { contextAdmin } from "../context/AdminManageMent";
import useNotifiCations from "./useNotifiCations";
function useUserReservationManagement() {
  const { reservations, setReservations } = useContext(contextAdmin);
  // 1) Custom Notifications
  const [loading, setLoading] = useState(false);
  const [notifySuccess] = useNotifiCations(
    "success",
    "Table Deleted Successfully"
  );
  const [notifyUpdatedSuccess] = useNotifiCations(
    "success",
    "Reserve Updated Successfully"
  );
  const [notifyError] = useNotifiCations("error", "There some thing is wrong");

  // 2) Get all Reservations Table
  const getAllReservation = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        "http://localhost:8000/api/v1/reservation/",
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem("uToken")}`,
          },
        }
      );
      const data = await response.data.reservations;
      setReservations(() => {
        return data;
      });
    } catch (err) {
      if (err) {
        notifyError();
      }
    } finally {
      setLoading(false);
    }
  };

  // 3) Update Data Continually
  useEffect(() => {
    getAllReservation();
  }, []);

  // 4) Delete a Reservation Table
  const deleteReservation = async (e, reserve) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await axios.delete(
        `http://localhost:8000/api/v1/reservation/${reserve._id}`,
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem("uToken")}`,
          },
        }
      );
      if (response.status === 200) {
        notifySuccess();
        reserve.status = false;
        // Update the reservations state
        setReservations([...reservations]);
        await getAllReservation();
      }
    } catch (err) {
      if (err) {
        notifyError();
      }
    } finally {
      setLoading(false);
    }
  };

  // 5) Change State Of Table
  const changeStatus = async (targetTable, value) => {
    await axios.patch(
      `http://localhost:8000/api/v1/tables/${targetTable.table._id}`,
      {
        status: value,
      }
    );
  };

  // 5) Change State Of Reservation
  const changeReserveStatus = async (e, reserve) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await axios.patch(
        `http://localhost:8000/api/v1/reservation/${reserve._id}`,
        {
          status: "confirmed",
        },
        {
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${localStorage.getItem("uToken")}`,
          },
        }
      );
      if (response.status === 201) {
        notifyUpdatedSuccess();
        await changeStatus(reserve, false);
        await getAllReservation();
      }
    } catch (error) {
      if (error) {
        notifyError();
      }
    } finally {
      setLoading(false);
    }
  };

  return {
    reservations,
    deleteReservation,
    loading,
    changeReserveStatus,
  };
}

export default useUserReservationManagement;
