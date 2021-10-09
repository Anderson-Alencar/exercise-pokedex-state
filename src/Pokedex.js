import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            index: 0,
            type: 'All',
        }
    }

    listOfPokemons = () => {
        const { index, type } = this.state;
        const { pokemons } = this.props;
        
        if (type === 'All'){
            return pokemons.map((pokemon) => <Pokemon key={pokemon.id} pokemon={pokemon} />).find((_pok, i) => i === index)
        }
        
        return pokemons.filter((pok) => pok.type === type).map((pokemon) => <Pokemon key={pokemon.id} pokemon={pokemon} />).find((_pok, i) => i === index)
    }

    nextPokemon = () => {
        const { pokemons } = this.props;
        const { type, index } = this.state;
        let limit = pokemons.filter((pok) => pok.type === type).length - 1;

        if (type === 'All') limit = pokemons.length - 1

        if (index < limit) {
            this.setState((actualIndex, _props) => ({
                index: actualIndex.index + 1
            }))
        } else {
            this.setState({ index: 0 })
        }
    }

    applyFilter = (event) => {
        this.setState({ 
            index: 0,
            type: event.target.value
        })
    }

    render() {
        
        return (
            <div className="pokedex">
                <div>
                    {
                        this.listOfPokemons()
                    }
                    <button onClick={this.nextPokemon}>Próximo</button>
                </div>
                <div>
                    <button onClick={this.applyFilter} value='All'>All</button>
                    <button onClick={this.applyFilter} value='Fire'>Fire</button>
                    <button onClick={this.applyFilter} value='Psychic'>Psychic</button>
                </div>  
            </div>
        );
    }
}

export default Pokedex;