import React from "react";
import Section from "../../Section";
import Modal from "../../Modal";

export default class Images extends React.Component {
    state = { showModal: false };

    toggleModal = () => {
        this.setState(prevState => ({ showModal: !prevState.showModal }));
    };

    showModal = () => {
        return (
            this.state.showModal &&
            <Modal>
                <Section title='Modal'>
                    Modal content
                    <button type="button" onClick={this.toggleModal}>Close modal</button>
                </Section>
            </Modal>
        );
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
                    {this.showModal()}
                </Section>
            </div>
        )
    }
}