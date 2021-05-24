import React from 'react';
import { NavLink } from 'react-router-dom';

import * as S from './header-styling';

import { faBriefcase, faUser, faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NAV_LINKS = [
    {
        path: 'profile',
        avatar: faUser,
        title: 'Profile'
    },
    {
        path: 'skills',
        avatar: faReact,
        title: 'Skills'
    },
    {
        path: 'works',
        avatar: faBriefcase,
        title: 'Works'
    },
    {
        path: 'resume',
        avatar: faFilePdf,
        title: 'Resume'
    }
]

export const LinksMap = ({ toggleMenu }) => {
    return (
        <> 
        {NAV_LINKS.map(({ path, avatar, title }) =>
            <S.NavItem key={title} onClick={toggleMenu}>
                <NavLink to={path} activeStyle={{ background: '#203748' }}>
                    <FontAwesomeIcon icon={avatar} size="lg" />
                    <span>{title}</span>
                </NavLink>
            </S.NavItem>
        )}
        </>
    )
}