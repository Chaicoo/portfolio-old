import { FaReact } from "react-icons/fa";
import { SiJavascript, SiStyledcomponents, SiTypescript } from "react-icons/si";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import styled, { css } from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;
    max-width: 1250px;
    margin: 0 auto;
    margin-top: 3rem;
    padding: 0 2rem;
    text-align: center;

    > span {
        font-size: 2.5rem;
        font-weight: 700;
        color: var(--black);
        margin-top: 50px;
        border-bottom: 2px solid var(--accent);
        width: 25%;
    }

    > ul {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        margin-top: 50px;
        gap: 20px;
    }

    > a {
        cursor: pointer;
        display: flex;
        font-size: 16px;
        justify-content: center;
        text-decoration: none;
        align-items: center;
        color: var(--text);
        padding: 8px;
        border-radius: 4px;
        border: 1px solid #262525;
        transition: all 0.6s;
        width: 150px;
        margin: 0 auto;

        &:hover {
            background-color: var(--text);
            color: var(--button);
        }
    }

    @media (max-width: 768px) {
        margin-top: 10rem;
    }
`;

export const Tittle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;

    > .subTittle {
        font-size: 1.3rem;
        color: var(--text-secondary);
    }

    > .tittle {
        font-size: 2.7rem;
        font-weight: 700;
        color: var(--text);
        border-bottom: 2px solid var(--accent);
    }

    @media (max-width: 768px) {
        height: 100%;
        margin-top: 10rem;

        > .subTittle {
            font-size: 1rem;
        }

        > .tittle {
            font-size: 2rem;
        }
    }
`;

export const CardStack = styled.div`
    display: flex;
    justify-content: center;
    gap: 0.8rem;

    @media (max-width: 768px) {
        margin-top: 2.2rem;
        justify-content: center;
    }
`;

const IconCSS = css`
    width: 28px;
    height: 28px;
    fill: var(--accent);
    flex-shrink: 0;
`;

export const IconReact = styled(FaReact)`
    ${IconCSS}
`;

export const IconJavascript = styled(SiJavascript)`
    ${IconCSS}
`;

export const IconStyled = styled(SiStyledcomponents)`
    ${IconCSS}
    width: 32px;
    height: 32px;
`;

export const IconHtml = styled(AiFillHtml5)`
    ${IconCSS}
`;

export const IconCss = styled(DiCss3)`
    ${IconCSS}
`;

export const IconTypescript = styled(SiTypescript)`
    ${IconCSS}
`;