import React, { useState } from 'react';

import { LinksMap } from './LinksMap';

import { 
    HeaderWrapper, 
    HeaderNav,
    NavHumburger,
    Line,
    NavWrapper,
    NavInvisible,
    NavTitle } from '../../styles/Header';



export const Header = () => {
    const [isOpen, setIsOpen] = useState('');
    const [title, setTitle] = useState(window.location.hash.replace('#/', ''));

    const toggleMenu = () => {
        if (window.innerWidth <= 768) {
            isOpen === 'open' ? setIsOpen('') : setIsOpen('open');
        }
    }

    const handleTitle = () => {
        setTitle(window.location.hash.replace('#/', ''))
    }

    window.onhashchange = () => handleTitle();


    return (
        <>
        <HeaderWrapper>
            <HeaderNav>
                <NavHumburger 
                    onClick={toggleMenu} 
                    position={isOpen === 'open' ? 'fixed' : 'absolute'}
                >
                    <Line />
                    <Line />
                    <Line />
                </NavHumburger>
                <NavTitle>{title}</NavTitle>
                <NavWrapper open={isOpen}>
                    <LinksMap toggleMenu={toggleMenu} />
                    <NavInvisible
                        open={isOpen}
                        onClick={toggleMenu}
                    />
                </NavWrapper>
            </HeaderNav>
        </HeaderWrapper>
        </>
    );
}
