import React from 'react';

const initialState = {
  isAuthenticated: false,
  user: null,
  token: null,
};

const authReducer = (state, action) => {
  if (action.type === 'LOGIN') {
    return {
      ...state,
      isAuthenticated: true,
      ...action.payload,
    };
  }
}

export const AuthContext = React.createContext({});

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(authReducer, initialState);

  const login = (payload) => {
    dispatch({
      type: 'LOGIN',
      payload,
    });
  };

  const logout = () => {
    dispatch({
      type: 'LOGOUT',
    });
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

