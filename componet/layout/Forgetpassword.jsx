import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

const schema = yup.object({
  email: yup.string().email("Invalid email").required("Email is required"),
});

const ForgotPassword = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await fetch("http://localhost:4005/api/auth/forgetpassword", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      console.log(result);

      if (response.ok) {
        toast.success(result.message || "OTP sent to your email!");
        localStorage.setItem("resetEmail", data.email);
        navigate("/verifyotp");
      } else {
        toast.error(result.message || "Failed to send OTP");
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong. Try again!");
    }
  };

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

        .form h2 {
          text-align: center;
          margin-bottom: 25px;
          color: #222;
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

        .form input[type="email"] {
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

        .back-to-login {
          text-align: center;
          margin-top: 15px;
          font-size: 0.9rem;
        }

        .back-to-login span {
          color: #007bff;
          cursor: pointer;
        }

        .back-to-login span:hover {
          text-decoration: underline;
        }
      `}</style>

      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <h2>Forgot Password</h2>
        <div>
          <label>Email</label>
          <input type="email" {...register("email")} />
          {errors.email && <p className="error-message">{errors.email.message}</p>}
        </div>
        <button type="submit">Send OTP</button>

        <div className="back-to-login">
          <p>
            Remembered your password?{" "}
            <span onClick={() => navigate("/login")}>Go back to Login</span>
          </p>
        </div>
      </form>
    </>
  );
};

export default ForgotPassword;
