import React, { Component } from "react";
import Section from "../Section";

export default class PokemonInfo extends Component {
    render() {
        return (
            <Section title="P Info">
                {this.props.info.name}
            </Section>
        );
    };
};