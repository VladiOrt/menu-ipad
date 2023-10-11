import { createContext, useState } from 'react';

const MyContext = createContext();

export const MyContextProvider = ({ children }) => {
  const [globalVariable, setGlobalVariable] = useState('Valor inicial');


  return (
    <MyContext.Provider value={{ globalVariable, setGlobalVariable }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyContext;