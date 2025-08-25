/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { createUseStyles } from "react-jss";
import { useNavigate } from "react-router-dom";
import api from "../../api/axios";
import { toast } from "react-toastify";
import BlackNavbar from "../../components/navbar/blackNavbar";
import Footer from "../../components/footer/footer";

const useStyles = createUseStyles({
  container: {
    maxWidth: 400,
    marginTop: "140px",
    margin: "50px auto",
    padding: 30,
    borderRadius: 8,
    boxShadow: "0 8px 16px rgba(0,0,0,0.1)",
    backgroundColor: "#fff",
    //fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    textAlign: "center",
  },
  logo: {
    width: 80,
    height: 80,
    margin: "0 auto 20px",
    backgroundColor: "#1976d2",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 30,
    color: "#fff",
    fontWeight: "bold",
    userSelect: "none",
  },
  heading: {
    marginBottom: 24,
    color: "#1976d2",
  },
  input: {
    width: "90%",
    padding: "10px 12px",
    marginBottom: 16,
    fontSize: 16,
    borderRadius: 4,
    border: "1.5px solid #ccc",
    "&:focus": {
      borderColor: "#1976d2",
      outline: "none",
      boxShadow: "0 0 5px #1976d2",
    },
  },
  error: {
    color: "#d32f2f",
    marginBottom: 16,
    fontWeight: "600",
  },
  button: {
    width: "100%",
    padding: 12,
    fontSize: 18,
    borderRadius: 4,
    border: "none",
    backgroundColor: "#1976d2",
    color: "#fff",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
    "&:hover": {
      backgroundColor: "#125ea8",
    },
  },
});

// const AdminLogin = () => {
//   const classes = useStyles();

//   const [form, setForm] = useState({ email: "", password: "" });
//   const [error, setError] = useState("");
//   const [token, setToken] = useState("");

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setError("");

//     try {
//       const res = await fetch("http://localhost:9000/api/auth/admin-login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           email: form.email,
//           password: form.password,
//         }),
//       });

//       const data = await res.json();
//       if (!res.ok) throw new Error(data.error);

//       setToken(data.token);
//       localStorage.setItem("adminToken", data.token);
//       alert("Login successful!");
//     } catch (err: any) {
//       setError(err.message);
//     }
//   };

//   return (
//     <form className={classes.container} onSubmit={handleSubmit}>
//       <div className={classes.logo} aria-label="Logo">
//         A
//       </div>
//       <h2 className={classes.heading}>Admin Login</h2>
//       {error && <p className={classes.error}>{error}</p>}
//       <input
//         name="email"
//         type="email"
//         value={form.email}
//         onChange={handleChange}
//         placeholder="Email"
//         required
//         className={classes.input}
//       />
//       <input
//         name="password"
//         type="password"
//         value={form.password}
//         onChange={handleChange}
//         placeholder="Password"
//         required
//         className={classes.input}
//       />
//       <button type="submit" className={classes.button}>
//         Login
//       </button>
//     </form>
//   );
// };

const AdminLogin: React.FC = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await api.post("/admin-login", form);
      localStorage.setItem("adminToken", res.data.token);
      toast.success("Login successful!", { position: "top-right" });

      navigate("/user-register"); // Redirect admin after login
    } catch (err: any) {
      setError(err.response?.data?.error || "An unexpected error occurred");
    }

    setLoading(false);
  };

  return (
    <>
      <BlackNavbar />
      <form className={classes.container} onSubmit={handleSubmit}>
        <div className={classes.logo} aria-label="Logo">
          A
        </div>
        <h2 className={classes.heading}>Admin Login</h2>

        {error && <p className={classes.error}>{error}</p>}

        <input
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
          required
          className={classes.input}
        />
        <input
          name="password"
          type="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Password"
          required
          className={classes.input}
        />
        <button type="submit" className={classes.button} disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
      <Footer />
    </>
  );
};

export default AdminLogin;
