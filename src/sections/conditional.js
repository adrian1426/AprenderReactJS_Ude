import React, {Component} from 'react';

class LoginButton extends Component{
    render(){
        return(
            <button>Iniciar Sesión</button>
        );
    };
}

class LogoutButton extends Component{
    render(){
        return(
            <div>
                <p>Bienvenido, usuarios!</p>
                <button>Cerrar Sesión</button>
            </div>
        );
    };
}

// function useConditionalRendering(mostrarA){
//   if(mostrarA){
//     return(
//         <ComponenteA/>
//     );
//   }
//   else{
//     return(
//         <ComponenteB/>
//     );
//   }
// }

class ConditionalSection extends Component{

    constructor(){
        super();
        this.state = {isUserLogged: true};
    }

    render (){
        // const conditionalComponent =useConditionalRendering(this.state.mostrarA);
        // const conditionalComponentTernaria =this.state.mostrarA ? <ComponenteA/> : <ComponenteB/> ;
        return(
            <div>
                <h4>Conditional Rendering</h4>
                {this.state.isUserLogged ? <LogoutButton/> : <LoginButton/>}
            </div>
        );
    };
};

export default ConditionalSection;