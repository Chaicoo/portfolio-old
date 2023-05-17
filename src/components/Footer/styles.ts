import { AiFillHeart } from "react-icons/ai";
import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 24px 32px;
    margin-top: auto;
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
`;

export const Line = styled.div`
    max-width: 1280px;
    width: 100%;
    border-top: 1px solid var(--border);
`;

export const HeartIcon = styled(AiFillHeart)`
    margin-top: 24px;
    width: 28px;
    height: 28px;
    flex-shrink: 0;
    fill: var(--purple);
`;
