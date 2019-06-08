import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';

// function Hello(props){
//  return <h1>Hola {props.title}</h1>;
// }

// const Hello2=(props)=><h1>Hola {props.title}</h1>;

class Hello3 extends Component{
  render(){
    return(
      <h1>Hola {this.props.title}</h1>
    );
  }
}

class Title extends Component{
  render(){
    return(
      <h1>{this.props.text}</h1>
    );
  }
}

Title.defaultProps={
  text:'default propos'
};

class Text extends Component{
  render(){
    //Destructuring
    const {
      boolean,
      arrayOfNumbers,
      multiply,
      text,
      number,
      objectWithInfo,
      title
      } = this.props;

    const textoSegunBool= boolean ? "Cierto" : "Falso";
    const mappeddNumbers = arrayOfNumbers.map(multiply);

    return(
      <div>
        {title}
        <p>{text}</p>
        <p>{number}</p>
        <p>{textoSegunBool}</p>
        <p>{mappeddNumbers.join(', ')}</p>
        <p>{objectWithInfo.key2}</p>
      </div>
    );
  };
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <Hello3 title="Adrian Hernandez, props"/>

        <Text 
        text='esto es texto' 
        number={2} 
        boolean={true}
        arrayOfNumbers={[1,5,3]}
        objectWithInfo={{key:'valor key', key2:'valor key 2'}}
        multiply={(number)=>number*2}
        title={<h1>desde props element</h1>}/>

        <Title/>

      </header>
    </div>
  );
}

export default App;
