import React from 'react'
import "../Dashboard/dashboardNavbar.css"
import { Link } from 'react-router-dom';
const DashboardNavbar = () => {
  return (
    <div className='DashboardHeader' >
      <h1>logo</h1>
      <div className='link'>
        <Link to="/landing" >Home</Link>
      <Link to = "*">Earning</Link>
      <Link to = "orders">My order</Link>
      
      <div>
       <div style={{ width: "50px", height: "50px", borderRadius: "50%" }}>
                    <img src={"https://images.pexels.com/photos/35537/child-children-girl-happy.jpg"} alt="" style={{ width: "100%", height: "100%", borderRadius: "50%", objectFit: "cover" }} />
                </div>
      </div>
      </div> 
    </div>
  )
}

export default DashboardNavbar


