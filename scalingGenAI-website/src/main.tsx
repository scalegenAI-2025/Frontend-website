import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { UserProvider } from "././context/userContext";
// Ensure this env variable exists and is typed as a string
//const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID as string;
const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID as string;
console.log("GOOGLE CLIENT ID:", clientId);
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <GoogleOAuthProvider clientId="233031622398-mi57n7ja6vjl86rnkah38tl5vegj8ejj.apps.googleusercontent.com">
        <UserProvider>
          <App />
        </UserProvider>
      </GoogleOAuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
