import { createContext, useState } from "react";

export const AuthContext = createContext();

const savedUser = localStorage.getItem("styleforge-user");

export function AuthProvider({ children }) {
  const [user, setUser] = useState(
    savedUser ? JSON.parse(savedUser) : null
  );

  const [loading] = useState(false);

  // Login
  const login = (userData) => {
    localStorage.setItem(
      "styleforge-user",
      JSON.stringify(userData)
    );

    setUser(userData);
  };

  // Logout
  const logout = () => {
    localStorage.removeItem("styleforge-user");
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}