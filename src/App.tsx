import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./router";
import { ThemeProvider } from "styled-components";
import { Header, Footer } from "./components";
import { ThemeName, themes, GlobalStyles } from "./styles";

function App() {
    const [themeName, setThemeName] = useState<ThemeName>("dark");
    const currentTheme = themes[themeName];

    return (
        <BrowserRouter>
            <ThemeProvider theme={currentTheme}>
                <Header themeName={themeName} setThemeName={setThemeName} />
                <Router />
                <Footer />
                <GlobalStyles />
            </ThemeProvider>
        </BrowserRouter>
    );
}

export default App;
