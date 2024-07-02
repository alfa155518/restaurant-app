import axios from "axios";
import { FaUserEdit } from "react-icons/fa";
import { RiDeleteBinFill } from "react-icons/ri";
import LazyLoad from "react-lazyload";
import { useEffect, useState } from "react";
// import users from "../api/users";
import "../sass/pages/user-management.css";
import { Link } from "react-router-dom";
import ScrollToTop from "../components/scrollToTop";
import useNotifiCations from "../hooks/useNotifiCations";
import useDeleteUser from "../hooks/useDeleteUser";
function UserManagement() {
  const [users, setUsers] = useState([]);
  const [notifySuccess] = useNotifiCations(
    "success",
    "User Deleted Successfully"
  );
  const [notifyError] = useNotifiCations("error", "Failed To Delete User");

  const getAllUsers = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8000/api/v1/admin/users",
        {
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${localStorage.getItem("uToken")}`,
          },
        }
      );
      const data = await response.data.allUsers;
      return setUsers(data);
    } catch (err) {
      console.error("Error fetching users", err);
    }
  };

  useEffect(() => {
    getAllUsers();
  }, [setUsers]);

  const { handelDeleteUser } = useDeleteUser(
    users,
    setUsers,
    notifySuccess,
    notifyError
  );

  return (
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
      <ScrollToTop />
    </section>
  );
}

export default UserManagement;
