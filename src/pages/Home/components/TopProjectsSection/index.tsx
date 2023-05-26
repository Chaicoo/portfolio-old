import React, { useEffect, useState } from "react";
import axios from "axios";
import { APIRepo } from "../../../../@types";
import { Container } from "./styles";
import { Link } from "react-router-dom";
import Card from "../Card";

export const TopProjectsSection: React.FC = () => {
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
                        repo.name === "Baralho-de-cartas-Pokemon"
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
            <span>Meus projetos</span>
            <ul>
                {repos.map((repo) => (
                    <li key={repo.name}>
                        <Card name={repo.name} url={repo.html_url} description={repo.description} />
                    </li>
                ))}
            </ul>
            <Link to="/portifolio/projects">Todos os projetos</Link>
        </Container>
    );
};
