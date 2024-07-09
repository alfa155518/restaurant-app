import ScrollToTop from "../components/scrollToTop";
import Loader from "../components/loader";
import useAddEmployee from "../hooks/useAddEmployee";

function AddEmployee() {
  // Costume Hook For Add Employee
  const {
    handleSubmitEmployee,
    name,
    setName,
    job,
    setJob,
    workTime,
    setWorkTime,
    email,
    setEmail,
    setPhoto,
    loading,
  } = useAddEmployee();
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <form>
          <h2 className="roboto-black">Add Employee Page</h2>
          <div className="form-container">
            <>
              <label htmlFor="photo" className="roboto-bold">
                Upload Img
              </label>
              <input
                className="default-input"
                type="file"
                id="photo"
                placeholder="photo"
                required
                accept="image/*"
                onChange={(e) => setPhoto(e.target.files[0])}
              />
            </>
            <input
              autoFocus
              className="default-input"
              type="text"
              name="employee-name"
              id="employee-name"
              placeholder="Employee Name"
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
              placeholder="Assistant Manager, Head Chef, Chef, Sous Chef, Waiter, Host, Cleaner"
              required
              autoComplete="job any thing"
              value={job}
              onChange={(e) => setJob(e.target.value)}
            />
            <input
              className="default-input"
              type="text"
              name="workTme"
              id="workTime"
              autoComplete="work any thing"
              placeholder="Work Time"
              required
              value={workTime}
              onChange={(e) => setWorkTime(e.target.value)}
            />
            <input
              className="default-input"
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              required
              autoComplete="email any thing"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="send-data"
            aria-label="send data"
            onClick={(e) => handleSubmitEmployee(e)}>
            Add Employee
          </button>
        </form>
      )}
      <ScrollToTop />
    </>
  );
}

export default AddEmployee;
