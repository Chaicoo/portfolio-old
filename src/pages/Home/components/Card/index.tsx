import React, { useState } from "react";
import { Container } from "./styles";
import Modal from "../Modal";

interface CardProps {
    name: string;
    url: string;
    description?: string;
}

const Card: React.FC<CardProps> = ({ name, url, description }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleCardClick = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };
    return (
        <>
            <Container onClick={handleCardClick}>
               
            </Container>
            {isModalOpen && (
                <Modal onClose={closeModal}>
                    <span>{name}</span>
                    <p>{description}</p>
                    <a href={url} target="_blank" rel="noopener noreferrer">
                        Veja o projeto no GitHub
                    </a>
                </Modal>
            )}
        </>
    );
};

export default Card;
