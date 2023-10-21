import FirstToUpperCase from "../../utils/FirstToUpperCase";

export default function StatisticsItem({ name, value }) {
    return (
        <p>{FirstToUpperCase(name) + ': '}<span>{value}</span></p>
    );
}