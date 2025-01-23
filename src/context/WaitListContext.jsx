import React, { createContext, useReducer, useContext } from "react";

// Create the context with a default value
const WaitlistContext = createContext({
  state: {
    inviteList: [],
    generalList: []
  },
  dispatch: () => null
});

const initialState = {
  inviteList: [],
  generalList: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "ADD_TO_INVITE_LIST":
      return { ...state, inviteList: [...state.inviteList, action.payload] };
    case "ADD_TO_GENERAL_LIST":
      return { ...state, generalList: [...state.generalList, action.payload] };
    default:
      return state;
  }
}

export const WaitlistProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  const value = {
    state,
    dispatch
  };

  return (
    <WaitlistContext.Provider value={value}>
      {children}
    </WaitlistContext.Provider>
  );
};

export const useWaitlist = () => {
  const context = useContext(WaitlistContext);
  if (!context) {
    throw new Error('useWaitlist must be used within a WaitlistProvider');
  }
  return context;
};
