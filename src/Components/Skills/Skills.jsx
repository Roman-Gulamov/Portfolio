import React from 'react';
import { Helmet } from 'react-helmet';

import { SkillsMap } from './SkillsMap';

import { Container } from '../../styles/Container';
import * as S from './skills-styling';


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
            <S.SkillsWrapper>
                <SkillsMap />
            </S.SkillsWrapper>
        </Container>
        </>
    )
}
