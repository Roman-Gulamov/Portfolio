import styled from 'styled-components';
import * as K from '../../styles/keyframes';


export const ResumeWrapper = styled.main`
    height: 58vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    margin: 1.8em 0em 15vh;
    animation: 1s linear ${K.fadeInAnimations};
` 

export const ResumeTitle = styled.h2`
    font-size: 2.5em;
    font-weight: 400;
    text-align: center;
    text-transform: uppercase;
    color: #2BCE6C;
` 

export const ResumeDescription = styled.p`
    font-size: 1.2em;
    line-height: 1.3;
    white-space: pre-line;

    @media screen and (max-width: 500px) {
        font-size: 1em;
    }
` 

export const ResumeDownload = styled.div`
    width: 85%;
    height: 20%;
    padding: 0 15%;

    @media screen and (max-width: 991px) {
        padding: 0;
        width: 100%;
    }
` 

export const DownloadButton = styled.a`
    height: 100%;
` 