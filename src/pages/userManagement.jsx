import { FaUserEdit } from "react-icons/fa";
import { RiDeleteBinFill } from "react-icons/ri";
import users from "../api/users"

import "../sass/pages/user-management.css"
import LazyLoad from "react-lazyload";
function userManagement() {
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
          {users.map((user,i) => {
            return (
              <tr key={i}>
                <td className="user-img">
                  <LazyLoad>
                  <img src={user.img} alt="user-img" />
                  </LazyLoad>
                  </td>
                <td className="first-name"><h3>{user.name}</h3></td>
                <td className="last-name"><h4>{user.lastName}</h4></td>
                <td className="email">{user.email}</td>
                <td className="actions">
                  <button className="update" aria-label="btn update user"><FaUserEdit className="icon"/></button>
                  <button className="delete" aria-label="btn delete user"><RiDeleteBinFill className="icon"/></button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </section>
  )
}

export default userManagement
