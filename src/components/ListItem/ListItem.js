import FirstToUpperCase from "../../utils/FirstToUpperCase";

export default function ListItem({ name, value }) {
    return (
        <p>{FirstToUpperCase(name) + ':\t'}
            <span>{value}</span>
        </p>
    );
};