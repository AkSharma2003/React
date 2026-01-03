import React from 'react'
import Header from '../componant/Header/Header'
import Footer from '../componant/Footer/Footer'
import { Outlet } from 'react-router-dom'


function Layout() {
  return (
    <>
        <Header/>
        <Outlet/> 
        <Footer/>
    </>
  )
}

export default Layout
