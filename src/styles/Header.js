import styled from 'styled-components';


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
        transition: all 1s ease-out;
        pointer-events: none;
    }

    &.open {
        clip-path: circle(1000px at 90% -10%);
        pointer-events: all;
    }
`

export const NavLogo = styled.h1`
    display: none;

    @media screen and (max-width: 768px) {
        font-size: 1.6em;
        display: flex;
        font-family: 'Architects Daughter';
        align-items: center;
        margin-right: 1em;
        letter-spacing: 5px;
        user-select: none;
    }

    @media screen and (max-width: 400px) {
        font-size: 1.2em;
        margin-right: 1.4em;
    }

    @media screen and (max-width: 281px) {
        font-size: 0.9em;
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