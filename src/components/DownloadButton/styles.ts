import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 32px;

    > button {
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
`;
