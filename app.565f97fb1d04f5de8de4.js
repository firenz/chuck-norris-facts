!function(e){function t(t){for(var r,o,l=t[0],c=t[1],u=t[2],s=0,f=[];s<l.length;s++)o=l[s],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&f.push(i[o][0]),i[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);for(m&&m(t);f.length;)f.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,l=1;l<n.length;l++){var c=n[l];0!==i[c]&&(r=!1)}r&&(a.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},i={0:0},a=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/codeko-jobtest/";var l=window.webpackJsonp=window.webpackJsonp||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var m=c;a.push([13,1]),n()}({13:function(e,t,n){n(14),e.exports=n(21)},21:function(e,t,n){"use strict";n.r(t);var r=n(0),i=n(8),a=n(1),o=n(9),l=n.n(o);function c(){var e=l()(["\n  body {\n    margin: 0;\n    padding: 0;\n    height: 100%;\n    background-color: ",";\n    font-family: Arial, Helvetica, sans-serif;\n    font-size: ",";\n  }\n\n  ul {\n    list-style: none;\n    margin-block-start: 0;\n    margin-block-end: 0;\n    margin-inline-start: 0;\n    margin-inline-end: 0;\n    padding-inline-start: 0;\n  }\n\n  #root {\n    min-height: 100vh;\n    text-align: center;\n    \n    display: flex;\n    flex-direction: column;\n    align-items: stretch;\n    justify-content: space-between;\n  }\n"]);return c=function(){return e},e}var u=Object(a.b)(c(),(function(e){return e.theme.palette.main.background}),(function(e){return e.theme.typography.sizes.sizeM})),m={palette:{main:{primary:"#8d0008",secondary:"#fbb04c",accent:"#f05b22",background:"#a31418",light:"#fff5ee",dark:"#000"},text:{primary:"#fff5ee",secondary:"#8d0008",accent:"#000"},link:{normal:"#ffac95",hover:"#000",visited:"#ffac95"},info:{success:"#5abab6",error:"#dd2c00"}},typography:{fonts:["Arial","Helvetica"],sizes:{sizeXXS:"0.25rem",sizeXS:"0.5rem",sizeS:"0.75rem",sizeM:"1rem",sizeL:"1.25rem",sizeXL:"1.5rem",sizeXXL:"2.5rem",sizeXXXL:"4rem"}}},s=n(2),f=n(7),d=a.c.header.withConfig({displayName:"HeaderLayout",componentId:"sc-7ez7"}).withConfig({displayName:"headerstyles__HeaderLayout",componentId:"at9hq6-0"})(["margin-bottom:-17rem;height:35rem;background:linear-gradient( ",","," 43%,"," ),url(",")  center 1.5rem  fixed  no-repeat  ",";"],(function(e){var t=e.theme.palette.main.secondary;return Object(s.a)(t,0)}),(function(e){var t=e.theme.palette.main.secondary;return Object(s.a)(t,.5)}),(function(e){return e.theme.palette.main.background}),f,(function(e){return e.theme.palette.main.secondary})),p=function(){return r.createElement(d,null)},h=a.c.main.withConfig({displayName:"MainLayout",componentId:"sc-w68b3w"}).withConfig({displayName:"mainstyles__MainLayout",componentId:"ha6ync-0"})(["flex-grow:1;display:flex;flex-direction:column;align-items:center;justify-content:flex-start;margin-bottom:1rem;background:linear-gradient( ",","," 56% );"],(function(e){var t=e.theme.palette.main.secondary;return Object(s.a)(t,0)}),(function(e){return e.theme.palette.main.background})),y=function(e){return r.createElement(h,null,e.children)},g=a.c.footer.withConfig({displayName:"FooterLayout",componentId:"sc-6hmths"}).withConfig({displayName:"footerstyles__FooterLayout",componentId:"xiiyc9-0"})(["position:fixed;z-index:3;bottom:0;width:100vw;padding:4rem 0.5rem 0.5rem;color:",";;font-weight:bold;text-align:center;background:linear-gradient( ",","," 55%,"," );@media (max-width:393px){padding:4rem 1rem 0.5rem;width:auto;}"],(function(e){return e.theme.palette.text.primary}),(function(e){var t=e.theme.palette.main.background;return Object(s.a)(t,0)}),(function(e){return e.theme.palette.main.background}),(function(e){var t=e.theme.palette.main.primary;return Object(s.a)(t,1)})),b=a.c.a.withConfig({displayName:"Link",componentId:"sc-11uinbm"}).withConfig({displayName:"footerstyles__Link",componentId:"xiiyc9-1"})(["padding-left:0.3rem;color:",";&:hover{color:",";}&:visited{color:",";}"],(function(e){return e.theme.palette.link.normal}),(function(e){return e.theme.palette.link.hover}),(function(e){return e.theme.palette.link.visited})),v=function(){return r.createElement(g,null,r.createElement("span",{role:"img","aria-label":"Copyright"},"©")," ","2020. Developed in React with"," ",r.createElement("span",{role:"img","aria-label":"Love"},"💛")," ","by",r.createElement(b,{href:"mailto:alicia.guardenoalbertos@gmail.com"},"Alicia G."))},w=a.c.h1.withConfig({displayName:"TitleLayout",componentId:"sc-skz5v7"}).withConfig({displayName:"titlestyles__TitleLayout",componentId:"sc-1tavm5x-0"})(["font-size:",";font-weight:bold;@media (max-width:768px){font-size:",";}"],(function(e){return e.theme.typography.sizes.sizeXXL}),(function(e){return e.theme.typography.sizes.sizeXL})),x=Object(a.c)(w).withConfig({displayName:"MainTitleLayout",componentId:"sc-1l2ixmq"}).withConfig({displayName:"main-titlestyles__MainTitleLayout",componentId:"sc-1qbxun9-0"})(["color:",";text-transform:capitalize;&::before{content:'👊';margin:0 0.8rem;}&::after{content:'👊';margin:0 0.8rem;}"],(function(e){return e.theme.palette.text.primary})),k=function(e){return r.createElement(x,null,e.children)},z=function(){return r.createElement(r.Fragment,null,r.createElement(p,null),r.createElement(y,null,r.createElement(k,null,"Chuck Norris Facts")),r.createElement(v,null))},j=function(){return r.createElement(a.a,{theme:m},r.createElement(u,null),r.createElement(z,null))};i.render(r.createElement(j,null),document.getElementById("root"))},7:function(e,t,n){e.exports=n.p+"./media/chuck-bg.6d736fd5ae62278a314094d8e15f96d4.svg"}});