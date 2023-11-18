import React, { Component } from "react";

export default class PokemonLoadMsg extends Component {
    render() {
        return (
            <h3>
                {this.props.msg}
            </h3>
        );
    };
}