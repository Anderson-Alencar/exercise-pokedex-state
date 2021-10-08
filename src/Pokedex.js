import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            index: 0
        }
    }

    nextPokemon = () => {
        const limit = this.props.pokemons.length - 1;
    
        if (this.state.index < limit) {
            this.setState((actualIndex, _props) => ({
                index: actualIndex.index + 1
            }))
        } else {
            this.setState({ index: 0 })
        }
    }

    render() {
        return (
            <div className="pokedex">
                {this.props.pokemons.map((pokemon) => <Pokemon key={pokemon.id} pokemon={pokemon} />)
                    .find((_pok, i) => i === this.state.index)}
                <button onClick={this.nextPokemon}>Próximo</button>
            </div>
        );
    }
}

export default Pokedex;