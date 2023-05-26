import React, { createContext, useState } from "react";

export const AuthenticationContext = createContext();

export const AuthenticationProvider = ({ children }) => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  const handleSetIsSignedIn = (value) => {
    setIsSignedIn(value);
  };

  return (
    <AuthenticationContext.Provider
      value={{
        isSignedIn,
        setIsSignedIn: handleSetIsSignedIn,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
