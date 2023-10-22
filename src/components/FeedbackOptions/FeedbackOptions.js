import FirstToUpperCase from "../../utils/FirstToUpperCase.js";

export default function FeedbackOptions({ options, onLeaveFeedback }) {
    return (
        <div>{
            options.map(({ name }) =>
                <button
                    key={name}
                    onClick={() => onLeaveFeedback(name)}
                >{FirstToUpperCase(name)}</button>
            )
        }</div>
    );
}