import {
    AiFillHeart,
    AiFillLinkedin,
    AiFillInstagram,
    AiFillGithub,
    AiFillMail,
} from "react-icons/ai";
import styled, { css } from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 24px 32px;
    margin-top: auto;
    width: 100%;
`;

export const Line = styled.div`
    max-width: 1280px;
    width: 100%;
    border-top: 2px solid var(--border);
    margin-bottom: 24px;
`;

export const SocialMedia = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 16px;
    gap: 40px;

    > a {
        transition: opacity 0.2s;
        &:hover {
            opacity: 0.7;
        }
    }
`;

export const MadeBy = styled.p`
    font-size: 14px;
    color: var(--gray);
    margin-top: 24px;
    line-height: 1.5;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;

    > a {
        transition: opacity 0.2s;
        text-decoration: none;
        &:hover {
            opacity: 0.7;
            text-decoration: underline;
        }
    }
`;

export const CopyRight = styled.p`
    font-size: 14px;
    color: var(--gray);
    margin-top: 8px;
    margin-bottom: 16px;
    text-align: center;
    line-height: 1.5;
`;

const IconCSS = css`
    width: 36px;
    height: 36px;
    fill: var(--accent);
    flex-shrink: 0;
`;

export const HeartIcon = styled(AiFillHeart)`
    width: 24px;
    height: 24px;
    margin-bottom: -4px;
    fill: var(--purple);
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
