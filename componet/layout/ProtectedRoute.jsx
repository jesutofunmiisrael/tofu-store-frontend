

import React, { useEffect, useState } from "react";
import { Outlet, Navigate } from "react-router-dom";

export default function ProtectedRoute() {
  const [loading, setLoading] = useState(true);
  const [isValid, setIsValid] = useState(false);

 
  const checkToken = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
  
      setIsValid(false);
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("http://localhost:4005/api/auth/verifyToken", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setIsValid(true);
      } else {
        setIsValid(false);
        localStorage.removeItem("token");
      }
    } catch (error) {
      console.error("Error verifying token:", error);
      setIsValid(false);
    } finally {
      setLoading(false);
    }
  };

 
  useEffect(() => {
    checkToken();
  }, []);


  if (loading) {
    return <div>Checking authentication...</div>;
  }

 
  if (!isValid) {
    return <Navigate to="/login" replace />;
  }


  return <Outlet />;
}
