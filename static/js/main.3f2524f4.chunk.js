(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{29:function(n,e,t){n.exports=t(42)},40:function(n,e,t){},41:function(n,e,t){},42:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),i=t(22),o=t.n(i),l=t(28),c=t(23),u=t(16),s=t(2),d=t(7),p=t(8);function m(){var n=Object(d.a)(["\n    display: flex;\n    height: 100%;\n    align-items: center;\n    width: 8.4em;\n\n    & a {\n        padding: 0px 15px;\n        width: 100%;\n        height: 70%;\n        display: flex;\n        justify-content: space-around;\n        border-radius: 30px;\n        align-items: center;\n        text-decoration: none;\n        transition: all 0.4s ease;\n\n        &:hover {\n            background: #203748;\n            transform: scale(0.95);\n        }\n    }\n"]);return m=function(){return n},n}function b(){var n=Object(d.a)(["\n    display: none;\n\n    @media screen and (max-width: 768px) {\n        display: flex;\n        font-family: 'Architects Daughter';\n        align-items: center;\n        font-size: 2em;\n        letter-spacing: 5px;\n        user-select: none;\n    }\n"]);return b=function(){return n},n}function f(){var n=Object(d.a)(["\n    width: 100%;\n    display: flex;\n    justify-content: space-evenly;\n\n    @media screen and (max-width: 768px) {\n        position: fixed;\n        height: 60vh;\n        width: 100%;\n        align-items: center;\n        flex-direction: column;\n        background: #5b78c7;\n        clip-path: circle(10px at 90% -10%);\n        transition: all 1s ease-out;\n        pointer-events: none;\n    }\n\n    &.open {\n        clip-path: circle(1000px at 90% -10%);\n        pointer-events: all;\n    }\n"]);return f=function(){return n},n}function h(){var n=Object(d.a)(["\n    @media screen and (max-width: 768px) {\n        width: 30px;\n        height: 3px;\n        background: white;\n        margin: 5px;\n    }\n"]);return h=function(){return n},n}function g(){var n=Object(d.a)(["\n    display: none;\n\n    @media screen and (max-width: 768px) {\n        position: absolute;\n        display: block;\n        cursor: pointer;\n        right: 5%;\n        top: 7%;\n        transform: translate(-5%, -50%);\n        z-index: 2;\n    }\n"]);return g=function(){return n},n}function v(){var n=Object(d.a)(["\n    display: flex;\n    flex-direction: row;\n    justify-content: space-around;\n    height: 100%;\n"]);return v=function(){return n},n}function x(){var n=Object(d.a)(["\n    height: 15vh;\n    background: #5b78c7;\n"]);return x=function(){return n},n}var k=p.b.header(x()),E=p.b.nav(v()),y=p.b.div(g()),w=p.b.div(h()),j=p.b.ul(f()),O=p.b.h1(b()),q=p.b.li(m());function z(){var n=Object(d.a)(["\n    *, *:before, *:after {\n        box-sizing: border-box;\n        font-family: 'Kufam';\n        font-size: 21px;\n        line-height: 1.2;\n        color: white;\n        outline: none;\n    }\n\n    html, body, div, span, applet, object, iframe,\n    h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n    a, abbr, acronym, address, big, cite, code,\n    del, dfn, em, img, ins, kbd, q, s, samp,\n    small, strike, strong, sub, sup, tt, var,\n    b, u, i, center,\n    dl, dt, dd, ol, ul, li,\n    fieldset, form, label, legend,\n    table, caption, tbody, tfoot, thead, tr, th, td,\n    article, aside, canvas, details, embed, \n    figure, figcaption, footer, header, hgroup, \n    menu, nav, output, ruby, summary,\n    time, mark, audio, video {\n        margin: 0;\n        padding: 0;\n        border: 0;\n    }\n\n    article, aside, details, figcaption, figure, \n    footer, header, hgroup, menu, nav, section {\n        display: block;\n    }\n\n    a:active {\n        color: inherit;\n    }\n\n    ol, ul {\n        list-style: none;\n    }\n\n    body {\n        &::before {\n            content: ' ';\n            height: 100%;\n            width: 100%;\n            position: fixed;\n            top: 0;\n            left: 0;\n            background-color: #6b6b6b;\n            will-change: transform;\n            z-index: -1;\n            background: #203748;\n        }\n        \n        &::-webkit-scrollbar { \n            width: 10px;\n        }\n    \n        &::-webkit-scrollbar-track-piece { \n            background: #E7E7E7;\n        }\n    \n        &::-webkit-scrollbar-thumb { \n            background-color: #00acee;\n            height: 100px;\n        }\n    }\n\n    blockquote, q {\n        quotes: none;\n    }\n\n    blockquote:before, blockquote:after,\n    q:before, q:after {\n        content: '';\n        content: none;\n    }\n\n    table {\n        border-collapse: collapse;\n        border-spacing: 0;\n    }\n\n    time {\n        font-size: inherit;\n    }\n"]);return z=function(){return n},n}var S=Object(p.a)(z()),R=t(13),J=t(27),P=[{path:"profile",avatar:R.c,title:"Profile"},{path:"skills",avatar:J.a,title:"Skills"},{path:"works",avatar:R.a,title:"Works"},{path:"resume",avatar:R.b,title:"Resume"}],W=function(){return r.a.createElement("div",null,"Profile")},A=function(){return r.a.createElement("div",null,"Skills")},B=function(){return r.a.createElement("div",null,"Works")},C=function(){return r.a.createElement("div",null,"Resume")},D=function(){var n=Object(a.useState)(""),e=Object(l.a)(n,2),t=e[0],i=e[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(S,null),r.a.createElement(u.a,null,r.a.createElement(k,null,r.a.createElement(E,null,r.a.createElement(y,{onClick:function(){return i("open"===t?"":"open")}},r.a.createElement(w,null),r.a.createElement(w,null),r.a.createElement(w,null)),r.a.createElement(O,null,"Roman Gulamov"),r.a.createElement(j,{className:t},P.map((function(n){var e=n.path,t=n.avatar,a=n.title;return r.a.createElement(q,{key:a},r.a.createElement(u.b,{to:e,activeStyle:{background:"#203748"}},r.a.createElement(c.a,{icon:t,size:"lg"}),r.a.createElement("span",null,a)))}))))),r.a.createElement(s.d,null,r.a.createElement(s.b,{path:"/profile",component:W}),r.a.createElement(s.b,{path:"/skills",component:A}),r.a.createElement(s.b,{path:"/works",component:B}),r.a.createElement(s.b,{path:"/resume",component:C}),r.a.createElement(s.a,{to:"/profile"}))))};t(40),t(41);o.a.render(r.a.createElement(D,null),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.3f2524f4.chunk.js.map