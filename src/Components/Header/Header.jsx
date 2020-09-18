import React, { useState } from 'react';
import { HashRouter as Router } from 'react-router-dom';

import { LinksMap } from './LinksMap';

import { 
    HeaderWrapper, 
    HeaderNav,
    NavHumburger,
    Line,
    NavWrapper,
    NavLogo } from '../../styles/Header';


export const Header = () => {
    const [isOpen, setIsOpen] = useState('');
    
    const toggleMenu = () => {
        if (window.innerWidth <= 768) {
            isOpen === 'open' ? setIsOpen('') : setIsOpen('open');
        }
    }

    return (
        <>
        <Router>
            <HeaderWrapper>
                <HeaderNav>
                    <NavHumburger onClick={toggleMenu} >
                        <Line />
                        <Line />
                        <Line />
                    </NavHumburger>
                    <NavLogo>Roman Gulamov</NavLogo>
                    <NavWrapper className={isOpen}>
                        <LinksMap onClick={toggleMenu}/>
                    </NavWrapper>
                </HeaderNav>
            </HeaderWrapper>
        </Router>
        </>
    );
}
