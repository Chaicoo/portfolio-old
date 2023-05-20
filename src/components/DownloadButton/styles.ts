import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 32px;

    > button {
        text-decoration: none;
        color: var(--titles);
        font-size: 1.2rem;
        padding: 0.3rem 0.5rem;
        border-radius: 0.8rem;
        border: 2px solid var(--accent);
        background: none;
        transition: opacity 0.8s ease-in-out;
        cursor: pointer;
        display: flex;
        align-items: center;

        &:hover {
            background: var(--accent);
            color: var(--background);
        }
    }
`;
