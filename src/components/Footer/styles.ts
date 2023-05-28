import { AiFillHeart } from "react-icons/ai";
import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 24px 32px;
    margin-top: auto;
    width: 100%;
`;

export const Line = styled.div`
    max-width: 1280px;
    width: 100%;
    border-top: 2px solid var(--border);
`;

export const MadeBy = styled.p`
    font-size: 14px;
    color: var(--gray);
    margin-top: 24px;
    line-height: 1.5;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;

    > a {
        transition: opacity 0.2s;
        &:hover {
            opacity: 0.7;
        }
    }
`;

export const CopyRight = styled.p`
    font-size: 14px;
    color: var(--gray);
    margin-top: 8px;
    margin-bottom: 16px;
    text-align: center;
    line-height: 1.5;
`;

export const HeartIcon = styled(AiFillHeart)`
    width: 24px;
    height: 24px;
    margin-bottom: -4px;
    fill: var(--purple);
`;
