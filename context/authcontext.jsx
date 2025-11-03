import {  createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { toast } from "sonner";
export const authContext = createContext()
const AuthProvider = ({children}) =>{
    const [user, setUser] = useState ({name:"dare", email:"dare@gmail.com", gender:"female"})
    const [submitting, setSubmitting] = useState (false)
    const navigate = useNavigate()

    const login = () =>{
        alert ("login..........")
    }

const signup = async (formData) => {
  setSubmitting(true);
  try {
    const response = await fetch("http://localhost:4005/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    console.log(data);

    if (data.success) {
      alert(data.message || "You are welcome!");
      navigate("/login");
    } else {
      alert(data.message || "Signup failed!");
    }
  } catch (error) {
    console.error("Error during signup:", error);
  } finally {
    setSubmitting(false);
  }
};


    const value = {
        user, 
        submitting,
        login,
        signup
    }

    return(
    <authContext.Provider value={value}>{children}</authContext.Provider>
    )
}

export default AuthProvider   