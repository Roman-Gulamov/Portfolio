import React from 'react';
import { Helmet } from 'react-helmet';

import { Container } from '../../styles/Container';
import { Button } from '../../styles/Button';
import * as S from './resume-styling';


export const Resume = () => {
    return (
        <>
        <Helmet>
            <meta charSet="utf-8" />
            <title>Portfolio | Resume</title>
            <meta name="description" content="Resume" />
            <link rel="canonical" href="https://roman-gulamov.github.io/Portfolio/#/resume" />
        </Helmet>
        <Container>
            <S.ResumeWrapper>
                <S.ResumeTitle>My resume</S.ResumeTitle>
                <S.ResumeDescription>
                    You can see my resume for your references, and I hope {'\n'}
                    that we can meet very soon 
                    <span role="img" aria-label="handshake">&#129309;</span>
                </S.ResumeDescription>
                <S.ResumeDownload>
                    <S.DownloadButton href="https://spb.hh.ru/resume/2a00967dff07b1356f0039ed1f564e32555368" target="_blank">
                        <Button>Show Resume</Button>
                    </S.DownloadButton>
                </S.ResumeDownload>
            </S.ResumeWrapper>
        </Container>
        </>
    )
}
