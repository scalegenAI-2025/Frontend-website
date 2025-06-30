// import React, { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import axios from "axios";

// const ActivateAccount: React.FC = () => {
//   const { token } = useParams();
//   const navigate = useNavigate();
//   const [message, setMessage] = useState("Activating account...");

//   useEffect(() => {
//     if (!token) {
//       setMessage("Invalid link.");
//       return;
//     }

//     axios
//       .get(`http://localhost:5173/api/auth/activate/${token}`)
//       .then(() => {
//         setMessage("✅ Account activated. Redirecting to login...");
//         setTimeout(() => navigate("/login"), 2000);
//       })
//       .catch(() => {
//         setMessage("❌ Activation failed or link expired.");
//       });
//   }, [token, navigate]);

//   return (
//     <div style={{ padding: 40 }}>
//       <h2>{message}</h2>
//     </div>
//   );
// };

// export default ActivateAccount;

// src/components/ActivateAccount.tsx
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../../../api/axios"; // Adjust the path if needed

const ActivateAccount: React.FC = () => {
  const { token } = useParams<{ token: string }>();
  const navigate = useNavigate();
  const [message, setMessage] = useState("Activating account...");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!token) {
      setMessage("Invalid activation link.");
      setLoading(false);
      return;
    }

    api
      .get(`/activate/${token}`)
      .then(() => {
        setMessage("✅ Account activated! Redirecting to login...");
        setLoading(false);
        setTimeout(() => navigate("/login"), 2000);
      })
      .catch((err) => {
        setMessage(
          err.response?.data?.error || "❌ Activation failed or link expired."
        );
        setLoading(false);
      });
  }, [token, navigate]);

  return (
    <div style={{ padding: 40 }}>
      <h2>{message}</h2>
      {loading && <p>Loading...</p>}
    </div>
  );
};

export default ActivateAccount;
