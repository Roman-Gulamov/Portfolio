import React from 'react';
import { Helmet } from 'react-helmet';

import { WorksMap } from './WorksMap';

import { Container } from '../../styles/Container';
import { 
    WorksWrapper,
    WorksSort,
    SortWrapper,
    SortLanguage,
    WorksExamples
} from '../../styles/Works';


export const Works = () => {
    return (
        <>
        <Helmet>
            <meta charSet="utf-8" />
            <title>Portfolio | Works</title>
            <meta name="description" content="Works" />
            <link rel="canonical" href="https://roman-gulamov.github.io/Portfolio/#/works" />
        </Helmet>
            <WorksWrapper>
                <Container>
                    <WorksSort>
                        <SortWrapper>
                            <SortLanguage>All</SortLanguage>
                            <SortLanguage>React</SortLanguage>
                            <SortLanguage>jQuery</SortLanguage>
                            <SortLanguage>TypeScript</SortLanguage>
                        </SortWrapper>
                    </WorksSort>
                    <WorksExamples>
                        <WorksMap />
                    </WorksExamples>
                </Container>
            </WorksWrapper>
        </>
    )
}
