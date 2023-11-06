import React from "react";
import Section from "../../Section";
import Modal from "../../Modal/Modal";

export default class Images extends React.Component {
    render() {
        return (
            <div>
                <Section title='Searchbar'>
                    Searchbar
                </Section>
                <Section title='ImageGallery'>
                    ImageGallery
                </Section>
                <Section title='Modal test'>
                    <Modal>
                        <Section title='Modal'>
                            Modal content
                        </Section>
                    </Modal>
                </Section>
            </div>
        )
    }
}