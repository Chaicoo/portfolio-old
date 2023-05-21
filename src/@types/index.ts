export interface APIRepo {
    name: string;
    owner: {
        login: string;
    };
    html_url: string;
    description?: string;
    language?: string;
    fork: boolean;
}
