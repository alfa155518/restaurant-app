import useContactUs from "../hooks/useContactUs";
import Loader from "../components/loader";
import { FaRegTrashAlt } from "react-icons/fa";

import "../sass/pages/user-notifications.css";
import ScrollToTop from "../components/scrollToTop";

function AllUserNotifications() {
  const { notifications, handleDeleteMessage } = useContactUs();
  return (
    <>
      {Array.isArray(notifications) && notifications.length === 0 ? (
        <Loader />
      ) : (
        <section className="notifications-container">
          <table>
            <thead>
              <tr>
                <th>photo</th>
                <th>firstName</th>
                <th>email</th>
                <th>phone</th>
                <th>message</th>
                <th>messageDate</th>
                <th>remove</th>
              </tr>
            </thead>
            <tbody>
              {notifications?.contactUs?.map((notification, i) => (
                <tr key={i}>
                  <td>
                    <img src={notification.user.photo.url} alt="user-img" />
                  </td>
                  <td className="first-name">{notification.firstName}</td>
                  <td className="email">{notification.email}</td>
                  <td className="phone">{notification.phone}</td>
                  <td className="message">{notification.message}</td>
                  <td className="message-date">{notification.createdAt}</td>
                  <td className="actions">
                    <button
                      className="delete"
                      onClick={(e) => handleDeleteMessage(e, notification)}>
                      <FaRegTrashAlt />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      )}
      <ScrollToTop />
    </>
  );
}

export default AllUserNotifications;
