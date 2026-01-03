import { createContext, useContext, useEffect, useState } from "react";
import {
  loginUser,
  logoutUser,
  getAuth,
  isTokenValid,
  refreshAccessToken,
} from "../api/authService";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(null);

  useEffect(() => {
    const stored = getAuth();
    if (stored) {
      if (isTokenValid(stored.accessToken)) {
        setAuth(stored);
      } else {
        const refreshed = refreshAccessToken();
        setAuth(refreshed);
      }
    }
  }, []);

  const login = (login, password) => {
    const data = loginUser(login, password);
    setAuth(data);
  };

  const logout = () => {
    logoutUser();
    setAuth(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user: auth?.user,
        isLoggedIn: !!auth,
        role: auth?.user?.role,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
