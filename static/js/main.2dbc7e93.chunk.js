(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{123:function(n,e,t){},124:function(n,e,t){},125:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),i=t(82),o=t.n(i),l=t(21),c=t(5),u=t(2),m=t(3);function s(){var n=Object(u.a)(["\n    *, *:before, *:after {\n        box-sizing: border-box;\n        font-family: 'Kufam';\n        font-size: 21px;\n        line-height: 1.2;\n        color: #fff;\n        outline: none;\n    }\n\n    html, body, div, span, applet, object, iframe,\n    h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n    a, abbr, acronym, address, big, cite, code,\n    del, dfn, em, img, ins, kbd, q, s, samp,\n    small, strike, strong, sub, sup, tt, var,\n    b, u, i, center,\n    dl, dt, dd, ol, ul, li,\n    fieldset, form, label, legend,\n    table, caption, tbody, tfoot, thead, tr, th, td,\n    article, aside, canvas, details, embed, \n    figure, figcaption, footer, header, hgroup, \n    menu, nav, output, ruby, summary,\n    time, mark, audio, video {\n        margin: 0;\n        padding: 0;\n        border: 0;\n    }\n\n    article, aside, details, figcaption, figure, \n    footer, header, hgroup, menu, nav, section {\n        display: block;\n    }\n\n    a:active {\n        color: inherit;\n    }\n\n    ol, ul {\n        list-style: none;\n    }\n\n    body {\n        &::before {\n            content: ' ';\n            height: 100%;\n            width: 100%;\n            position: fixed;\n            top: 0;\n            left: 0;\n            will-change: transform;\n            z-index: -1;\n            background-color: #203748;\n        }\n        \n        &::-webkit-scrollbar { \n            width: 10px;\n        }\n    \n        &::-webkit-scrollbar-track-piece { \n            background:  #172936;\n        }\n    \n        &::-webkit-scrollbar-thumb { \n            background-color: #D3D3D3;\n            border-radius: 15px;\n            height: 100px;\n        }\n    }\n\n    blockquote, q {\n        quotes: none;\n    }\n\n    blockquote:before, blockquote:after,\n    q:before, q:after {\n        content: '';\n        content: none;\n    }\n\n    table {\n        border-collapse: collapse;\n        border-spacing: 0;\n    }\n\n    textarea {\n        &::-webkit-scrollbar { \n            width: 0; \n        }\n    }\n\n    time {\n        font-size: inherit;\n    }\n"]);return s=function(){return n},n}var d=Object(m.a)(s()),p=t(93);function f(){var n=Object(u.a)(["\n    display: flex;\n    height: 100%;\n    align-items: center;\n    width: 8.4em;\n\n    & a {\n        padding: 0px 15px;\n        width: 100%;\n        height: 70%;\n        display: flex;\n        justify-content: space-around;\n        border-radius: 30px;\n        align-items: center;\n        text-decoration: none;\n        transition: all 0.4s ease;\n\n        &:hover {\n            background: #203748;\n            transform: scale(0.95);\n        }\n    }\n"]);return f=function(){return n},n}function h(){var n=Object(u.a)(["\n    display: none;\n\n    @media screen and (max-width: 768px) {\n        display: flex;\n        font-family: 'Architects Daughter';\n        align-items: center;\n        font-size: 2em;\n        letter-spacing: 5px;\n        user-select: none;\n    }\n\n    @media screen and (max-width: 400px) {\n        font-size: 1.2em;\n        padding-right: 1.1em;\n    }\n"]);return h=function(){return n},n}function b(){var n=Object(u.a)(["\n    width: 100%;\n    display: flex;\n    justify-content: space-evenly;\n    z-index: 1;\n\n    @media screen and (max-width: 768px) {\n        position: fixed;\n        height: 60vh;\n        width: 100%;\n        align-items: center;\n        flex-direction: column;\n        background: #5b78c7;\n        clip-path: circle(10px at 90% -10%);\n        transition: all 1s ease-out;\n        pointer-events: none;\n    }\n\n    &.open {\n        clip-path: circle(1000px at 90% -10%);\n        pointer-events: all;\n    }\n"]);return b=function(){return n},n}function g(){var n=Object(u.a)(["\n    @media screen and (max-width: 768px) {\n        width: 1.4em;\n        height: 0.13em;\n        background: white;\n        margin: 0.3em;\n        z-index: 9999;\n    }\n"]);return g=function(){return n},n}function v(){var n=Object(u.a)(["\n    display: none;\n\n    @media screen and (max-width: 768px) {\n        position: absolute;\n        display: block;\n        cursor: pointer;\n        right: 5%;\n        top: 7%;\n        transform: translate(-5%, -50%);\n        z-index: 2;\n    }\n"]);return v=function(){return n},n}function E(){var n=Object(u.a)(["\n    display: flex;\n    flex-direction: row;\n    justify-content: space-around;\n    height: 100%;\n"]);return E=function(){return n},n}function x(){var n=Object(u.a)(["\n    height: 14vh;\n    background: #5b78c7;\n"]);return x=function(){return n},n}var w=m.c.header(x()),k=m.c.nav(E()),y=m.c.div(v()),j=m.c.div(g()),O=m.c.ul(b()),z=m.c.h1(h()),F=m.c.li(f()),P=t(65),S=t(34),C=t(53),q=[{path:"profile",avatar:P.c,title:"Profile"},{path:"skills",avatar:S.c,title:"Skills"},{path:"works",avatar:P.a,title:"Works"},{path:"resume",avatar:P.b,title:"Resume"}],D=function(n){var e=n.onClick;return r.a.createElement(r.a.Fragment,null,q.map((function(n){var t=n.path,a=n.avatar,i=n.title;return r.a.createElement(F,{key:i,onClick:e},r.a.createElement(l.b,{to:t,activeStyle:{background:"#203748"}},r.a.createElement(C.a,{icon:a,size:"lg"}),r.a.createElement("span",null,i)))})))},R=function(){var n=Object(a.useState)(""),e=Object(p.a)(n,2),t=e[0],i=e[1],o=function(){window.innerWidth<=768&&i("open"===t?"":"open")};return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,null,r.a.createElement(w,null,r.a.createElement(k,null,r.a.createElement(y,{onClick:o},r.a.createElement(j,null),r.a.createElement(j,null),r.a.createElement(j,null)),r.a.createElement(z,null,"Roman Gulamov"),r.a.createElement(O,{className:t},r.a.createElement(D,{onClick:o}))))))};function _(){var n=Object(u.a)(["\n    padding: 0 15px;\n\n    @media (min-width: 575.98px){\n        padding: 0 calc(50vw - 220px);\n    }\n    @media (min-width: 767.98px){\n        padding: 0 calc(50vw - 310px);\n    }\n\n    @media (min-width: 991.98px) {\n        padding: 0 calc(50vw - 430px);\n    }\n\n    @media (min-width: 1199.98px){\n        padding: 0 calc(50vw - 540px);\n    }\n"]);return _=function(){return n},n}var I=m.c.div(_());function W(){var n=Object(u.a)(["\n    & svg path {\n        transition: all 0.4s ease;\n    }\n    \n    &:hover svg path {\n        transform: scale(0.92);\n    }\n"]);return W=function(){return n},n}function A(){var n=Object(u.a)(["\n    height: 10vh;\n    display: flex;\n    justify-content: space-evenly;\n    align-items: center;\n"]);return A=function(){return n},n}function G(){var n=Object(u.a)(["\n    position: fixed;\n    bottom: 0;\n    height: 10vh;\n    width: 100%;\n    background: #355267;\n    z-index: 9999;\n"]);return G=function(){return n},n}var H=m.c.footer(G()),Z=m.c.div(A()),B=m.c.a(W()),J=[{name:"vk",path:"https://vk.com/memento_turk",icon:S.e},{name:"telegram",path:"https://teleg.run/memento_turk",icon:S.d},{name:"gitHub",path:"https://github.com/Roman-Gulamov",icon:S.a},{name:"linkedIn",path:"https://www.linkedin.com/in/\u0440\u043e\u043c\u0430\u043d-\u0433\u0443\u043b\u0430\u043c\u043e\u0432-5712b31b2/",icon:S.b}],N=function(){return r.a.createElement(H,null,r.a.createElement(I,null,r.a.createElement(Z,null,J.map((function(n){var e=n.name,t=n.path,a=n.icon;return r.a.createElement(B,{href:t,target:"_blank",key:e},r.a.createElement(C.a,{icon:a,size:"2x"}))})))))},$=t(19);function K(){var n=Object(u.a)(["\n        height: 2.5em;\n        margin: 0.5em auto 0;\n    "]);return K=function(){return n},n}function M(){var n=Object(u.a)(['\n    position: relative;\n    width: 100%;\n    height: 100%;\n    cursor: pointer;\n    border: none;\n    border-radius: 20px;\n    background: #39D084;\n    text-transform: uppercase;\n    transition: all 0.4s ease;\n    z-index: 1000;\n\n    &:hover, &:active {\n        color: #000;\n    }\n\n    &:active {\n        transform: scale(0.98);\n    }\n\n    &:after {\n        content: "";\n        position: absolute;\n        top: 0;\n        left: 35%;\n        width: 30%;\n        height: 100%;\n        border-radius: 20px;\n        transition: all .4s ease;\n        z-index: -1;\n    }\n\n    &:hover:after {\n        width: 100%;\n        left: 0;\n        background: #39D024;\n    }\n\n    ',"\n"]);return M=function(){return n},n}var T=m.c.button(M(),(function(n){return n.feedback&&Object(m.b)(K())}));function V(){var n=Object(u.a)(["\n    white-space: pre-line;\n    font-size: 1em;\n    line-height: 1.6;\n\n    @media screen and (max-width: 500px) {\n        font-size: 0.9em;\n    }\n"]);return V=function(){return n},n}function L(){var n=Object(u.a)(["\n    display: block;\n    font-weight: normal;\n    margin-bottom: 1em;\n"]);return L=function(){return n},n}function Q(){var n=Object(u.a)(["\n    font-size: 1.5em;\n    line-height: 1.3;\n    font-weight: bold;\n    color: #2BCE6C;\n\n    @media screen and (max-width: 991px) {\n        text-align: center;\n    }\n"]);return Q=function(){return n},n}function U(){var n=Object(u.a)(["\n    width: 50%;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    font-weight: normal;\n\n    @media screen and (max-width: 991px) {\n        width: 100%;\n    }\n\n    & a {\n        width: 13em;\n        height: 2.5em;\n        margin: 0.5em auto 0;\n    }\n"]);return U=function(){return n},n}function X(){var n=Object(u.a)(["\n    width: 100%;    \n    height: auto;\n    border-radius: 60px;\n"]);return X=function(){return n},n}function Y(){var n=Object(u.a)(["\n    width: 15em;\n\n    @media screen and (max-width: 991px) {\n        width: 13em;\n    }\n    \n    @media screen and (max-width: 500px) {\n        width: 10em;\n    }\n"]);return Y=function(){return n},n}function nn(){var n=Object(u.a)(["\n    height: 100%;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-around;\n    margin: 1.8em 0em 15vh;\n"]);return nn=function(){return n},n}var en=m.c.main(nn()),tn=m.c.div(Y()),an=m.c.img(X()),rn=m.c.div(U()),on=m.c.h1(Q()),ln=m.c.span(L()),cn=m.c.p(V()),un=t(88),mn=t.n(un),sn=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement($.a,null,r.a.createElement("meta",{charSet:"utf-8"}),r.a.createElement("title",null,"Portfolio | Profile"),r.a.createElement("meta",{name:"description",content:"Profile"}),r.a.createElement("link",{rel:"canonical",href:"https://roman-gulamov.github.io/Portfolio/#/profile"})),r.a.createElement(l.a,null,r.a.createElement(I,null,r.a.createElement(en,null,r.a.createElement(tn,null,r.a.createElement(an,{src:mn.a,alt:"Roman"})),r.a.createElement(rn,null,r.a.createElement(on,null,"Roman Gulamov",r.a.createElement(ln,null,"Front-end Developer")),r.a.createElement(cn,null,"Hello! ",r.a.createElement("span",{role:"img","aria-label":"give-five"},"\ud83d\ude4c")," ","\n","I am Roman Gulamov, Front-end Developer from Saint Petersburg",r.a.createElement("span",{role:"img","aria-label":"give-five"},"\ud83c\udfe1")," ","\n","If you are looking for a programmer just write to me and I will gladly become a part of your team!"),r.a.createElement(l.b,{to:"/contact"},r.a.createElement(T,null,"Hire me")))))))},dn=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement($.a,null,r.a.createElement("meta",{charSet:"utf-8"}),r.a.createElement("title",null,"Portfolio | Skills"),r.a.createElement("meta",{name:"description",content:"Skills"}),r.a.createElement("link",{rel:"canonical",href:"https://roman-gulamov.github.io/Portfolio/#/skills"})),"Skills")},pn=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement($.a,null,r.a.createElement("meta",{charSet:"utf-8"}),r.a.createElement("title",null,"Portfolio | Works"),r.a.createElement("meta",{name:"description",content:"Works"}),r.a.createElement("link",{rel:"canonical",href:"https://roman-gulamov.github.io/Portfolio/#/works"})),"Works")};function fn(){var n=Object(u.a)(["\n\n"]);return fn=function(){return n},n}var hn=m.c.main(fn()),bn=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement($.a,null,r.a.createElement("meta",{charSet:"utf-8"}),r.a.createElement("title",null,"Portfolio | Resume"),r.a.createElement("meta",{name:"description",content:"Resume"}),r.a.createElement("link",{rel:"canonical",href:"https://roman-gulamov.github.io/Portfolio/#/resume"})),r.a.createElement(hn,null))},gn=t(48),vn=[{name:"username",component:"input",autoFocus:!0,autoComplete:"true",type:"text",title:"Name"},{name:"email",component:"input",autoFocus:!1,autoComplete:"true",type:"email",title:"Email"},{name:"message",component:"textarea",autoFocus:!1,autoComplete:null,type:null,title:"Message"}],En=function(n,e){switch(n){case"username":return e.username;case"email":return e.email;case"message":return e.message;default:return null}};function xn(){var n=Object(u.a)(["\n    text-align: center;\n    line-height: 1.6;\n"]);return xn=function(){return n},n}function wn(){var n=Object(u.a)(["\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    margin-bottom: 1.3em;\n\n    & textarea {\n        resize: none;\n        height: 5.3em;\n    }\n\n    & input, & textarea {\n        padding: 0.9em;\n        font-size: 0.7em;\n        border-radius: 2em;\n        border: none;\n        background-color: #E9EFF6;\n        color: #000000c9;\n\n        &:focus {\n            box-shadow: 0 0 2pt 2pt #fc6c18;\n        }\n    }\n\n    & span {\n        position: absolute;\n        top: 106%;\n        left: 4%;\n        color: #fc6c18;\n        font-size: 0.7em;\n    }\n"]);return wn=function(){return n},n}function kn(){var n=Object(u.a)(["\n    width: 40%;\n    margin: 0 auto;\n\n    @media screen and (max-width: 1000px) {\n        width: 80%;\n    }\n"]);return kn=function(){return n},n}function yn(){var n=Object(u.a)(["\n    margin: 1.2em 0em 15vh;\n"]);return yn=function(){return n},n}var jn=m.c.div(yn()),On=m.c.div(kn()),zn=m.c.div(wn()),Fn=m.c.label(xn()),Pn=function(n){var e=n.values;return r.a.createElement(r.a.Fragment,null,vn.map((function(n){var t=n.name,a=n.component,i=n.autoFocus,o=n.autoComplete,l=n.type,c=n.title;return r.a.createElement(zn,{key:t},r.a.createElement(Fn,{htmlFor:t},c),r.a.createElement(gn.b,{component:a,name:t,type:l,autoFocus:i,autoComplete:o,value:En(t,e)}),r.a.createElement(gn.a,{component:"span",name:t}))})))},Sn=t(94),Cn=t(11),qn=t(91),Dn=t.n(qn),Rn=t(51),_n=Rn.a().shape({username:Rn.b().matches(/^['A-Za-z\u0410-\u044F][ '\x2DA-Za-z\u0410-\u044F]+['A-Za-z\u0410-\u044F]?$/,"Please enter your real name").required("Please enter your name"),email:Rn.b().matches(/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/,"Please enter a valid email address").required("Please enter your email"),message:Rn.b().min(5,"Please enter a message more than 5 letters").required("Please enter your message")}),In=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement($.a,null,r.a.createElement("meta",{charSet:"utf-8"}),r.a.createElement("title",null,"Portfolio | Contact"),r.a.createElement("meta",{name:"description",content:"Contact"}),r.a.createElement("link",{rel:"canonical",href:"https://roman-gulamov.github.io/Portfolio/#/contact"})),r.a.createElement(I,null,r.a.createElement(jn,null,r.a.createElement(On,null,r.a.createElement(gn.d,{initialValues:{username:"",email:"",message:""},validationSchema:_n,onSubmit:function(n){return function(n){var e=Object(Cn.a)();Dn.a.create().post("https://formspree.io/xbjpredk",Object(Sn.a)({},n)).then((function(n){200===n.status&&(e.push("/train-search/#/profile"),e.go(0),window.location.reload())}))}(n)}},(function(n){var e=n.isSubmitting,t=n.values;return r.a.createElement(gn.c,{action:"https://formspree.io/xbjpredk",method:"POST"},r.a.createElement(Pn,{values:t}),r.a.createElement(T,{feedback:!0,type:"submit",disabled:e},"Send"))}))))))},Wn=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(d,null),r.a.createElement(l.a,null,r.a.createElement(R,null),r.a.createElement(N,null),r.a.createElement(c.d,null,r.a.createElement(c.b,{path:"/profile",component:sn}),r.a.createElement(c.b,{path:"/skills",component:dn}),r.a.createElement(c.b,{path:"/works",component:pn}),r.a.createElement(c.b,{path:"/resume",component:bn}),r.a.createElement(c.b,{path:"/contact",component:In}),r.a.createElement(c.a,{to:"/profile"}))))};t(123),t(124);o.a.render(r.a.createElement(Wn,null),document.getElementById("root"))},88:function(n,e,t){n.exports=t.p+"static/media/Roman.3bbfb212.jpg"},95:function(n,e,t){n.exports=t(125)}},[[95,1,2]]]);
//# sourceMappingURL=main.2dbc7e93.chunk.js.map