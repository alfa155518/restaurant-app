import { Outlet } from "react-router-dom"
import SideBarAdmin from "../components/sideBarAdmin"
import AdminBar from "../components/AdminBar"
import ScrollToTop from "../components/scrollToTop"

function DashboardContainer() {
  
  return (
    <>
    <div className="dashboard-container p-relative">
      <SideBarAdmin />
      <div className="content">
        <AdminBar/>
        <Outlet/>
      </div>
    </div>
    <ScrollToTop/>
    </>
  )
}

export default DashboardContainer
