import React from "react";

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
} from "./styles";

export const SkillsSection: React.FC = () => {
    return (
        <Container>
            <h2>Conhecimentos</h2>
            <ContainerSkills>
                <CardIcon>
                    <Html5Icon />
                    <span>HTML</span>
                </CardIcon>
                <CardIcon>
                    <Css3Icon />
                    <span>CSS</span>
                </CardIcon>
                <CardIcon>
                    <JavaScriptIcon />
                    <span>JavaScript</span>
                </CardIcon>
                <CardIcon>
                    <TypeScriptIcon />
                    <span>TypeScript</span>
                </CardIcon>
                <CardIcon>
                    <ReactIcon />
                    <span>React</span>
                </CardIcon>
                <CardIcon>
                    <StyledComponentsIcon />
                    <span>CSS-in-JS</span>
                </CardIcon>
                <CardIcon>
                    <TailwindIcon />
                    <span>TailwindCSS</span>
                </CardIcon>
                <CardIcon>
                    <FigmaIcon />
                    <span>Figma</span>
                </CardIcon>
            </ContainerSkills>
        </Container>
    );
};
