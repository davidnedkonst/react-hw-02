import React, { Component } from "react";
import Section from "../Section";

export default class PokemonApp extends Component {
    state = { pokemon: null };

    componentDidMount() {
        fetch('https://pokeapi.co/api/v2/pokemon/ditto')
            .then(res => res.json())
            .then(console.log);
    };

    render() {
        return (
            <Section title="Pokemon">
                {this.state.pokemon &&
                    <div>Тут будет покемон</div>
                }
            </Section>
        );
    };
}