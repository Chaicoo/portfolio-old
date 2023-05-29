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

        background:
            "radial-gradient(circle at 100% 0%, #edf0f0 0, #e8e6e6 50%, #e3dcdd 100%)",
        button: "#E8E6E6",
        titles: "#2d2d2e",
        accent: "#4F8CC9",
        terminal: "#121619",
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

        background:
            "linear-gradient(155deg, #333333 0, #333333 6.25%, #333333 12.5%, #333333 18.75%, #333333 25%, #333333 31.25%, #333333 37.5%, #333333 43.75%, #333333 50%, #333333 56.25%, #333333 62.5%, #333333 68.75%, #333333 75%, #333333 81.25%, #333333 87.5%, #333333 93.75%, #333333 100%)",
        button: "#333333",
        titles: "#D6E1DF",
        accent: "#8A85FF",
        terminal: "#121619",
    },
};

export type ThemeName = keyof typeof themes;
export type ThemeType = typeof themes.light | typeof themes.dark;
