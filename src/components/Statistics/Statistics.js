import StatisticsItem from "../StatisticsItem";

export default function Statistics({ options }) {
    const isEmpty = options[3].value === 0;
    const msgEmpty = "No feedback give";

    return (
        <div>{
            !isEmpty ?
                options.map(({ name, value }) =>
                    <StatisticsItem
                        key={name}
                        name={name}
                        value={value}
                    />) : msgEmpty
        }</div>
    );
};