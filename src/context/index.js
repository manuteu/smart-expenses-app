import React, { useState, createContext } from 'react';

export const context = createContext();

export const ContextProvider = (props) => {
  const [infoDespesa, setInfoDespesa] = useState({});
  const [renda, setRenda] = useState([]);

  return (
    <context.Provider
      value={{
        infoDespesa,
        renda,
        setRenda,
        setInfoDespesa,
      }}
    >
      {props.children}
    </context.Provider>
  );
};
