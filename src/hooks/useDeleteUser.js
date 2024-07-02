import axios from "axios";

function useDeleteUser(users, setUsers, notifySuccess, notifyError) {
  const handelDeleteUser = async (e, user) => {
    e.preventDefault();
    // 1) Get user  id
    const userId = user._id;

    try {
      // 2) Send DELETE request to server
      await axios.delete(
        `http://localhost:8000/api/v1/admin/users/delete/${userId}`,
        {
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${localStorage.getItem("uToken")}`,
          },
        }
      );
      notifySuccess();
      // 3) Update users state
      const updatedUsers = users.filter((u) => u._id !== userId);
      return setUsers(updatedUsers);
    } catch (error) {
      notifyError();
    }
  };
  return {
    handelDeleteUser,
  };
}

export default useDeleteUser;
