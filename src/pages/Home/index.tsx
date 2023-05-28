import React from "react";
import { SideContainer, SideContent, Section } from "../../components";
import { Container } from "./styles";
import {
    AboutSection,
    ExperienceSection,
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
                <div id="skills">
                    <SkillsSection />
                </div>
            </Section>
            <Section>
                <div id="experience">
                    <ExperienceSection />
                </div>
            </Section>
            <Section>
                <div id="projects">
                    <TopProjectsSection />
                </div>
            </Section>
            <Section>
                <div id="services">
                    <ServicesSection />
                </div>
            </Section>
            <SideContainer>
                <SideContent />
            </SideContainer>
        </Container>
    );
};
