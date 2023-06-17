import React from "react";
import { Container, ContainerLinks } from "./styles";

interface CardProps {
    name: string;
    url: string;
    description?: string;
    image: string;
    demo?: string;
    children?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ name, url, description, image, demo, children }) => {
    return (
        <>
            <Container>
                <img src={image} />
                <span>{name}</span>
                <p>{description}</p>
                {children}
                <ContainerLinks>
                    <a href={demo} target="_blank" rel="noopener noreferrer">
                        Abrir projeto
                    </a>
                    <a href={url} target="_blank" rel="noopener noreferrer">
                        Repositório
                    </a>
                </ContainerLinks>
            </Container>
        </>
    );
};

export default Card;
