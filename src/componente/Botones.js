import React, { Component } from 'react';
import '../estilosboton/botonstyle.css'

function Botones({botones,funcionboton, manejoclick}){

    return (
        <div className='botones-general'>
        
        <button className={funcionboton ? "botoncontador":"boton-reinicio"} onClick={manejoclick}
        >
         {botones}
        </button>
        </div>
    );
}
export default Botones;