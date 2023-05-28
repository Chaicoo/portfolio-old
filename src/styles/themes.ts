export const themes = {
    light: {
        primary: "#fff",
        black: "#1b1f23",
        gray: "#afafaf",
        "gray-light": "#6a737d",
        "gray-dark": "#24292e",
        purple: "#8257e5",
        text: "#262525",

        logo: "#fff",
        "text-secondary": "#666",
        search: "rgba(255, 255, 255, 0.13)",
        placeholder: "hsla(0,0%,100%,.75)",
        icon: "#6a737d",
        link: "#0366d6",
        border: "#a9acaf",


        background: "#E8E6E6",
        "background-image": "url('./images/bgLight.jpg')",
        titles: "#2d2d2e",
        accent: "#0880AE",
        terminal: "#121619",
        "green-light": "#9BE9A8",
        green: "#3FC463",
        blue: "rgba(79, 140, 201, 1)",
    },
    dark: {
        primary: "#1D1D1D",
        black: "#c6c6c6",
        gray: "#afafaf",
        "gray-light": "#6a737d",
        "gray-dark": "#c6c6c6",
        purple: "#8257e5",
        text: "#E8E6E6",

        logo: "#fff",
        "text-secondary": "#9b9b9b",
        search: "#151515",
        placeholder: "#c6c6c6",
        icon: "#9b9b9b",
        link: "rgb(79, 140, 201)",
        border: "#262525",

        card: "#121619",
        background: "#333333",
        "background-image": "url('./images/bgDark.jpg')",
        titles: "#D6E1DF",
        accent: "#8A85FF",
        terminal: "#121619",
        "green-light": "#9BE9A8",
        green: "#3FC463",
        blue: "rgba(79, 140, 201, 1)",
    },
};

export type ThemeName = keyof typeof themes;
export type ThemeType = typeof themes.light | typeof themes.dark;
