import React, { useState, useEffect } from "react";
import { Container } from "./styles";


type Props = {
	children: React.ReactNode;
};

const scrollThreshold = 300;

declare global {
	interface Window {
		toggleActiveMenu: (() => void) | undefined;
	}
}

export const SideContainer: React.FC<Props> = ({ children }) => {
	const [scrollY, setScrollY] = useState(0);
	const [isActive, setIsActive] = useState(true);

	useEffect(() => {
		function onScroll() {
			setScrollY(window.scrollY);
			setIsActive(false);
		}

		window.addEventListener("scroll", onScroll);

		return () => {
			window.removeEventListener("scroll", onScroll);
		};
	}, []);

	const classes = [
		isActive ? "open" : "",
		scrollY <= scrollThreshold ? "scrollOpen" : "",
	];

	const className = classes.join(" ").trim();

	function toggleActiveMenu() {
		setIsActive(prev => !prev);
	}

	window.toggleActiveMenu = toggleActiveMenu;

	return <Container className={className}>
		{children}
	</Container>;
};