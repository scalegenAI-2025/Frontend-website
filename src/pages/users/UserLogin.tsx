/* eslint-disable @typescript-eslint/no-explicit-any */
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { createUseStyles } from "react-jss";
// import { loginUser } from "../apis"; // your axios wrapper
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

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

// export default function Login() {
//   const classes = useStyles();
//   const navigate = useNavigate();
//   const [form, setForm] = useState({
//     email: "",
//     password: "",
//     companyName: "",
//   });

//   const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const onSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     try {
//       const res = await loginUser(form);
//       toast.success(res.data.message || "OTP sent to your email");
//       // Pass email to OTP page via state or context
//       navigate("/otp", { state: { email: form.email } });
//     } catch (err: any) {
//       toast.error(err.response?.data?.error || "Login failed");
//     }
//   };

//   return (
//     <form className={classes.form} onSubmit={onSubmit}>
//       <input
//         className={classes.input}
//         type="email"
//         name="email"
//         placeholder="Email"
//         value={form.email}
//         onChange={onChange}
//         required
//       />
//       <input
//         className={classes.input}
//         type="password"
//         name="password"
//         placeholder="Password"
//         value={form.password}
//         onChange={onChange}
//         required
//       />
//       <input
//         className={classes.input}
//         type="text"
//         name="companyName"
//         placeholder="Company Name"
//         value={form.companyName}
//         onChange={onChange}
//         required
//       />
//       <button className={classes.button} type="submit">
//         Login
//       </button>
//     </form>
//   );
// }

// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { createUseStyles } from "react-jss";
// import { loginUser } from "../../api/apis";
// import { toast } from "react-toastify";
// //import { FiLogIn } from "react-icons/fi";
// import { FaUserCircle } from "react-icons/fa";
// import "react-toastify/dist/ReactToastify.css";

// const useStyles = createUseStyles({
//   wrapper: {
//     minHeight: "100vh",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     background: "linear-gradient(135deg, #6a11cb, #2575fc, #ff5cac)",
//     backgroundSize: "400% 400%",
//     animation: "$gradientBG 15s ease infinite",
//     // fontFamily: "Arial, sans-serif",
//     padding: 20,
//   },
//   "@keyframes gradientBG": {
//     "0%": { backgroundPosition: "0% 50%" },
//     "50%": { backgroundPosition: "100% 50%" },
//     "100%": { backgroundPosition: "0% 50%" },
//   },
//   card: {
//     background: "#fff",
//     borderRadius: 20,
//     padding: 40,
//     boxShadow: "0 10px 40px rgba(0,0,0,0.1)",
//     maxWidth: 900,
//     width: "100%",
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     gap: 30,
//   },
//   heading: {
//     fontSize: 28,
//     color: "#333",
//     fontWeight: "bold",
//     textAlign: "center",
//   },
//   contentRow: {
//     display: "flex",
//     width: "100%",
//     justifyContent: "space-between",
//     flexWrap: "wrap",
//     gap: 30,
//   },
//   imageContainer: {
//     flex: "1 1 200px",
//     display: "flex",
//     justifyContent: "center",
//   },
//   avatar: {
//     width: 150,
//     height: 150,
//     borderRadius: "50%",
//     background: "#f0f0f0",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
//     fontSize: 100,
//     color: "#6a11cb",
//   },
//   formContainer: {
//     flex: "2 1 400px",
//     display: "flex",
//     flexDirection: "column",
//     gap: 20,
//   },
//   input: {
//     border: "none",
//     outline: "none",
//     padding: "14px 20px",
//     borderRadius: 30,
//     background: "#f2f2f2",
//     fontSize: 16,
//     width: "100%",
//     boxSizing: "border-box",
//   },
//   button: {
//     border: "none",
//     padding: "14px",
//     borderRadius: 30,
//     background: "#28a745",
//     color: "#fff",
//     fontWeight: "bold",
//     cursor: "pointer",
//     fontSize: 16,
//     transition: "background 0.3s ease",
//     "&:hover": {
//       background: "#218838",
//     },
//     "&:disabled": {
//       background: "#a0a0a0",
//       cursor: "not-allowed",
//     },
//   },
// });

// const validateEmail = (email: string) => {
//   return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
// };

// export default function UserLogin() {
//   const classes = useStyles();
//   const navigate = useNavigate();
//   const [form, setForm] = useState({
//     email: "",
//     companyName: "",
//   });
//   const [loading, setLoading] = useState(false);

