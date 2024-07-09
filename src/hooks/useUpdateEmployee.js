import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useNotifiCations from "../hooks/useNotifiCations";
function useUpdateEmployee() {
  const [name, setName] = useState("");
  const [job, setJob] = useState("");
  const [workTime, setWorkTime] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const { employeeId } = useParams();
  const navigate = useNavigate();

  // Notifications
  const [notifySuccess] = useNotifiCations(
    "success",
    "Employee updated successfully"
  );
  const [notifyError] = useNotifiCations("error", "Employee failed to update");

  // Get Employee Data
  const getSingleEmployee = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `http://localhost:8000/api/v1/employees/employee/${employeeId}`,
        {
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${localStorage.getItem("uToken")}`,
          },
        }
      );
      const data = await response.data.employee;
      setName(data.name);
      setJob(data.job);
      setWorkTime(data.workTime);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };
  // Update Employees Data
  useEffect(() => {
    getSingleEmployee();
  }, [employeeId]);

  // Update Data To send when update employee
  useEffect(() => {
    setData(() => {
      return {
        name,
        job,
        workTime,
      };
    });
  }, [name, job, workTime]);

  // Update Employee Data
  const handelUpdateEmployee = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);
      const response = await axios.patch(
        `http://localhost:8000/api/v1/employees/employee/${employeeId}`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${localStorage.getItem("uToken")}`,
          },
        }
      );
      if (response.status === 200) {
        notifySuccess();
        navigate(-1);
      }
    } catch (err) {
      notifyError();
    } finally {
      setLoading(false);
    }
  };
  return {
    name,
    setName,
    job,
    setJob,
    workTime,
    setWorkTime,
    handelUpdateEmployee,
    loading,
  };
}
export default useUpdateEmployee;
