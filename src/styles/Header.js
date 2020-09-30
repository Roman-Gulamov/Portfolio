import styled, { css } from 'styled-components';


export const HeaderWrapper = styled.header`
    height: 14vh;
    background: #5b78c7;
` 

export const HeaderNav = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    height: 100%;
` 

export const NavHumburger = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        position: ${props => props.position};
        display: block;
        cursor: pointer;
        right: 5%;
        top: 7%;
        transform: translate(-5%, -50%);
        z-index: 2;
    }
`

export const Line = styled.div`
    @media screen and (max-width: 768px) {
        width: 1.4em;
        height: 0.13em;
        background: white;
        margin: 0.3em;
        z-index: 9999;
    }
`

export const NavWrapper = styled.ul`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    z-index: 1;

    @media screen and (max-width: 768px) {
        position: fixed;
        height: 60vh;
        width: 100%;
        align-items: center;
        flex-direction: column;
        background: #5b78c7;
        clip-path: circle(10px at 90% -10%);
        transition: all 1.2s ease-out;
        pointer-events: none;

        ${props => props.open && css`
            clip-path: circle(1203px at 90% -10%);
            pointer-events: all;
        `}
    }
`

export const NavInvisible = styled.div`
    ${props => props.open && css`
        width: 100%;
        height: 48em;
        position: absolute;
        top: 100%;
        opacity: 0.2;
        background: black;
        cursor: pointer;
        z-index: -1;
    `}
`

export const NavTitle = styled.h1`
    display: none;

    @media screen and (max-width: 768px) {
        display: flex;
        align-items: center;
        font-size: 2em;
        font-family: 'Architects Daughter';
        letter-spacing: 5px;
        text-transform: capitalize;
        user-select: none;
    }
`

export const NavItem = styled.li`
    display: flex;
    height: 100%;
    align-items: center;
    width: 8.4em;

    & a {
        width: 100%;
        height: 70%;
        display: flex;
        align-items: center;
        justify-content: space-around;
        padding: 0px 15px;
        border-radius: 30px;
        text-decoration: none;
        transition: all 0.4s ease;

        &:hover {
            background: #203748;
            transform: scale(0.95);
        }
    }
` 