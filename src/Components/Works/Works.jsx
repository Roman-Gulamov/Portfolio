import React, { useState } from 'react';
import { Helmet } from 'react-helmet';

import { WORKS_DATA, LANGUAGE_DATA } from './WorksData';
import { WorksMap } from './WorksMap';

import { Container } from '../../styles/Container';
import * as S from './works-styling';


export const Works = () => {
    const [newData, setNewData] = useState(WORKS_DATA);
    const [activeClass, setActiveClass] = useState('');
    const [animation, setAnimation] = useState(true);
    const worksData = WORKS_DATA;

    const filterWorks = (language) => {
        setActiveClass(language);
        setNewData([]);
        setAnimation(false);

        setTimeout(() => {
            setAnimation(true);
        }, 1);
        
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

    const searchActive = (language) => {
        if (activeClass === "" && language === "All") {
            return "All"
        } else if (activeClass === language) {
            return activeClass
        }
    }
    
    return (
        <>
        <Helmet>
            <meta charSet="utf-8" />
            <title>Portfolio | Works</title>
            <meta name="description" content="Works" />
            <link rel="canonical" href="https://roman-gulamov.github.io/Portfolio/#/works" />
        </Helmet>
            <S.WorksWrapper>
                <Container>
                <S.WorksSort>
                    <S.SortWrapper>
                        {LANGUAGE_DATA.map(({ id, language }) =>
                            <S.SortLanguage
                                activeClass={searchActive(language)}
                                key={id} 
                                onClick={() => filterWorks(language)}
                            >   {language}
                            </S.SortLanguage>
                        )}
                    </S.SortWrapper>
                </S.WorksSort>
                <S.WorksExamples>
                    <WorksMap worksData={newData} animation={animation} />
                </S.WorksExamples>
                </Container>
            </S.WorksWrapper>
        </>
    )
}
