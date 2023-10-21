import React from "react";
import Statistics ;
import FeedbackOptions from "../FeedbackOptions";
import Section from "../Section";

export default class Feedback extends React.Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    };

    stateToArray = () => {
        const stateObject = this.state;
        const array = [];
        for (const key in stateObject) {
            array.push({ name: key, value: stateObject[key] });
        };
        return array;
    }

    updateState = name => {
        const newState = this.state;
        newState[name] += 1;
        this.setState(newState);
    };

    totalFeedback = () => {
        const values = Object.values(this.state);
        const total = values.reduce((acc, item) => (acc + item), 0);
        return total;
    };

    positivePercentage = () => {
        const { good } = this.state;
        const total = this.totalFeedback();
        const positivePercentage = total === 0 ? 0 : good / total * 100;
        return positivePercentage.toPrecision(3) + '%';
    };

    makeStatisticsData = () => {
        const array = this.stateToArray();
        array.push({ name: 'Total', value: this.totalFeedback() });
        array.push({ name: 'Positive feedback', value: this.positivePercentage() });
        return (array);
    }

    render() {
        return (
            <div>
                <Section title={'Please leave feedback'}>
                    <FeedbackOptions
                        options={this.stateToArray()}
                        onLeaveFeedback={this.updateState}
                    />
                </Section>

                <Section title={'Statistics'}>
                    <Statistics options={this.makeStatisticsData()} />
                </Section>
                <div>{ }</div>
            </div>
        );
    };
};