import StatisticsItem from "../StatisticsItem";

export default function Statistics({ options }) {
    return (
        <div>{
            options.map(item =>
                <StatisticsItem
                    key={item.name}
                    name={item.name}
                    value={item.value}
                />
            )
        }</div>
    );
};