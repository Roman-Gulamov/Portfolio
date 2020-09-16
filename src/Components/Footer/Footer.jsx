import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Container } from '../../styles/Container';
import {
    FooterWrapper,
    FooterSocial,
    SocialItem
} from '../../styles/Footer';

import { SOCIAL_LINKS } from './footerData';


export const Footer = () => {
    return (
        <FooterWrapper>
            <Container>
                <FooterSocial>
                    {SOCIAL_LINKS.map(({ name, path, icon }) =>
                        <SocialItem href={path} target='_blank' key={name}>
                            <FontAwesomeIcon icon={icon} size="2x" />
                        </SocialItem>
                    )}
                </FooterSocial>
            </Container>
        </FooterWrapper>
    )
}
