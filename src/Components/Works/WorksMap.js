import React from 'react';

import { WORKS_DATA } from './WorksData';

import { 
    ExamplesItem,
    ItemImg,
    ItemDescription,
    DescriptionText,
    TextTitle
} from '../../styles/Works';


export const WorksMap = () => {
    return (
        <>
        {WORKS_DATA.map(({ name, img, git, ghPages, language }) =>
            <ExamplesItem key={name}>
                <ItemImg src={img} alt='name' />
                <ItemDescription>
                    <DescriptionText>
                        <TextTitle>{name}</TextTitle>
                    </DescriptionText>
                </ItemDescription>
            </ExamplesItem>
        )}
        </>
    )
}
