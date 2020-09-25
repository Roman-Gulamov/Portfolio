/* eslint-disable array-callback-return */
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';

import { WORKS_DATA, LANGUAGE_DATA } from './WorksData';
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
    const [newData, setNewData] = useState(WORKS_DATA);
    const [activeClass, setActiveClass] = useState('');
    const worksData = WORKS_DATA;

    const filterWorks = (language) => {
        setActiveClass(language);
        setNewData([]);

        worksData.map((data) => {
            const languageName = data.languageName.split('/');

            if (languageName.some(name => name === language)) {
                setNewData(oldData => [...oldData, data]);
            } else if (language === 'All') {
                setNewData(WORKS_DATA);
            } else {
                return false;
            }
        })
    }

    
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
                        {LANGUAGE_DATA.map(({ id, language }) =>
                            <SortLanguage
                                activeClass={activeClass === language ? activeClass : null}
                                key={id} 
                                onClick={() => filterWorks(language)}
                            >   {language}
                            </SortLanguage>
                        )}
                    </SortWrapper>
                </WorksSort>
                <WorksExamples>
                    <WorksMap worksData={newData} />
                </WorksExamples>
                </Container>
            </WorksWrapper>
        </>
    )
}
