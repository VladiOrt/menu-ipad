import React, { useContext } from 'react';

import MyContext from './context';



const ShopCart = () => {



    const { globalVariable, setGlobalVariable } = useContext(MyContext);



    console.log("Valor 00---> " . MyContext)

  const handleClick = () => {
    setGlobalVariable('Nuevo valor');
  };

  return (
    <div>
      <p>{globalVariable}</p>
      <button onClick={handleClick}>Cambiar Valor</button>
    </div>
  );
};

export default ShopCart;