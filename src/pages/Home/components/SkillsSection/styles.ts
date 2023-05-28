import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    text-align: center;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100vh;
    /* background-image: ${(props) => props.theme["background-image"]};
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed; */
    margin-top: 2rem;

    @media (max-width: 768px) {
        height: 100%;
        width: 90%;
        margin: 0 auto;
    }
`;

export const Tittle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;

    > .subTittle {
        margin-top: 2rem;
        font-size: 1.3rem;
        color: var(--text-secondary);
    }

    > .tittle {
        font-size: 2.7rem;
        font-weight: 700;
        color: var(--text);
        border-bottom: 2px solid var(--accent);
    }

    @media (max-width: 768px) {
        height: 100%;
        margin-top: 10rem;

        > .subTittle {
            font-size: 1rem;
        }

        > .tittle {
            font-size: 2rem;
        }
    }
`;

export const ContainerSkills = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin-top: 2.9rem;
    gap: 1.5rem;
    list-style: outside;
    padding: 0 1rem;

    > li {
        font-size: 1.5rem;
        color: var(--text);
        font-weight: 500;
        text-align: left;
    }

    @media (max-width: 768px) {
        > li {
            font-size: 1.2rem;
        }
    }
`;
