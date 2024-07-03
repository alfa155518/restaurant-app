import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import HandelProducts from "./context/HandelProducts";
import Home from "./pages/Home";
import SingUp from "./pages/sign-up";
import Login from "./pages/login";
import Menu from "./pages/menu";
import AboutUs from "./pages/aboutUs";
import ContactUs from "./pages/contact-us";
import Services from "./pages/services";
import Tables from "./pages/tables";
import TableInfo from "./pages/tableInfo";
import Profile from "./pages/profile";
import Favorite from "./pages/favorite";
import ManageTable from "./context/manageTable";
import MyBookings from "./pages/myBookings";
import Cart from "./pages/cart";
import HandelCart from "./context/HandelCart";
import UserManagement from "./pages/userManagement";
import DashboardContainer from "./pages/dasshboardContaner";
import MenuManagement from "./pages/menuManagement";
import OrderManagement from "./pages/orderManagement";
import ReservationManagement from "./pages/reservationManagement";
import EmployeesManagement from "./pages/EmployeesManagement";
import AdminManageMent from "./context/AdminManageMent";
import AddProduct from "./pages/addProduct";
import "react-toastify/dist/ReactToastify.css";
import "./sass/components/side-bar-admin.css";
import UpdateUser from "./pages/updateUser";

function App() {
  // const user = JSON.parse(localStorage.getItem("newUser"));
  const user = "admin";
  return (
    <>
      {user?.role === "admin" ? (
        <AdminManageMent>
          <div className="main">
            <Routes>
              <Route element={<DashboardContainer />}>
                <Route index element={<UserManagement />} />
                <Route path="updateUser/:userId" element={<UpdateUser />} />
                <Route path="menu-management" element={<MenuManagement />} />
                <Route path="order-management" element={<OrderManagement />} />
                <Route
                  path="reservation-management"
                  element={<ReservationManagement />}
                />
                <Route
                  path="employees-management"
                  element={<EmployeesManagement />}
                />
                <Route path="add-product" element={<AddProduct />} />
              </Route>
            </Routes>
          </div>
        </AdminManageMent>
      ) : (
        <HandelProducts>
          <ManageTable>
            <HandelCart>
              <div className="main">
                <Routes>
                  <Route path="signup" element={<SingUp />} />
                  <Route path="login" element={<Login />} />
                  <Route path="/" element={<Home />} />
                  <Route path="profile" element={<Profile />} />
                  <Route path="menu" element={<Menu />} />
                  <Route path="profile" element={<Profile />} />
                  <Route path="menu" element={<Menu />} />
                  <Route path="cart" element={<Cart />} />
                  <Route path="tables" element={<Tables />} />
                  <Route path="tables/:infoId" element={<TableInfo />} />
                  <Route path="my-bookings" element={<MyBookings />} />
                  <Route path="about-us" element={<AboutUs />} />
                  <Route path="contact-us" element={<ContactUs />} />
                  <Route path="services" element={<Services />} />
                  <Route path="favorite" element={<Favorite />} />
                </Routes>
              </div>
            </HandelCart>
          </ManageTable>
        </HandelProducts>
      )}
      <ToastContainer
        position="top-center"
        autoClose={2000}
        limit={1}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
}

export default App;
