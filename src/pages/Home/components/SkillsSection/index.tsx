import React, { useEffect } from "react";

import {
    Container,
    ContainerSkills,
    CardIcon,
    Css3Icon,
    Html5Icon,
    JavaScriptIcon,
    FigmaIcon,
    ReactIcon,
    StyledComponentsIcon,
    TailwindIcon,
    TypeScriptIcon,
    Line
} from "./styles";
import Aos from "aos";
import "aos/dist/aos.css";

export const SkillsSection: React.FC = () => {
    useEffect(() => {
        Aos.init({ duration: 1500 });
    }, []);

    return (
        <Container>
            <h2 data-aos="zoom-in">Conhecimentos</h2>
            <ContainerSkills data-aos="zoom-in" >
                <CardIcon>
                    <Html5Icon />
                    <Line />
                    <span>HTML</span>
                </CardIcon>
                <CardIcon>
                    <Css3Icon />
                    <Line />
                    <span>CSS</span>
                </CardIcon>
                <CardIcon>
                    <JavaScriptIcon />
                    <Line />
                    <span>JavaScript</span>
                </CardIcon>
                <CardIcon>
                    <TypeScriptIcon />
                    <Line />
                    <span>TypeScript</span>
                </CardIcon>
                <CardIcon>
                    <ReactIcon />
                    <Line />
                    <span>React</span>
                </CardIcon>
                <CardIcon>
                    <StyledComponentsIcon />
                    <Line />
                    <span>CSS-in-JS</span>
                </CardIcon>
                <CardIcon>
                    <TailwindIcon />
                    <Line />
                    <span>TailwindCSS</span>
                </CardIcon>
                <CardIcon>
                    <FigmaIcon />
                    <Line />
                    <span>Figma</span>
                </CardIcon>
            </ContainerSkills>
        </Container>
    );
};
