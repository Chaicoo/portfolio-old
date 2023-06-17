import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    width: 380px;
    height: 390px;
    background-color: var(--background);
    border-radius: 10px;
    margin-bottom: 30px;
    transition: transform 0.7s;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);

    &:hover {
        border: 1px solid var(--accent);
        transform: scale(1.03);
    }

    > p {
        font-size: 1rem;
        color: var(--text-secondary);
        margin: 0 auto;
        width: 80%;
        text-align: center;
    }

    > span {
        font-size: 1.2rem;
        color: var(--text);
    }

    > img {
        width: 95%;
        height: auto;
        border-radius: 10px;
        margin: 0 auto;
        box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
    }
`;

export const ContainerLinks = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 70%;
    margin: 0 auto;
    margin-bottom: 12px;

    > a {
        cursor: pointer;
        display: flex;
        font-size: 16px;
        justify-content: center;
        text-decoration: none;
        align-items: center;
        color: var(--text);
        padding: 8px;
        border-radius: 20px;
        border: 1px solid #262525;
        transition: all 0.6s;
        width: 110px;
        margin: 0 auto;

        &:hover {
            background-color: var(--text);
            color: var(--button);
        }
    }
`;
