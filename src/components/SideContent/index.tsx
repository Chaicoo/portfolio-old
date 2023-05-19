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
} from "./styles";
import { Link } from "react-router-dom";
import { DownloadButton } from "..";

export const SideContent: React.FC = () => {
    return (
        <Container>
            <ImageContainer>
                <img src="public/profile.jpeg" alt="profile" />
            </ImageContainer>

            <Text>
                <h2>Francisco Gabriel Noleto Lima</h2>
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
                <Link to="mailto:gabriellima27@gmail.com">
                    <MailIcon />
                </Link>
            </SocialMedia>
            <DownloadButton />
        </Container>
    );
};
