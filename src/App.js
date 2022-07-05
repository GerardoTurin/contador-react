import React from 'react';
import './App.css';
import Boton from './componentes/boton.js';
import Contador from './componentes/contador';
import freeCodeCampLogo from './imagenes/freecodecamp-logo.png';
import { useState } from 'react';

import './estilos/boton.css';

function App() {

  const [numClicks, setnumClicks] = useState(0);


  const aumentarContador = () => {
    setnumClicks(numClicks + 1);
  }

  const disminuirContador = () => {
    setnumClicks(numClicks - 1);
  }

  const reiniciarContador = () => {
    setnumClicks(0);
  }




  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img className='freecodecamp-logo' src={freeCodeCampLogo} alt='freecodecamp-logo' />
      </div>
      <div className='contenedor-contador'>
        <Contador 
          numClicks={numClicks}
        />
        <Boton 
          texto='Disminuir'
          esBotonClick={true}
          manejarClick={disminuirContador}
        />
        <Boton 
          texto='Reiniciar'
          esBotonClick={false}
          manejarClick={reiniciarContador}
        />
        <Boton 
          texto='Aumentar'
          esBotonClick={true}
          manejarClick={aumentarContador}
        />
      </div>
    </div>
  );
}

export default App;
