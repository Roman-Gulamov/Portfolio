import React, { useState } from 'react';

import { LinksMap } from './LinksMap';

import * as S from './header-styling';



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
        <S.HeaderWrapper>
            <S.HeaderNav>
                <S.NavHumburger 
                    onClick={toggleMenu} 
                    position={isOpen === 'open' ? 'fixed' : 'absolute'}
                >
                    <S.Line />
                    <S.Line />
                    <S.Line />
                </S.NavHumburger>
                <S.NavTitle>{title}</S.NavTitle>
                <S.NavWrapper open={isOpen}>
                    <LinksMap toggleMenu={toggleMenu} />
                    <S.NavInvisible
                        open={isOpen}
                        onClick={toggleMenu}
                    />
                </S.NavWrapper>
            </S.HeaderNav>
        </S.HeaderWrapper>
        </>
    );
}
