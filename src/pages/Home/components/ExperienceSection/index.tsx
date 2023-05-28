import React, { useEffect } from "react";
import {
    Container,
    Tittle,
    ContainerExperience,
    TittleExperience,
    Description,
    CardStack,
    IconNext,
    IconReact,
    IconJavascript,
    IconStyled,
} from "./styles";
import Aos from "aos";
import "aos/dist/aos.css";

export const ExperienceSection: React.FC = () => {
    useEffect(() => {
        Aos.init({ duration: 1500 });
    }, []);
    return (
        <Container>
            <Tittle>
                <span data-aos="zoom-in" className="subTittle">
                    Conheça as minhas
                </span>
                <span data-aos="zoom-in" className="tittle">
                    Experiências
                </span>
            </Tittle>
            <ContainerExperience>
                <li data-aos="fade-right">
                    <TittleExperience>
                        <div>
                            <span>2022</span>
                            <a href="https://www.simplicioaraujo.com.br/">
                                <strong>Simplício 77</strong>
                            </a>
                        </div>
                        <h3>Desenvolvedor Front-end Freelancer</h3>
                    </TittleExperience>
                    <Description>
                        <p>
                            Desenvolvimento de um site responsivo para o
                            candidato a governador do estado do Maranhão
                            Simplício Araújo. O site foi desenvolvido utilizando
                            ReactJS com Styled Components, e o projeto foi
                            migrado para NextJS para melhorar o SEO, além disso
                            foi utilizado o software Figma para o design da UI.
                        </p>
                        <img src="./images/simplicio.png" alt="Simplício 77" />
                    </Description>
                    <CardStack>
                        <IconStyled />
                        <IconJavascript />
                        <IconReact />
                        <IconNext />
                    </CardStack>
                </li>
            </ContainerExperience>
        </Container>
    );
};
