import React, { Component } from "react";
import Section from "../Section";
// import PokemonFormik from "./PokemonFormik";
import PokemonForm from "./PokemonForm";
import PokemonInfo from "./PokemonInfo";

export default class PokemonApp extends Component {
    state = { pokemon: null, pokemonName: null, loading: false };

    handleSubmit = pokemonName => {
        console.log("Run handleSubmit(). Name = " + pokemonName);
        this.setState({ pokemonName });

    }

    componentDidMount() {
        this.setState({ loading: true });
        setTimeout(() => {
            fetch('https://pokeapi.co/api/v2/pokemon/ditto')
                .then(res => res.json())
                .then(pokemon => this.setState({ pokemon }))
                .finally(this.setState({ loading: false }));
        },
            1000)
    };

    render() {
        return (
            <Section title="P">
                <PokemonForm onSubmit={this.handleSubmit} />
                {/* <PokemonFormik /> */}
                {this.state.loading && <h3>Идет загрузка...</h3>}
                {this.state.pokemon &&
                    <PokemonInfo info={this.state.pokemon} />
                }
                
            </Section>
        );
    };
}