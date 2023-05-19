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
        padding: 0.5rem ;
        border-radius: 1.4rem;
        background: var(--accent);
        transition: opacity 0.8s ease-in-out;
        cursor: pointer;
        display: flex;
        align-items: center;
        box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.75);

        &:hover {
            opacity: 0.8;
        }

    }
`;
