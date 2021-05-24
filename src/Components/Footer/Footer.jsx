import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Container } from '../../styles/Container';
import * as S from './footer-styling';

import { SOCIAL_LINKS } from './footerData';


export const Footer = () => {
    return (
        <S.FooterWrapper>
            <Container>
                <S.FooterSocial>
                    {SOCIAL_LINKS.map(({ name, path, icon }) =>
                        <S.SocialItem 
                            key={name}
                            href={path} 
                            target='_blank' 
                        >
                            <FontAwesomeIcon icon={icon} size="2x" />
                        </S.SocialItem>
                    )}
                </S.FooterSocial>
            </Container>
        </S.FooterWrapper>
    )
}
