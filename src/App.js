import React from 'react';
import './App.css';

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
      <h4>Eventos</h4>
      <button onClick={this.handleclick}>Click aquí</button>

      <div onMouseMove={this.handleMouseMove} style={{border:'1px solid #000', marginTop:10, padding:10}}>
      <p>{this.state.mouseX}, {this.state.mouseY}</p>
      </div>
      </div>
    );
  }
  
}

export default App;
