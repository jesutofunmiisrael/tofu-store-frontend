import { useEffect } from "react"
import { Outlet, useNavigate } from "react-router-dom"


const Isadminprotected = () => {

const auth = false

const navigate = useNavigate ()

useEffect (() =>{
    if (!auth){
        navigate("/signup") 
        return
    }
},  [])

  return <Outlet  />
}

export default Isadminprotected
