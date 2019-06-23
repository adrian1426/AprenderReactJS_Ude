import React from 'react';
import './App.css';
import BitCoinPrice from './sections/container-component/index';

class App extends React.Component{

  render(){
    return (
      <div className="App">
      <BitCoinPrice />
      </div>
    );
  }
  
}

export default App;
