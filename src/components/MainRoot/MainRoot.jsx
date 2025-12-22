import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router'
import CategoryContainer from '../category/CategoryConatainer'

const MainRoot = () => {
  return (
    <>
        <Navbar></Navbar>
        <CategoryContainer></CategoryContainer>
        <Outlet></Outlet>
        <Footer></Footer>
    </>
  )
}

export default MainRoot