import React, { useState } from 'react';
import { 
    HashRouter as Router, 
    Switch, 
    Route, 
    Redirect } from 'react-router-dom';

import { GlobalStyle } from '../styles/GlobalStyle';
import { 
    Header, 
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


export const App = () => {
    const [isOpen, setIsOpen] = useState('');
    const toggleMenu = () => isOpen === 'open' ? setIsOpen('') : setIsOpen('open');

    return (
        <>
        <GlobalStyle /> 
        <Router>
            <Header>
                <HeaderNav>
                    <NavHumburger onClick={toggleMenu} >
                        <Line />
                        <Line />
                        <Line />
                    </NavHumburger>
                    <NavLogo>Roman Gulamov</NavLogo>
                    <NavWrapper className={isOpen}>
                        <LinksMap />
                    </NavWrapper>
                </HeaderNav>
            </Header>
            
            <Switch>
                <Route path='/profile' component={Profile}/>
                <Route path='/skills' component={Skills}/>
                <Route path='/works' component={Works}/>
                <Route path='/resume' component={Resume}/>
                <Redirect to="/profile" />
            </Switch>
        </Router>
        </>
    );
}
