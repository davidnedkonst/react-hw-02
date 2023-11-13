import React, { Component } from "react";
import Section from "../Section";
import Controls from "./Controls";
import Progress from "./Progress";
import Publication from "./Publication";

const LS_READER_ID = "reader_publication_id";

export default class ReaderApp extends Component {
    state = { index: 0 };

    componentDidMount() {
        const ls_index = localStorage.getItem(LS_READER_ID);
        if (ls_index) this.setState({ index: Number(ls_index) });
    };

    componentDidUpdate(_, { index }) {
        const newIndex = this.state.index;
        if (index !== newIndex) {
            localStorage.setItem(LS_READER_ID, newIndex);
        };
    };

    changeIndex = (value) => {
        const { index } = this.state;
        const length = this.props.items.length;
        if (value === -1 && index === 0) {
            this.setState(({ index }) => ({ index: index + length - 1 }));
            return;
        }
        this.setState(({ index }) => ({ index: index + value }));
    };

    render() {
        const { index } = this.state;
        const { items } = this.props;
        const item = items[index];
        const length = items.length;

        return (
            <Section title="Reader">
                <div>
                    <Controls
                        current={index + 1}
                        total={length}
                        handleClick={this.changeIndex}
                    />

                    <Progress
                        current={index + 1}
                        total={length}
                    />

                    <Publication
                        id={item.id}
                        title={item.title}
                        text={item.text}
                    />
                </div>
            </Section>
        );
    };
}