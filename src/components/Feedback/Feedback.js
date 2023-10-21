import React from "react";
import Statistics from "../Statistics";
import FeedbackOptions from "../FeedbackOptions";
import Section from "../Section";

import FirstToUpperCase from "../../utils/FirstToUpperCase";

export default class Feedback extends React.Component {
    state = {
        good: 5,
        neutral: 20,
        bad: 10,
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
        // this.setState(prevState => prevState[name] + 1);
    };

    totalFeedback = () => {
        const array = this.stateToArray();
        const total = array.reduce((acc, item) => (acc + item.value), 0);
        return total;
    };

    positivePercentage = () => {
        const { good } = this.state;
        const total = this.totalFeedback();
        const positivePercentage = total === 0 ? 0 : good / total * 100;
        return positivePercentage.toPrecision(2) + '%';
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