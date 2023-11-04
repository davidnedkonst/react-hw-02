import styled from "@emotion/styled";

export const ModalContent=styled.div({
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    minHeight: "300px",
    maxWidth: "600px",
    width: "100%",
    padding: "12px",
    backgroundColor: "#ffff",
    borderRadius: "3px",
    boxShadow: "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)",
});