import React from "react";

import {
    Container,
    Content,
} from "./styles";

interface Props {
    title: string;
    description: string;
}

export const Section: React.FC<Props> = ({ title, description }) => {
    
    return (
        <Container>
            <Content>
                <h2>{title}</h2>
                <p>{description}</p>
            </Content>
        </Container>
    );
};
