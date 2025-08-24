import type { JSX } from "react";
import { Navigate } from "react-router-dom";

const UserLoggedIn = () => {
  return Boolean(localStorage.getItem("username"));
};

export const UserRoute = ({ children }: { children: JSX.Element }) => {
  if (!UserLoggedIn()) {
    return <Navigate to="/user-dashboard" replace />;
  }
  return children;
};
