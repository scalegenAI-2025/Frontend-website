import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const ActivateAccount: React.FC = () => {
  const { token } = useParams();
  const navigate = useNavigate();
  const [message, setMessage] = useState("Activating account...");

  useEffect(() => {
    if (!token) {
      setMessage("Invalid link.");
      return;
    }

    axios
      .get(`http://localhost:5173/api/auth/activate/${token}`)
      .then(() => {
        setMessage("✅ Account activated. Redirecting to login...");
        setTimeout(() => navigate("/login"), 2000);
      })
      .catch(() => {
        setMessage("❌ Activation failed or link expired.");
      });
  }, [token, navigate]);

  return (
    <div style={{ padding: 40 }}>
      <h2>{message}</h2>
    </div>
  );
};

export default ActivateAccount;
