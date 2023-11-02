import React from "react";
import Section from "../../Section";
import Modal from "../Modal";

export default class Images extends React.Component {
    render() {
        return (
            <div>
                <Section title='Searchbar'>
                    Searchbar
                </Section>
                <Section title='ImageGallery'>
                    Imagegallery
                </Section>
                <Modal />

            </div>
        )
    }
}