import React from 'react';
import { 
    HashRouter as Router, 
    Switch, 
    Route, 
    Redirect } from 'react-router-dom';

import { GlobalStyle } from '../styles/GlobalStyle';

import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';

import { Profile } from './Profile/Profile';
import { Skills } from './Skills/Skills';
import { Works } from './Works/Works';
import { Resume } from './Resume/Resume';
import { Feedback } from './Feedback/Feedback';


export const App = () => {
    return (
        <>
        <GlobalStyle />
        <Router>
            <Header />
            
            <Switch>
                <Route path='/profile' component={Profile}/>
                <Route path='/skills' component={Skills}/>
                <Route path='/works' component={Works}/>
                <Route path='/resume' component={Resume}/>
                <Route path='/contact' component={Feedback}/>
                <Redirect to="/profile" />
            </Switch>
            
            <Footer />
        </Router> 
        </>
    )
}
