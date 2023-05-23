import React, { createContext, useState } from "react";

export const AuthenticationContext = createContext();

export const AuthenticationProvider = ({ children }) => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [adminId, setAdminId] = useState(null);

  const handleSetIsSignedIn = (value) => {
    setIsSignedIn(value);
  };

  const handleSetAdminId = (id) => {
    setAdminId(id);
  };

  return (
    <AuthenticationContext.Provider
      value={{
        isSignedIn,
        setIsSignedIn: handleSetIsSignedIn,
        adminId,
        setAdminId: handleSetAdminId,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
