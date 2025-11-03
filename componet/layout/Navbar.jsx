import React, { useContext } from 'react'
import { Link } from "react-router-dom"
import "../layout/Navbar.css"
import { authContext } from '../../context/authcontext'
const Navbar = () => {
  const {user, login} = useContext(authContext)
  console.log(user);
  
  return (
    <div style={{ }} className='head'>
      <h1 >logo</h1>      

        <div className='display'>
     

      {/* <Link to="/landingpage" >Home</Link> */}
      <Link to="/landing" >Home</Link>
      {/* <button onClick={login}>login</button> */}


        <Link to="/product">Product</Link>
          <Link to="/profilrcard">Profile</Link>
          <Link to="/signup">Signup</Link>
              <Link to="/Login">Login</Link>
      <Link to="/dashboard">Dashboard</Link>
            <Link to="/Admin/">Admin</Link>
               <Link to="/cart">Cart</Link>
         
          {/* <Link to="/signup">Signup</Link> */}
      

        </div>
          </div>
  )
}

export default Navbar
