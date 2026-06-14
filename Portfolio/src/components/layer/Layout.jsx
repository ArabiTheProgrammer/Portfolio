import Navbar from '../Navbar'
import { Outlet } from 'react-router'
import Header from '../Header'

const Layout = () => {
  return (
    <>
      <Header/>
      <Navbar/>
      <Outlet/>
    </>
  )
}

export default Layout
