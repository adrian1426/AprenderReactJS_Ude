import React from 'react';
import './App.css';
import ComponentDidMount from './sections/life-cycle/componentDidMount';

class App extends React.Component{

  render(){
    return (
      <div className="App">
      <ComponentDidMount/>
      </div>
    );
  }
  
}

export default App;
