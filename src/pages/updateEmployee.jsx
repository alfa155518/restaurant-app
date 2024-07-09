import ScrollToTop from "../components/scrollToTop";
import Loader from "../components/loader";
import useUpdateEmployee from "../hooks/useUpdateEmployee";

function UpdateEmployee() {
  // Costume Hook For Update Employee
  const {
    name,
    setName,
    job,
    setJob,
    workTime,
    setWorkTime,
    handelUpdateEmployee,
    loading,
  } = useUpdateEmployee();
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <form>
          <div className="form-container">
            <div className="form-group">
              <input
                className="default-input"
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                required
                autoComplete="any name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                className="default-input"
                type="text"
                name="job"
                id="job"
                placeholder="Job"
                required
                autoComplete="Job"
                value={job}
                onChange={(e) => setJob(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                className="default-input"
                type="text"
                name="work-time"
                id="work-time"
                placeholder="(1am : 1pm)"
                required
                autoComplete="work-time any thing"
                value={workTime}
                onChange={(e) => setWorkTime(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="send-data"
              onClick={(e) => handelUpdateEmployee(e)}>
              Update Employee
            </button>
          </div>
        </form>
      )}
      <ScrollToTop />
    </>
  );
}

export default UpdateEmployee;
