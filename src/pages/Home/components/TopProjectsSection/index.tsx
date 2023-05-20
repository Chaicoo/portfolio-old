import React from "react";

import { Container } from "./styles";
import { Link } from "react-router-dom";

export const TopProjectsSection: React.FC = () => {
    return (
        <Container>
            <h2>Top Projects</h2>
            <Link to="/projects">Projetos</Link>

        </Container>
    );
};
