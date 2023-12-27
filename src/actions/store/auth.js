import React, { createContext, useState, useContext, useEffect } from 'react';
import { currentAuthenticatedUser, handleFetchUserAttributes, onSignOut } from '../../utils/auth'

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {

  const [user, setUser] = useState({});
  useEffect(() => {
    const fetchUser = async () => {
      const data = await currentAuthenticatedUser();
      const attributes = await handleFetchUserAttributes();
      setUser({...data, ...attributes, isDone: attributes?.['custom:isDoneSurvey'] === 'true'});
    };
    fetchUser();
  }, [])

  const login = (data) => {
    setUser(data);
  };

  const logout = async () => {
    setUser({});
    await onSignOut();
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};