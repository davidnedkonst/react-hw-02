import FirstToUpperCase from "../../utils/FirstToUpperCase";
import PropTypes from 'prop-types';

export default function ListItem({ name, value }) {
    return (
        <p>{FirstToUpperCase(name) + ':\t'}
            <span>{value}</span>
        </p>
    );
};

ListItem.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
};