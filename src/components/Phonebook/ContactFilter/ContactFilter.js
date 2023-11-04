import React from "react";
import PropTypes from 'prop-types';

export default class ContactFilter extends React.Component {
    render() {
        const { value } = this.props;
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

ContactFilter.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
};