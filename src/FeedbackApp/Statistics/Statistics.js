import StatisticsItem from "../StatisticsItem";

export default function Statistics({ options }) {
    return (
        <div>{
            options.map(({ name, value }) =>
                <StatisticsItem
                    key={name}
                    name={name}
                    value={value}
                />
            )
        }</div>
    );
};