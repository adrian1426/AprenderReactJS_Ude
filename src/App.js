import React from 'react';
import './App.css';
import Forms from './sections/forms';

class App extends React.Component{
  constructor(){
    super();
    this.state={
      mouseX:0,
      mouseY:0
    }
  }

  handleclick(e){
   console.log("e: ",e);
   console.log("e: ",e.nativeEvent);
  }

  handleMouseMove = (e) =>{
    const {clientX, clientY} = e;
    this.setState({mouseX:clientX,mouseY:clientY});
  }

  render(){
    return (
      <div className="App">
      <Forms/>
      </div>
    );
  }
  
}

export default App;
