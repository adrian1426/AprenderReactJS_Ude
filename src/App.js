import React from 'react';
import './App.css';

class Box extends React.Component{
  render(){
    return(
      <div style={{border:'1px solid #000', margin:5, padding:5}}>
        {this.props.children}
      </div>
    );
  }
}

class Article extends React.Component{
  render(){
    return(
      <section>
        <h2>{this.props.title}</h2>
        {this.props.author && <p><em>Escrito por: {this.props.author}</em></p>}
        <Box>{this.props.date}</Box>
        <article>
          {this.props.children}
        </article>
      </section>
    );
  }
}

class App extends React.Component{
  render(){
    return (
      <div className="App">
      <h4>Children props</h4>
      <Box>Hola soy un children</Box>
      <Box>Hola soy un children 2</Box>

      <Article 
      date={new Date().toLocaleDateString()}
      title="Articulo sobre porp children">  
      <p>El contenido quwe envolvemos por porps children</p>
      <strong>El contenido quwe envolvemos por porps children</strong>
      </Article>
      </div>
    );
  }
  
}

export default App;
