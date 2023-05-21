import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Header, Footer } from "./components";
import { Home, Projects } from "./pages";
import { ThemeName, themes, GlobalStyles } from "./styles";

function App() {
    const [themeName, setThemeName] = useState<ThemeName>("dark");
    const currentTheme = themes[themeName];

    return (
        <BrowserRouter>
            <ThemeProvider theme={currentTheme}>
                <Header
                    themeName={themeName}
                    setThemeName={setThemeName}
                />
                <Routes>
                    <Route path="/portifolio" element={<Home />} />
                    <Route path="/portifolio/projects" element={<Projects />} />
                </Routes>
                <Footer />
                <GlobalStyles />
            </ThemeProvider>
        </BrowserRouter>
    );
}

export default App;
