
import { IoIosPeople } from "react-icons/io";

import "../sass/pages/reservation-management.css"
import LazyLoad from "react-lazyload";

function ReservationManagement() {
  const reservations = JSON.parse(localStorage.getItem("bookingTables")) || []

  console.log(reservations)
  return (
    <section className="reservation-management-container">
      {
        reservations.length <= 0 ? <h2 className="empty-data">There Is No Longer Reservations</h2> 
        
        : <table>
            <thead>
              <tr>
              <th>Image</th>
              <th>Name</th>
              <th>People</th>
              <th>Price</th>
              <th>Status</th>
              <th>Cancellation</th>
              </tr>
            </thead>
              <tbody>
            {
              reservations.map((table,i) => {
                return (
                  <tr key={i}>
                    <td className="img">
                      <LazyLoad>
                      <img src={table.image} alt="img" />
                      </LazyLoad>
                      </td>
                    <td className="name roboto-black">{table.name}</td>
                    <td className="people"><IoIosPeople className="icon"/>{table.people}</td>
                    <td className="price roboto-regular-italic">{table.price}</td>
                    <td className="status roboto-bold-italic"><span>
                    {table.status}
                      </span></td>
                    <td className="btn-cancel roboto-black-italic"><button aria-label="cancel table">cancel</button></td>
                  </tr>
                )
                })
            }
              </tbody>
        </table> 
      }
    </section>
  )
}

export default ReservationManagement
