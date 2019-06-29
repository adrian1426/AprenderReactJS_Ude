import React from 'react'
import {connect} from 'react-redux';

export function Counter ({counter,increment,decrement}){
      return (
        <div>
          <div>
            Contador: <span>{counter}</span>
          </div>
  
          <button onClick={increment}>+</button>
          <button onClick={decrement}>-</button>
        </div>
      )
  }

  const mapStateToProps = state => {
    return {counter: state.counter}
};

const mapDispatchToProps = dispatch => {
    return{
        increment: () => dispatch({type:'INCREMENT'}),
        decrement: () => dispatch({type:'DECREMENT'})
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
