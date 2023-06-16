import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html{
        min-height: 100%;
        background: var(--background);
    } 

    *, button, input{
        border: 0;
        background: none;
        font-family: -apple-system,BlinkMacSystemFont,"Segoe UI","Noto Sans",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji";
        color: var(--black);
		transition: color 0.5s ease-out;
    }

    ul{
        list-style: none;
    }

	svg{
		margin-top: -8px;
	}

    :root{
        scroll-behavior: smooth;
		${(props) => {
            const theme = props.theme;
            let append = "";
            Object.entries(theme).forEach(([prop, value]) => {
                append += `--${prop}: ${value};`;
            });
            return append;
        }}
    }
`;

export default GlobalStyles;
