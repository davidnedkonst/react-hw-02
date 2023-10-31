import FirstToUpperCase from "../../utils/FirstToUpperCase.js";
import PropTypes from 'prop-types';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
    const optionKeys = Object.keys(options);

    return (
        <div className="FeedbackOptions">{
            optionKeys.map(option =>
                <button
                    key={option}
                    className="FeedbackOption__button"
                    onClick={() => onLeaveFeedback(option)}
                >{FirstToUpperCase(option)}
                </button>
            )
        }</div>
    );
};

FeedbackOptions.protoTypes = {
    options: PropTypes.shape({
        good: PropTypes.number,
        neutral: PropTypes.number,
        bad: PropTypes.number,
    }),
    onLeaveFeedback: PropTypes.func
};