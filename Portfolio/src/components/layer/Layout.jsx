import React from 'react'
import Navbar from '../Navbar'
import { Outlet } from 'react-router'
import Footer from '../Footer'
import TopLeftImage from './TopLeftImage'
import Header from '../Header'
import Circles from './Circles'

const Layout = () => {
  return (
    <>
      <Header/>
      <Navbar/>
      <TopLeftImage/>
      <Outlet/>
    </>
  )
}

export default Layout