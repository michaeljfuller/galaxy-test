(this["webpackJsonpgalaxy-test"]=this["webpackJsonpgalaxy-test"]||[]).push([[0],{16:function(e,t,n){e.exports={root:"GeneralProfileSection_root__1_ct5",title:"GeneralProfileSection_title__VeBBF",subtitle:"GeneralProfileSection_subtitle__3Z5tI",row:"GeneralProfileSection_row__kIRMD",avatar:"GeneralProfileSection_avatar__2jIhU",delete:"GeneralProfileSection_delete__7YXZf",secondary:"GeneralProfileSection_secondary__XnhVT"}},18:function(e,t,n){e.exports={root:"ApiProfileSection_root__21o-V",title:"ApiProfileSection_title__1x4K7",subtitle:"ApiProfileSection_subtitle__1F6yt",row:"ApiProfileSection_row__3Smhx",key:"ApiProfileSection_key__29IAz",checkWrapper:"ApiProfileSection_checkWrapper__1KtQy",ghost:"ApiProfileSection_ghost__1j8Ci",ghostSecondary:"ApiProfileSection_ghostSecondary__1VGAq",copied:"ApiProfileSection_copied__3vj24"}},20:function(e,t,n){e.exports={root:"NavBar_root__17Fxz",menu:"NavBar_menu__2DAUx",notifications:"NavBar_notifications__2NYfH",avatar:"NavBar_avatar__fhirX",title:"NavBar_title__1KXPo",links:"NavBar_links__2uShj",actions:"NavBar_actions__2rLfr",popUnder:"NavBar_popUnder__2nuIf"}},21:function(e,t,n){e.exports={root:"SideNavigator_root__3qMsO",side:"SideNavigator_side__12umE",link:"SideNavigator_link__HzTn0",disabled:"SideNavigator_disabled__1sYGb",active:"SideNavigator_active__3HDNv",content:"SideNavigator_content__2VWMK"}},24:function(e,t,n){e.exports={root:"LogInScreenForm_root__1WtTA",email:"LogInScreenForm_email__3BWN7",password:"LogInScreenForm_password__2NT2x",error:"LogInScreenForm_error__1Oz4b",signUp:"LogInScreenForm_signUp__l38UE"}},36:function(e,t,n){e.exports={root:"ScienceBackground_root__rP4YR",underlay:"ScienceBackground_underlay__2DaMQ",image:"ScienceBackground_image__fmID9"}},37:function(e,t,n){e.exports={root:"PopUnder_root__18sY5",popUnder:"PopUnder_popUnder__26qp2",background:"PopUnder_background__1AaJ3"}},38:function(e,t,n){e.exports={root:"LatestNotificationsList_root__1QFgU",list:"LatestNotificationsList_list__1s_4K",seeAll:"LatestNotificationsList_seeAll__26M5u"}},43:function(e,t,n){e.exports={root:"LogInScreen_root__wucdi",formContainer:"LogInScreen_formContainer__16qrC"}},44:function(e,t,n){e.exports={root:"ScreenWrapper_root__25_iQ",navBar:"ScreenWrapper_navBar__2Tmmt"}},45:function(e,t,n){e.exports={root:"Badge_root__1pdba",badge:"Badge_badge__1xUSy"}},46:function(e,t,n){e.exports={root:"App_root__17VTV"}},52:function(e,t,n){},60:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),c=n(28),i=n.n(c),s=(n(52),n(7)),o=n(46),l=n.n(o),u=n(11),d=n(35),j=n(27),h=j.c,b=function(){return Object(j.b)()};function p(e){return h((function(e){return e.user.current}))}var f=n(0);var O=function(e){var t=e.component,n=e.children,r=e.redirectTo,a=e.pushRedirect,c=Object(d.a)(e,["component","children","redirectTo","pushRedirect"]),i=p();return Object(f.jsx)(s.b,Object(u.a)(Object(u.a)({},c),{},{children:i?n||t:Object(f.jsx)(s.a,{to:r,push:a})}))},v=n(6),x=n.n(v),m=n(17),g=n(43),_=n.n(g),y=n(36),N=n.n(y);function w(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return Object.assign.apply(Object,[{}].concat(t))}function k(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter(Boolean).join(" ")}var S=Object(r.createContext)("/");var L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=Object(r.useContext)(S);return e.includes("://")?e:(e.startsWith("/")&&(e=e.slice(1)),t.endsWith("/")||(t+="/"),t+e)};function I(e){var t=e.className,n=void 0===t?"":t,r=e.style,a=L("science-background-image.jpg");return Object(f.jsxs)("div",{className:k(N.a.root,n),style:w(C,r),children:[Object(f.jsx)("div",{className:N.a.underlay}),Object(f.jsx)("img",{className:N.a.image,src:a,alt:"science background"})]})}var C=Object.freeze({height:"100vh",width:Math.floor(100/(1440/1028))+"vh"}),U=n(19),P=n(10),E=n(24),A=n.n(E);var B=function(e){var t=e.disabled,n=Object(r.useState)(""),a=Object(U.a)(n,2),c=a[0],i=a[1],s=Object(r.useState)(""),o=Object(U.a)(s,2),l=o[0],u=o[1],d=function(){var t=Object(m.a)(x.a.mark((function t(n){return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n.preventDefault(),e.disabled||e.onSubmit(c,l);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(f.jsxs)("form",{className:k(A.a.root,e.className),style:e.style,onSubmit:d,children:[Object(f.jsxs)("label",{className:A.a.email,children:[Object(f.jsx)("span",{children:"Email"}),Object(f.jsx)("input",{type:"email",required:!0,disabled:t,value:c,onChange:function(e){return i(e.target.value)},placeholder:"ramona@example.com"})]}),Object(f.jsxs)("label",{className:A.a.password,children:[Object(f.jsx)("span",{children:"Password"}),Object(f.jsx)("input",{type:"password",required:!0,disabled:t,value:l,onChange:function(e){return u(e.target.value)},placeholder:"\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"})]}),e.error?Object(f.jsx)("p",{className:A.a.error,children:e.error}):null,Object(f.jsx)("input",{disabled:t,type:"submit",value:"Log in"}),Object(f.jsxs)("p",{className:A.a.signUp,children:["Don\u2019t have an account yet? ",Object(f.jsx)(P.c,{to:"/sign-up",children:"Sign up"})]})]})},D=n(22),F={current:void 0,signingIn:!1,signingOut:!1},G=Object(D.b)({name:"user",initialState:F,reducers:{signIn:function(e,t){e.signingIn=!0,e.signingInAs=t.payload,e.signInError=void 0},signInError:function(e,t){e.signingIn=!1,e.signingInAs=void 0,e.signInError=t.payload},signOut:function(e){e.signingOut=!0,e.signOutError=void 0},signOutError:function(e,t){e.signingOut=!1,e.signOutError=t.payload},setUser:function(e,t){e.current=t.payload||void 0,e.signingIn=!1,e.signingInAs=void 0,e.signingOut=!1}}}),T=G.actions,q=T.signIn,W=T.signInError,M=T.signOut,V=T.signOutError,z=T.setUser;var R=function(e){var t=b(),n=h((function(e){return e.user})),a=!!n.current,c=n.signingIn,i=n.signInError,s=function(){var e=Object(m.a)(x.a.mark((function e(n,r){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t(q({email:n,password:r}));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){a&&e.history.push("/")}),[a,e.history]),Object(f.jsxs)("div",{className:_.a.root,children:[Object(f.jsx)("div",{className:_.a.formContainer,children:Object(f.jsxs)("div",{children:[Object(f.jsx)("h1",{children:"Log in"}),Object(f.jsx)(B,{onSubmit:s,error:i,disabled:c})]})}),Object(f.jsx)(I,{style:{minWidth:C.width}})]})},Y=n(21),H=n.n(Y);var J=Object(r.memo)(Object(s.g)((function(e){var t=e.location.pathname;return Object(f.jsxs)("div",{className:k(H.a.root,e.className),style:e.style,children:[Object(f.jsx)("nav",{className:H.a.side,children:e.links.map((function(n){var r,a;return n.component?Object(f.jsx)(P.c,{to:(null===(r=e.match)||void 0===r?void 0:r.url)+n.path,children:Object(f.jsx)("div",{className:k(H.a.link,(null===(a=e.match)||void 0===a?void 0:a.url)+n.path===t?H.a.active:null),children:n.title})},n.path):Object(f.jsx)("div",{className:H.a.link+" "+H.a.disabled,children:n.title},n.path)}))}),Object(f.jsx)("div",{className:H.a.content,children:Object(f.jsxs)(s.d,{children:[e.links.map((function(t){t.title,t.replace;var n,r=t.path,a=t.component,c=Object(d.a)(t,["title","replace","path","component"]);return a?Object(f.jsx)(s.b,Object(u.a)({path:(null===(n=e.match)||void 0===n?void 0:n.path)+r,component:a},c),r):null})),Object(f.jsx)(s.b,{path:"*",children:Object(f.jsx)("p",{children:"Section not found"})})]})})]})})));J.displayName="SideNavigator";var K=J,Q=n(16),X=n.n(Q);var Z=function(e){var t=p(),n=Object(r.useState)(Object(u.a)({},t)),a=Object(U.a)(n,2),c=a[0],i=a[1],s=L(c.avatar),o="";JSON.stringify(t)!==JSON.stringify(c)||(o="No changes made.");var l=Object(r.useCallback)((function(e){i(Object(u.a)(Object(u.a)({},c),{},{givenName:e.target.value}))}),[c,i]),d=Object(r.useCallback)((function(e){i(Object(u.a)(Object(u.a)({},c),{},{familyName:e.target.value}))}),[c,i]),j=Object(r.useCallback)((function(e){i(Object(u.a)(Object(u.a)({},c),{},{email:e.target.value}))}),[c,i]),h=Object(r.useCallback)((function(e){i(Object(u.a)(Object(u.a)({},c),{},{phone:e.target.value}))}),[c,i]);return Object(f.jsxs)("section",{className:X.a.root,children:[Object(f.jsx)("h2",{className:X.a.title,children:"General"}),Object(f.jsx)("p",{className:X.a.subtitle,children:"Click field boxes to edit and then save your changes."}),Object(f.jsx)("div",{className:X.a.row,children:Object(f.jsxs)("label",{className:X.a.avatar,children:["Avatar",Object(f.jsxs)("div",{children:[Object(f.jsx)("img",{src:s,alt:"avatar"}),Object(f.jsx)("button",{children:"Upload"}),Object(f.jsx)("button",{className:X.a.secondary,children:"Remove"})]})]})}),Object(f.jsx)("hr",{}),Object(f.jsxs)("div",{className:X.a.row,children:[Object(f.jsxs)("label",{children:["First name",Object(f.jsx)("input",{required:!0,value:c.givenName,onChange:l})]}),Object(f.jsxs)("label",{children:["Last name",Object(f.jsx)("input",{required:!0,value:c.familyName,onChange:d})]})]}),Object(f.jsxs)("div",{className:X.a.row,children:[Object(f.jsxs)("label",{children:["Email",Object(f.jsx)("input",{required:!0,type:"email",value:c.email,onChange:j})]}),Object(f.jsxs)("label",{children:["Phone number",Object(f.jsx)("input",{required:!0,type:"phone",value:c.phone,onChange:h})]})]}),Object(f.jsx)("hr",{}),Object(f.jsx)("div",{className:X.a.row,children:Object(f.jsxs)("label",{className:X.a.delete,children:["Delete account",Object(f.jsxs)("div",{children:[Object(f.jsx)("span",{children:"By deleting your account you will lose all of your data."}),Object(f.jsx)("button",{disabled:!0,children:"Delete account..."})]})]})}),Object(f.jsx)("hr",{}),Object(f.jsx)("input",{className:X.a.submit,disabled:!!o,type:"submit",value:"Save Changes",title:o||void 0})]})},$=n(18),ee=n.n($);var te=function(e){var t=Object(r.useRef)(null),n=Object(r.useState)(!1),a=Object(U.a)(n,2),c=a[0],i=a[1],s=p(),o=L("copy-icon.svg"),l=s.token;return Object(r.useEffect)((function(){if(c){var e=setTimeout((function(){return i(!1)}),3e3);return function(){return clearTimeout(e)}}}),[c,i]),Object(f.jsxs)("section",{className:ee.a.root,children:[Object(f.jsx)("h2",{className:ee.a.title,children:"Access token"}),Object(f.jsx)("p",{className:ee.a.subtitle,children:"Generate your unique key to access Galactic Data\u2122."}),Object(f.jsx)("div",{className:ee.a.row,children:Object(f.jsxs)("label",{className:ee.a.key,children:["Your unique key",Object(f.jsx)("div",{className:l?ee.a.checkWrapper:void 0,children:Object(f.jsx)("input",{ref:t,value:l,readOnly:!0,disabled:!l})})]})}),Object(f.jsx)("div",{className:ee.a.row,children:l?Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)("button",{className:ee.a.ghost,onClick:function(){var e;t.current&&(t.current.select(),document.execCommand("copy"),null===(e=document.getSelection())||void 0===e||e.empty(),t.current.blur(),i(!0))},children:[Object(f.jsx)("img",{src:o,alt:"copy"})," Copy to clipboard"]}),Object(f.jsx)("button",{className:ee.a.ghostSecondary,children:"Generate another"})]}):Object(f.jsx)("button",{children:"Generate key"})}),c?Object(f.jsx)("p",{className:ee.a.copied,children:"Copied!"}):null]})},ne=n(44),re=n.n(ne),ae=n(20),ce=n.n(ae);var ie=function(e){var t=e.style,n=e.className,r=e.color,a=void 0===r?"#000000":r,c=Math.min(4,4)/5;return Object(f.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:16,height:16,style:t,className:n,children:Object(f.jsxs)("g",{children:[Object(f.jsx)("rect",{width:4,height:4,rx:c,fill:a,x:0,y:0}),Object(f.jsx)("rect",{width:4,height:4,rx:c,fill:a,x:6,y:0}),Object(f.jsx)("rect",{width:4,height:4,rx:c,fill:a,x:12,y:0}),Object(f.jsx)("rect",{width:4,height:4,rx:c,fill:a,x:0,y:6}),Object(f.jsx)("rect",{width:4,height:4,rx:c,fill:a,x:6,y:6}),Object(f.jsx)("rect",{width:4,height:4,rx:c,fill:a,x:12,y:6}),Object(f.jsx)("rect",{width:4,height:4,rx:c,fill:a,x:0,y:12}),Object(f.jsx)("rect",{width:4,height:4,rx:c,fill:a,x:6,y:12}),Object(f.jsx)("rect",{width:4,height:4,rx:c,fill:a,x:12,y:12})]})})};function se(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"An error occurred";if(e){if(e instanceof Error)return e.message||e.name;if("string"===typeof e)return e}return t}var oe=n(45),le=n.n(oe);var ue=function(e){return Object(f.jsxs)("div",{className:k(le.a.root,e.containerClassName),style:e.containerStyle,children:[e.children,e.hidden?null:Object(f.jsx)("div",{className:k(le.a.badge,e.className),style:e.style,children:e.value})]})};function de(){return h((function(e){return e.notifications}))}var je=n(37),he=n.n(je);function be(e){return Object(f.jsxs)("div",{className:k(he.a.root,e.containerClassName),style:e.containerStyle,children:[e.open?Object(f.jsx)("div",{className:he.a.background,onClick:e.onClose}):null,e.children,e.open?Object(f.jsx)("div",{className:k(he.a.popUnder,e.className),style:e.style,children:a.a.createElement(e.content)}):null]})}var pe=n(38),fe=n.n(pe);var Oe=function(){var e=de(),t=e.latest,n=e.fetchingLatest,r=e.fetchLatestError;return Object(f.jsxs)("div",{className:fe.a.root,children:[Object(f.jsxs)("ul",{className:fe.a.list,children:[t.map((function(e){return Object(f.jsx)(P.c,{to:"/notifications/".concat(e.id),children:Object(f.jsx)(ue,{value:"Unread",hidden:e.read,children:Object(f.jsx)("li",{children:e.title})})},e.id)})),0!==t.length||n?null:Object(f.jsx)("li",{children:"No notifications"})]}),n?Object(f.jsx)("p",{children:"Loading..."}):null,r?Object(f.jsx)("p",{children:se(r)}):null,Object(f.jsx)(P.c,{to:"/notifications",children:Object(f.jsx)("div",{className:fe.a.seeAll,children:"See all"})})]})},ve=Object.freeze([{title:"Home",to:"/"},{title:"Categories",to:"/categories"},{title:"Feed",to:"/feed"},{title:"Saved",to:"/saved"}]);var xe=Object(r.memo)(Object(s.g)((function(e){var t=p(),n=de(),a=n.latest.filter((function(e){return!e.read})).length,c=b(),i=h((function(e){return e.user})),s=i.signingOut,o=i.signInError,l=Object(r.useState)(!1),u=Object(U.a)(l,2),d=u[0],j=u[1],O=function(){return j(!d)},v=s,x=L("bell.svg"),m=L(t.avatar);return Object(r.useEffect)((function(){o&&alert(se(o))}),[o]),Object(f.jsxs)("nav",{className:k(ce.a.root,e.className),style:e.style,children:[Object(f.jsx)("div",{className:ce.a.menu,children:Object(f.jsx)(ie,{})}),Object(f.jsx)("p",{className:ce.a.title,children:"Galactic"}),Object(f.jsxs)("div",{className:ce.a.links,children:[ve.map((function(e){return v?Object(f.jsx)("span",{children:e.title},e.to):Object(f.jsx)(P.c,{to:e.to,children:e.title},e.to)})),Object(f.jsx)("span",{children:"\u2022\u2022\u2022"})]}),Object(f.jsxs)("div",{className:ce.a.actions,children:[Object(f.jsx)(be,{open:d,onClose:O,content:Oe,className:ce.a.popUnder,children:Object(f.jsx)(ue,{value:a,hidden:n.fetchingLatest,children:Object(f.jsx)("div",{className:ce.a.notifications,onClick:O,children:Object(f.jsx)("img",{src:x,alt:"Notifications"})})})}),Object(f.jsx)("img",{className:ce.a.avatar,src:m,alt:"avatar"}),Object(f.jsx)("button",{onClick:function(){return c(M())},disabled:v,children:"Log out"})]})]})})));xe.displayName="NavBar";var me=xe;var ge=function(e){return Object(f.jsxs)("div",{className:k(re.a.root,e.className),children:[Object(f.jsx)(me,{className:re.a.navBar}),e.children]})};var _e=function(e){return Object(f.jsxs)(ge,{children:[Object(f.jsx)("h1",{children:"Account settings"}),Object(f.jsx)(K,{links:[{title:"General",path:"",exact:!0,component:Z},{title:"Plan",path:"/plan",component:null},{title:"API",path:"/api",component:te},{title:"Security",path:"/security",component:null},{title:"Notifications",path:"/notifications",component:null},{title:"Billing History",path:"/billing-history",component:null},{title:"Legal",path:"/legal",component:null}]})]})},ye=n(34),Ne=Object(D.b)({name:"notifications",initialState:{latest:[],fetchingLatest:!1},reducers:{fetchLatest:function(e){e.fetchingLatest=!0,e.fetchLatestError=void 0},fetchLatestError:function(e,t){e.fetchingLatest=!1,e.fetchLatestError=t.payload},setLatest:function(e,t){e.latest=Object(ye.a)(t.payload),e.fetchingLatest=!1,e.fetchLatestError=void 0}}}),we=Ne.actions,ke=we.fetchLatest,Se=we.fetchLatestError,Le=we.setLatest;var Ie=function(e){var t;return Object(f.jsxs)(ge,{children:[Object(f.jsx)("h1",{children:"Notifications"}),Object(f.jsx)("h2",{children:null===(t=e.match)||void 0===t?void 0:t.params.id})]})};var Ce=function(){var e=p(),t=b(),n=null===e||void 0===e?void 0:e.email;return Object(r.useEffect)((function(){n&&t(ke())}),[n,t]),Object(f.jsx)("div",{className:l.a.root,children:Object(f.jsxs)(s.d,{children:[Object(f.jsx)(s.a,{exact:!0,from:"/",to:"/profile"}),Object(f.jsx)(s.b,{path:"/login",component:R}),Object(f.jsx)(O,{redirectTo:"/login",path:"/profile",component:_e}),Object(f.jsx)(O,{redirectTo:"/login",path:"/notifications/:id?",component:Ie}),Object(f.jsxs)(s.b,{path:"*",children:[Object(f.jsx)("h1",{children:"404"}),Object(f.jsx)("p",{children:"Page not found"})]})]})})},Ue=n(47),Pe=n(8),Ee=x.a.mark(De),Ae=x.a.mark(Fe),Be=x.a.mark(Ge);function De(e){var t,n;return x.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,Object(Pe.d)("auth");case 3:return t=r.sent,r.next=6,Object(Pe.b)([t,t.signIn],e.payload.email,e.payload.password);case 6:return n=r.sent,r.next=9,Object(Pe.e)(z(n));case 9:r.next=15;break;case 11:return r.prev=11,r.t0=r.catch(0),r.next=15,Object(Pe.e)(W(se(r.t0)));case 15:case"end":return r.stop()}}),Ee,null,[[0,11]])}function Fe(){var e;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(Pe.d)("auth");case 3:return e=t.sent,t.next=6,Object(Pe.b)([e,e.signOut]);case 6:return t.next=8,Object(Pe.e)(z(void 0));case 8:t.next=14;break;case 10:return t.prev=10,t.t0=t.catch(0),t.next=14,Object(Pe.e)(V(t.t0));case 14:case"end":return t.stop()}}),Ae,null,[[0,10]])}function Ge(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Pe.f)(q.type,De);case 2:return e.next=4,Object(Pe.f)(M.type,Fe);case 4:case"end":return e.stop()}}),Be)}var Te=x.a.mark(We),qe=x.a.mark(Me);function We(){var e,t;return x.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(Pe.d)("notifications");case 3:return e=n.sent,n.next=6,Object(Pe.b)([e,e.fetchLatest]);case 6:return t=n.sent,n.next=9,Object(Pe.e)(Le(t));case 9:n.next=15;break;case 11:return n.prev=11,n.t0=n.catch(0),n.next=15,Object(Pe.e)(Se(se(n.t0)));case 15:case"end":return n.stop()}}),Te,null,[[0,11]])}function Me(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Pe.f)(ke.type,We);case 2:case"end":return e.stop()}}),qe)}var Ve=x.a.mark(ze);function ze(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Pe.a)([Object(Pe.c)(Ge),Object(Pe.c)(Me)]);case 2:case"end":return e.stop()}}),Ve)}var Re=ze,Ye=n(32),He=n(33);function Je(e){return new Promise((function(t){setTimeout(t,e)}))}function Ke(e){return{email:e,givenName:e.split("@")[0]||"",familyName:e.split("@")[1]||"",token:Math.random().toString().split(".").pop()||"",avatar:"/avatar.jpg",phone:Math.random().toString().split(".")[1].slice(0,10)}}var Qe=function(){function e(t){Object(Ye.a)(this,e),this.currentUser=void 0,this.options={fetchUserDelay:300,signInDelay:500,signOutDelay:500,signUpDelay:100},Object.assign(this.options,t)}return Object(He.a)(e,[{key:"fetchUser",value:function(){var e=Object(m.a)(x.a.mark((function e(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Je(this.options.fetchUserDelay);case 2:return e.abrupt("return",this.currentUser||null);case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"signIn",value:function(){var e=Object(m.a)(x.a.mark((function e(t,n){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Je(this.options.signInDelay);case 2:if(n){e.next=4;break}throw new Error("Failed to sign in");case 4:return e.abrupt("return",this.currentUser=Ke(t));case 5:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"signOut",value:function(){var e=Object(m.a)(x.a.mark((function e(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.currentUser=void 0,e.next=3,Je(this.options.signOutDelay);case 3:return e.abrupt("return",!0);case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"signUp",value:function(){var e=Object(m.a)(x.a.mark((function e(t,n){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Je(this.options.signUpDelay);case 2:if(n){e.next=4;break}throw new Error("Failed to sign up");case 4:return e.abrupt("return",this.currentUser=Ke(t));case 5:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()}]),e}(),Xe=function(){function e(t){Object(Ye.a)(this,e),this.options={endpoint:"https://mockend.com/biorelate/fe-mock-api/notification",latestLength:10},Object.assign(this.options,t)}return Object(He.a)(e,[{key:"fetchNotifications",value:function(){var e=Object(m.a)(x.a.mark((function e(t,n,r){var a;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=this.options.endpoint+"?offset=".concat(t,"&limit=").concat(n),void 0!==(null===r||void 0===r?void 0:r.order)&&(a+="&timestamp_order="+r.order),void 0!==(null===r||void 0===r?void 0:r.read)&&(a+="&read_eq="+(r.read?"true":"false")),e.abrupt("return",fetch(a).then((function(e){return e.json()})));case 4:case"end":return e.stop()}}),e,this)})));return function(t,n,r){return e.apply(this,arguments)}}()},{key:"fetchLatest",value:function(){return this.fetchNotifications(0,this.options.latestLength,{order:"desc",read:!0})}}]),e}(),Ze={auth:new Qe({}),notifications:new Xe({})},$e=Object(Ue.a)({context:Ze}),et=Object(D.a)({reducer:{user:G.reducer,notifications:Ne.reducer},middleware:[].concat(Object(ye.a)(Object(D.c)()),[$e]),devTools:!0});$e.run(Re);var tt=function(e){return Object(f.jsx)(a.a.StrictMode,{children:Object(f.jsx)(j.a,{store:et,children:Object(f.jsx)(nt,{children:e.children})})})};function nt(e){return"michaeljfuller.github.io"===window.location.hostname?Object(f.jsx)(S.Provider,{value:"/galaxy-test",children:Object(f.jsx)(P.b,{children:e.children})}):Object(f.jsx)(P.a,{children:e.children})}var rt=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,61)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),c(e),i(e)}))};i.a.render(Object(f.jsx)(tt,{children:Object(f.jsx)(Ce,{})}),document.getElementById("root")),rt()}},[[60,1,2]]]);
//# sourceMappingURL=main.91874767.chunk.js.map