// /* eslint-disable @typescript-eslint/no-explicit-any */
// import React, { useState } from "react";
// import { createUseStyles } from "react-jss";
// import { registerUser } from "../apis";
// import toast from "react-hot-toast";

// const useStyles = createUseStyles({
//   form: {
//     /* same styles as before */
//   },
//   input: {
//     /* same styles as before */
//   },
//   button: {
//     /* same styles as before */
//   },
// });

// const Register: React.FC = () => {
//   const classes = useStyles();
//   const [form, setForm] = useState({
//     username: "",
//     email: "",
//     password: "",
//     companyName: "",
//   });

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     try {
//       const res = await registerUser(form);
//       toast.success(res.data.message);
//     } catch (err: any) {
//       toast.error(err.response?.data?.error || "Registration failed");
//     }
//   };

//   return (
//     <form className={classes.form} onSubmit={handleSubmit}>
//       {/* inputs */}
//       <input
//         className={classes.input}
//         placeholder="Username"
//         onChange={(e) => setForm({ ...form, username: e.target.value })}
//       />
//       <input
//         className={classes.input}
//         placeholder="Email"
//         onChange={(e) => setForm({ ...form, email: e.target.value })}
//       />
//       <input
//         className={classes.input}
//         type="password"
//         placeholder="Password"
//         onChange={(e) => setForm({ ...form, password: e.target.value })}
//       />
//       <input
//         className={classes.input}
//         placeholder="Company Name"
//         onChange={(e) => setForm({ ...form, companyName: e.target.value })}
//       />
//       <button className={classes.button} type="submit">
//         Register
//       </button>
//     </form>
//   );
// };

// export default Register;

/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { createUseStyles } from "react-jss";
import { registerUser } from "../../api/apis";
import toast from "react-hot-toast";
import { FaUserCircle } from "react-icons/fa";

const useStyles = createUseStyles({
  wrapper: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #6a11cb, #2575fc, #ff5cac)",
    backgroundSize: "400% 400%",
    animation: "$gradientBG 15s ease infinite",
    fontFamily: "Arial, sans-serif",
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
    "&:hover": {
      background: "#218838",
    },
  },
});

const UserRegister: React.FC = () => {
  const classes = useStyles();
  const [form, setForm] = useState({
    username: "",
    email: "",
    mobileNumber: "",
    companyName: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !form.username ||
      !form.email ||
      !form.mobileNumber ||
      !form.companyName
    ) {
      toast.error("All fields are required");
      return;
    }

    setLoading(true);
    try {
      const res = await registerUser(form);
      toast.success(res.data.message);
      //toast.success("You have successfully registered!");
      setForm({ username: "", email: "", mobileNumber: "", companyName: "" });
    } catch (err: any) {
      toast.error(err.response?.data?.error || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={classes.wrapper}>
      <div className={classes.card}>
        <h2 className={classes.heading}>Register Form</h2>
        <div className={classes.contentRow}>
          <div className={classes.imageContainer}>
            <div className={classes.avatar}>
              <FaUserCircle />
            </div>
          </div>
          <form className={classes.formContainer} onSubmit={handleSubmit}>
            <input
              className={classes.input}
              placeholder="Username"
              value={form.username}
              onChange={(e) => setForm({ ...form, username: e.target.value })}
            />
            <input
              className={classes.input}
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
            <input
              className={classes.input}
              type="text"
              placeholder="Mobile Number"
              value={form.mobileNumber}
              onChange={(e) =>
                setForm({ ...form, mobileNumber: e.target.value })
              }
            />
            <input
              className={classes.input}
              placeholder="Company Name"
              value={form.companyName}
              onChange={(e) =>
                setForm({ ...form, companyName: e.target.value })
              }
            />
            <button className={classes.button} type="submit" disabled={loading}>
              {loading ? "Registering..." : "Register"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserRegister;
