import ghost from './imagenes/ghost.png';
import Botones from './componente/Botones';
import './App.css';
import { useState } from 'react';

function App() {
const [numclick,setnumclick]=useState(0);
  const manejoclick=()=>{
    console.log("Click");
    setnumclick(numclick+1);
  }
  const manejoclick2=()=>{
    console.log("Reinicio");
    setnumclick(0);
  }
  return (
    <div className="App">
      <div className='Contenedor-Principal'>
        <img src={ghost} className="imagencod"/>
      </div>
      <div className='Estados'>
          <Botones
          botones='Click'
          funcionboton={true}
          manejoclick={manejoclick}
          />

          <Botones
          botones='Reiniciar'
          funcionboton={false}
          manejoclick={manejoclick2}
          />

          <div className='Resultado'>
            {numclick}
          </div>
        </div>
    </div>
  );
}

export default App;
