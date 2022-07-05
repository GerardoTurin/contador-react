import React from 'react';



function Boton({ texto, esBotonClick, manejarClick }) {
    return (
        <button className={ esBotonClick ? 'boton-click' : 'boton-reiniciar' } onClick={manejarClick}>
            {texto}
        </button>
    );
}


export default Boton;