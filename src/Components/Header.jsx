import React, { useState } from 'react';
import { 
    HashRouter as Router, 
    Switch, 
    Route, 
    Redirect } from 'react-router-dom';

import { GlobalStyle } from '../styles/GlobalStyle';
import { 
    HeaderWrapper, 
    HeaderNav,
    NavHumburger,
    Line,
    NavWrapper,
    NavLogo } from '../styles/Header';

import { LinksMap } from './LinksMap';
import { Profile } from './Profile/Profile';
import { Skills } from './Skills/Skills';
import { Works } from './Works/Works';
import { Resume } from './Resume/Resume';

import { Footer } from './Footer/Footer';

export const Header = () => {
    const [isOpen, setIsOpen] = useState('');
    const toggleMenu = () => {
        if (window.innerWidth <= 768) {
            isOpen === 'open' ? setIsOpen('') : setIsOpen('open');
        }
    }

    return (
        <>
        <GlobalStyle /> 
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

            <Switch>
                <Route path='/profile' component={Profile}/>
                <Route path='/skills' component={Skills}/>
                <Route path='/works' component={Works}/>
                <Route path='/resume' component={Resume}/>
                <Redirect to="/profile" />
            </Switch>
            
            <Footer />
        </Router>
        </>
    );
}
