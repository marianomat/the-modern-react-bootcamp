import React from 'react';
import Juego from './Juego';
import Random from './Random';
import Boton from './Boton'
import ClickRoto from './ClickRoto'
import './App.css';
import EjercicioBoton from './EjercicioBoton';

function App() {
  return (
    <div  className="App">
      <Juego />
      <Random numeroMaximo={7}/>
      <Boton/>
      <ClickRoto/>
      <EjercicioBoton/>
    </div>
  );
}

export default App;
