import React, { useContext, useEffect, useState, useReducer } from "react";

import { AuthReducer } from "./AuthReducer";

const startState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  fetching: false,
  error: false,
};

export const AuthContext = React.createContext();
export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, startState);

  // API's GETTING list's
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
  }, [state.user]);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        fetching: state.fetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};
