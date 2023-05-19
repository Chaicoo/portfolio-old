import React from "react";

import { Container, Wrapper } from "./styles";

export const AboutSection: React.FC = () => {
    return (
        <Container>
            <Wrapper>
                <div className="terminal">
                    <div id="bar">
                        <div id="red"></div>
                        <div id="yellow"></div>
                        <div id="green"></div>
                    </div>
                    <div id="screen">
                        <p className="prompt">
                            <span className="user">chico</span>
                            <span className="at">@</span>
                            <span className="dir">chico:</span>
                            <span className="dir">~</span>
                            <span className="dollar">$</span>
                            <span className="command"> cat /Projetos/Potifolio/about.txt</span>
                        </p>
                        <p className="font">
                            Me chamo <strong>Francisco</strong> ou{" "}
                            <strong>Chico</strong>, tenho 21 anos e estou imerso
                            na computação desde os meus 15 anos, quando adentrei
                            no curso técnico de Redes de Computadores, onde tive
                            meu primeiro contato e me apaixonei pela
                            programação. Atualmente curso graduação em{" "}
                            <strong>Ciência da Computação</strong>, onde tive
                            contato com diversas linguagens e tecnologias, a
                            cerca de 1 ano eu comecei a me especializar no
                            desenvolvimento <strong>Front-End</strong> com{" "}
                            <strong>JavaScript</strong>, onde me encontrei no
                            ambiente de desenvolvimento <strong>ReactJs</strong>
                            , desde então tenho me especializado nessa
                            biblioteca e em seus frameworks mais modernos,
                            possuo conhecimentos com as práticas mais escaláveis
                            em projetos <strong>Front-End</strong>, como uso de
                            bibliotecas de estilização e padrões de projeto. Sou
                            apaixonado pelo processo de criação de aplicações
                            intuitivas e modernas, acredito que por meio da{" "}
                            <strong>programação</strong> eu posso construir
                            produtos e serviços que facilitem a vida das pessoas
                            e tornem mais prazerosa a experiência de usar a
                            internet.
                        </p>
                        <p className="prompt">
                            <span className="user">chico</span>
                            <span className="at">@</span>
                            <span className="dir">chico:</span>
                            <span className="dir">~</span>
                            <span className="dollar">$</span>
                        </p>
                    </div>
                </div>
            </Wrapper>
        </Container>
    );
};
