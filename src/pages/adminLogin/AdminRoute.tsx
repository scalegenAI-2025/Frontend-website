import type { JSX } from "react";
import { Navigate } from "react-router-dom";

const isAdminLoggedIn = () => {
  return Boolean(localStorage.getItem("adminToken"));
};

export const AdminRoute = ({ children }: { children: JSX.Element }) => {
  if (!isAdminLoggedIn()) {
    return <Navigate to="/admin-login" replace />;
  }
  return children;
};
