import { createContext, useState } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("styleforge-user");

    return savedUser ? JSON.parse(savedUser) : null;
  });

  const [loading] = useState(false);

  // ==========================
  // Login
  // ==========================
  const login = ({ user, token }) => {
    localStorage.setItem(
      "styleforge-user",
      JSON.stringify(user)
    );

    localStorage.setItem(
      "styleforge-token",
      token
    );

    setUser(user);
  };

  // ==========================
  // Logout
  // ==========================
  const logout = () => {
    localStorage.removeItem("styleforge-user");
    localStorage.removeItem("styleforge-token");

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