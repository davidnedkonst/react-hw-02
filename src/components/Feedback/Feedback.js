import React from "react";
import Statistics from "../Statistics";
import FeedbackOptions from "../FeedbackOptions";
import Section from "../Section";

export default class Feedback extends React.Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    };

    onGoodLike = () => {
        this.setState(prevState => ({
            good: prevState.good + 1,
            neutral: prevState.neutral,
            bad: prevState.bad,
        }))
    };

    onNeutralLike = () => {
        this.setState(prevState => ({
            good: prevState.good,
            neutral: prevState.neutral + 1,
            bad: prevState.bad,
        }))
    };

    onBadLike = () => {
        this.setState(prevState => ({
            good: prevState.good,
            neutral: prevState.neutral,
            bad: prevState.bad + 1,
        }))
    };

    countTotalFeedback = () => {
        const { good, neutral, bad } = this.state;
        return good + neutral + bad;
    };

    positivePercentage = () => {
        const { good } = this.state;
        const total = this.countTotalFeedback();
        const positivePercentage = total === 0 ? 0 : good / total * 100;
        return positivePercentage;
    };

    render() {
        const { good, neutral, bad } = this.state;
        const total = this.countTotalFeedback();
        const positivePercentage = this.positivePercentage();

        return (
            <div>
                <Section title={'Please leave feedback'}>
                    <FeedbackOptions options={this.state} />
                </Section>
                
                <Section title={'Statistics'}>
                    <Statistics
                        good={good}
                        neutral={neutral}
                        bad={bad}
                        total={total}
                        positivePercentage={positivePercentage}
                    />
                </Section>
            </div>
        );
    };
};