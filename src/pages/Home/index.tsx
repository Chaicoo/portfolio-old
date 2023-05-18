import React from "react";
import { SideContainer, SideContent } from "../../components";
import { Container } from "./styles";

export const Home: React.FC = () => {
    return (
        <Container>
            <h1>Home page</h1>
            <SideContainer >
                <SideContent />
            </SideContainer>
        </Container>
    );
};