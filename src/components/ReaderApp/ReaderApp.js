import React, { Component } from "react";
import Section from "../Section";
import publications from "../../constants/publications.json";

export default class ReaderApp extends Component {
    state = { currentId: 0 };

    onInc = () => {
        if (this.state.currentId < publications.length) {
            this.setState(({ currentId }) => ({ currentId: currentId + 1 }));
        }
    };

    onDecr = () => {
        if (this.state.currentId > 1) {
            this.setState(({ currentId }) => ({ currentId: currentId - 1 }));
        }
    };

    render() {
        return (
            <Section title="Reader">
                <div>
                    <button
                        type="button"
                        onClick={this.onInc}
                        disabled={this.state.currentId === publications.length}
                    >
                        Вперед
                    </button>
                    <button
                        type="button"
                        onClick={this.onDecr}
                        disabled={this.state.currentId === 1}
                    >
                        Назад
                    </button>
                </div>

                {
                    this.state.currentId && <p>
                        {`${this.state.currentId} / ${publications.length}`}
                    </p>
                }

                {
                    this.state.currentId && <article>
                        <h2>{publications[this.state.currentId - 1].title}</h2>
                        <p>{publications[this.state.currentId - 1].text}</p>
                    </article>
                }
            </Section>
        );
    };
}