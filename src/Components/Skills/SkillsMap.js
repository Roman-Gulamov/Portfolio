import React from 'react';

import { SKILLS_DATA } from './SkillsData';
import * as S from './skills-styling';


export const SkillsMap = () => {
    return (
        <>
        {SKILLS_DATA.map(({ id, name, src, procent, background }) =>
            <S.SkillsItem key={id}>
                <S.SkillsImg>
                    <S.ImgLanguage src={src} alt={name}/>
                </S.SkillsImg>
                <S.SkillsProgress>
                    <S.ProgressInformation>
                        <S.ProgressTitle>{name}</S.ProgressTitle>
                        <S.ProgressProcent>{procent}</S.ProgressProcent>
                    </S.ProgressInformation>
                    <S.ProgressBar 
                        procent={procent} 
                        background={background} 
                    />
                </S.SkillsProgress>
            </S.SkillsItem>
        )}
        </>
    )
}
