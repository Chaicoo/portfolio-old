import React, { useEffect, useState } from "react";
import axios from "axios";
import { APIRepo } from "../../@types";

import { Container } from "./styles";

export const Projects: React.FC = () => {
    const [repos, setRepos] = useState<APIRepo[]>([]);

    useEffect(() => {
        const fetchRepos = async () => {
            try {
                const response = await axios.get<APIRepo[]>(
                    "https://api.github.com/users/Chaicoo/repos"
                );
                const filteredRepos = response.data.filter(
                    (repo) => repo.name !== "Chaicoo" && !repo.fork
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
            <h1>Projetos</h1>
            <ul>
                {repos.map((repo) => (
                    <li key={repo.name}>
                        <a href={repo.html_url}>{repo.name}</a>
                        <p>{repo.description}</p>
                        <p>{repo.language}</p>
                    </li>
                ))}
            </ul>
        </Container>
    );
};
