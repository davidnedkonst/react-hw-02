import React, { Component } from "react";
import { createPortal } from "react-dom";
import css from "./ImageModal.module.css";

export default class ImageModal extends Component {
    handleClick = ({ target, currentTarget }) => {
        const isBackdropClick = target === currentTarget;
        if (isBackdropClick) {
            this.props.onClose();
        }
    };

    handleKeyDown = ({ code }) => {
        const isEscClick = code === 'Escape';
        if (isEscClick) {
            this.props.onClose();
        }
    };

    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown);
    };

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown);
    };

    render() {
        const modalRoot = document.getElementById('modal-root');

        const { largeImageURL, tags } = this.props.contentModal;

        const jsx = (
            <div
                className={css.Overlay}
                onClick={this.handleClick}
            >
                <img
                    className={css.Modal}
                    src={largeImageURL}
                    alt={tags}
                />
            </div>
        );

        return createPortal(jsx, modalRoot);
    };
}