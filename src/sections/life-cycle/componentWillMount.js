import React, {Component} from 'react';

class ComponentWillMount extends Component{

    constructor(){
        super();
        this.state={mensaje:'mensaje inicial'}
    }

    render(){
        return(
            <div>
                <h4>Ciclo de montaje: componentWillMount</h4>
                <p>{this.state.mensaje}</p>
            </div>
        );
    }
}

export default ComponentWillMount;
