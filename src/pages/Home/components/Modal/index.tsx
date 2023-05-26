import React from "react";
import { Container, CloseButton, Content } from "./styles";

interface ModalProps {
    onClose: () => void;
    children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ children, onClose }) => {
    return (
        <Container>
            <Content>
                <CloseButton onClick={onClose}>✕</CloseButton>
                {children}
            </Content>
        </Container>
    );
};

export default Modal;
