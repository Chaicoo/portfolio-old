import { Container, SunIcon, MoonIcon, Text, LinksButtons, Logo } from "./styles";
import { ThemeName } from "../../styles/themes";
import { Link } from "react-router-dom";

interface Props {
    themeName: ThemeName;
    setThemeName: (newName: ThemeName) => void;
}

export const Header: React.FC<Props> = ({ themeName, setThemeName }) => {
    function toggleTheme() {
        setThemeName(themeName === "dark" ? "light" : "dark");
    }

    return (
        <Container>
            <Logo>
                <Text>Chico.<span>DEV</span></Text>
                {themeName === "light" ? (
                    <MoonIcon onClick={toggleTheme} />
                ) : (
                    <SunIcon onClick={toggleTheme} />
                )}
            </Logo>
            <LinksButtons>
                <Link to="/portifolio">Home</Link>
                <Link to="/projects">Projetos</Link>
                
            </LinksButtons>
        </Container>
    );
};
