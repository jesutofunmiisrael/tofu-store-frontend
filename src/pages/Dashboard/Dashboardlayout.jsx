import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Order from './order'
import Dashboardindex from './Dashboardindex'
import DashboardNavbar from './DashboardNavbar'
import DashboardNotfound from './DashboardNotfound'

import { Link } from 'react-router-dom'
import logout from '../../../componet/layout/logout'
import Logout from '../../../componet/layout/logout'



const Dashboardlayout = () => {

  return (
    <div>
   <DashboardNavbar />
        <div style={{marginTop:"60px"}}>
          <div style={{background:"yellow", width:"10rem", position:"fixed", height:"40rem",}}>
            <div style={{marginLeft:"30px", marginTop:"20px"}}>
          <p> <Link to="/landing" style={{color:"white", textDecoration:"none"}}>Dashboard </Link></p>
           <p> <Link to="order" style={{color:"white", textDecoration:"none"}}>Orders </Link></p>
            <p> <Link to="*" style={{color:"white", textDecoration:"none"}}>Profile </Link></p>
          <Logout />
            </div>
            </div>



      <div style={{marginLeft:"15rem"}}>

     
      <Routes>
        
        <Route path="/"  element ={<Dashboardindex />}/>
        <Route path="/orders" element = {<Order />}/> 


  

          <Route path="*" element = {<DashboardNotfound />}/> 
      </Routes>
       </div>
      
        </div>
    </div>

  )
}

export default Dashboardlayout


