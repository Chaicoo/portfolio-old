export const themes = {
    light: {
        primary: "#fff",
        black: "#1b1f23",
        gray: "#586069",
        "gray-light": "#6a737d",
        "gray-dark": "#24292e",
        orange: "#f9826c",
        purple: "#8257e5",

        header: "#24292e",
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
        titles: "#6a737d",
        //titles: "#8e8a99",
        accent: "#0880AE",
    },
    dark: {
        primary: "#1D1D1D",
        black: "#c6c6c6",
        gray: "#afafaf",
        "gray-light": "#6a737d",
        "gray-dark": "#c6c6c6",
        orange: "#fff",
        purple: "#8257e5",

        header: "#24292e",
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

        background: "#1C2025",
        titles: "#D6E1DF",
        accent: "#8A85FF",
    },
};

export type ThemeName = keyof typeof themes;
export type ThemeType = typeof themes.light | typeof themes.dark;
