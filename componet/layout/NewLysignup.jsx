


import React from "react"
import { useContext, useState } from "react"
// import { authContext } from "../contexts/authContext"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"





// schema
const signupSchema = yup.object({
    email: yup.string().required("Email is required").email("Please enter a vaid email"),
    name: yup.string().required("Name is required").min(3, "Name must be at least 3 characters"),
    password: yup.string().required("Password is required").min(6, "Password must be at least 6 characters")
})

const SignupPage = () => {

    const [showPassword, setShowPassword] = useState(false)
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(signupSchema),
        defaultValues: {
            name: "",
            email: "",
            password: ""
        }
    })

    console.log(errors)

    const onSubmit = async (data) => {
        // console.log(data)
        try {
          const response = await fetch (`http://localhost:4005`, {

          })
        } catch (error) {
          console.log(error);
          
        }
    }



    return (
         <>
      <style>{`
        .form {
          max-width: 400px;
          margin: 100px auto;
          padding: 30px;
          border: 1px solid #ccc;
          border-radius: 10px;
          background-color: #f9f9f9;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
          font-family: 'Segoe UI', sans-serif;
        }

        .form div {
          margin-bottom: 20px;
        }

        .form label {
          display: block;
          font-weight: 600;
          margin-bottom: 8px;
          color: #333;
        }

        .form input[type="text"],
        .form input[type="email"],
        .form input[type="password"] {
          width: 100%;
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 6px;
          outline: none;
          transition: border-color 0.2s ease;
        }

        .form input:focus {
          border-color: #007bff;
        }

        .error-message {
          color: red;
          font-size: 0.85rem;
          margin-top: 5px;
        }

        button {
          width: 100%;
          padding: 12px;
          border: none;
          border-radius: 6px;
          background-color: #080a0cff;
          color: white;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        button:hover {
          background-color: #080d12ff;
        }

        span {
          color: #007bff;
          cursor: pointer;
          font-size: 0.9rem;
          user-select: none;
        }

        span:hover {
          text-decoration: underline;
        }
      `}</style>

      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="name">Full Name</label>
          <input type="text" id="name" {...register("name")} />
          {errors.name && <p className="error-message">{errors.name.message}</p>}
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" {...register("email")} />
          {errors.email && <p className="error-message">{errors.email.message}</p>}
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <div style={{
            border: "1px solid #ccc",
            display: "flex",
            alignItems: "center",
            padding: ".5rem 1rem",
            borderRadius: "6px"
          }}>
            <input
              style={{ padding: 0, border: "none", outline: "none", flex: 1 }}
              type={showPassword ? "text" : "password"}
              id="password"
              {...register("password")}
            />
            <span onClick={() => setShowPassword(prev => !prev)}>
              {showPassword ? "Hide" : "Show"}
            </span>
          </div>
          {errors.password && <p className="error-message">{errors.password.message}</p>}
        </div>
     

        <button type="submit">Create Account</button>
      </form>
    </>
    )
}

export default SignupPage
