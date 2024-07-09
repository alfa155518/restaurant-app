import axios from "axios";
import { useEffect, useState } from "react";
import useNotifiCations from "../hooks/useNotifiCations";
function useEmployeeManageMent() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(false);

  // Notifications
  const [notifySuccess] = useNotifiCations(
    "success",
    "Employee Deleted successfully"
  );
  const [notifyError] = useNotifiCations("error", "Employee Not Deleted");

  // Get all employees
  const getAllEmployees = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        "http://localhost:8000/api/v1/employees/",
        {
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${localStorage.getItem("uToken")}`,
          },
        }
      );
      const allEmployees = await response.data.employees;
      return setEmployees(allEmployees);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllEmployees();
  }, [setEmployees]);

  // Delete an employee
  const handelDeleteEmployee = async (e, employee) => {
    try {
      e.preventDefault();
      setLoading(true);
      const response = await axios.delete(
        `http://localhost:8000/api/v1/employees/employee/${employee._id}`,
        {
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${localStorage.getItem("uToken")}`,
          },
        }
      );
      if (response.status === 200) {
        const updatedEmployees = employees.filter(
          (e) => e._id !== employee._id
        );
        notifySuccess();
        return setEmployees(updatedEmployees);
      }
    } catch (error) {
      notifyError();
    } finally {
      setLoading(false);
    }
  };
  return {
    employees,
    handelDeleteEmployee,
    loading,
  };
}

export default useEmployeeManageMent;
