import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    width: 300px;
    height: 170px;
    background-color: var(--terminal);
    border-radius: 10px 0 10px 0;
    margin-bottom: 20px;
    gap: 10px;
    cursor: pointer;
    transition: transform 0.5s;

    &:hover {
        border: 1px solid var(--accent);
        transform: scale(1.2);
    }

    > span {
        font-size: 1.2rem;
        color: var(--accent);
        display: none;
    }

    > a {
        color: #d6e1df;
        margin-bottom: -20px;
    }

    > img {
        width: 100%;
        height: 100%;
        border-radius: 10px 0 10px 0;
    }
`;
