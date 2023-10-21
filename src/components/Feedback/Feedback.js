import React from "react";

export default class Feedback extends React.Component{
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    };

    render(){
        return (
            <div>
                <h3>Please leave feedback</h3>

                
                <h3>Statistics</h3>

            </div>
        );
    };
};