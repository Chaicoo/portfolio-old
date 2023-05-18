export interface APIRepo {
    name: string;
    owner: {
        login: string;
    };
    stargazers_count: number;
    forks: number;
    html_url: string;
    description: string;
    language?: string;
    fork: boolean;
}
