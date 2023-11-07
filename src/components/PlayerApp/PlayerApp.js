import React, { Component } from "react";
import Section from "../Section";
import VideoList from "./VideList";

import videos from "../../constants/videos.json";

export default class PlayerApp extends Component {
    state = {
        select: "",
    };

    selectVideo(link) {
        console.log("Select video: ", link);
        // this.setState({ select: link });
    };

    render() {
        return (
            <div>
                <h2>PlayerApp</h2>

                <Section title="VideoList">
                    <VideoList data={videos} select={this.selectVideo} />
                </Section>

                <Section title="Player">
                    Player
                </Section>

            </div>
        );
    };
};