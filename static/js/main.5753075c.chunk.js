(this.webpackJsonpfcuk=this.webpackJsonpfcuk||[]).push([[0],{19:function(t,e,n){},20:function(t,e,n){"use strict";n.r(e);var i=n(1),o=n.n(i),c=n(8),r=n.n(c),s=n.p+"static/media/fcuk-random-button.480a83be.png",a=n.p+"static/media/fcuk-title.56dae743.png",d=n(3),u=n.p+"static/media/fcuk-arrow-left.a709e9df.png",l=n.p+"static/media/fcuk-arrow-right.3bad8883.png",g=n.p+"static/media/body-one-test.ed9e9c90.png",m=n.p+"static/media/body-two-test.e3d61626.png",p=n.p+"static/media/head-one-test.213b9123.png",f=n.p+"static/media/head-two-test.4f6f5009.png",w=n.p+"static/media/legs-one-test.e0b7399a.png",h=n.p+"static/media/legs-two-test.d1426543.png",b=[p,f],j=[g,m],y=[w,h],x=n(2),O=x.a.div.withConfig({displayName:"styles__Container",componentId:"sc-1dmguzw-0"})(["display:flex;max-width:1000px;margin-left:auto;margin-right:auto;"]),C=x.a.div.withConfig({displayName:"styles__Wrapper",componentId:"sc-1dmguzw-1"})(["display:grid;grid-template-columns:1fr 0.7fr 1.6fr 0.7fr 1fr;grid-template-rows:1.2fr 0.9fr 0.9fr 0.9fr 1.1fr;justify-content:center;align-content:center;justify-items:center;align-items:center;"]),_=x.a.img.withConfig({displayName:"styles__TitleImage",componentId:"sc-1dmguzw-2"})(["width:100%;grid-column:3;"]),I=x.a.img.withConfig({displayName:"styles__ArrowImage",componentId:"sc-1dmguzw-3"})(["width:",";cursor:pointer;"],(function(t){return t.mouseDown?"97%":"100%"})),k=x.a.button.withConfig({displayName:"styles__ArrowButton",componentId:"sc-1dmguzw-4"})(["grid-column:",";grid-row:",";width:70%;background-color:white;padding:0;border:none;display:flex;align-items:center;"],(function(t){return t.column}),(function(t){return t.row})),v=x.a.img.withConfig({displayName:"styles__RandomButtonImage",componentId:"sc-1dmguzw-5"})(["width:",";cursor:pointer;"],(function(t){return t.mouseDown?"97%":"100%"})),D=x.a.button.withConfig({displayName:"styles__RandomButton",componentId:"sc-1dmguzw-6"})(["width:60%;background-color:white;grid-column:3;grid-row:5;border:none;border-radius:300px;padding:0;"]),z=x.a.img.withConfig({displayName:"styles__HeadImage",componentId:"sc-1dmguzw-7"})(["width:100%;grid-column:3;grid-row:2;visibility:",";padding:5% 5% 0px 5%;"],(function(t){return t.shouldDisplay?"visible":"hidden"})),N=x.a.img.withConfig({displayName:"styles__BodyImage",componentId:"sc-1dmguzw-8"})(["width:100%;grid-column:3;grid-row:3;visibility:",";padding:0px 5% 0px 5%;"],(function(t){return t.shouldDisplay?"visible":"hidden"})),T=x.a.img.withConfig({displayName:"styles__LegsImage",componentId:"sc-1dmguzw-9"})(["width:100%;grid-column:3;grid-row:4;visibility:",";padding:0px 5% 5% 5%;"],(function(t){return t.shouldDisplay?"visible":"hidden"})),B=(x.a.div.withConfig({displayName:"styles__AspectRatioBox",componentId:"sc-1dmguzw-10"})(["height:0;overflow:hidden;padding-top:calc(1 / 1 * 100%);background:white;position:relative;"]),x.a.div.withConfig({displayName:"styles__AspectRatioBoxInside",componentId:"sc-1dmguzw-11"})(["position:absolute;top:0;left:0;width:100%;height:100%;"]),n(0)),F=function(t){var e=t.src,n=t.altText,o=t.row,c=t.column,r=t.onClick,s=Object(i.useState)(!1),a=Object(d.a)(s,2),u=a[0],l=a[1],g=function(){l(!0)},m=function(){l(!1)};return Object(B.jsx)(k,{onKeyDown:g,onKeyUp:m,onClick:r,row:o,column:c,onMouseDown:g,onMouseUp:m,children:Object(B.jsx)(I,{mouseDown:u,src:e,alt:n})})},S=function(){var t=Object(i.useState)(1),e=Object(d.a)(t,2),n=e[0],o=e[1];return Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)(F,{src:u,altText:"second left arrow",row:3,column:2,onClick:function(){if(1===n)return o(j.length);o(n-1)}}),j.map((function(t,e){return Object(B.jsx)(N,{src:t,alt:"body image ".concat(e+1),shouldDisplay:e+1===n},e)})),Object(B.jsx)(F,{src:l,altText:"second right arrow",row:3,column:4,onClick:function(){if(n===j.length)return o(1);o(n+1)}})]})},M=function(t){var e=t.src,n=t.altText,o=Object(i.useState)(!1),c=Object(d.a)(o,2),r=c[0],s=c[1],a=function(){s(!0)},u=function(){s(!1)};return Object(B.jsx)(D,{onMouseDown:a,onMouseUp:u,onKeyDown:a,onKeyUp:u,children:Object(B.jsx)(v,{src:e,alt:n,mouseDown:r})})},A=function(){var t=Object(i.useState)(1),e=Object(d.a)(t,2),n=e[0],o=e[1];return Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)(F,{src:u,altText:"first left arrow",row:2,column:2,onClick:function(){if(1===n)return o(b.length);o(n-1)}}),b.map((function(t,e){return Object(B.jsx)(z,{src:t,alt:"head image ".concat(e+1),shouldDisplay:e+1===n},e)})),Object(B.jsx)(F,{src:l,altText:"first right arrow",row:2,column:4,onClick:function(){if(n===b.length)return o(1);o(n+1)}})]})},K=function(){var t=Object(i.useState)(1),e=Object(d.a)(t,2),n=e[0],o=e[1];return Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)(F,{src:u,altText:"third left arrow",row:4,column:2,onClick:function(){if(1===n)return o(y.length);o(n-1)}}),y.map((function(t,e){return Object(B.jsx)(T,{src:t,alt:"legs image ".concat(e+1),shouldDisplay:e+1===n},e)})),Object(B.jsx)(F,{src:l,altText:"third right arrow",row:4,column:4,onClick:function(){if(n===y.length)return o(1);o(n+1)}})]})},R=function(){return Object(B.jsx)(O,{children:Object(B.jsxs)(C,{children:[Object(B.jsx)(_,{src:a,alt:"fcuk title"}),Object(B.jsx)(A,{}),Object(B.jsx)(S,{}),Object(B.jsx)(K,{}),Object(B.jsx)(M,{src:s,altText:"random button"})]})})},U=(n(19),function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,21)).then((function(e){var n=e.getCLS,i=e.getFID,o=e.getFCP,c=e.getLCP,r=e.getTTFB;n(t),i(t),o(t),c(t),r(t)}))});r.a.render(Object(B.jsx)(o.a.StrictMode,{children:Object(B.jsx)(R,{})}),document.getElementById("root")),U()}},[[20,1,2]]]);
//# sourceMappingURL=main.5753075c.chunk.js.map