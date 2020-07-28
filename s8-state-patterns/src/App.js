import React from 'react';
import './App.css';
import Loteria from "./Loteria"

function App() {
  return (
    <div className="App">
      <Loteria/>
      <Loteria nombre="Loto" cantidadBolas={22} numeroMax={100} />
    </div>
  );
}

export default App;
