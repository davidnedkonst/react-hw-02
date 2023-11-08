import React, { Component } from "react";
import ReactPlayer from "react-player";
import styled from "@emotion/styled";
import Section from "../Section";

const PlayerWrapper = styled.div({
    position: "relative",
    paddingTop: "50%"
});

const StyledPlayer = styled(ReactPlayer)({
    position: "absolute",
    top: "0",
    left: "0"
});

export default class Player extends Component {
    state = { isLoadedVideo: false, };

    componentDidUpdate({ url }) {
        const newUrl = this.props.url;
        if (url !== newUrl) {
            console.log("Url did update");
            this.setState({ isLoadedVideo: false, });
        }
    };

    render() {
        const { url } = this.props;
        const { isLoadedVideo } = this.state;
        const showLoader = url && !isLoadedVideo;
        // const { playerWidth, playerHeight }
        const playerSize = isLoadedVideo ? "100%" : "0";
        return (
            <Section title="Player">
                {showLoader && <h4>{"Идет загрузка видео..."}</h4>}
                {url &&
                    <PlayerWrapper>
                        <StyledPlayer
                            url={url}
                            onReady={() => { this.setState({ isLoadedVideo: true, }); }}
                            width={playerSize}
                            height={playerSize}
                            controls
                        />
                    </PlayerWrapper>
                }
            </Section>
        );
    };
};