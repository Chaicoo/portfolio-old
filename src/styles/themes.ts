export const themes = {
    light: {
        primary: "#fff",
        black: "#1b1f23",
        gray: "#afafaf",
        purple: "#8257e5",
        text: "#262525",

        "text-secondary": "#666",
        link: "#0366d6",
        border: "#a9acaf",

        background: "#fdf4ef",
        button: "#E8E6E6",
        titles: "#2d2d2e",
        accent: "#4F8CC9",
        terminal: "#121619",
        gradient:
            "linear-gradient(106.33deg, #8A85FF 20.84%, #AA6EE6 54.64%, #4F8CC9 101.85%)",
    },
    dark: {
        primary: "#1D1D1D",
        black: "#c6c6c6",
        gray: "#afafaf",
        purple: "#8257e5",
        text: "#E8E6E6",

        "text-secondary": "#9b9b9b",
        link: "rgb(79, 140, 201)",
        border: "#262525",

        background: "#333333",
        button: "#333333",
        titles: "#D6E1DF",
        accent: "#8A85FF",
        terminal: "#121619",
        gradient:
            "linear-gradient(106.33deg, #8A85FF 20.84%, #AA6EE6 54.64%, #4F8CC9 101.85%)",
    },
};

export type ThemeName = keyof typeof themes;
export type ThemeType = typeof themes.light | typeof themes.dark;
