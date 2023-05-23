import React, { useEffect, useState } from "react";
import axios from "axios";
import { APIRepo } from "../../../../@types";
import { Container } from "./styles";
import { Link } from "react-router-dom";

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
                        repo.name === "API-typescript-mongoDB"
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
            <h2>Meus projetos</h2>
            <ul>
                {repos.map((repo) => (
                    <li key={repo.name}>
                        <a href={repo.html_url}>{repo.name}</a>
                    </li>
                ))}
            </ul>
            <Link to="/portifolio/projects">Todos os projetos</Link>
        </Container>
    );
};
