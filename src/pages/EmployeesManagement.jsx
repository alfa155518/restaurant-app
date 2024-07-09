import { FaUserEdit } from "react-icons/fa";
import { RiDeleteBinFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import LazyLoad from "react-lazyload";
import ScrollToTop from "../components/scrollToTop";
import Loader from "../components/loader";
import "../sass/pages/employees-management.css";
import useEmployeeManageMent from "../hooks/useEmployeeManageMent";
function EmployeesManagement() {
  // Costume Hook For handel Employees
  const { employees, handelDeleteEmployee, loading } = useEmployeeManageMent();
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
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
              {employees.map((employee, i) => (
                <tr key={i}>
                  <td>
                    <LazyLoad>
                      <img src={employee.photo.url} alt="img" />
                    </LazyLoad>
                  </td>
                  <td className="name roboto-bold ">{employee.name}</td>
                  <td className="job roboto-light-italic">{employee.job}</td>
                  <td className="time roboto-medium-italic">
                    ({employee.workTime})
                  </td>
                  <td className="actions">
                    <button className="update" aria-label="btn update">
                      <Link to={`updateEmployee/${employee._id}`}>
                        <FaUserEdit className="icon" />
                      </Link>
                    </button>
                    <button
                      className="delete"
                      aria-label="btn delete"
                      onClick={(e) => handelDeleteEmployee(e, employee)}>
                      <RiDeleteBinFill className="icon" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button className="btn-add roboto-black">
            <Link to="/add-employee">Add Employee</Link>
          </button>
        </section>
      )}
      <ScrollToTop />
    </>
  );
}

export default EmployeesManagement;
