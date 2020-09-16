import React from 'react';

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
    return (
        <Container>
            <ProfileWrapper>
                <ProfileImage>
                    <ImagePerson src={Roman} />
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

                    <InformationButton>Hire me</InformationButton>
                </ProfileInformation>
            </ProfileWrapper>
        </Container>
    )
}
