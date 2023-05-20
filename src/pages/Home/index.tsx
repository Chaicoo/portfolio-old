import React from "react";
import { SideContainer, SideContent, Section } from "../../components";
import { Container } from "./styles";
import {
    AboutSection,
    ServicesSection,
    SkillsSection,
    TopProjectsSection,
} from "./components";

export const Home: React.FC = () => {
    return (
        <Container>
            <Section>
                <AboutSection />
            </Section>
            <Section>
                <SkillsSection />
            </Section>
            <Section>
                <TopProjectsSection />
            </Section>
            <Section>
                <ServicesSection />
            </Section>
            <SideContainer>
                <SideContent />
            </SideContainer>
        </Container>
    );
};
