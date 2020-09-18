import React from 'react';
import { Helmet } from 'react-helmet';
import { 
    HashRouter as Router,
    NavLink 
} from 'react-router-dom';

import { Container } from '../../styles/Container';
import { Button } from '../../styles/Button';
import {
    ProfileWrapper,
    ProfileImage,
    ImagePerson,
    ProfileInformation,
    InformationName,
    InformationPosition,
    InformationAbout
} from '../../styles/Profile';

import Roman from '../../assets/images/Roman.jpg';


export const Profile = () => {
    return (
        <>
        <Helmet>
            <meta charSet="utf-8" />
            <title>Portfolio | Profile</title>
            <meta name="description" content="Profile" />
            <link rel="canonical" href="https://roman-gulamov.github.io/Portfolio/#/profile" />
        </Helmet>
        <Router>
            <Container>
                <ProfileWrapper>
                    <ProfileImage>
                        <ImagePerson src={Roman} alt="Roman" />
                    </ProfileImage>
                    <ProfileInformation>
                        <InformationName>
                            Roman Gulamov
                            <InformationPosition>
                                Front-end Developer
                            </InformationPosition>
                        </InformationName>
                        <InformationAbout>
                            Hello! <span role="img" aria-label="give-five">&#128588;</span> {'\n'}
                            I am Roman Gulamov, Front-end Developer from Saint Petersburg
                            <span role="img" aria-label="give-five">&#127969;</span> {'\n'}  
                            If you are looking for a programmer just write to me and I will gladly become a part of your team!
                        </InformationAbout>
                        <NavLink to='/contact'>
                            <Button>
                                Hire me
                            </Button>
                        </NavLink>
                    </ProfileInformation>
                </ProfileWrapper>
            </Container>
        </Router>
        </>
    )
}
