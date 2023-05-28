import React from "react";
import { Link } from "react-router-dom";
import { Container, Line, HeartIcon, CopyRight, MadeBy } from "./styles";

export const Footer: React.FC = () => {
    return (
        <Container>
            <Line />

            <MadeBy>
                <span>Feito com</span>
                <HeartIcon />
                <span>por </span>
                <Link to="https://github.com/Chaicoo">Francisco</Link>
            </MadeBy>
            <CopyRight>
                <span>© 2023. Todos os direitos reservados.</span>
            </CopyRight>
        </Container>
    );
};
