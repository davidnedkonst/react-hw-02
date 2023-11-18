import React, { Component } from "react";
import Section from "../Section";
import VideoList from "./VideoList";
import Player from "./Player";

import videos from "../../constants/videos.json";

export default class PlayerApp extends Component {
    state = { selectedVideo: null, };

    selectVideo = (link) => {
        console.log("Select video: ", link);
        this.setState({ selectedVideo: link });
    };

    render() {
        const { selectedVideo } = this.state;
        const title = `Selected video: ${selectedVideo}`;

        return (
            <Section title="PlayerApp">
                {selectedVideo && <h4>{title}</h4>}
                <VideoList
                    data={videos}
                    select={this.selectVideo}
                />

                <Player url={selectedVideo} />
            </Section>
        );
    };
};