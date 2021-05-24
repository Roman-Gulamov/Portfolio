import React from 'react';

import { faGithub, faChrome } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import * as S from './works-styling';


export const WorksMap = ({ worksData, animation }) => {
    return (
        worksData.map(({ id, img, git, ghPages, languageName }) =>
            <S.ExamplesItem key={id} animation={animation}>
                <S.ItemImg src={img} alt={languageName} />
                <S.ItemDescription>
                    <S.DescriptionProject>
                        <S.ProjectTitle>{languageName}</S.ProjectTitle>
                        <S.ProjectLinks>
                            <S.LinksItem>
                                <S.ItemGit href={git} target="_blank">
                                    <FontAwesomeIcon icon={faGithub} size="2x" />
                                </S.ItemGit>
                            </S.LinksItem>
                        {ghPages !== null &&
                            <S.LinksItem>
                                <S.ItemGit href={ghPages} target="_blank">
                                    <FontAwesomeIcon icon={faChrome} size="2x" />
                                </S.ItemGit>
                            </S.LinksItem>
                        }
                        </S.ProjectLinks>
                    </S.DescriptionProject>
                </S.ItemDescription>
            </S.ExamplesItem>
        )
    )
}
