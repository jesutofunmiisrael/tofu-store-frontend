import React from 'react'
import AdminNavbar from './AdminNavbar'
import Adminindex from './Adminindex'
import { Routes, Route } from 'react-router-dom'
import Users from './users'
import Adminnotfound from './Adminnotfound'
import { Link } from 'react-router-dom'

const Adminlayout = () => {
  return (
    <div>
        <AdminNavbar />
        <div style={{marginTop:"60px"}}>
            <div style={{background:"blue", width:"10rem", position:"fixed", height:"40rem"}}>
                <div style={{marginLeft:"13px", marginTop:"20px", }}>
    <p> <Link to="/Admin/" style={{color:"white", textDecoration:"none"}}> admin</Link> </p>
    <p><Link to="users" style={{color:"white", textDecoration:"none"}}>users </Link></p>

    <p > <Link to="*"  style={{color:"white", textDecoration:"none"}}>userinfo </Link></p>
    </div>
    </div>



      <div style={{marginLeft:"15rem"}}>
        <Routes>
       <Route path="/" element = {<Adminindex />}/>
        <Route path="/users" element = {<Users />}/>
          <Route path="*" element = {<Adminnotfound />}/>
        </Routes>
        </div>
      </div>
    </div>
  )
}


export default Adminlayout
