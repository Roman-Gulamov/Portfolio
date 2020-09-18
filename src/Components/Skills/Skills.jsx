import React from 'react';
import { Helmet } from 'react-helmet';

import { Container } from '../../styles/Container';
import { SkillsWrapper } from '../../styles/Skills';
import { SkillsMap } from './SkillsMap';


export const Skills = () => {
    return (
        <>
        <Helmet>
            <meta charSet="utf-8" />
            <title>Portfolio | Skills</title>
            <meta name="description" content="Skills" />
            <link rel="canonical" href="https://roman-gulamov.github.io/Portfolio/#/skills" />
        </Helmet>
        <Container>
            <SkillsWrapper>
                <SkillsMap />
            </SkillsWrapper>
        </Container>
        </>
    )
}
