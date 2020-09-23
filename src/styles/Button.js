import styled, { css } from 'styled-components';

export const Button = styled.button`
    position: relative;
    width: 100%;
    height: 100%;
    cursor: pointer;
    border: none;
    border-radius: 20px;
    background: #39D084;
    text-transform: uppercase;
    transition: all 0.4s ease;
    z-index: 0;

    &:hover, &:active {
        color: #000;
    }

    &:active {
        transform: scale(0.98);
    }

    &:after {
        content: "";
        position: absolute;
        top: 0;
        left: 35%;
        width: 20%;
        height: 100%;
        border-radius: 20px;
        transition: all 0.4s ease;
        z-index: -1;
    }

    &:hover:after {
        width: 100%;
        left: 0;
        background: #39D024;
    }

    ${props => props.feedback && css`
        height: 2.5em;
        margin: 0.5em auto 0;
    `}
` 