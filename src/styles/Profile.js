import styled from 'styled-components';


export const ProfileWrapper = styled.main`
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin: 1.8em 0em 15vh;
` 

export const ProfileImage = styled.div`
    width: 15em;

    @media screen and (max-width: 991px) {
        width: 13em;
    }
    
    @media screen and (max-width: 500px) {
        width: 10em;
    }
`

export const ImagePerson = styled.img`
    width: 100%;    
    height: auto;
    border-radius: 60px;
`

export const ProfileInformation = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    font-weight: normal;

    @media screen and (max-width: 991px) {
        width: 100%;
    }

    & a {
        width: 13em;
        height: 2.5em;
        margin: 0.5em auto 0;
    }
` 

export const InformationName = styled.h1`
    font-size: 1.5em;
    line-height: 1.3;
    font-weight: bold;
    color: #2BCE6C;

    @media screen and (max-width: 991px) {
        text-align: center;
    }
` 

export const InformationPosition = styled.span`
    display: block;
    font-weight: normal;
    margin-bottom: 1em;
` 

export const InformationAbout = styled.p`
    white-space: pre-line;
    font-size: 1em;
    line-height: 1.6;

    @media screen and (max-width: 500px) {
        font-size: 0.9em;
    }
`