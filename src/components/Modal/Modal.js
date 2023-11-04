import React, { Component } from "react";
import { createPortal } from "react-dom";

import { ModalBackDrop } from "./ModalBackdrop";
import { ModalContent } from "./ModalContent";

const modalRoot = document.getElementById('modal-root');

export default class Modal extends Component {
    componentDidMount() { console.log("Modal did mount") };
    componentWillUnmount() { console.log("Modal will unmount") };

    render() {
        return createPortal(
            <ModalBackDrop>
                <ModalContent>
                    {this.props.children}
                </ModalContent>
            </ModalBackDrop>,
            modalRoot
        );
    };
}