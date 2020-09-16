import React, { useState } from 'react';
import { Helmet } from 'react-helmet';

import { Feedback } from './Feedback';

import { Container } from '../../styles/Container';
import {
    ProfileWrapper,
    ProfileImage,
    ImagePerson,
    ProfileInformation,
    InformationName,
    InformationPosition,
    InformationAbout,
    InformationButton
} from '../../styles/Profile';

import Roman from '../../assets/images/Roman.jpg';


export const Profile = () => {
    const [form, setForm] = useState(false);
    const [disabled, setDisabled] = useState('');

    const handleForm = () => {
        if (form) {
            setForm(false); 
            setDisabled('');
        } else {
            setForm(true); 
            setDisabled('disabled');
        }
    }

    return (
        <>
        {form && <Feedback onClick={handleForm} />}
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
                        Hello! <span role="img" aria-label="give-five">&#128588;</span> {'\n'}
                        I am Roman Gulamov, Front-end Developer from Saint Petersburg
                        <span role="img" aria-label="give-five">&#127969;</span> {'\n'}  
                        If you are looking for a programmer just write to me and I will gladly become a part of your team!
                    </InformationAbout>
                    <InformationButton onClick={handleForm} disabled={disabled}>Hire me</InformationButton>
                </ProfileInformation>
            </ProfileWrapper>
        </Container>
        </>
    )
}
