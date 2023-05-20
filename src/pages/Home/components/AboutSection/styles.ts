import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 560px;
	margin: 150px 0;
`;

export const Wrapper = styled.div`
    width: calc(100% / 1.6);
    height: 460px;
    display: flex;
    margin-left: -8px;
    background: var(--terminal);
    border-radius: 0.5rem;
    position: absolute;
    left: 0;

    &::after {
        content: "";
        position: absolute;
        border-radius: 0.5rem;
        bottom: -8px;
        right: -8px;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.1);
        box-shadow: 0px 0px 20px 16px rgba(0, 0, 0, 0.1);
        z-index: -1;
    }

    .terminal {
        width: 100%;
        height: 100%;
        border-radius: 0.5rem;
        padding: 1px;
        display: flex;
        flex-direction: column;
    }

    #bar {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        width: 100%;
        background-color: #dad9d9;
        height: 28px;
        border-radius: 5px 5px 0 0;
    }

    #red {
        background-color: #e94b35;
        border-radius: 100%;
        width: 15px;
        height: 15px;
        margin-right: 4px;
    }

    #yellow {
        background-color: #f0f000;
        border-radius: 100%;
        width: 15px;
        height: 15px;
        margin-right: 4px;
    }

    #green {
        background-color: #1aaf5c;
        border-radius: 100%;
        width: 15px;
        height: 15px;
        margin-right: 8px;
    }

    #screen {
        flex-grow: 1;
        background-color: var(--card);
        padding: 2rem;
    }

    .prompt {
        font-size: 1.1rem;
        line-height: 1.5rem;
        padding: 0.2rem 0;

        .user {
            color: var(--accent);
        }

        .dir {
            color: var(--green);
        }

        .dollar {
            color: var(--gray);
        }

        .at {
            color: var(--gray);
        }

        .command {
            color: var(--gray);
        }
    }

    .font {
        font-size: 1.1rem;
        color: var(--gray);
        line-height: 1.5rem;
        text-align: justify;

        > strong {
            color: var(--accent);
        }
    }
`;
