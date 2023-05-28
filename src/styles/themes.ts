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
        placeholder: "hsla(0,0%,100%,.75)",
        icon: "#6a737d",
        link: "#0366d6",
        border: "#a9acaf",

        background:
            "radial-gradient(circle at 100% 0%, #edf0f0 0, #e8e6e6 50%, #e3dcdd 100%)",
        button: "#E8E6E6",
        "background-image": "url('./images/bgLight.jpg')",
        titles: "#2d2d2e",
        accent: "#4F8CC9",
        terminal: "#121619",
        "green-light": "#9BE9A8",
        green: "#3FC463",
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
        placeholder: "#c6c6c6",
        icon: "#9b9b9b",
        link: "rgb(79, 140, 201)",
        border: "#262525",

        card: "#121619",
        background:
            "linear-gradient(155deg, #333333 0, #333333 6.25%, #333333 12.5%, #333333 18.75%, #333333 25%, #333333 31.25%, #333333 37.5%, #333333 43.75%, #333333 50%, #333333 56.25%, #333333 62.5%, #333333 68.75%, #333333 75%, #333333 81.25%, #333333 87.5%, #333333 93.75%, #333333 100%)",
        button: "#333333",
        "background-image": "url('./images/bgDark.jpg')",
        titles: "#D6E1DF",
        accent: "#8A85FF",
        terminal: "#121619",
        "green-light": "#9BE9A8",
        green: "#3FC463",
    },
};

export type ThemeName = keyof typeof themes;
export type ThemeType = typeof themes.light | typeof themes.dark;
