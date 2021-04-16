import { keyframes } from 'styled-components';
import { rollIn, bounceInLeft, fadeIn } from 'react-animations';


export const rollInAnimations = keyframes`
    ${rollIn}
`;

export const bounceInLeftAnimations = keyframes`
    ${bounceInLeft}
`;

export const fadeInAnimations = keyframes`
    ${fadeIn}
`;

export const progress = (props) => { 
    return keyframes`
        from {
            width: 10%;
        }
        to {
            width: ${props.procent || '0%'};
        }
    `
}

export const rotate = () => { 
    return keyframes`
        100% {
            transform: rotate(360deg);
        }
    `
}

export const stroke = (props) => { 
    return keyframes`
        ${props.procent || '0%'} {
            stroke-dashoffset: 0;
        }
    `
}

export const scale = () => { 
    return keyframes`
        0%, 100% {
            transform: none;
        }
        50% {
            transform: scale3d(1.1, 1.1, 1);
        }
    `
}

export const fill = () => { 
    return keyframes`
        100% {
            box-shadow: inset 0px 0px 0px 30px #4bb71b;
        }
    `
}

export const circle = () => { 
    return keyframes`
        0% {
            stroke-dasharray: 0, 260.75219024795285px;
            stroke-dashoffset: 0;
        }
        35% {
            stroke-dasharray: 120px, 120px;
            stroke-dashoffset: -120px;
        }
        70% {
            stroke-dasharray: 0, 260.75219024795285px;
            stroke-dashoffset: -260.75219024795285px;
        }
        100% {
            stroke-dasharray: 260.75219024795285px, 0;
            stroke-dashoffset: -260.75219024795285px;
        }
    `
}