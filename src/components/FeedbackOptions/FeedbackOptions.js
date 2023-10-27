import FirstToUpperCase from "../../utils/FirstToUpperCase.js";

export default function FeedbackOptions({ options, onLeaveFeedback }) {
    return (
        <div className="FeedbackOptions">{
            Object.keys(options).map(option =>
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