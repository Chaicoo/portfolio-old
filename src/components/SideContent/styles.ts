import {
    AiFillLinkedin,
    AiFillInstagram,
    AiFillGithub,
    AiFillMail,
} from "react-icons/ai";
import { BsChevronDoubleDown } from "react-icons/bs";
import styled, { css } from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    align-items: center;

    @media (min-width: 1024px) {
        max-width: 480px;
    }
`;

export const ImageContainer = styled.div`
    text-align: center;
    margin-top: 100px;

    > img {
        width: 260px;
        height: 260px;
        border-radius: 50%;
        padding: 4px;
        border: 2px solid var(--accent);

        @media (max-width: 768px) {
            width: 200px;
            height: 200px;
        }
    }

    @media (max-width: 768px) {
        margin-top: 150px;
    }
`;

export const Text = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 36px;
    gap: 4px;

    > h2 {
        font-size: 28px;
        font-weight: 600;
    }

    > p {
        font-size: 18px;
        color: var(--text-secondary);
    }

    @media (max-width: 768px) {
        gap: 8px;

        > h2 {
            font-size: 24px;
        }

        > p {
            font-size: 16px;
        }
    }

    @media (min-width: 768px) {
        margin-top: 16px;

        > h2 {
            display: none;
        }
    }
`;

export const Line = styled.div`
    margin: 0 auto;
    margin-top: 20px;
    width: 100%;
    border-top: 2px solid var(--border);

    @media (max-width: 768px) {
        max-width: calc(100% / 1.2);
    }
`;

export const SocialMedia = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 36px;
    gap: 40px;

    > a {
        transition: opacity 0.2s;
        &:hover {
            opacity: 0.7;
        }
    }
`;

export const ScrollMessage = styled.div`
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;

`;

const IconCSS = css`
    width: 36px;
    height: 36px;
    fill: var(--accent);
    flex-shrink: 0;
`;

export const ScrollIcon = styled(BsChevronDoubleDown)`
    width: 28px;
    height: 28px;
    fill: var(--accent);
    flex-shrink: 0;
`;

export const LinkedinIcon = styled(AiFillLinkedin)`
    ${IconCSS}
`;

export const InstagramIcon = styled(AiFillInstagram)`
    ${IconCSS}
`;

export const MailIcon = styled(AiFillMail)`
    ${IconCSS}
`;

export const GithubIcon = styled(AiFillGithub)`
    ${IconCSS}
`;
