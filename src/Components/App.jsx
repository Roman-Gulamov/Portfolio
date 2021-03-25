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
                <Route exact path='/profile' component={Profile}/>
                <Route exact path='/skills' component={Skills}/>
                <Route exact path='/works' component={Works}/>
                <Route exact path='/resume' component={Resume}/>
                <Route exact path='/contact' component={Feedback}/>
                <Redirect to="/profile" />
            </Switch>
            
            <Footer />
        </Router> 
        </>
    )
}
