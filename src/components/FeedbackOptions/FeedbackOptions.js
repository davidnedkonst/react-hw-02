import FirstToUpperCase from "../../utils/FirstToUpperCase.js";

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