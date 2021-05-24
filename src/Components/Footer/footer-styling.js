import styled from 'styled-components';


export const FooterWrapper = styled.footer`
    position: fixed;
    bottom: 0;
    height: 9.5vh;
    width: 100%;
    background: #355267;
    z-index: 9999;
` 

export const FooterSocial = styled.div`
    height: 10vh;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
` 

export const SocialItem = styled.a`
    & svg path {
        transition: all 0.4s ease;
    }
    
    &:hover svg path {
        transform: scale(0.92);
    }
` 