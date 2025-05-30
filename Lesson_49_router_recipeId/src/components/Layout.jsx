import { Outlet } from "react-router"
import NavBar from "./NavBar"
import { ToastContainer } from "react-toastify"

export default function Layout() {
    return(
        <>
      <NavBar />
      <Outlet />
      <ToastContainer /> 
       </>
    )
} 