import React from "react";
import { Navigate } from "react-router-dom";

export default function Authenticate({ children }) {
  const role = "student1";
  if (role === "student") {
    alert("you are not allowed to go to this route");
    return <Navigate to="/home" replace />;
  }
  return children;
}
