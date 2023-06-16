import styled, { css } from "styled-components";
import { SiNextdotjs, SiJavascript, SiStyledcomponents } from "react-icons/si";
import { FaReact } from "react-icons/fa";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 80px auto;
    padding-top: 4.5rem;
    height: 75vh;
    width: 75%;

    @media (max-width: 768px) {
        width: 90%;
        margin-bottom: 5rem;
    }
`;

export const Tittle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;

    > .subTittle {
        margin-top: 2rem;
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

export const ContainerExperience = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 2rem;
    gap: 1.5rem;
    list-style: outside;
    padding: 0 1rem;

    > li {
        font-size: 1.3rem;
        font-weight: 500;
        text-align: left;
    }

    @media (max-width: 768px) {
        width: 90%;
    }
`;

export const TittleExperience = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 0.7rem;

    > div {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;

        > span {
            color: var(--text-secondary);
        }

        > a {
            text-decoration: none;
            strong {
                font-size: 1.5rem;
                color: var(--accent);
            }

            &:hover {
                opacity: 0.6;
            }
        }
    }

    > h3 {
        font-size: 1.5rem;
        color: var(--text);
    }

`;

export const Description = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;

    > p {
        text-align: left;
        font-size: 1.3rem;
        color: var(--text-secondary);
        border-left: 2px solid var(--text-secondary);
        padding-left: 1rem;
    }

    > img {
        width: 360px;
    }

    @media (max-width: 768px) {
        flex-direction: column;

        > p {
            font-size: 1rem;
        }

        > img {
            width: 320px;
        }
    }
`;

export const CardStack = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 0.8rem;

    @media (max-width: 768px) {
        margin-top: 2.2rem;
        justify-content: center;
    }
`;

const IconCSS = css`
    width: 32px;
    height: 32px;
    fill: var(--accent);
    flex-shrink: 0;
`;

export const IconNext = styled(SiNextdotjs)`
    ${IconCSS}
`;

export const IconReact = styled(FaReact)`
    ${IconCSS}
`;

export const IconJavascript = styled(SiJavascript)`
    ${IconCSS}
`;

export const IconStyled = styled(SiStyledcomponents)`
    ${IconCSS}
`;