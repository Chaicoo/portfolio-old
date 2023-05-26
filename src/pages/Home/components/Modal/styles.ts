import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  margin-top: 20px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 980px;
  height: 550px;
  background-color: var(--terminal);
  border-radius: 10px;
`;

export const Content = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 5px;
  right: 10px;
  padding: 10px;
  border: none;
  color: #d6e1df;
  font-size: 1.5rem;
  cursor: pointer;

    &:hover {
        color: var(--accent);
    }
`;