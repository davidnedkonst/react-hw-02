import FirstToUpperCase from "../../utils/FirstToUpperCase";

export default function FeedbackOptions({ options, FeedbackOptions}) {

    return (
        <div>{
            options.map(item =>
                <button
                    key={item.name}
                    onClick
                >{FirstToUpperCase(item.name)}
                </button>
            )
        }</div>
    );
}