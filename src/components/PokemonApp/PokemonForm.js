import React, { Component } from "react";
import Section from "../Section";

export default class PokemonForm extends Component {
    state = { pokemonName: "" };

    handleNameChange = event => {
        this.setState({ pokemonName: event.currentTarget.value.toLowerCase() })
    };

    handleSubmit = event => {
        event.preventDefault();
        const name = this.state.pokemonName.trim();
        if (name === "") {
            alert("Enter name!");
            return;
        }
        this.props.onSubmit(name);
        this.setState({ pokemonName: "" })
    };

    render() {
        return (
            <Section title="P Form">
                <div>
                    <form autoComplete="on" onSubmit={this.handleSubmit}>
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