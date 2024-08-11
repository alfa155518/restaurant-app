import { IoIosPeople } from "react-icons/io";
import LazyLoad from "react-lazyload";
import Loader from "../components/loader";
import ScrollToTop from "../components/scrollToTop";
import useUserReservationManagement from "../hooks/useUserReservationManagement";
import "../sass/pages/reservation-management.css";

function ReservationManagement() {
  // Custom Hook For Handel Reservations
  const { reservations, deleteReservation, loading, changeReserveStatus } =
    useUserReservationManagement();

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <section className="reservation-management-container">
          {reservations.length <= 0 ? (
            <h2 className="empty-data">There Is No Longer Reservations</h2>
          ) : (
            <table>
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Name</th>
                  <th>People</th>
                  <th>Price</th>
                  <th>Customer Name</th>
                  <th>Customer Phone</th>
                  <th>Status</th>
                  <th>Change Status</th>
                  <th>Remove</th>
                </tr>
              </thead>
              <tbody>
                {reservations.map((reserve, i) => {
                  return (
                    <tr key={i}>
                      <td className="img">
                        <LazyLoad>
                          <img
                            src={require(`../images/reserve-tables/${reserve.table.image}`)}
                            alt="img"
                          />
                        </LazyLoad>
                      </td>
                      <td className="name roboto-black">
                        {reserve.table.name}
                      </td>
                      <td className="people">
                        {reserve.table.people}
                        <IoIosPeople className="icon" />
                      </td>
                      <td className="price roboto-regular-italic">
                        {reserve.table.price}
                      </td>
                      <td className="customer-name">
                        {reserve.customer.firstName}
                      </td>
                      <td className="customer-phone">
                        {reserve.customer.phone}
                      </td>
                      <td className="status roboto-bold-italic ">
                        <span
                          style={{
                            backgroundColor:
                              reserve.status === "pending"
                                ? "#ff9800"
                                : "rgb(76, 175, 80)",
                            fontWeight:
                              reserve.status === "pending" ? "bold" : "normal",
                          }}>
                          {reserve.status}
                        </span>
                      </td>
                      <td className="btn-update roboto-black-italic">
                        <button
                          className={`${
                            reserve.status === "confirmed" && "banned-click"
                          }`}
                          onClick={(e) => changeReserveStatus(e, reserve)}>
                          Change
                        </button>
                      </td>
                      <td className="btn-cancel roboto-black-italic">
                        <button
                          aria-label="cancel table"
                          onClick={(e) => deleteReservation(e, reserve)}>
                          Remove
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </section>
      )}
      <ScrollToTop />
    </>
  );
}

export default ReservationManagement;
