import { Container } from "./styles";

export const DownloadButton = () => {
    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = "/portifolio/pdf/CV-Francisco.pdf";
        link.download = "curriculo.pdf";
        link.click();
    };

    return (
        <Container>
            <button onClick={handleDownload}>Baixar Currículo</button>
        </Container>
    );
};
