import React from "react";
import { nanoid } from "nanoid";

const initState = { name: '', tel: '' };

export default class ContactForm extends React.Component {
    state = initState;

    id = {
        inputNameId: nanoid(),
        inputTelId: nanoid(),
    };

    onChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value, });
    }

    onSubmit = event => {
        event.preventDefault();
        this.props.onSubmit(this.state);
        this.reset();
    };

    reset = () => {
        this.setState(initState);
    };

    render() {
        const { name, tel } = this.state;
        const { inputNameId, inputTelId } = this.id;

        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <label htmlFor={inputNameId}>Name</label>
                    <input
                        id={inputNameId}
                        type="text"
                        name="name"
                        value={name}
                        onChange={this.onChange}
                        required

                    />

                    <label htmlFor={inputTelId}>Number</label>
                    <input
                        id={inputTelId}
                        type="tel"
                        name="tel"
                        value={tel}
                        onChange={this.onChange}
                        required

                    />

                    <button type="submit">Add contact</button>
                </form>
            </div>
        );
    };

};