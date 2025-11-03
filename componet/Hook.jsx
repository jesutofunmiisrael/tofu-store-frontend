import { useState } from "react"

const Hooks = ()=>{
    const [view, setview] = useState("nomal")
    const [count, setcount] = useState(1)
    const [isAuth, setisAuth] = useState(false)
    const [user, setuser] = useState ({name:"Dare", age:"11", address:"Nigeria"})
    const [isverified, setisverified] = useState (false) 
    const [message, setmessage] = useState ("")

 

    const handleview = () =>{
        setview("hungry")
    }

    const handelecount =()=>{
        setcount((prev) => (prev +1)) 
    }

    const change  =() =>{
       setisAuth(true) 
    }

    const statusChange =()=>{
   setisverified ((prev ) => !prev ) 
    }

    const typemessage =(e) =>{
        setmessage(e.target.value)
    }

    return(
        <div>
            {/* <h1>view:{view}</h1>
            <button onClick={handleview}> change view</button>
              <button onClick={handelecount}> incremment</button>
           <div>
            {isAuth ? user.name : <button  onClick={change}> login</button>}
           </div> */}
{/* 
 <div>
<button style={{backgroundColor:isverified ?  "red" : "yellow" }} onClick={statusChange} >status </button>
 </div> */}

 <div>
    <input type="text" onChange={typemessage} />
    <p>{message}</p>
 </div>

        </div>
    )
}


export default Hooks