import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function ProtectedRoute(props) {
  const { currentUser } = useAuth();
  console.log(currentUser);
  const { children } = props;

  return currentUser ? children : <Navigate to="/login" />;
}
