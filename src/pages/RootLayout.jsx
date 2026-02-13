/* eslint-disable no-unused-vars */
import React from 'react'
import Navbar from './Navbar'
import HomePage from './HomePage'
import { Outlet } from 'react-router-dom'

function RootLayout() {
  return (
    <div>
        <Navbar/>
        <Outlet/>
    </div>
  )
}

export default RootLayout