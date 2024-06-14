
import { IoPeople } from "react-icons/io5";
import { ImBlocked } from "react-icons/im"
import { WiStars } from "react-icons/wi";
import { MdPriceCheck } from "react-icons/md";

import { useContext } from "react"
import { contextTable } from "../context/manageTable"
import ScrollToTop from "../components/scrollToTop"
import WrapperNav from "../components/wrapperNav"
import Footer from "../layout/footer"
import EmptyData from "../components/emptyData"
import "../sass/pages/booking.css"
function MyBookings() {
  const {bookingTables, handelCancelBookingTable} = useContext(contextTable)
  
  return (
    <>
    <WrapperNav sectionName={'Bookings'}/>
    <section className="bookings p-relative">
      {
        bookingTables.length <= 0 ? <EmptyData page={'Tables'} link={'/tables'}/>: bookingTables.map((table,i) => {
          return (
            <div className="table" key={i}>
              <div className="table-img">
                <img src={table.image} alt="table-img" />
              </div>
                <h3 className="table-name">{table.name}</h3>
                <p className="summary">{table.summary}</p>
                <div className="booking-table-info roboto-medium">
                  <ul>
                    <li>
                      individuals:
                      <span className="people">
                        {table.people} <IoPeople className="icon"/>
                      </span>
                    </li>
                    <li>
                      price:
                      <span className="price">
                        {table.price}  <MdPriceCheck className="icon"/>
                      </span>
                    </li>
                    <li>
                      Rating:
                      <span className="rating">
                        {table.rating} <WiStars className="icon"/>
                      </span>
                    </li>
                    <li>
                      Status:
                      <span className="status">
                        {table.status} <ImBlocked className="icon"/>
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="booking-table-actions roboto-black">
                  <span className="paying">Paying</span>
                  <span className="cancel" onClick={() => handelCancelBookingTable(table)}>Cancel</span>
                </div>
            </div>
          )
        })
      }
    </section>
      <Footer/>
      <ScrollToTop/>
    </>
  )
}
export default MyBookings