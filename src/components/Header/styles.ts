import styled from "styled-components";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";

export const Container = styled.div`
    display: flex;
    align-items: center;
    background: var(--background);
    padding: 12px 16px;
    border-bottom: 1px solid var(--accent);
    height: 4.5rem;
    justify-content: space-between;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 9;

    @media (max-width: 768px) {
        padding: 12px 8px;
        justify-content: center;
    }
`;

export const SunIcon = styled(BsFillSunFill)`
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
    gap: 1.6rem;
    margin-right: 1.6rem;

    > a {
        position: relative;
        text-decoration: none;
        color: var(--titles);
        font-size: 1.2rem;
        cursor: pointer;
        display: inline-block;
        overflow: hidden;
        transition: color 0.3s ease-in-out, transform 0.3s ease-in-out;

        &::before,
        &::after {
            content: "";
            position: absolute;
            bottom: 0;
            left: 0;
            width: 0;
            height: 2px;
            background-color: var(--accent);
            transition: width 0.3s ease-in-out;
        }

        &::before {
            right: 100%;
        }

        &::after {
            left: 100%;
        }

        &:hover::before,
        &:hover::after {
            width: 100%;
        }

        &:hover {
            color: var(--accent);
            opacity: 0.8;
            transform: scale(1.1);
        }
    }

    @media (max-width: 768px) {
        display: none;
    }
`;

export const Logo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.6rem;
    margin-left: 1.6rem;
`;
