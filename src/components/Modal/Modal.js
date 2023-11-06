import React, { Component } from "react";
import { createPortal } from "react-dom";

import { ModalBackDrop } from "./ModalBackdrop";
import { ModalContent } from "./ModalContent";

const modalRoot = document.getElementById('modal-root');

export default class Modal extends Component {
    handleKeyDown = ({ code }) => {
        if (code === 'Escape') this.props.onClose();
    };

    handleBackdropClick = ({ target, currentTarget }) => {
        if (target === currentTarget) this.props.onClose();
    };

    componentDidMount() {
       window.addEventListener('keydown', this.handleKeyDown);
    };

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown);
    };

    render() {
        return createPortal(
            <ModalBackDrop onClick={this.handleBackdropClick}>
                <ModalContent>
                    {this.props.children}
                </ModalContent>
            </ModalBackDrop>,
            modalRoot
        );
    };
};