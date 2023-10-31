import PropTypes from 'prop-types';
import FirstToUpperCase from "../../utils/FirstToUpperCase";

export default function ListItem({ name, value }) {
    return (
        <p>{FirstToUpperCase(name) + ':\t'}
            <span>{value}</span>
        </p>
    );
};

ListItem.propTypes = {
    name: PropTypes.string.isRequired,
    // value: PropTypes.number.isRequired,
};