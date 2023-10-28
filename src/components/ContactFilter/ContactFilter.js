import React from "react";

export default class ContactFilter extends React.Component {
    state = { 'name': '', 'tel': '', };

    render() {
        return (
            <form>
                <label>
                    Find contact
                    <input type="tel"/>
                </label>
            </form>
        );
    };
}