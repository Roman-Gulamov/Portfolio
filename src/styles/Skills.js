import styled from 'styled-components';
import { progress } from './keyframes';


export const SkillsWrapper = styled.main`
    height: 100%;
    display: flex;
    flex-direction: column;
    margin: 0.8em 0 15vh;
` 

export const SkillsItem = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin: 0.15em 0;

    @media screen and (max-width: 761px) {
        margin: 0.35em 0;
    }
` 

export const SkillsImg = styled.div`
    width: 16%;
    text-align: end;
` 

export const ImgLanguage = styled.img`
    width: 50%;
    height: auto;

    @media screen and (max-width: 761px) {
        width: 100%; 
    }
`

export const SkillsProgress = styled.div`
    width: 70%;
` 

export const ProgressInformation = styled.div`
    width: 80%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.5em;
    
    @media screen and (max-width: 500px) {
        width: 100%;
    }
` 

export const ProgressTitle = styled.h2`
    @media screen and (max-width: 500px) {
        font-size: 0.7em; 
    }
` 

export const ProgressProcent = styled.div`
    font-size: 0.8em;
` 

export const ProgressBar = styled.div`
    width: 80%;
    height: 0.55em;
    position: relative;
    border: none;
    border-radius: 3em;
    background-color: #fff;
    
    @media screen and (max-width: 500px) {
        width: 100%;
    }

    &::after {
        content: "";
        height: 100%;
        position: absolute;
        top: 0;
        left: 0%;
        background: ${props => props.background || 'yellow'};
        border-radius: 3em;
        animation: ${progress} 2s ease-in 1 forwards;
    }
` 