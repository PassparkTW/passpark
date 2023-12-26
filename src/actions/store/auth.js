import React, { createContext, useState, useContext } from 'react';
import {signOut} from "../../utils/auth";

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});

  const login = (data) => {
    setUser(data);
  };

  const logout = () => {
    setUser({});
    signOut();
    localStorage.removeItem('token');
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};