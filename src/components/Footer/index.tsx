import React from "react";
import { Link } from "react-router-dom";
import {
    Container,
    Line,
    HeartIcon,
    SocialMedia,
    CopyRight,
    InstagramIcon,
    LinkedinIcon,
    GithubIcon,
    MailIcon,
    MadeBy,
} from "./styles";

export const Footer: React.FC = () => {
    return (
        <Container>
            <Line />
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
            <MadeBy>
                <span>Feito com</span>
                <HeartIcon />
                <span>por </span>
                <Link to="https://github.com/Chaicoo">Francisco</Link>
            </MadeBy>
            <CopyRight>
                <span>© 2023. Todos os direitos reservados.</span>
            </CopyRight>
        </Container>
    );
};
