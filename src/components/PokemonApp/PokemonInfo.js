import React, { Component } from "react";
import Section from "../Section";

export default class PokemonInfo extends Component {
    render() {
        const { name } = this.props.info;

        return (
            <Section title="P Info">
                <h3>{name}</h3>
                <img src={this.props.info.sprites.other["official-artwork"].front_default} alt="Pokemon image" width="300px" />
            </Section>
        );
    };
};

//