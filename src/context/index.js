import React, { useState, createContext } from 'react';

export const context = createContext();

export const ContextProvider = (props) => {
  const [infoDespesa, setInfoDespesa] = useState({});

  return (
    <context.Provider
      value={{
        infoDespesa,
        setInfoDespesa,
      }}
    >
      {props.children}
    </context.Provider>
  );
};
