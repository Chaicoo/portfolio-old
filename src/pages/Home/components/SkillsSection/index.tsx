import React, { useEffect } from "react";

import { Container, ContainerSkills, Tittle } from "./styles";
import Aos from "aos";
import "aos/dist/aos.css";

export const SkillsSection: React.FC = () => {
    useEffect(() => {
        Aos.init({ duration: 1500 });
    }, []);

    return (
        <Container>
            <Tittle>
                <span data-aos="zoom-in" className="subTittle">
                    Conheça um pouco dos meus
                </span>
                <span data-aos="zoom-in" className="tittle">
                    Conhecimentos
                </span>
            </Tittle>
            <ContainerSkills data-aos="zoom-in">
                <li>
                    1 ano de experiência com desenvolvimento Front-End como
                    Freelancer
                </li>
                <li>
                    Conhecimentos em design responsivo, mobile-first e UI/UX
                </li>
                <li>
                    Desenvolvimento de aplicações usando JavaScript e TypeScript
                </li>
                <li>Desenvolvimento de aplicações web com React e Next.js</li>
                <li>
                    Experiência com bibliotecas e frameworks CSS como
                    TailwindCSS e Styled-Components
                </li>
                <li>Consumo de API's REST com Axios e Fetch API</li>
                <li>
                    Versionamento de código utilizando Git e padrões de projeto
                </li>
            </ContainerSkills>
        </Container>
    );
};
