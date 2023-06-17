import React, { useEffect, useState } from "react";
import axios from "axios";
import { APIRepo } from "../../../../@types";
import {
    CardStack,
    Container,
    IconCss,
    IconHtml,
    IconJavascript,
    IconReact,
    IconStyled,
    IconTypescript,
    Tittle,
} from "./styles";
import { Link } from "react-router-dom";
import Card from "../Card";
import Aos from "aos";
import "aos/dist/aos.css";

export const TopProjectsSection: React.FC = () => {
    useEffect(() => {
        Aos.init({ duration: 1500 });
    }, []);

    const [repos, setRepos] = useState<APIRepo[]>([]);

    useEffect(() => {
        const fetchRepos = async () => {
            try {
                const response = await axios.get<APIRepo[]>(
                    "https://api.github.com/users/Chaicoo/repos"
                );
                const filteredRepos = response.data.filter(
                    (repo) =>
                        repo.name === "github-ui-react" ||
                        repo.name === "Maratona-Discover" ||
                        repo.name === "dropbox-ui"
                );

                setRepos(filteredRepos);
            } catch (error) {
                console.error("Erro ao obter repositórios do GitHub:", error);
            }
        };

        fetchRepos();
    }, []);
    return (
        <Container>
            <Tittle>
                <span data-aos="zoom-in" className="subTittle">
                    Veja meus
                </span>
                <span data-aos="zoom-in" className="tittle">
                    Projetos
                </span>
            </Tittle>
            <ul data-aos="fade-right">
                {repos.map((repo) => (
                    <li key={repo.name}>
                        <Card
                            image={
                                repo.name === "github-ui-react"
                                    ? "images/github_clone_ui.png"
                                    : repo.name === "Maratona-Discover"
                                    ? "images/maratona_discover.png"
                                    : "images/dropbox_clone_ui.png"
                            }
                            demo={
                                repo.name === "github-ui-react"
                                    ? "https://github-ui-green.vercel.app/"
                                    : repo.name === "Maratona-Discover"
                                    ? "https://maratona-discover-two.vercel.app/"
                                    : "https://dropbox-ui.vercel.app/"
                            }
                            name={
                                repo.name === "github-ui-react"
                                    ? "GitHub UI Clone"
                                    : repo.name === "Maratona-Discover"
                                    ? "Maratona Discover"
                                    : "Dropbox UI Clone"
                            }
                            url={repo.html_url}
                            description={repo.description}
                            children={
                                repo.name === "github-ui-react" ? (
                                    <CardStack>
                                        <IconReact />
                                        <IconTypescript />
                                        <IconStyled />
                                    </CardStack>
                                ) : repo.name === "Maratona-Discover" ? (
                                    <CardStack>
                                        <IconJavascript />
                                        <IconHtml />
                                        <IconCss />
                                    </CardStack>
                                ) : (
                                    <CardStack>
                                        <IconReact />
                                        <IconTypescript />
                                        <IconStyled />
                                    </CardStack>
                                )
                            }
                        />
                    </li>
                ))}
            </ul>
            <Link to="/portifolio/projects">Todos os projetos</Link>
        </Container>
    );
};
