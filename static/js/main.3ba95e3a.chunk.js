(this.webpackJsonpfcuk=this.webpackJsonpfcuk||[]).push([[0],{45:function(t,e,n){},46:function(t,e,n){"use strict";n.r(e);var o=n(0),c=n.n(o),a=n(29),i=n.n(a),s=n(9),r=n.p+"static/media/fcuk-title.56dae743.png",u=n.p+"static/media/body-one-test.ed9e9c90.png",d=n.p+"static/media/body-two-test.e3d61626.png",l=n.p+"static/media/head-one-test.213b9123.png",g=n.p+"static/media/head-two-test.4f6f5009.png",f=n.p+"static/media/legs-one-test.e0b7399a.png",h=n.p+"static/media/legs-two-test.d1426543.png",b=[l,g],j=[u,d],m=[f,h],p=n(11),y=p.a.div.withConfig({displayName:"styles__Container",componentId:"sc-1dmguzw-0"})(["display:flex;flex-direction:column;max-width:1000px;height:100vh;margin-left:auto;margin-right:auto;"]),w=p.a.img.withConfig({displayName:"styles__TitleImage",componentId:"sc-1dmguzw-1"})(["width:40%;"]),C=p.a.img.withConfig({displayName:"styles__ArrowImage",componentId:"sc-1dmguzw-2"})(["width:",";cursor:pointer;"],(function(t){return t.mouseDown?"97%":"100%"})),O=p.a.button.withConfig({displayName:"styles__ArrowButton",componentId:"sc-1dmguzw-3"})(["width:70%;background-color:white;padding:0;border:none;display:flex;align-items:center;align-self:center;justify-self:center;"]),x=p.a.img.withConfig({displayName:"styles__RandomButtonImage",componentId:"sc-1dmguzw-4"})(["width:",";cursor:pointer;"],(function(t){return t.mouseDown?"97%":"100%"})),k=p.a.button.withConfig({displayName:"styles__StyledButton",componentId:"sc-1dmguzw-5"})(["width:30%;background-color:white;grid-column:3;grid-row:5;border:none;border-radius:300px;padding:0;"]),_=p.a.img.withConfig({displayName:"styles__HeadImage",componentId:"sc-1dmguzw-6"})(["width:100%;display:",";"],(function(t){return t.shouldDisplay?"initial":"none"})),v=p.a.img.withConfig({displayName:"styles__BodyImage",componentId:"sc-1dmguzw-7"})(["width:100%;display:",";"],(function(t){return t.shouldDisplay?"initial":"none"})),I=p.a.img.withConfig({displayName:"styles__LegsImage",componentId:"sc-1dmguzw-8"})(["width:100%;display:",";"],(function(t){return t.shouldDisplay?"initial":"none"})),D=p.a.div.withConfig({displayName:"styles__ArrowsSection",componentId:"sc-1dmguzw-9"})(["display:grid;grid-template-rows:1fr 1fr 1fr;max-width:150px;height:100%;"]),z=p.a.div.withConfig({displayName:"styles__Header",componentId:"sc-1dmguzw-10"})(["display:flex;align-items:center;justify-content:center;width:100%;height:20vh;"]),N=p.a.div.withConfig({displayName:"styles__CharacterSelectorSection",componentId:"sc-1dmguzw-11"})(["display:flex;width:100%;align-items:center;justify-content:center;"]),S=p.a.div.withConfig({displayName:"styles__Footer",componentId:"sc-1dmguzw-12"})(["display:flex;align-items:center;justify-content:center;width:100%;height:20vh;"]),T=p.a.div.withConfig({displayName:"styles__CharacterImagesSection",componentId:"sc-1dmguzw-13"})(["display:flex;flex-direction:column;align-items:center;justify-content:center;max-width:400px;height:100%;"]),M=n(2),B=c.a.forwardRef((function(t,e){var n=t.count;return Object(M.jsxs)(T,{ref:e,children:[b.map((function(t,e){return Object(M.jsx)(_,{src:t,alt:"head image ".concat(e+1),shouldDisplay:e+1===n.headCount},e)})),j.map((function(t,e){return Object(M.jsx)(v,{src:t,alt:"body image ".concat(e+1),shouldDisplay:e+1===n.bodyCount},e)})),m.map((function(t,e){return Object(M.jsx)(I,{src:t,alt:"legs image ".concat(e+1),shouldDisplay:e+1===n.legsCount},e)}))]})})),K=n(7),F=n.p+"static/media/fcuk-arrow-left.a709e9df.png",U=function(t){var e=t.src,n=t.altText,c=t.onClick,a=Object(o.useState)(!1),i=Object(s.a)(a,2),r=i[0],u=i[1],d=function(){u(!0)},l=function(){u(!1)};return Object(M.jsx)(O,{onKeyDown:d,onKeyUp:l,onClick:c,onMouseDown:d,onMouseUp:l,children:Object(M.jsx)(C,{mouseDown:r,src:e,alt:n})})},A=function(t){var e=t.count,n=t.setCount;return Object(M.jsxs)(D,{children:[Object(M.jsx)(U,{src:F,altText:"first left arrow",onClick:function(){if(1===e.headCount)return n(Object(K.a)(Object(K.a)({},e),{},{headCount:b.length}));n(Object(K.a)(Object(K.a)({},e),{},{headCount:e.headCount-1}))}}),Object(M.jsx)(U,{src:F,altText:"second left arrow",onClick:function(){if(1===e.bodyCount)return n(Object(K.a)(Object(K.a)({},e),{},{bodyCount:j.length}));n(Object(K.a)(Object(K.a)({},e),{},{bodyCount:e.bodyCount-1}))}}),Object(M.jsx)(U,{src:F,altText:"third left arrow",onClick:function(){if(1===e.legsCount)return n(Object(K.a)(Object(K.a)({},e),{},{legsCount:m.length}));n(Object(K.a)(Object(K.a)({},e),{},{legsCount:e.legsCount-1}))}})]})},P=n.p+"static/media/fcuk-random-button.480a83be.png",R=function(t,e,n){var o=Math.floor(Math.random()*(e-t+1)+t);return o===n&&o===j.length?o-1:o===n?o+1:o},L=function(t){var e=t.count,n=t.setCount,c=Object(o.useState)(!1),a=Object(s.a)(c,2),i=a[0],r=a[1],u=function(){r(!0)},d=function(){r(!1)};return Object(M.jsx)(k,{onClick:function(){var t=R(1,b.length,e.headCount),o=R(1,j.length,e.bodyCount),c=R(1,m.length,e.legsCount);n({headCount:t,bodyCount:o,legsCount:c})},onMouseDown:u,onMouseUp:d,onKeyDown:u,onKeyUp:d,children:Object(M.jsx)(x,{src:P,alt:"random button",mouseDown:i})})},E=n.p+"static/media/fcuk-arrow-right.3bad8883.png",H=function(t){var e=t.count,n=t.setCount;return Object(M.jsxs)(D,{children:[Object(M.jsx)(U,{src:E,altText:"first right arrow",onClick:function(){if(e.headCount===b.length)return n(Object(K.a)(Object(K.a)({},e),{},{headCount:1}));n(Object(K.a)(Object(K.a)({},e),{},{headCount:e.headCount+1}))}}),Object(M.jsx)(U,{src:E,altText:"second right arrow",onClick:function(){if(e.bodyCount===j.length)return n(Object(K.a)(Object(K.a)({},e),{},{bodyCount:1}));n(Object(K.a)(Object(K.a)({},e),{},{bodyCount:e.bodyCount+1}))}}),Object(M.jsx)(U,{src:E,altText:"third right arrow",onClick:function(){if(e.legsCount===m.length)return n(Object(K.a)(Object(K.a)({},e),{},{legsCount:1}));n(Object(K.a)(Object(K.a)({},e),{},{legsCount:e.legsCount+1}))}})]})},J=n(4),q=n.n(J),G=n(8),W=n(24),X=n(27),Z=n(34),Q=Object(Z.a)({apiKey:"AIzaSyCGzXMkysya2vbrW_jUuZM3gBe98KPP3K4",authDomain:"fc-uk-f81d2.firebaseapp.com",projectId:"fc-uk-f81d2",storageBucket:"fc-uk-f81d2.appspot.com",messagingSenderId:"1084053109885",appId:"1:1084053109885:web:237fa852c7641cd73bc514"}),V=c.a.forwardRef((function(t,e){var n=Object(W.a)(Q),o=Object(X.b)({type:"image/jpeg",quality:1}),c=Object(s.a)(o,2)[1],a=function(){var t=Object(G.a)(q.a.mark((function t(e){var o,c;return q.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=e.replace(/data:image\/jpeg;base64,/g,""),c=Object(W.b)(n,(new Date).toString()),t.next=4,Object(W.c)(c,o,"base64",{contentType:"image/jpeg"});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),i=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.name,o=void 0===n?"fcuk-charcter":n,c=e.extension,a=void 0===c?"jpg":c,i=document.createElement("a");return i.href=t,i.download=Object(X.a)(a,o),i.click(),t};return Object(M.jsx)("button",{onClick:function(){return c(e.current).then(i).then(a)},children:"Screenshot"})})),Y=function(){var t=Object(o.createRef)(),e=Object(o.useState)({headCount:1,bodyCount:1,legsCount:1}),n=Object(s.a)(e,2),c=n[0],a=n[1];return Object(M.jsxs)(y,{children:[Object(M.jsx)(z,{children:Object(M.jsx)(w,{src:r,alt:"fcuk title"})}),Object(M.jsxs)(N,{children:[Object(M.jsx)(A,{count:c,setCount:a}),Object(M.jsx)(B,{count:c,ref:t}),Object(M.jsx)(H,{count:c,setCount:a})]}),Object(M.jsxs)(S,{children:[Object(M.jsx)(L,{count:c,setCount:a}),Object(M.jsx)(V,{ref:t})]})]})},$=(n(45),function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,47)).then((function(e){var n=e.getCLS,o=e.getFID,c=e.getFCP,a=e.getLCP,i=e.getTTFB;n(t),o(t),c(t),a(t),i(t)}))});i.a.render(Object(M.jsx)(c.a.StrictMode,{children:Object(M.jsx)(Y,{})}),document.getElementById("root")),$()}},[[46,1,2]]]);
//# sourceMappingURL=main.3ba95e3a.chunk.js.map