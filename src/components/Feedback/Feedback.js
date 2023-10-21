import React from "react";

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

    render() {
        const { good, neutral, bad } = this.state;

        return (
            <div>
                <h3>Please leave feedback</h3>
                <div>
                    <button onClick={() => (this.onGoodLike())}>Good</button>
                    <button onClick={() => (this.onNeutralLike())}>Neutral</button>
                    <button onClick={() => (this.onBadLike())}>Bad</button>
                </div>

                <h3>Statistics</h3>
                <div>
                    <p>Good: <span>{good}</span></p>
                    <p>Neutral: <span>{neutral}</span></p>
                    <p>Bad: <span>{bad}</span></p>
                </div>
            </div>
        );
    };
};