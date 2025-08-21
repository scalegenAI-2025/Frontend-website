/* eslint-disable @typescript-eslint/no-explicit-any */
// import { useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import { createUseStyles } from "react-jss";
// import { verifyOtp } from "../apis";
// import { toast } from "react-toastify";

// const useStyles = createUseStyles({
//   form: {
//     maxWidth: 400,
//     margin: "auto",
//     padding: 20,
//     border: "1px solid #ccc",
//     borderRadius: 5,
//   },
//   input: { display: "block", width: "100%", marginBottom: 10, padding: 8 },
//   button: { padding: 10, width: "100%", cursor: "pointer" },
// });

// export default function OtpVerification() {
//   const classes = useStyles();
//   const location = useLocation();
//   const navigate = useNavigate();
//   const [otp, setOtp] = useState("");
//   const email = location.state?.email || "";

//   const onSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!email) {
//       toast.error("Missing email from login");
//       return;
//     }
//     try {
//       const res = await verifyOtp({ email, otp });
//       toast.success(res.data.message || "OTP Verified!");
//       // redirect to dashboard or next page
//       navigate("/dashboard");
//     } catch (err: any) {
//       toast.error(err.response?.data?.error || "OTP Verification failed");
//     }
//   };

//   return (
//     <form className={classes.form} onSubmit={onSubmit}>
//       <input
//         className={classes.input}
//         type="text"
//         placeholder="Enter OTP"
//         value={otp}
//         onChange={(e) => setOtp(e.target.value)}
//         required
//       />
//       <button className={classes.button} type="submit">
//         Verify OTP
//       </button>
//     </form>
//   );
// }

import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { createUseStyles } from "react-jss";
import { verifyOtp } from "../../api/apis";
import { toast } from "react-toastify";
import { MdVerified } from "react-icons/md";

const useStyles = createUseStyles({
  wrapper: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #6a11cb, #2575fc, #ff5cac)",
    backgroundSize: "400% 400%",
    animation: "$gradientBG 15s ease infinite",
    // fontFamily: "Arial, sans-serif",
    padding: 20,
  },
  "@keyframes gradientBG": {
    "0%": { backgroundPosition: "0% 50%" },
    "50%": { backgroundPosition: "100% 50%" },
    "100%": { backgroundPosition: "0% 50%" },
  },
  card: {
    background: "#fff",
    borderRadius: 20,
    padding: 40,
    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
    maxWidth: 400,
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 20,
  },
  heading: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
    display: "flex",
    alignItems: "center",
    gap: 10,
  },
  input: {
    width: "100%",
    padding: "12px 18px",
    borderRadius: 30,
    border: "1px solid #ccc",
    fontSize: 16,
    outline: "none",
    background: "#f5f5f5",
  },
  button: {
    width: "100%",
    padding: 12,
    borderRadius: 30,
    background: "#28a745",
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
    border: "none",
    cursor: "pointer",
    transition: "background 0.3s ease",
    "&:hover": {
      background: "#218838",
    },
  },
});

export default function OtpVerification() {
  const classes = useStyles();
  const location = useLocation();
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");
  const email = location.state?.email || "";
  useEffect(() => {
    if (!email) {
      toast.error("Missing email from login. Redirecting to login page...");
      navigate("/");
    }
  }, [email, navigate]);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Verifying OTP", { email, otp }); // DEBUG
    if (!email) {
      toast.error("Missing email from login");
      return;
    }
    try {
      const res = await verifyOtp({ email, otp });
      // console.log("Verify response:", res.data); // DEBUG
      toast.success(res.data.message || "OTP Verified!");
      navigate("/user-dashboard");
    } catch (err: any) {
      console.error("Verify error:", err);
      toast.error(err.response?.data?.error || "OTP Verification failed");
    }
  };

  return (
    <div className={classes.wrapper}>
      <form className={classes.card} onSubmit={onSubmit}>
        <div className={classes.heading}>
          <MdVerified size={28} color="#6a11cb" />
          Verify OTP
        </div>
        <input
          className={classes.input}
          type="text"
          placeholder="Enter OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          required
        />
        <button className={classes.button} type="submit">
          Verify
        </button>
      </form>
    </div>
  );
}
