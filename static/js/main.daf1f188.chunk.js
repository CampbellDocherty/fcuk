(this.webpackJsonpfcuk=this.webpackJsonpfcuk||[]).push([[0],{22:function(t,e,n){},23:function(t,e,n){"use strict";n.r(e);var o=n(0),i=n.n(o),c=n(10),a=n.n(c),s=n(4),r=n.p+"static/media/fcuk-title.56dae743.png",d=n.p+"static/media/body-one-test.ed9e9c90.png",u=n.p+"static/media/body-two-test.e3d61626.png",l=n.p+"static/media/head-one-test.213b9123.png",g=n.p+"static/media/head-two-test.4f6f5009.png",h=n.p+"static/media/legs-one-test.e0b7399a.png",f=n.p+"static/media/legs-two-test.d1426543.png",j=[l,g],m=[d,u],b=[h,f],p=n(3),w=p.a.div.withConfig({displayName:"styles__Container",componentId:"sc-1dmguzw-0"})(["display:flex;flex-direction:column;max-width:1000px;height:100vh;margin-left:auto;margin-right:auto;"]),y=p.a.img.withConfig({displayName:"styles__TitleImage",componentId:"sc-1dmguzw-1"})(["width:40%;"]),C=p.a.img.withConfig({displayName:"styles__ArrowImage",componentId:"sc-1dmguzw-2"})(["width:",";cursor:pointer;"],(function(t){return t.mouseDown?"97%":"100%"})),O=p.a.button.withConfig({displayName:"styles__ArrowButton",componentId:"sc-1dmguzw-3"})(["width:70%;background-color:white;padding:0;border:none;display:flex;align-items:center;align-self:center;justify-self:center;"]),x=p.a.img.withConfig({displayName:"styles__RandomButtonImage",componentId:"sc-1dmguzw-4"})(["width:",";cursor:pointer;"],(function(t){return t.mouseDown?"97%":"100%"})),_=p.a.button.withConfig({displayName:"styles__StyledButton",componentId:"sc-1dmguzw-5"})(["width:30%;background-color:white;grid-column:3;grid-row:5;border:none;border-radius:300px;padding:0;"]),v=p.a.img.withConfig({displayName:"styles__HeadImage",componentId:"sc-1dmguzw-6"})(["width:100%;display:",";"],(function(t){return t.shouldDisplay?"initial":"none"})),k=p.a.img.withConfig({displayName:"styles__BodyImage",componentId:"sc-1dmguzw-7"})(["width:100%;display:",";"],(function(t){return t.shouldDisplay?"initial":"none"})),I=p.a.img.withConfig({displayName:"styles__LegsImage",componentId:"sc-1dmguzw-8"})(["width:100%;display:",";"],(function(t){return t.shouldDisplay?"initial":"none"})),D=p.a.div.withConfig({displayName:"styles__ArrowsSection",componentId:"sc-1dmguzw-9"})(["display:grid;grid-template-rows:1fr 1fr 1fr;max-width:150px;height:100%;"]),z=p.a.div.withConfig({displayName:"styles__Header",componentId:"sc-1dmguzw-10"})(["display:flex;align-items:center;justify-content:center;width:100%;height:20vh;"]),N=p.a.div.withConfig({displayName:"styles__CharacterSelectorSection",componentId:"sc-1dmguzw-11"})(["display:flex;width:100%;align-items:center;justify-content:center;"]),S=p.a.div.withConfig({displayName:"styles__Footer",componentId:"sc-1dmguzw-12"})(["display:flex;align-items:center;justify-content:center;width:100%;height:20vh;"]),T=p.a.div.withConfig({displayName:"styles__CharacterImagesSection",componentId:"sc-1dmguzw-13"})(["display:flex;flex-direction:column;align-items:center;justify-content:center;max-width:400px;height:100%;"]),M=n(1),B=i.a.forwardRef((function(t,e){var n=t.count;return Object(M.jsxs)(T,{ref:e,children:[j.map((function(t,e){return Object(M.jsx)(v,{src:t,alt:"head image ".concat(e+1),shouldDisplay:e+1===n.headCount},e)})),m.map((function(t,e){return Object(M.jsx)(k,{src:t,alt:"body image ".concat(e+1),shouldDisplay:e+1===n.bodyCount},e)})),b.map((function(t,e){return Object(M.jsx)(I,{src:t,alt:"legs image ".concat(e+1),shouldDisplay:e+1===n.legsCount},e)}))]})})),F=n(2),K=n.p+"static/media/fcuk-arrow-left.a709e9df.png",R=function(t){var e=t.src,n=t.altText,i=t.onClick,c=Object(o.useState)(!1),a=Object(s.a)(c,2),r=a[0],d=a[1],u=function(){d(!0)},l=function(){d(!1)};return Object(M.jsx)(O,{onKeyDown:u,onKeyUp:l,onClick:i,onMouseDown:u,onMouseUp:l,children:Object(M.jsx)(C,{mouseDown:r,src:e,alt:n})})},U=function(t){var e=t.count,n=t.setCount;return Object(M.jsxs)(D,{children:[Object(M.jsx)(R,{src:K,altText:"first left arrow",onClick:function(){if(1===e.headCount)return n(Object(F.a)(Object(F.a)({},e),{},{headCount:j.length}));n(Object(F.a)(Object(F.a)({},e),{},{headCount:e.headCount-1}))}}),Object(M.jsx)(R,{src:K,altText:"second left arrow",onClick:function(){if(1===e.bodyCount)return n(Object(F.a)(Object(F.a)({},e),{},{bodyCount:m.length}));n(Object(F.a)(Object(F.a)({},e),{},{bodyCount:e.bodyCount-1}))}}),Object(M.jsx)(R,{src:K,altText:"third left arrow",onClick:function(){if(1===e.legsCount)return n(Object(F.a)(Object(F.a)({},e),{},{legsCount:b.length}));n(Object(F.a)(Object(F.a)({},e),{},{legsCount:e.legsCount-1}))}})]})},A=n.p+"static/media/fcuk-random-button.480a83be.png",L=function(t,e,n){var o=Math.floor(Math.random()*(e-t+1)+t);return o===n&&o===m.length?o-1:o===n?o+1:o},E=function(t){var e=t.count,n=t.setCount,i=Object(o.useState)(!1),c=Object(s.a)(i,2),a=c[0],r=c[1],d=function(){r(!0)},u=function(){r(!1)};return Object(M.jsx)(_,{onClick:function(){var t=L(1,j.length,e.headCount),o=L(1,m.length,e.bodyCount),i=L(1,b.length,e.legsCount);n({headCount:t,bodyCount:o,legsCount:i})},onMouseDown:d,onMouseUp:u,onKeyDown:d,onKeyUp:u,children:Object(M.jsx)(x,{src:A,alt:"random button",mouseDown:a})})},H=n.p+"static/media/fcuk-arrow-right.3bad8883.png",J=function(t){var e=t.count,n=t.setCount;return Object(M.jsxs)(D,{children:[Object(M.jsx)(R,{src:H,altText:"first right arrow",onClick:function(){if(e.headCount===j.length)return n(Object(F.a)(Object(F.a)({},e),{},{headCount:1}));n(Object(F.a)(Object(F.a)({},e),{},{headCount:e.headCount+1}))}}),Object(M.jsx)(R,{src:H,altText:"second right arrow",onClick:function(){if(e.bodyCount===m.length)return n(Object(F.a)(Object(F.a)({},e),{},{bodyCount:1}));n(Object(F.a)(Object(F.a)({},e),{},{bodyCount:e.bodyCount+1}))}}),Object(M.jsx)(R,{src:H,altText:"third right arrow",onClick:function(){if(e.legsCount===b.length)return n(Object(F.a)(Object(F.a)({},e),{},{legsCount:1}));n(Object(F.a)(Object(F.a)({},e),{},{legsCount:e.legsCount+1}))}})]})},P=n(8),q=i.a.forwardRef((function(t,e){var n=Object(P.b)({type:"image/jpeg",quality:1}),o=Object(s.a)(n,2)[1],i=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.name,o=void 0===n?"fcuk-charcter":n,i=e.extension,c=void 0===i?"jpg":i,a=document.createElement("a");a.href=t,a.download=Object(P.a)(c,o),a.click()};return Object(M.jsx)("button",{onClick:function(){return o(e.current).then(i)},children:"Screenshot"})})),G=function(){var t=Object(o.createRef)(),e=Object(o.useState)({headCount:1,bodyCount:1,legsCount:1}),n=Object(s.a)(e,2),i=n[0],c=n[1];return Object(M.jsxs)(w,{children:[Object(M.jsx)(z,{children:Object(M.jsx)(y,{src:r,alt:"fcuk title"})}),Object(M.jsxs)(N,{children:[Object(M.jsx)(U,{count:i,setCount:c}),Object(M.jsx)(B,{count:i,ref:t}),Object(M.jsx)(J,{count:i,setCount:c})]}),Object(M.jsxs)(S,{children:[Object(M.jsx)(E,{count:i,setCount:c}),Object(M.jsx)(q,{ref:t})]})]})},Q=(n(22),function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,24)).then((function(e){var n=e.getCLS,o=e.getFID,i=e.getFCP,c=e.getLCP,a=e.getTTFB;n(t),o(t),i(t),c(t),a(t)}))});a.a.render(Object(M.jsx)(i.a.StrictMode,{children:Object(M.jsx)(G,{})}),document.getElementById("root")),Q()}},[[23,1,2]]]);
//# sourceMappingURL=main.daf1f188.chunk.js.map