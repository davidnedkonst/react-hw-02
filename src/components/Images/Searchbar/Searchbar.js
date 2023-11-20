import React, { Component } from "react";

const initState = { search: "" };
const alertMsg = "Enter name!";

export default class Searchbar extends Component {
    state = initState;

    handleChange = event => {
        this.setState({ search: event.currentTarget.value.toLowerCase() })
    };

    handleSubmit = event => {
        event.preventDefault();
        const search = this.state.search.trim();
        if (search === "") {
            alert(alertMsg);
            return;
        }
        this.props.handleSubmit(search);
        this.setState(initState)
    };

    render() {
        return (
            <form className="form" onSubmit={this.handleSubmit}>
                <button type="submit" className="button">
                    <span className="button-label">Search</span>
                </button>

                <input
                    className="input"
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    value={this.state.search}
                    onChange={this.handleChange}
                />
            </form>
        );
    };
};