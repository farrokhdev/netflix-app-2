import React, { useContext, useReducer } from "react";
import { UserReducer } from "./UserReducer";

const startState = {
  users: [],
  fetching: true,
  error: false,
};

export const UserContext = React.createContext();
export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(UserReducer, startState);

  return (
    <UserContext.Provider
      value={{
        users: state.users,
        fetching: state.fetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};
