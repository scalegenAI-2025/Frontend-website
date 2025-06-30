// // src/context/UserContext.tsx
// import React, { createContext, useContext, useEffect, useState } from "react";
// import axios from "axios";
// import { toast } from "react-toastify";

// interface User {
//   name: string;
//   email: string;
// }

// interface AuthContextType {
//   user: User | null;
//   setUser: React.Dispatch<React.SetStateAction<User | null>>;
//   logout: () => void;
// }

// const UserContext = createContext<AuthContextType | null>(null);

// export const useUser = () => {
//   const context = useContext(UserContext);
//   if (!context) throw new Error("UserContext must be used within Provider");
//   return context;
// };

// export const UserProvider: React.FC<{ children: React.ReactNode }> = ({
//   children,
// }) => {
//   const [user, setUser] = useState<User | null>(null);

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (!token) return;

//     axios
//       .get("http://localhost:9000/api/dashboard", {
//         headers: { Authorization: `Bearer ${token}` },
//         withCredentials: true,
//       })
//       .then((res) => setUser(res.data.user))
//       .catch(() => setUser(null));
//   }, []);

//   const logout = () => {
//     localStorage.removeItem("token");
//     setUser(null);
//     toast.success("You have been logged out.");
//   };

//   return (
//     <UserContext.Provider value={{ user, setUser, logout }}>
//       {children}
//     </UserContext.Provider>
//   );
// };

import React, { createContext, useContext, useEffect, useState } from "react";
import api from "../api/axios";
import { toast } from "react-toastify";

interface User {
  name: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  logout: () => void;
  loading: boolean;
}

const UserContext = createContext<AuthContextType | null>(null);

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) throw new Error("UserContext must be used within Provider");
  return context;
};

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      setLoading(false);
      return;
    }

    api
      .get("/dashboard")
      .then((res) => setUser(res.data.user))
      .catch(() => setUser(null))
      .finally(() => setLoading(false));
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
    toast.success("You have been logged out.");
  };

  return (
    <UserContext.Provider value={{ user, setUser, logout, loading }}>
      {children}
    </UserContext.Provider>
  );
};
