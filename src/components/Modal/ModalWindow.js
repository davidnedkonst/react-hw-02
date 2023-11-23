import React, { Component } from "react";
import { createPortal } from "react-dom";

import { ModalBackDrop } from "./ModalBackdrop";
import { ModalContent } from "./ModalContent";

const modalRoot = document.getElementById('modal-root');

export default class ModalWindow extends Component {
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
        const { children } = this.props;

        const jsx = (
            <ModalBackDrop onClick={this.handleBackdropClick} >
                <ModalContent>
                    {children}
                </ModalContent>
            </ModalBackDrop>
        );

        return createPortal(jsx, modalRoot);
    };
};