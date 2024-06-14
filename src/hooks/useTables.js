import { useEffect } from "react";

function useTables(bookingTables,setBookingTables,notify, notifySuccess,notifySuccessCanceled) {

  // When window load data save in localStorage
  useEffect(() => {
    localStorage.setItem('bookingTables', JSON.stringify(bookingTables));
  },[bookingTables])

    const bookingTable = (table) => {

      setBookingTables(preTable => {
        // Check if Table is already Exit 
        let  exit = bookingTables.find(finedTable => {
          return finedTable.id === table.id
        })

    if(!exit){
      notifySuccess();
      return [...bookingTables, {...table, status:"booked"}]
    } else {
      notify();
    }
    return preTable;
      })
    }

    // Delete Table Adn Cancel Operation
    function handelCancelBookingTable(table) {
      setBookingTables(() => {
        return bookingTables.filter(bookingTable => bookingTable.id!== table.id)
      })
      notifySuccessCanceled()
    }
  return (
    [bookingTable,handelCancelBookingTable]
  )
}

export default useTables
