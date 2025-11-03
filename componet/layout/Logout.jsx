import React from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'

const Logout = () => {


  const navigate = useNavigate()

  const handlelogout = () => {

    const token = localStorage.getItem("Token")

    if (token) {
      localStorage.removeItem("Token")
      toast.success("Logout Successfuly")
      navigate("/login")

    } else {
      toast.error("logout error")
    }



  }




  return (
    <div>
      <button onClick={handlelogout}>Logout</button>
    </div>
  )
}

export default Logout
