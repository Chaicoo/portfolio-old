export const themes = {
    light: {
        primary: "#fff",
        black: "#1b1f23",
        gray: "#afafaf",
        "gray-light": "#6a737d",
        "gray-dark": "#24292e",
        orange: "#f9826c",
        purple: "#8257e5",

        logo: "#fff",
        "text-secondary": "#666",
        search: "rgba(255, 255, 255, 0.13)",
        placeholder: "hsla(0,0%,100%,.75)",
        icon: "#6a737d",
        link: "#0366d6",
        border: "#a9acaf",
        ticker: "rgba(209,213,218,.5)",

        sun: "#f1e05a",
        moon: "#2b7489",

        background: "#eee8d5",
        "background-image": "url('./public/images/bgLight.jpg')",
        //titles: "#6a737d",
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
        orange: "#fff",
        purple: "#8257e5",

        logo: "#fff",
        "text-secondary": "#9b9b9b",
        search: "#151515",
        placeholder: "#c6c6c6",
        icon: "#9b9b9b",
        link: "rgb(79, 140, 201)",
        border: "#343434",
        ticker: "rgba(90, 90, 90, .5)",

        sun: "#f1e05a",
        moon: "#2b7489",

        card: "#121619",
        background: "#1C2025",
        "background-image": "url('./public/images/bgDark.jpg')",
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
