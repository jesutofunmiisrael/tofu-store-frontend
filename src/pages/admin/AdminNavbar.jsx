import React from 'react'
import { Link } from 'react-router-dom'
import "../admin/admin.css"
const AdminNavbar = () => {
  return (
    <div>
       <div className='AdminHeader' >
      <h1>logo</h1>
      <div className='admin'>
        <Link to="/landing" >Home</Link>
      <Link to = "users">Users</Link>
      <Link to = "*">userinfo</Link>
      <div style={{ width: "50px", height: "50px", borderRadius: "50%" }}>
                    <img src={"https://images.pexels.com/photos/35537/child-children-girl-happy.jpg"} alt="" style={{ width: "100%", height: "100%", borderRadius: "50%", objectFit: "cover" }} />
                </div>
      </div> 
    </div>
    </div>
  )
}

export default AdminNavbar
