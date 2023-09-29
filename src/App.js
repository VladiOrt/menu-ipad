import React, { useState, useEffect } from 'react';


import './App.scss'

import Home from './routes/index';
import Wislish from './components/hook/index.tsx'


const LoadingIndicator = () => {
  return (
    <div className='Loading'>
      {/* Aquí puedes usar un icono animado, un spinner o simplemente un mensaje */}
    </div>
  );
};

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simula una carga de 2 segundos (puedes ajustar el tiempo según tus necesidades)
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className='containerGeneral'>
      {loading ? <LoadingIndicator /> : <> <Home/> </>}
    </div>
  );
};

export default App;