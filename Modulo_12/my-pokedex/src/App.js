import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Data from './data'

class Pokemon extends React.Component {
  render () {
    const { name, type, averageWeight, image } = this.props.value;

    return (
      <div className='pokemon'>
        <div>
          <h1>Name: {name}</h1>
          <h2>Type: {type}</h2>
          <p>Weigth: {averageWeight.value} {averageWeight.measurementUnit}</p>
        </div>
        <img src={image} alt={name}></img>
      </div>
    )
  }
}


function App() {
    return (
      <div className='pokedex'>
        {Data.map((pokemon) => <Pokemon key={pokemon.id} value={pokemon} />)}
      </div>
    );
}

export default App;
