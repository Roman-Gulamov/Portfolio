import React from 'react';
import { Helmet } from 'react-helmet';

// import { Container } from '../../styles/Container';
import {
    ResumeWrapper,
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
        <ResumeWrapper>
        </ResumeWrapper>
        </>
    )
}
