import React from "react";

import { Container, Content } from "./styles";

type Props = {
    children: React.ReactNode;
};

export const Section: React.FC<Props> = ({ children }) => {
    return (
        <Container>
            <Content>{children}</Content>
        </Container>
    );
};
