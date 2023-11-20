import React, { Component } from "react";
import Section from "../Section";
import PokemonForm from "./PokemonForm";
import PokemonInfo from "./PokemonInfo";
import PokemonErrorMsg from "./PokemonErrorMsg";
import PokemonLoadMsg from "./PokemonLoadMsg";
import fetchPokemon from "./fetchPokemon";

const enumStatus = {
    idle: 1,
    pending: 2,
    rejected: 3,
    resolved: 4,
};

const initState = {
    pokemon: null,
    pokemonName: null,
    error: null,
    status: enumStatus.idle,
};

export default class PokemonApp extends Component {
    state = initState;

    handleSubmit = pokemonName => {
        this.setState({ pokemonName });
    };

    componentDidUpdate(prevProps, prevState) {
        const prevName = prevState.pokemonName;
        const nextName = this.state.pokemonName;

        if (prevName !== nextName) {
            this.setState({ status: enumStatus.pending });

            setTimeout(
                () => {
                    fetchPokemon(nextName)
                        .then(pokemon => this.setState({ pokemon, status: enumStatus.resolved }))
                        .catch(error => this.setState({ error, status: enumStatus.rejected }))
                }, 1000
            );
        };
    };

    render() {
        const { pokemon, error, status } = this.state;
        const loadMsg = "Идет загрузка...";

        return (
            <Section title="P">
                <PokemonForm onSubmit={this.handleSubmit} />
                {
                    status === enumStatus.rejected &&
                    <PokemonErrorMsg msg={error.message} />
                }
                {
                    status === enumStatus.pending &&
                    <PokemonLoadMsg msg={loadMsg} />
                }
                {
                    status === enumStatus.resolved &&
                    <PokemonInfo info={pokemon} />
                }
            </Section>
        );
    };
}