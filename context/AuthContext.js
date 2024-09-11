import { createContext } from "react";
import { useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isConnected, setIsConnected] = useState(false);
  const [userId, setUserId] = useState(null);
  const [userToken, setUserToken] = useState(null);

  const login = () => {
    setIsConnected(true);
  };

  const logout = () => {
    setIsConnected(false);
  };

  return (
    <AuthContext.Provider
      value={{ isConnected, userId, userToken, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
