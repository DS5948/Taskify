import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [clicked, setClicked] = useState('tasks');

  const [isComponentVisible, setComponentVisibility] = useState(false);

  const toggleComponentVisibility = () => {
    setComponentVisibility((prev) => !prev);
  };
  const contextValue = {clicked, setClicked,isComponentVisible,toggleComponentVisibility};
  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
