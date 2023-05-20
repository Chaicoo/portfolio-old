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
        transition: opacity 0.8s ease-in-out;
        cursor: pointer;
        display: flex;
        align-items: center;
        border-bottom: 2px solid var(--accent);

        &:hover {
            opacity: 0.8;
            color: var(--accent);
        }
    }
`;
