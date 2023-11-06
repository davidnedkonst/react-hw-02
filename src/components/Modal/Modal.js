import React, { Component } from "react";
import ModalWindow from "./ModalWindow";

export default class Modal extends Component {
    state = { showModal: false };

    toggleModal = () => {
        this.setState(({ showModal }) => ({ showModal: !showModal }));
    };

    render() {
        return (
            <div>
                <button type="button" onClick={this.toggleModal}>Open modal</button>
                {
                    this.state.showModal &&
                    <ModalWindow onClose={this.toggleModal}>
                        {this.props.children}
                        <button type="button" onClick={this.toggleModal}>Close modal</button>
                    </ModalWindow>
                }
            </div>
        );
    };
};

