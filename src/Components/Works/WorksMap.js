import React from 'react';

import { faGithub, faChrome } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
    ExamplesItem,
    ItemImg,
    ItemDescription,
    DescriptionProject,
    ProjectTitle,
    ProjectLinks,
    LinksItem,
    ItemGit
} from '../../styles/Works';


export const WorksMap = ({ worksData, animation }) => {
    return (
        worksData.map(({ id, img, git, ghPages, languageName }) =>
            <ExamplesItem key={id} animation={animation}>
                <ItemImg src={img} alt={languageName} />
                <ItemDescription>
                    <DescriptionProject>
                        <ProjectTitle>{languageName}</ProjectTitle>
                        <ProjectLinks>
                            <LinksItem>
                                <ItemGit href={git} target="_blank">
                                    <FontAwesomeIcon icon={faGithub} size="2x" />
                                </ItemGit>
                            </LinksItem>
                        {ghPages !== null &&
                            <LinksItem>
                                <ItemGit href={ghPages} target="_blank">
                                    <FontAwesomeIcon icon={faChrome} size="2x" />
                                </ItemGit>
                            </LinksItem>
                        }
                        </ProjectLinks>
                    </DescriptionProject>
                </ItemDescription>
            </ExamplesItem>
        )
    )
}
