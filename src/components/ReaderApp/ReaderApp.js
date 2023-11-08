import React, { Component } from "react";
import Section from "../Section";
import publications from "../../constants/publication.json";

export default class ReaderApp extends Component {
    state = { publications: [...publications] };

    render() {
        return (
            <Section title="Reader">
                Reader
            </Section>
        );
    };
}