import React,{Component} from 'react';
import './App.css';

class Contador extends Component{
  constructor(props){
    super(props);
    this.state={
      contador: this.props.contadorInicial
    }

    setInterval(()=>{
      this.setState({contador: this.state.contador + 1});
    },1000);
  }

  //state = {contador: 3};
  render(){
    return(
      <ContadorNumero numero={this.state.contador}/>
    );
  }
}

Contador.defaultProps ={
  contadorInicial : 0
}

class ContadorNumero extends Component{
  render(){
    return(
      <span>{this.props.numero}</span>
    );
  }
}

function App() {
  return (
    <div className="App">
      <p>mi primer componente con state</p>
      <Contador contadorInicial={150}/>
    </div>
  );
}

export default App;
