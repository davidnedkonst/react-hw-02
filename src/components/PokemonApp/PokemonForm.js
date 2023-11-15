import React, { Component } from "react";
import Section from "../Section";

export default class PokemonForm extends Component {
    state = { pokemonName: "" };

    handleNameChange = event => {
        console.log(event);
    };
    
    handleSubmit = event => {
        event.preventDefault();
        console.log(event);
    };

    render() {
        return (
            <Section title="PokemonForm">
                <div>
                    <form autoComplete="off" onSubmit={this.onSubmit}>
                        <input
                            name="pokemonName"
                            type="text"
                            value={this.state.pokemonName}
                            onChange={this.handleNameChange}
                            placeholder="Pokemon Name" />
                        <button type="submit">Search</button>
                    </form>
                </div>
            </Section>
        );
    };
};