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
    text-align: center;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 600px;
    background-image: ${(props) => props.theme["background-image"]};
    background-size: cover;
    background-repeat: no-repeat;
    /* background-attachment: fixed; */

    > span {
        font-size: 2.5rem;
        font-weight: 700;
        color: #d6e1df;
        margin-top: 50px;
        border-bottom: 2px solid var(--accent);
        /* width: 25%; */
    }

    @media (max-width: 768px) {
        height: 100%;
        margin-top: 8rem;
    }
`;

export const ContainerSkills = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    justify-items: center;
    margin-top: 60px;
    gap: 20px;
    width: 80%;
`;

export const CardIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 120px;
    height: 130px;
    background-color: var(--terminal);
    border-radius: 10px 0 10px 0;
    margin-bottom: 20px;
    gap: 10px;
    cursor: pointer;
    transition: transform 0.5s;
    opacity: 0.9;

    &:hover {
        transform: scale(1.1);
        opacity: 1.1;
        border: 1px solid var(--accent);
    }

    > span {
        font-size: 1.2rem;
        color: #d6e1df;
        /* margin-bottom: -20px; */
    }
`;

export const Line = styled.div`
    max-width: 120px;
    width: 90%;
    border-top: 2px solid var(--border);
`;

const IconCSS = css`
    width: 54px;
    height: 54px;
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
