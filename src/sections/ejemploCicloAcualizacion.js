import React , {Component} from 'react';

const ANIMAL_IMAGES={
    cat:'https://goo.gl/PoQQXb',
    dolphin:'https://goo.gl/BbiKCd',
    panda:'https://goo.gl/oNbtoq'
};

class AnimalImage extends Component{
    state={src:ANIMAL_IMAGES[this.props.animal]};

    render(){
        return(
            <div>
                <p>Selected {this.props.animal}</p>
                <img
                alt={this.props.animal}
                src={this.state.src}
                width='250'/>
            </div>
        );
    }
}

AnimalImage.defaultProps= {
    animal:'dolphin'
}

class EjemploCicloActualizacion extends Component{
    state={animal:'dolphin'}
    render(){
        return(
            <div>
                <h4>Ciclo de actualización: ComponentWillReceiverProps</h4>
                <AnimalImage animal={this.state.animal}/>
            </div>
        );
    }
}

export default EjemploCicloActualizacion;