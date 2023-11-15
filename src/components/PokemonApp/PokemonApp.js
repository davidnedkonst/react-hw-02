import React, { Component } from "react";
import Section from "../Section";
import PokemonFormik from "./PokemonFormik";
import PokemonForm from "./PokemonForm";

export default class PokemonApp extends Component {
    state = { pokemon: null, loading: false };

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
            <Section title="Pokemon">
                <PokemonForm />
                <PokemonFormik />
                {this.state.loading && <h3>Идет загрузка...</h3>}
                {this.state.pokemon &&
                    <div>{this.state.pokemon.name}</div>
                }
            </Section>
        );
    };
}