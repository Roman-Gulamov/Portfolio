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
    transition: all .3s ease;
    
    @media screen and (max-width: 500px) {
        padding: 1em;
        font-size: 0.6em;
    }

    &:hover {
        background: green;
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
        background: black;
        opacity: 0.8;
    }
` 

export const DescriptionText = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
` 

export const TextTitle = styled.h2`
    color: green;
    font-size: 2em;
` 