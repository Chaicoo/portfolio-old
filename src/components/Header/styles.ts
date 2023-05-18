import styled from "styled-components";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";

export const Container = styled.div`
    display: flex;
    align-items: center;
    background: var(--header);
    padding: 12px 16px;
    border-bottom: 1px solid var(--accent);
    height: 4.5rem;
    justify-content: space-between;
`;

export const SunIcon = styled(BsFillSunFill)`
    fill: var(--sun);
    width: 32px;
    height: 32px;
    flex-shrink: 0;
    cursor: pointer;
    transition: opacity 0.5s ease-in-out;
    &:hover {
        opacity: 0.8;
    }
`;

export const MoonIcon = styled(BsFillMoonFill)`
    fill: var(--accent);
    width: 32px;
    height: 32px;
    flex-shrink: 0;
    cursor: pointer;
    transition: opacity 0.5s ease-in-out;
    &:hover {
        opacity: 0.8;
    }
`;

export const Text = styled.p`
    font-size: 1.4rem;
    font-weight: 600;
    color: var(--titles);

    > span {
        color: var(--accent);
    }
`;

export const LinksButtons = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.6rem;
    margin-right: 1.6rem;

    > a {
        text-decoration: none;
        color: var(--titles);
        font-size: 1.2rem;
        padding: 0.3rem 0.9rem;
        border-radius: 1.4rem;
        background: var(--accent);
        transition: opacity 0.8s ease-in-out;

        &:hover {
            opacity: 0.8;
        }
    }

`;

export const Logo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.6rem;
    margin-left: 1.6rem;
`;
