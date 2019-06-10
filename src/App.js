import React from 'react';
import './App.css';
import cars from './data/cars.json';

class CarItem extends React.Component{
  render(){
    const {car} = this.props;
    return(
      <li>
      <p><strong>Nombre: </strong>{car.name}</p>
      <p><strong>Marca: </strong>{car.company}</p>
      </li>
    );
  }
}

function App() {

  return (
    <div className="App">
    <h4>Trabajando con listas con objetos</h4>
    <ul>
      {
        cars.map((car,i)=>{
          return(
            <CarItem key={i} car={car}/>
          );
        })
      }
    </ul>
    </div>
  );
}

export default App;
