import axios from "axios";

const MAIN_URL = "https://edu-master-delta.vercel.app";
const LOG_IN = "/auth/login";

const getToken = () => localStorage.getItem("token");

const api = axios.create({
  baseURL: MAIN_URL,
});

// attach token automatically
api.interceptors.request.use((config) => {
  const token = getToken();
  if (token) {
    // config.headers.Authorization = `Bearer ${token}`;
    config.headers.token = `${token}`; //custom only for this api
  }
  return config;
});

export { LOG_IN, api, getToken };


// refresh token that runs when the app start so it get a new token 
// AuthContext.js
// import { createContext, useContext, useState, useEffect } from "react";
// import axios from "axios";

// const api = axios.create({
//   baseURL: "https://your-api.com",
//   withCredentials: true,
// });

// const AuthContext = createContext();

// export function AuthProvider({ children }) {
//   const [accessToken, setAccessToken] = useState(null);
//   const [user, setUser] = useState(null);

//   // attach token dynamically
//   api.interceptors.request.use(config => {
//     if (accessToken) {
//       config.headers.Authorization = `Bearer ${accessToken}`;
//     }
//     return config;
//   });

//   // refresh token logic
//   async function refresh() {
//     const { data } = await api.post("/auth/refresh");
//     setAccessToken(data.accessToken);
//     return data.accessToken;
//   }

//   async function login(email, password) {
//     const { data } = await api.post("/auth/login", { email, password });
//     setAccessToken(data.accessToken);
//     const profile = await api.get("/user/profile");
//     setUser(profile.data);
//   }

//   function logout() {
//     api.post("/auth/logout");
//     setAccessToken(null);
//     setUser(null);
//   }

//   useEffect(() => {
//     refresh().catch(() => setAccessToken(null));
//   }, []);

//   return (
//     <AuthContext.Provider value={{ user, login, logout, accessToken }}>
//       {children}
//     </AuthContext.Provider>
//   );
// }

// export function useAuth() {
//   return useContext(AuthContext);
// }
