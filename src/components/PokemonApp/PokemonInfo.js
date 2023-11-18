import React, { Component } from "react";
import Section from "../Section";

export default class PokemonInfo extends Component {
    render() {
        const { name, sprites, stats, weight } = this.props.info;

        return (
            <Section title="Pokemon Info">
                <h3>{name}</h3>
                <img
                    src={sprites.other["official-artwork"].front_default}
                    alt="Pokemon image"
                    width="160px"
                />
                <ul>{
                    stats.map(
                        ({stat, base_stat}) => <li key={stat.name}>
                            {`${stat.name}: ${base_stat}`}
                        </li>
                    )
                }</ul>
                <>{`Weight: ${weight}`}</>
            </Section>
        );
    };
};

//