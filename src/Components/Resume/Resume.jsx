import React from 'react';
import { Helmet } from 'react-helmet';

import { Container } from '../../styles/Container';
import { Button } from '../../styles/Button';
import {
    ResumeWrapper,
    ResumeTitle,
    ResumeDescription,
    ResumeDownload,
    DownloadButton
} from '../../styles/Resume';


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
            <ResumeWrapper>
                <ResumeTitle>My resume</ResumeTitle>
                <ResumeDescription>
                    You can see my resume for your references, and I hope {'\n'}
                    that we can meet very soon 
                    <span role="img" aria-label="handshake">&#129309;</span>
                </ResumeDescription>
                <ResumeDownload>
                    <DownloadButton href="https://yadi.sk/i/U48lJNir0w3qJg" target="_blank">
                        <Button>Show Resume</Button>
                    </DownloadButton>
                </ResumeDownload>
            </ResumeWrapper>
        </Container>
        </>
    )
}
