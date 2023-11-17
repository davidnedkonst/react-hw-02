import React, { Component } from "react";
import Section from "../Section";
// import PokemonFormik from "./PokemonFormik";
import PokemonForm from "./PokemonForm";
import PokemonInfo from "./PokemonInfo";

const initState = {
    pokemon: null,
    pokemonName: null,
    error: null,
    status: "idle",
};

const status = {};

export default class PokemonApp extends Component {
    state = initState;

    handleSubmit = pokemonName => {
        this.setState({ pokemonName });
    };

    componentDidUpdate(prevProps, prevState) {
        const prevName = prevState.pokemonName;
        const nextName = this.state.pokemonName;
        const url = `https://pokeapi.co/api/v2/pokemon/${nextName}`;
        const errorMsg = `Name ${nextName} not found`;

        if (prevName !== nextName) {
            this.setState(initState);
            this.setState({status: "pending"});

            setTimeout(() => {
                fetch(url)
                    .then(response => {
                        if (response.ok) {
                            return response.json();
                        }
                        return Promise.reject(new Error(errorMsg));
                    })
                    .then(pokemon => this.setState({ pokemon, status: "resolved" }))
                    .catch(error => this.setState({ error, status: "rejected" }))
            },
                1000)
        };
    };

    render() {
        const { pokemon, error, status } = this.state;

        return (
            <Section title="P">
                <PokemonForm onSubmit={this.handleSubmit} />
                {/* <PokemonFormik /> */}
                {status === "rejected" && <h3>{error.message}</h3>}
                {status === "pending" && <h3>Идет загрузка...</h3>}
                {status === "resolved" && <PokemonInfo info={pokemon} />}
            </Section>
        );
    };
}