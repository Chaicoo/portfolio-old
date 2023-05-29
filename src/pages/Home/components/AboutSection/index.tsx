import React from "react";
import { Link as Scroll } from "react-scroll";
import { Container, Wrapper } from "./styles";

export const AboutSection: React.FC = () => {
    return (
        <Container>
            <Wrapper>
                <span className="wellcome">👋🏼 Bem vindo, me chamo</span>
                <span className="name">
                    Francisco <span className="secondName">Lima</span>
                </span>
                <span className="text">
                    tenho 21 anos e sou apaixonado por programação desde os 15
                    anos, especializado em desenvolvimento Front-End com ReactJs
                    e focado em criar soluções intuitivas e impactantes.
                </span>
                <Scroll to="skills" smooth={true} duration={1000}>
                    Veja minhas competências
                </Scroll>
            </Wrapper>
        </Container>
    );
};
