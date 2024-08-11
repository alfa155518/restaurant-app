import { IoPeople } from "react-icons/io5";
import { ImBlocked } from "react-icons/im";
import { WiStars } from "react-icons/wi";
import { MdPriceCheck } from "react-icons/md";
import { useContext } from "react";
import { contextTable } from "../context/manageTable";
import ScrollToTop from "../components/scrollToTop";
import WrapperNav from "../components/wrapperNav";
import Footer from "../layout/footer";
import EmptyData from "../components/emptyData";
import "../sass/pages/booking.css";

import Loader from "../components/loader";
import usePayAndBooking from "../hooks/usePayAndBooking";
function MyBookings() {
  // Booking Context
  const { bookingTables, handelCancelBookingTable } = useContext(contextTable);
  // Pay And Booking Custom  Hook
  const { handelPayingAndBooking, loading } = usePayAndBooking(
    handelCancelBookingTable
  );
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <WrapperNav sectionName={"Bookings"} />
          <section className="bookings p-relative">
            {bookingTables.length <= 0 ? (
              <EmptyData page={"Tables"} link={"/tables"} />
            ) : (
              bookingTables.map((table, i) => {
                return (
                  <div className="table" key={i}>
                    <div className="table-img">
                      {table.image.includes("/restaurant") ? (
                        <img
                          src={require(`../images/menu/default-image.WebP`)}
                          alt="product-img"
                        />
                      ) : (
                        <img
                          src={require(`../images/reserve-tables/${table.image}`)}
                          alt="product-img"
                        />
                      )}
                    </div>
                    <h3 className="table-name">{table.name}</h3>
                    <p className="summary">{table.summary}</p>
                    <div className="booking-table-info roboto-medium">
                      <ul>
                        <li>
                          individuals:
                          <span className="people">
                            {table.people} <IoPeople className="icon" />
                          </span>
                        </li>
                        <li>
                          price:
                          <span className="price">
                            {table.price} <MdPriceCheck className="icon" />
                          </span>
                        </li>
                        <li>
                          Rating:
                          <span className="rating">
                            {table.rating} <WiStars className="icon" />
                          </span>
                        </li>
                        <li>
                          Status:
                          <span className="status">
                            You Booked It! <ImBlocked className="icon" />
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div className="booking-table-actions roboto-black">
                      <span
                        className="paying"
                        onClick={() => handelPayingAndBooking(table)}>
                        Paying & Booking
                      </span>
                      <span
                        className="cancel"
                        onClick={() => handelCancelBookingTable(table)}>
                        Cancel
                      </span>
                    </div>
                  </div>
                );
              })
            )}
          </section>
          <Footer />
        </>
      )}
      <ScrollToTop />
    </>
  );
}
export default MyBookings;
