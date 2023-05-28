import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    padding-top: 4.5rem;
    height: 75vh;
    width: 75%;
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

export const ContainerExperience = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 2rem;
    gap: 1.5rem;
    list-style: outside;
    padding: 0 1rem;

    > li {
        font-size: 1.3rem;
        font-weight: 500;
        text-align: left;
    }
`;

export const TittleExperience = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 0.7rem;

    > div {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;

        > span {
            color: var(--text-secondary);
        }

        > a {
            text-decoration: none;
            strong {
                font-size: 1.5rem;
                color: var(--accent);
            }

            &:hover {
                opacity: 0.6;
            }
        }
    }

    > h3 {
        font-size: 1.5rem;
        color: var(--text);
    }
`;

export const Description = styled.div`
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;

    > p {
        text-align: left;
        font-size: 1.3rem;
        color: var(--text-secondary);
        border-left: 2px solid var(--text-secondary);
        padding-left: 1rem;
    }

    > img{
        width: 300px;
    }
`;
