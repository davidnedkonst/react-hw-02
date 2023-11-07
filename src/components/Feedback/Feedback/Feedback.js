import React from "react";
import Statistics from "../Statistics";
import FeedbackOptions from "../FeedbackOptions";
import Section from "../../Section";

export default class Feedback extends React.Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    };

    updateState = name => {
        this.setState(
            prevState => ({ [name]: prevState[name] + 1 })
        );
    };

    render() {
        return (
            <div>
                <h2>Component Feedback</h2>
                
                <Section title={'Please leave feedback'}>
                    <FeedbackOptions
                        options={this.state}
                        onLeaveFeedback={this.updateState}
                    />
                </Section>

                <Section title={'Statistics'}>
                    <Statistics
                        options={this.state}     
                    />
                </Section>
            </div>
        );
    };
};