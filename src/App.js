import React from 'react';
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={mensajeInicial:'mensaje inicial'}
  }

  render(){
    return (
      <div className="App">
      <h4>Ciclo de "Montaje" - "Construcor"</h4>
      {this.state.mensajeInicial}
      </div>
    );
  }
  
}

export default App;
