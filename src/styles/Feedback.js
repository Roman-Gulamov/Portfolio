import styled, { keyframes, css } from 'styled-components';

const loading = () => { 
    return keyframes`
        100% {
            transform: rotate(360deg);
        }
    `
} //! Перенеси все кеймфреймы в отдельный файл и то же самое сделай с свгшками

const stroke = () => { 
    return keyframes`
        100% {
            stroke-dashoffset: 0;
        }
    `
}

const scale = () => { 
    return keyframes`
        0%, 100% {
            transform: none;
        }

        50% {
            transform: scale3d(1.1, 1.1, 1);
        }
    `
}

const fill = () => { 
    return keyframes`
        100% {
            box-shadow: inset 0px 0px 0px 30px #4bb71b;
        }
    `
}

const errorLine = () => { 
    return keyframes`
        0% { 
            stroke-dashoffset: 0; 
        }
    `
}

const errorCircle = () => { 
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

export const FeedbackWrapper = styled.main`
    margin: 1.2em 0em 15vh;
` 

export const FeedbackForm = styled.div`
    position: relative;
    width: 40%;
    margin: 0 auto;

    @media screen and (max-width: 1000px) {
        width: 80%;
    }
` 

export const FormItem = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 1.3em;

    & textarea {
        resize: none;
        height: 5.3em;
    }

    & input, & textarea {
        padding: 0.9em;
        font-size: 0.7em;
        border-radius: 2em;
        border: none;
        background-color: #E9EFF6;
        color: #000000c9;

        &:focus {
            box-shadow: 0 0 2pt 2pt #fc6c18;
        }
    }

    & span {
        position: absolute;
        top: 106%;
        left: 4%;
        color: #fc6c18;
        font-size: 0.7em;

        @media screen and (max-width: 500px) {
            font-size: 0.57em;
        }

        @media screen and (max-width: 768px) {
            font-size: 0.43em;
        }
    }
` 

export const FormLabel = styled.label`
    text-align: center;
    line-height: 1.6;
` 

export const FormPending = styled.div`
    display: none;
    position: absolute;
    top: 25%;
    left: 30%;

    ${props => props.loading && css`
        display: block;
        width: 8em;
        height: 8em;
        border: 12px solid white;
        border-top-color: #5b78c7;
        border-radius: 100%;
        animation: ${loading} linear .7s infinite;
    `}

    ${props => props.success && css`
        display: block;
    `}

    ${props => props.error && css`
        display: block;
    `}
` 

export const PendingSuccess = styled.svg`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    display: block;
    stroke-width: 2;
    stroke: #4bb71b;
    stroke-miterlimit: 10;
    box-shadow: inset 0px 0px 0px #4bb71b;
    animation: ${fill} .4s ease-in-out .4s forwards, ${scale} .3s ease-in-out .9s both;
    position: relative;
    top: 5px;
    right: 5px;
    margin: 0 auto;
` 

export const SuccessCircle = styled.circle`
    stroke-dasharray: 166;
    stroke-dashoffset: 166;
    stroke-width: 2;
    stroke-miterlimit: 10;
    stroke: #4bb71b;
    fill: #fff;
    animation: ${stroke} 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards;
` 

export const SuccessCheck = styled.path`
    transform-origin: 50% 50%;
    stroke-dasharray: 48;
    stroke-dashoffset: 48;
    animation: ${stroke} 0.3s cubic-bezier(0.65, 0, 0.45, 1) 0.8s forwards;
` 


export const ErrorCircle = styled.circle`
    stroke-dasharray: 260.75219024795285px, 260.75219024795285px;
	stroke-dashoffset: 260.75219024795285px;
	animation: ${errorCircle} 1.5s cubic-bezier(0.65, 0, 0.45, 1);
` 

export const ErrorLine = styled.path`
	stroke-dasharray: 54px 55px;
	stroke-dashoffset: 55px;
	stroke-linecap: round;
    animation: ${errorLine} .15s 1.5s cubic-bezier(0.65, 0, 0.45, 1) both;
    
    ${props => props.two && css`
        animation: ${errorLine} .2s 1s cubic-bezier(0.65, 0, 0.45, 1) both;
    `}
` 