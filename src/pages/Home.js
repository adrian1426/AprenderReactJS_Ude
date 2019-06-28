import React,{Component} from 'react';
import { Title } from './../components/Title';
import { SearchForm } from '../components/SearchForm';
import { Movie } from '../components/Movie';
import { MoviesList } from '../components/MoviesList';

export class Home extends Component{

    state={
        usedSearch:false,
        results:[]
      };

    _handleResults = (results) =>{
        this.setState({ results:results,usedSearch:true});
      }
    
      _renderResults(){
        const {results} = this.state;
    
        return(
          results.map((movie,i)=>{
            return (
              <Movie 
              key={i}
              title={movie.Title}
              year={movie.Year}
              poster={movie.Poster}/>
            );
          })
        );
      }
    
      _renderResults2 = ()=>{
        return(
        this.state.results.length===0 ?
        <p>Sin Resultados!!!</p> : 
        <MoviesList movies={this.state.results}/>
        );
      }

    render(){
        return(
            <div>
                <Title>Search Movies</Title>

                <div className="SearchForm-wrapper">
                <SearchForm onResults={this._handleResults}/>
                </div>
                {
                this.state.usedSearch ?
                this._renderResults2() :
                <small>Use the search</small>
                }
            </div>
        );
    }
}