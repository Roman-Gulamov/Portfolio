import React from 'react';

import { SKILLS_DATA } from './SkillsData';
import {
    SkillsItem,
    SkillsImg,
    ImgLanguage,
    SkillsProgress,
    ProgressInformation,
    ProgressTitle,
    ProgressProcent,
    ProgressBar
} from '../../styles/Skills';


export const SkillsMap = () => {
    return (
        <>
        {SKILLS_DATA.map(({ id, name, src, procent, background }) =>
            <SkillsItem key={id}>
                <SkillsImg>
                    <ImgLanguage src={src} alt={name}/>
                </SkillsImg>
                <SkillsProgress>
                    <ProgressInformation>
                        <ProgressTitle>{name}</ProgressTitle>
                        <ProgressProcent>{procent}</ProgressProcent>
                    </ProgressInformation>
                    <ProgressBar 
                        procent={procent} 
                        background={background} 
                    />
                </SkillsProgress>
            </SkillsItem>
        )}
        </>
    )
}
