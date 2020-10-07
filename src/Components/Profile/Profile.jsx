import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import { Container } from '../../styles/Container';
import { Button } from '../../styles/Button';
import {
    ProfileWrapper,
    ProfileImage,
    ImagePerson,
    ProfileInformation,
    InformationName,
    InformationPosition,
    InformationAbout,
    AboutGreeting
} from '../../styles/Profile';

import Roman from '../../assets/images/profile/Roman.jpg';


export const Profile = () => {
    return (
        <>
        <Helmet>
            <meta charSet="utf-8" />
            <title>Portfolio | Profile</title>
            <meta name="description" content="Profile" />
            <link rel="canonical" href="https://roman-gulamov.github.io/Portfolio/#/profile" />
        </Helmet>
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
                        <AboutGreeting>
                            <span role="img" aria-label="give-five">Hello! &#128588;</span> {'\n'}
                        </AboutGreeting>
                        <span role="img" aria-label="give-five">
                            I am Roman Gulamov, Front-end Developer from Saint Petersburg &#127969;
                        </span> {'\n'}  
                        If you are looking for a programmer just write to me and I will gladly become a part of your team!
                    </InformationAbout>
                    <Link to='/contact'>
                        <Button>Hire me</Button>
                    </Link>
                </ProfileInformation>
            </ProfileWrapper>
        </Container>
        </>
    )
}
