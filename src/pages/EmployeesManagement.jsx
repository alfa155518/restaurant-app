import { FaUserEdit } from "react-icons/fa";
import { RiDeleteBinFill } from "react-icons/ri";
import employees from "../api/employees";
import "../sass/pages/employees-management.css"
import LazyLoad from "react-lazyload";
function EmployeesManagement() {
  return (
    <section className="employees-management-container">
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Job</th>
            <th>Work-Time</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
        {
          employees.map((employee,i) => 
          <tr key={i}>
            <td>
              <LazyLoad>
              <img src={employee.img} alt="img" />
              </LazyLoad>
              </td>
            <td className="name roboto-bold ">{employee.name}</td>
            <td className="job roboto-light-italic">{employee.job}</td>
            <td className="time roboto-medium-italic">({employee.workTime})</td>
            <td className="actions">
                  <button className="update" aria-label="btn update"><FaUserEdit className="icon"/></button>
                  <button className="delete" aria-label="btn delete"><RiDeleteBinFill className="icon"/></button>
                </td>
          </tr>
          )
        }
        </tbody>
      </table>
    </section>
  )
}

export default EmployeesManagement
