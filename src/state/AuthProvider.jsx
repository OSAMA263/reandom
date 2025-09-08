import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext(null);

const useAuth = () => {
  const authContext = useContext(AuthContext);
};


// how do we put the token in the boy in every request that i make 
// insted of adding the token in every other request

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState();



  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await api.get("/api");
        setToken(res.data.token);
      } catch {
        setToken(null);
      }
    };
  });
};

// import { createContext, useContext, useState } from "react";
// import axios from "axios";

// const AuthContext = createContext(null);

// export function AuthProvider({ children }) {
//   const [user, setUser] = useState(null);
//   const [token, setToken] = useState(null);

//   // Login function
//   const login = async (username, password) => {
//     try {
//       const res = await axios.post("https://dummyjson.com/auth/login", {
//         username,
//         password,
//       });

//       setUser(res.data);
//       setToken(res.data.token);

//       // set token globally so every axios call includes it
//       axios.defaults.headers.common["Authorization"] = `Bearer ${res.data.token}`;

//       return res.data;
//     } catch (err) {
//       console.error("❌ Login failed:", err.response?.data || err.message);
//       return null;
//     }
//   };

//   // Logout function
//   const logout = () => {
//     setUser(null);
//     setToken(null);
//     delete axios.defaults.headers.common["Authorization"];
//   };

//   return (
//     <AuthContext.Provider value={{ user, token, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// }

// // helper hook
// export function useAuth() {
//   return useContext(AuthContext);
// }

// in other compoenenets 
  // const { login } = useAuth();