import React from "react";

export default class ContactFilter extends React.Component {
    render() {
        const { value } = this.props.value;
        return (
            <form>
                <label>
                    Find contact
                    <input type="text" value={value} onChange={this.props.onChange} />
                </label>
            </form>
        );
    };
};