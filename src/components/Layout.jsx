import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"
import Foot from "./Footer/foot"



const Layout = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Foot/>
    </>
  )
}

export default Layout