import React from "react";
import FirstToUpperCase from "../../utils/FirstToUpperCase";
import PropTypes from 'prop-types';

export default class ListItem extends React.Component {
    render() {
        const { name, value } = this.props;
        return (
            <p>{FirstToUpperCase(name) + ':\t'}
                <span>{value}</span>
            </p>
        );
    };
};

ListItem.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
};