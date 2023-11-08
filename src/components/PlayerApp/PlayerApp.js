import React, { Component } from "react";
import Section from "../Section";
import VideoList from "./VideList";
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
            <div>
                <h2>PlayerApp</h2>

                {selectedVideo && <h4>{title}</h4>}
                <VideoList
                    data={videos}
                    select={this.selectVideo}
                />

                <Player url={selectedVideo} />
            </div>
        );
    };
};