import React from 'react'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'
import FooterCom from './components/Footer'

const Layout = () => {
  return (
    <div>
      <Header/>
      <Outlet/>
      <FooterCom/>
    </div>
  )
}

export default Layout
