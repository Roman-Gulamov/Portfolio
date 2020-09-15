import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    *, *:before, *:after {
        box-sizing: border-box;
        font-family: 'Kufam';
        font-size: 21px;
        line-height: 1.2;
        color: white;
        outline: none;
    }

    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
    }

    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }

    a:active {
        color: inherit;
    }

    ol, ul {
        list-style: none;
    }

    body {
        &::before {
            content: ' ';
            height: 100%;
            width: 100%;
            position: fixed;
            top: 0;
            left: 0;
            will-change: transform;
            z-index: -1;
            background-color: #203748;
        }
        
        &::-webkit-scrollbar { 
            width: 10px;
        }
    
        &::-webkit-scrollbar-track-piece { 
            background: #E7E7E7;
        }
    
        &::-webkit-scrollbar-thumb { 
            background-color: #00acee;
            height: 100px;
        }
    }

    blockquote, q {
        quotes: none;
    }

    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }

    table {
        border-collapse: collapse;
        border-spacing: 0;
    }

    time {
        font-size: inherit;
    }
`