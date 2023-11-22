import React, { Component } from "react";
import { FaSearch } from "react-icons/fa";

import css from "./Searchbar.module.css";

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
        if (!search) {
            alert(alertMsg);
            return;
        }
        this.props.onSubmit(search);
        this.setState(initState);
    };

    render() {
        return (
            <div className={css.Searchbar}>
                <form className={css.form} onSubmit={this.handleSubmit}>
                    <button type="submit" className={css.button}>
                        <FaSearch />
                    </button>

                    <input
                        className={css.input}
                        type="text"
                        autoComplete="on"
                        autoFocus
                        placeholder="Search images and photos"
                        value={this.state.search}
                        onChange={this.handleChange}
                    />
                </form>
            </div>
            
        );
    };
};