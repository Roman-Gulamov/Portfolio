import styled from 'styled-components';


export const WorksWrapper = styled.main`
    display: flex;
    flex-direction: column;
    margin: 0.8em 0 15vh;
`

export const WorksSort = styled.div`
    text-align: center;
    margin-bottom: 0.6em;
` 

export const SortWrapper = styled.ul`
    display: inline-flex;
    max-width: 100%;
    border: 1px dashed black;
    border-radius: 2em
` 

export const SortLanguage = styled.li`
    padding: 0.7em;
    cursor: pointer;
    border-radius: inherit;
    background: ${props => props.activeClass ?  '#5b78c7' : 'none'};
    transition: all .3s ease;
    
    @media screen and (max-width: 500px) {
        padding: 1.5em;
        font-size: 0.6em;
    }

    @media screen and (max-width: 400px) {
        padding: 1em;
    }

    &:hover {
        background: #5b78c7;
    }
` 

export const WorksExamples = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
` 

export const ExamplesItem = styled.div`
    position: relative;
    width: 21em;
    height: auto;
    margin: 1em;
    cursor: pointer;
` 

export const ItemImg = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 8%;
` 

export const ItemDescription = styled.div`
    position: absolute;
    top: 0%;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    border-radius: 8%;
    transition: all .4s ease;

    &:hover {
        background: #000;
        opacity: 0.9;
    }
` 

export const DescriptionProject = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
` 

export const ProjectTitle = styled.h2`
    color: #5b78c7;
    font-size: 1.1em;

    @media screen and (max-width: 500px) {
        font-size: 0.8em;
    }
` 

export const ProjectLinks = styled.div`
    margin-top: 1em;
`

export const LinksGit = styled.a`
    padding: 1em;

    & svg {
        transition: all .4s ease;

        &:hover {
            transform: scale(0.9);
        }
    }
`