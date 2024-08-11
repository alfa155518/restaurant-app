import axios from "axios";
import { useEffect } from "react";

function useTables(
  bookingTables,
  setBookingTables,
  notify,
  notifySuccess,
  notifySuccessCanceled
) {
  // When window load data save in localStorage
  useEffect(() => {
    localStorage.setItem("bookingTables", JSON.stringify(bookingTables));
  }, [bookingTables]);

  // Change State Of Table
  const changeStatus = async (table, value) => {
    await axios.patch(`http://localhost:8000/api/v1/tables/${table._id}`, {
      status: value,
    });
  };

  const bookingTable = (table) => {
    setBookingTables((preTable) => {
      // Check if Table is already Exit
      let exit = bookingTables.find((finedTable) => {
        return finedTable._id === table._id;
      });

      if (!exit) {
        changeStatus(table, true);
        notifySuccess();
        return [...bookingTables, table];
      } else {
        notify();
      }
      return preTable;
    });
  };

  // Delete Table Adn Cancel Operation
  function handelCancelBookingTable(table) {
    setBookingTables(() => {
      return bookingTables.filter(
        (bookingTable) => bookingTable._id !== table._id
      );
    });

    notifySuccessCanceled();
  }
  return [bookingTable, handelCancelBookingTable];
}

export default useTables;
