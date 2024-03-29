import styled from "styled-components";

export const Container = styled.div`
    z-index: 10;
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: var(--background);
    transform: translateX(100%);
    transition: 0.5s transform cubic-bezier(0.5, 0, 0, 1);

	@media (max-width: 768px) {
		z-index: 1;
	}

    &.open {
        transform: translateX(0);
    }

    @media (min-width: 1024px) {
        width: calc(100% / 3);
        box-shadow: -7px 0 5px -6px rgba(0, 0, 0, 0.75);
    }

    @media (min-width: 1440px) {
        width: calc(480px + ((100vw - 1440px) / 2));
    }

    @media (min-width: 1024px) {
        &.scrollOpen {
            transform: translateX(0);
        }
        &.scrollClose .action--close {
            display: none;
        }
    }
`;
