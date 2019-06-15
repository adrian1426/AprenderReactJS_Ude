import React,{Component } from 'react';

class EjemploDeComponentDidMount extends Component{

    constructor(props){
        console.log("constructor");
        super(props);
        this.state={}
        debugger
    }

    componentWillMount(){
        console.log("component willmount");
        debugger
    }

    componentDidMount(){
        console.log("component DidMount");
        debugger
    }

    render(){
        debugger
        console.log("render");
        return(
            <div>
                <h4>Ciclo de montaje: ComponentDidMount
                </h4>
            </div>
        );
    }
}

export default EjemploDeComponentDidMount;