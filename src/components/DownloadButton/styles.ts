import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;

    > button {
        cursor: pointer;
        display: flex;
        justify-content: center;
        text-decoration: none;
        align-items: center;
        color: var(--text);
        padding: 8px;
        border-radius: 4px;
        border: 2px solid #262525;
        transition: all 0.2s;

        &:hover {
            background-color: var(--text);
            color: var(--button);
        }
    }
`;
