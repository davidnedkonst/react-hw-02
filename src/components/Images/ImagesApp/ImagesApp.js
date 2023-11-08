import React from "react";
import Section from "../../Section";
import Modal from "../../Modal";

export default class ImagesApp extends React.Component {
    render() {
        return (
            <div>
                <h2>Images</h2>

                <Section title='Searchbar'>
                    Searchbar
                </Section>

                <Section title='ImageGallery'>
                    ImageGallery
                </Section>

                <Section title='Modal test'>
                    <Modal
                        openButtonText="Open"
                        closeButtonText="Close"
                    >
                        <Section title='Modal'>
                            Modal content
                        </Section>
                    </Modal>
                </Section>
            </div>
        )
    }
}