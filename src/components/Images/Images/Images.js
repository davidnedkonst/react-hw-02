import React from "react";
import Section from "../../Section";
import Modal from "../../Modal";

export default class Images extends React.Component {
    state = { showModal: false };

    toggleModal = () => {
        console.log('toggleModal() run.');
        this.setState(({ showModal }) => {
            console.log('setState() run');
            return ({ showModal: !showModal });
        });
    };

    render() {
        return (
            <div>
                <Section title='Searchbar'>
                    Searchbar
                </Section>
                <Section title='ImageGallery'>
                    Imagegallery
                </Section>
                <Section title='Modal test'>
                    <button type="button" onClick={this.toggleModal}>Open modal</button>
                    {
                        this.state.showModal &&
                        <Modal onClose={this.toggleModal}>
                            <Section title='Modal'>
                                Modal content
                                <button type="button" onClick={this.toggleModal}>Close modal</button>
                            </Section>
                        </Modal>
                    }
                </Section>
            </div>
        )
    }
}