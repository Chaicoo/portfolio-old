import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;
    margin-top: 150px;
`;

export const Wrapper = styled.div`
    width: calc(100% / 1.8);
    height: 65vh;
    display: flex;
    margin-left: 5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;

    .wellcome {
        font-size: 2rem;
        color: var(--text-secondary);
    }

    .name {
        font-size: 5rem;
        font-weight: bold;

        .secondName {
            color: var(--accent);
        }
    }

    .text {
        font-size: 1.2rem;
        color: var(--text-secondary);
        margin-bottom: 2rem;
    }

    @media (max-width: 768px) {
        display: none;
    }

    > a {
        cursor: pointer;
        width: 250px;
        display: flex;
        font-size: 16px;
        justify-content: center;
        align-items: center;
        color: var(--text);
        padding: 8px;
        border-radius: 4px;
        border: 2px solid #262525;
        transition: all 0.2s;
        box-shadow: 0 0 5px var(--accent);
        backdrop-filter: blur(10px);
        
        &:hover {
            background-color: var(--text);
            color: var(--button);
        }
    }
`;