//   const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const onSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     if (!validateEmail(form.email)) {
//       toast.error("Please enter a valid email address");
//       return;
//     }

//     setLoading(true);
//     try {
//       const res = await loginUser(form);
//       toast.success(res.data.message || "OTP sent to your email");
//       navigate("/verify-otp", {
//         state: { email: form.email, companyName: form.companyName },
//       });
//     } catch (err: any) {
//       toast.error(err.response?.data?.error || "Login failed");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className={classes.wrapper}>
//       <div className={classes.card}>
//         <h2 className={classes.heading}>Login</h2>
//         <div className={classes.contentRow}>
//           <div className={classes.imageContainer}>
//             <div className={classes.avatar}>
//               <FaUserCircle />
//             </div>
//           </div>
//           <form className={classes.formContainer} onSubmit={onSubmit}>
//             <input
//               className={classes.input}
//               type="email"
//               name="email"
//               placeholder="Email"
//               value={form.email}
//               onChange={onChange}
//               required
//             />
//             <input
//               className={classes.input}
//               type="text"
//               name="companyName"
//               placeholder="Company Name"
//               value={form.companyName}
//               onChange={onChange}
//               required
//             />
//             <button className={classes.button} type="submit" disabled={loading}>
//               {loading ? "Sending OTP..." : "Login"}
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUseStyles } from "react-jss";
import { loginUser } from "../../api/apis";
import { toast } from "react-toastify";
import { FaUserCircle } from "react-icons/fa";
import "react-toastify/dist/ReactToastify.css";

const useStyles = createUseStyles({
  wrapper: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #6a11cb, #2575fc, #ff5cac)",
    backgroundSize: "400% 400%",
    animation: "$gradientBG 15s ease infinite",
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
    boxShadow: "0 10px 40px rgba(0,0,0,0.1)",
    maxWidth: 900,
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 30,
  },
  heading: {
    fontSize: 28,
    color: "#333",
    fontWeight: "bold",
    textAlign: "center",
  },
  contentRow: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: 30,
  },
  imageContainer: {
    flex: "1 1 200px",
    display: "flex",
    justifyContent: "center",
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: "50%",
    background: "#f0f0f0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
    fontSize: 100,
    color: "#6a11cb",
  },
  formContainer: {
    flex: "2 1 400px",
    display: "flex",
    flexDirection: "column",
    gap: 20,
  },
  input: {
    border: "none",
    outline: "none",
    padding: "14px 20px",
    borderRadius: 30,
    background: "#f2f2f2",
    fontSize: 16,
    width: "100%",
    boxSizing: "border-box",
  },
  button: {
    border: "none",
    padding: "14px",
    borderRadius: 30,
    background: "#28a745",
    color: "#fff",
    fontWeight: "bold",
    cursor: "pointer",
    fontSize: 16,
    transition: "background 0.3s ease",
    "&:hover": { background: "#218838" },
    "&:disabled": { background: "#a0a0a0", cursor: "not-allowed" },
  },
});

const validateEmail = (email: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

export default function UserLogin() {
  const classes = useStyles();
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", companyName: "" });
  const [loading, setLoading] = useState(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateEmail(form.email)) {
      toast.error("Please enter a valid email address");
      return;
    }
    setLoading(true);
    try {
      const res = await loginUser(form);
      toast.success(res.data.message || "OTP sent to your email");
      navigate("/verify-otp", {
        state: { email: form.email, companyName: form.companyName },
      });
    } catch (err: any) {
      toast.error(err.response?.data?.error || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={classes.wrapper}>
      <div className={classes.card}>
        <h2 className={classes.heading}>Login</h2>
        <div className={classes.contentRow}>
          <div className={classes.imageContainer}>
            <div className={classes.avatar}>
              <FaUserCircle />
            </div>
          </div>
          <form className={classes.formContainer} onSubmit={onSubmit}>
            <input
              className={classes.input}
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={onChange}
              disabled={loading}
              required
            />
            <input
              className={classes.input}
              type="text"
              name="companyName"
              placeholder="Company Name"
              value={form.companyName}
              onChange={onChange}
              disabled={loading}
              required
            />
            <button className={classes.button} type="submit" disabled={loading}>
              {loading ? "Sending OTP..." : "Login"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
