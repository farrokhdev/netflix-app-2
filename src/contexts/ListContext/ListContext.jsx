import React, { useContext, useReducer } from "react";
import { ListReducer } from "./ListReducer";

const startState = {
  lists: [],
  fetching: true,
  error: false,
};

export const ListContext = React.createContext();
export const ListProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ListReducer, startState);
  // API's GETTING list's

  return (
    <ListContext.Provider
      value={{
        lists: state.lists,
        fetching: state.fetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </ListContext.Provider>
  );
};

export const useListContext = () => {
  return useContext(ListContext);
};
