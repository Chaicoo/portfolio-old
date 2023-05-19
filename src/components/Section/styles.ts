import styled from "styled-components";

export const Container = styled.div`
	--padding-top: 100px;
	--padding-bottom: 120px;
	--heading-font-size: 32px;
	--content-width: 100%;

	&:first-child {
		--padding-top: 140px;
		--heading-font-size: 52px;

		@media (min-width: 1024px) {
			--content-width: 50%;
			--heading-font-size: 72px;
		}
	}
`;

export const Content = styled.div`
	max-width: 1440px;
	margin: 0 auto;

	> h2 {
		font-size: var(--heading-font-size);
		color: var(--black);
		max-width: var(--content-width);
	}

	> p {
		margin-top: 20px;
		font-size: 18px;
		color: var(--text-secondary);
		max-width: var(--content-width);
	}

	padding: var(--padding-top) 30px var(--padding-bottom);
`;
