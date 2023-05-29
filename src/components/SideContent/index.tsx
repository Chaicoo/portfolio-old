import React from "react";

import {
    Container,
    ImageContainer,
    Text,
    Line,
    SocialMedia,
    InstagramIcon,
    LinkedinIcon,
    GithubIcon,
    MailIcon,
    ScrollMessage,
} from "./styles";
import { Link } from "react-router-dom";
import { DownloadButton } from "..";

export const SideContent: React.FC = () => {
    return (
        <Container>
            <ImageContainer>
                <img
                    src="https://avatars.githubusercontent.com/u/55364296?v=4"
                    alt="profile"
                />
            </ImageContainer>

            <Text>
                <span>👋🏼 Bem vindo, me chamo</span>
                <h2>Francisco Gabriel Noleto Lima</h2>
                <span>
                    tenho 21 anos e sou apaixonado por programação desde os 15
                    anos, especializado em desenvolvimento Front-End com ReactJs
                    e focado em criar soluções intuitivas e impactantes.
                </span>
                <p>Desenvolvedor Front-End Jr</p>
                <Line />
            </Text>
            <SocialMedia>
                <Link to="https://github.com/Chaicoo">
                    <GithubIcon />
                </Link>
                <Link to="#">
                    <InstagramIcon />
                </Link>
                <Link to="https://www.linkedin.com/in/francisco-gab/">
                    <LinkedinIcon />
                </Link>
                <Link to="mailto:franciscolima.dev@gmail.com">
                    <MailIcon />
                </Link>
            </SocialMedia>
            <DownloadButton />
            <ScrollMessage>
                <span>
                    <strong>Deseja ver mais?</strong> Role para baixo
                </span>
            </ScrollMessage>
        </Container>
    );
};
