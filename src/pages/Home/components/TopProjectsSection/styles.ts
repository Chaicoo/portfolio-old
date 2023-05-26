import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;
    max-width: 1120px;
    margin: 0 auto;
    padding: 0 2rem;
    text-align: center;

    > span {
        font-size: 2.5rem;
        font-weight: 700;
        color: var(--black);
        margin-top: 50px;
        border-bottom: 2px solid var(--accent);
        width: 25%;
    }

    > ul {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        margin-top: 50px;
        gap: 50px;
    }

    > a {
        display: block;
        margin-top: 50px;
        font-size: 1.2rem;
        font-weight: 700;
    }
`;
