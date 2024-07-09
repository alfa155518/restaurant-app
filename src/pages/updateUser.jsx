import Loader from "../components/loader";
import ScrollToTop from "../components/scrollToTop";
import useUpdateUser from "../hooks/useUpdateUser";

function UpdateUser() {
  // Costume Hook For Update Singe user
  const {
    firstName,
    lastName,
    email,
    setFirstName,
    setLastName,
    setEmail,
    handleUpdateUser,
    loading,
  } = useUpdateUser();

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
                name="firstName"
                id="firstName"
                placeholder="First Name"
                required
                autoComplete="any name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <input
                className="default-input"
                type="text"
                name="lastName"
                id="lastName"
                placeholder="last Name"
                required
                autoComplete="any name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className="form-group">
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
              onClick={(e) => handleUpdateUser(e)}>
              Update User
            </button>
          </div>
        </form>
      )}
      <ScrollToTop />
    </>
  );
}

export default UpdateUser;
