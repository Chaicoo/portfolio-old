import {
    Container,
    SunIcon,
    MoonIcon,
    Text,
    LinksButtons,
    Logo,
} from "./styles";
import { ThemeName } from "../../styles/themes";
import { Link, useLocation } from "react-router-dom";
import { Link as Scroll } from "react-scroll";

interface Props {
    themeName: ThemeName;
    setThemeName: (newName: ThemeName) => void;
}

export const Header: React.FC<Props> = ({ themeName, setThemeName }) => {
    function toggleTheme() {
        setThemeName(themeName === "dark" ? "light" : "dark");
    }

    const location = useLocation();
    const isProjectPage = location.pathname === "/portifolio/projects";

    return (
        <Container>
            <Logo>
                <Text>
                    Chico.<span>DEV</span>
                </Text>
                {themeName === "light" ? (
                    <MoonIcon onClick={toggleTheme} />
                ) : (
                    <SunIcon onClick={toggleTheme} />
                )}
            </Logo>
            <LinksButtons>
                {isProjectPage ? (
                    <>
                        <Link to="/portifolio">Home</Link>
                    </>
                ) : (
                    <>
                        <Scroll to="projects" smooth={true} duration={1000}>
                            Projetos
                        </Scroll>
                        <Scroll to="services" smooth={true} duration={1000}>
                            Serviços
                        </Scroll>
                    </>
                )}
            </LinksButtons>
        </Container>
    );
};
