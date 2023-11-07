import React, { Component } from "react";
import ModalWindow from "./ModalWindow";

export default class Modal extends Component {
    state = { showModal: false };

    toggleModal = () => {
        this.setState(({ showModal }) => ({ showModal: !showModal }));
    };

    render() {
        const { openButtonText, closeButtonText, children } = this.props;
        const { showModal } = this.state;

        return (
            <div>
                <button type="button" onClick={this.toggleModal}>{openButtonText}</button>
                {
                    showModal &&
                    <ModalWindow onClose={this.toggleModal}>
                        {children}
                        <button type="button" onClick={this.toggleModal}>{closeButtonText}</button>
                    </ModalWindow>
                }
            </div>
        );
    };
};

