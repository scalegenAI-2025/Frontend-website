import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { UserProvider } from "././context/userContext";
import ScrollToTop from "./ScrollToTop";
// Ensure this env variable exists and is typed as a string
//const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID as string;
const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID as string;

// console.log("GOOGLE CLIENT ID:", clientId);
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <GoogleOAuthProvider clientId={clientId}>
        <UserProvider>
          <App />
        </UserProvider>
      </GoogleOAuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
