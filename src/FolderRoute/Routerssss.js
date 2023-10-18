import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from '../components/Home'
import Dashboard from '../components/pages/Dashboard/Dashboard'
import Inventory from '../components/pages/Inventory/Inventory'
import Orders from '../components/pages/Orders/Orders'
import Customers from '../components/pages/Customers/Customers'
import Login from '../components/pages/login/Login'
import Signup from '../components/pages/Signup/Signup'


const Routerssss = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/inventory' element={<Inventory/>}/>
        <Route path='/order' element={<Orders/>}/>
        <Route path='/customer' element={<Customers/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>} />
    </Routes>
  
  )
}

export default Routerssss