import React from "react";
import ListItem from "../ListItem";

export default class Statistics extends React.Component {
    totalFeedback = () => {
        const values = Object.values(this.props.options);
        const total = values.reduce((acc, item) => (acc + item), 0);
        return total;
    };

    positivePercentage = () => {
        const { good } = this.props.options;
        const total = this.totalFeedback();
        const positivePercentage = total === 0 ? 0 : good / total * 100;
        return positivePercentage.toPrecision(3) + '%';
    };

    makeStatData = () => {
        const total = { 'total': this.totalFeedback(), };
        const positive = { 'positive feedback': this.positivePercentage(), };
        return { ...this.props.options, ...total, ...positive };
    };

    render() {
        const msgEmpty = "No feedback give";
        const isEmpty = !this.totalFeedback();
        const statisticsDat = this.makeStatData();

        return (
            <div>
                {
                    !isEmpty
                        ? Object.keys(statisticsDat).map(name =>
                            <ListItem
                                key={name}
                                name={name}
                                value={statisticsDat[name]}
                            />
                        )
                        : <p>{msgEmpty}</p>
                }
            </div>
        );
    };
};