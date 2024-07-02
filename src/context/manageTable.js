import { createContext, useState } from "react";

import useNotifiCations from "../hooks/useNotifiCations";
import useTables from "../hooks/useTables";
export const contextTable = createContext({});

function ManageTable({ children }) {
  const [allTables, setAllTables] = useState([]);
  const [table, setTable] = useState({});
  // Notification Table
  const [notify] = useNotifiCations("error", "Table Already Added");
  const [notifySuccess] = useNotifiCations("success", "Table has been Added");
  const [notifySuccessCanceled] = useNotifiCations(
    "success",
    "Table has been Removed"
  );
  // Sava Data In State Table
  const [bookingTables, setBookingTables] = useState(() => {
    const savedTables = localStorage.getItem("bookingTables");
    return savedTables ? JSON.parse(savedTables) : [];
  });

  // Costume Hooks Table
  const [bookingTable, handelCancelBookingTable] = useTables(
    bookingTables,
    setBookingTables,
    notify,
    notifySuccess,
    notifySuccessCanceled
  );

  return (
    <contextTable.Provider
      value={{
        allTables,
        setAllTables,
        bookingTables,
        setBookingTables,
        table,
        setTable,
        bookingTable,
        handelCancelBookingTable,
      }}>
      {children}
    </contextTable.Provider>
  );
}

export default ManageTable;
