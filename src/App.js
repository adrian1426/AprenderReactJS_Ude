import React from 'react';
import './App.css';


function App() {
  const numbers=[1,3,2,6,8];

  return (
    <div className="App">
    <h4>Trabajando con listas</h4>
    {
      numbers.map((number,i)=>{
        return (
        <p key={i}>Soy el número {number}</p>
      );
      })
    }
    </div>
  );
}

export default App;
