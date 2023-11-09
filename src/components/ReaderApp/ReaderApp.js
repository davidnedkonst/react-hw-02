import React, { Component } from "react";
import Section from "../Section";

export default class ReaderApp extends Component {
    state = { currentIndex: null };

    changeIndex = (value) => {
        this.setState(({ currentIndex }) => ({ currentIndex: currentIndex + value }));
    };

    onInc = () => {
        if (this.state.currentIndex < this.props.items.length - 1) {
            this.changeIndex(1);
        }
    };

    onDecr = () => {
        if (this.state.currentIndex > 0) {
            this.changeIndex(-1);
        }
    };

    render() {
        const currentItem = this.props.items[this.state.currentIndex];
        const length = this.props.items.length;
        const { currentIndex } = this.state;

        return (
            <Section title="Reader">
                <div>
                    <button
                        type="button"
                        onClick={this.onDecr}
                        disabled={currentIndex === 0}
                    >
                        Назад
                    </button>

                    <button
                        type="button"
                        onClick={this.onInc}
                        disabled={currentIndex === length - 1}
                    >
                        Вперед
                    </button>
                </div>
                <p>
                    {`${currentIndex + 1} / ${length}`}
                </p>
                {
                    {/* currentIndex !== null && */}
                    
                }
                <article>
                    <h2>{currentItem.title}</h2>
                    <p>{currentItem.text}</p>
                </article>
                {
                    {/* currentIndex !== null && */}
                    
                }
            </Section>
        );
    };
}