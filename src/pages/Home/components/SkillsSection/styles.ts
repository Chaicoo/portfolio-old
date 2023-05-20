import styled, { css } from "styled-components";
import {
    SiStyledcomponents,
    SiTypescript,
    SiJavascript,
    SiHtml5,
    SiCss3,
    SiReact,
    SiTailwindcss,
    SiFigma,
} from "react-icons/si";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 560px;
    margin: 120px 0;
    background-image: ${(props) => props.theme["background-image"]};
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-attachment: fixed;

    > h2 {
        font-size: 2.5rem;
        color: #d6e1df;
        margin-top: 50px;
        margin-left: 50px;
    }
`;

export const ContainerSkills = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-items: center;
    margin-top: 50px;
    gap: 20px;
`;

export const CardIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 120px;
    height: 130px;
    background-color: var(--background);
    border-radius: 8px;
    margin-bottom: 20px;
`;

const IconCSS = css`
    width: 40px;
    height: 40px;
    fill: var(--accent);
    flex-shrink: 0;
`;

export const StyledComponentsIcon = styled(SiStyledcomponents)`
    ${IconCSS}
`;

export const TypeScriptIcon = styled(SiTypescript)`
    ${IconCSS}
`;

export const JavaScriptIcon = styled(SiJavascript)`
    ${IconCSS}
`;

export const Html5Icon = styled(SiHtml5)`
    ${IconCSS}
`;

export const Css3Icon = styled(SiCss3)`
    ${IconCSS}
`;

export const ReactIcon = styled(SiReact)`
    ${IconCSS}
`;

export const TailwindIcon = styled(SiTailwindcss)`
    ${IconCSS}
`;

export const FigmaIcon = styled(SiFigma)`
    ${IconCSS}
`;
