import { FaUserEdit } from "react-icons/fa";
import { RiDeleteBinFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import LazyLoad from "react-lazyload";
import ScrollToTop from "../components/scrollToTop";
import useUserManageMent from "../hooks/useUserManagement";
import "../sass/pages/user-management.css";
import Loader from "../components/loader";
function UserManagement() {
  const { handelDeleteUser, users, loading } = useUserManageMent();

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <section className="user-management-container">
          <table>
            <thead>
              <tr>
                <th>Img</th>
                <th>Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, i) => {
                return (
                  <tr key={i}>
                    <td className="user-img">
                      <LazyLoad>
                        <img src={user.photo.url} alt="user-img" />
                      </LazyLoad>
                    </td>
                    <td className="first-name">
                      <h3>{user.firstName}</h3>
                    </td>
                    <td className="last-name">
                      <h4>{user.lastName}</h4>
                    </td>
                    <td className="email">{user.email}</td>
                    <td className="actions">
                      <button className="update" aria-label="btn update user">
                        <Link to={`/updateUser/${user._id}`}>
                          <FaUserEdit className="icon" />
                        </Link>
                      </button>
                      <button
                        className="delete"
                        aria-label="btn delete user"
                        onClick={(e) => handelDeleteUser(e, user)}>
                        <RiDeleteBinFill className="icon" />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </section>
      )}
      <ScrollToTop />
    </>
  );
}

export default UserManagement;
