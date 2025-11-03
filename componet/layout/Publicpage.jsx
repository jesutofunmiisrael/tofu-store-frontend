import React from 'react'
import Landing from '../../src/pages/Landing'
import ProfileCard from '../profilecard'
import Dashboardlayout from '../../src/pages/Dashboard/Dashboardlayout'
import Product from '../productlist'
import Navbar from './Navbar'
import { Route, Routes } from 'react-router-dom'
// import SignupForm from '../signupForm'
import Adminlayout from '../../src/pages/admin/Adminlayout'
import AuthProvider from '../../context/authcontext'
import Login from './Login'
import NewLysignup from './NewLysignup'
import Cart from '../cart'

const Publicpage = () => {
  return (
    <div>
   <AuthProvider>
 <Navbar />
 <div style={{marginTop:"60px"}}>
<Routes >

 
   <Route path="/product" element={<Product  />} />
   <Route path="/landing"  element={<Landing />}/>

        <Route path="/profilrcard" element={<ProfileCard  />} />
  


    <Route path="/dashboard/*"  element={<Dashboardlayout  />} />
     <Route path="/Admin/*"  element={<Adminlayout  />} />
     {/* <Route path="/signup"  element={<SignupForm  />} /> */}
      <Route path="/signup"  element={<NewLysignup />} />
      <Route path="/Login"  element={<Login  />} />
           <Route path="/cart"  element={<Cart  />} />

</Routes>
  </div>
</AuthProvider>
</div>

  
  )
}

export default Publicpage
