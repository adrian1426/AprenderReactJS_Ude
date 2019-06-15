import React from 'react';
import './App.css';
import ComponentWillMount from './sections/life-cycle/componentWillMount';

class App extends React.Component{

  render(){
    return (
      <div className="App">
      <ComponentWillMount/>
      </div>
    );
  }
  
}

export default App;
