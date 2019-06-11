import React,{Component} from 'react';

class Forms extends Component{
    constructor(){
        super();
        this.state={
            inputName:'',
            inputTwitter:'@',
            inputTerms:true
        }
    }
    handleClick =(e) => {
        e.preventDefault();
        const name=this.inputName.value;
        const twitter= document.getElementById("twitter").value;

        console.log({name,twitter});
    }

    render(){
        return(
            <div>
                <h4>Formularios</h4>
                <form>
                    <p>
                        <label htmlFor="name">Nombre: </label>
                        <input 
                        id="name" 
                        name="userName" 
                        placeholder="Introduce el nombre"
                        ref={inputElement => this.inputName = inputElement}
                        defaultValue={this.state.inputName}/>
                    </p>

                    <p>
                        <label>Twitter: </label>
                        <input 
                        id="twitter" 
                        name="twitterAcount" 
                        placeholder="Introduce tu twitter"
                        defaultValue={this.state.inputTwitter}/>
                    </p>

                    <p>
                        <label>
                        <input 
                        defaultChecked={this.state.inputTerms}
                        type="checkbox"/>
                        Accepted terms
                        </label>
                    </p>

                    <button onClick={this.handleClick}>Enviar</button>
                </form>
            </div> 
        );
    }
}

export default Forms;