(this.webpackJsonphotwager=this.webpackJsonphotwager||[]).push([[0],{143:function(e,t,a){e.exports=a(226)},148:function(e,t,a){},226:function(e,t,a){"use strict";a.r(t);var n,r=a(0),c=a.n(r),o=a(23),i=a.n(o),s=(a(148),a(20)),l=a(24),u=a(31),p=a(32),d=a(35),b=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).instance=void 0,a.setRef=function(e){a.instance=e},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.botName,a=e.buttonSize,n=void 0===a?"medium":a,r=e.cornerRadius,o=e.requestAccess,i=void 0===o?"write":o,s=e.usePic,l=void 0!==s&&s,u=e.onLogin,p=void 0===u?function(e){return console.log(e)}:u;if(!t)return c.a.createElement("div",null,"bot name is undefined");window.TelegramLoginWidget={dataOnauth:function(e){return p(e)}};var d=document.createElement("script");d.src="https://telegram.org/js/telegram-widget.js?4",d.setAttribute("data-telegram-login",t),d.setAttribute("data-size",n),r&&d.setAttribute("data-radius",r.toString()),d.setAttribute("data-request-access",i),d.setAttribute("data-userpic",l.toString()),d.setAttribute("data-onauth","TelegramLoginWidget.dataOnauth(user)"),d.async=!0,this.instance.appendChild(d)}},{key:"render",value:function(){return c.a.createElement("div",{className:this.props.className,ref:this.setRef},this.props.children)}}]),t}(c.a.Component),m=a(245),h=a(258),f=a(249),g=a(250),O=a(67),j=a(251),v=a(252),y=a(253),E=a(254),w=a(255),S=a(256),k=a(257),x=a(246),A=a(248),z=a(247),B=a(56),P=a(25),C=a.n(P),I=a(48),q=a(81),W="3N3AeA5FWm7EHheHoik8BBEA3GXXJosnVY8",D="https://testnode1.wavesnodes.com",N=function(){var e=Object(I.a)(C.a.mark((function e(t,a){var n,r;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={dApp:W,feeAssetId:null,call:{function:"bet",args:[{type:"integer",value:t}]},payment:[{assetId:null,amount:1e8}],chainId:"T"},r=Object(q.invokeScript)(n,a),e.t0=console,e.next=5,Object(q.broadcast)(r,D);case 5:e.t1=e.sent,e.t0.log.call(e.t0,e.t1);case 7:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),T=Object(B.b)("accountsStore","dappStore")(n=Object(B.c)(n=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).handleTelegramResponse=function(e){console.log(a.props.accountsStore.updateUser(e).address)},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.accountsStore.user,t=this.props.dappStore,a=t.k1,n=t.k2,r=t.story;return c.a.createElement(m.a,{style:{padding:"20px"},container:!0,spacing:6,justify:"space-between",alignItems:"center"},c.a.createElement(m.a,{item:!0,xs:6},c.a.createElement(x.a,{avatar:e?c.a.createElement(A.a,{alt:"Ted talk",src:e.photo_url}):c.a.createElement(z.a,{variant:"circle",width:40,height:40}),subheader:e?e.address:c.a.createElement(z.a,{height:6,width:"40%"}),title:e?c.a.createElement("div",null,"balance:\xa0",e.balance,"\xa0waves"):c.a.createElement(z.a,{height:6,width:"80%"})})),c.a.createElement(m.a,{item:!0,xs:6},c.a.createElement(b,{botName:"HotWagerBot",onLogin:this.handleTelegramResponse,usePic:!0})),c.a.createElement(m.a,{item:!0,xs:6},c.a.createElement(h.a,null,c.a.createElement(f.a,null,c.a.createElement(g.a,null,c.a.createElement(O.a,{gutterBottom:!0,variant:"h5",component:"h2"},"Event 1"),c.a.createElement(O.a,{gutterBottom:!0,variant:"h5",component:"h3"},a&&a/100),c.a.createElement(O.a,{variant:"body2",color:"textSecondary",component:"p"},"Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"))),c.a.createElement(j.a,null,c.a.createElement(v.a,{disabled:!e||!e.seed,onClick:function(){return N(1,e.seed||"")},variant:"contained",color:"primary"},"Choose event")))),c.a.createElement(m.a,{item:!0,xs:6},c.a.createElement(h.a,null,c.a.createElement(f.a,null,c.a.createElement(g.a,null,c.a.createElement(O.a,{gutterBottom:!0,variant:"h5",component:"h2"},"Event 2"),c.a.createElement(O.a,{gutterBottom:!0,variant:"h5",component:"h3"},n&&n/100),c.a.createElement(O.a,{variant:"body2",color:"textSecondary",component:"p"},"Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"))),c.a.createElement(j.a,null,c.a.createElement(v.a,{disabled:!e||!e.seed,onClick:function(){return N(2,e.seed||"")},variant:"contained",color:"primary"},"Choose event")))),r&&c.a.createElement(m.a,{item:!0,xs:6},c.a.createElement(y.a,{"aria-label":"simple table"},c.a.createElement(E.a,null,c.a.createElement(w.a,null,c.a.createElement(S.a,{align:"right"},"Index"),c.a.createElement(S.a,{align:"right"},"Coefficient 1"),c.a.createElement(S.a,{align:"right"},"Coefficient 2"),c.a.createElement(S.a,null,"Your choose"))),c.a.createElement(k.a,null,r.map((function(e){var t=e.k1,a=e.k2,n=e.i,r=e.e;return c.a.createElement(w.a,{key:n},c.a.createElement(S.a,{component:"th",scope:"row"},n),c.a.createElement(S.a,{align:"right"},t/100),c.a.createElement(S.a,{align:"right"},a/100),c.a.createElement(S.a,{align:"right"},r))}))))))}}]),t}(c.a.Component))||n)||n;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var U,_,L,J,R,H,X,Y,F,G,M=a(26),V=a(16),$=a(21),K=(a(134),function e(t){Object(s.a)(this,e),this.rootStore=t}),Q=a(7),Z=a(9),ee=a(47),te=a.n(ee),ae=(U=function(e){function t(e,a){var n;return Object(s.a)(this,t),n=Object(u.a)(this,Object(p.a)(t).call(this,e)),Object(M.a)(n,"user",_,Object(V.a)(n)),n.serialize=function(){return{tgUser:n.user}},Object(M.a)(n,"deserialize",L,Object(V.a)(n)),null!=a&&n.deserialize(a),n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"updateUser",value:function(e){return this.user&&this.user.id===e.id||(e.seed=Object(Z.randomSeed)(),e.address=Object(Z.address)(e.seed,"T"),this.user=e),this.user}},{key:"updateBalance",value:function(){var e=Object(I.a)(C.a.mark((function e(){var t,a;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.user||!this.user.address){e.next=6;break}return e.next=3,te.a.get("".concat(D,"/addresses/balance/").concat(this.user.address));case 3:t=e.sent,a=t.data.balance,this.user.balance=a/1e8;case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]),t}(K),_=Object($.a)(U.prototype,"user",[Q.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),Object($.a)(U.prototype,"updateUser",[Q.d],Object.getOwnPropertyDescriptor(U.prototype,"updateUser"),U.prototype),Object($.a)(U.prototype,"updateBalance",[Q.d],Object.getOwnPropertyDescriptor(U.prototype,"updateBalance"),U.prototype),L=Object($.a)(U.prototype,"deserialize",[Q.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t){t.tgUser&&(e.user=t.tgUser)}}}),U),ne=a(82),re=a(36);function ce(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function oe(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?ce(a,!0).forEach((function(t){Object(re.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ce(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var ie=(J=function(e){function t(e){var a;return Object(s.a)(this,t),a=Object(u.a)(this,Object(p.a)(t).call(this,e)),Object(M.a)(a,"k1",R,Object(V.a)(a)),Object(M.a)(a,"k2",H,Object(V.a)(a)),Object(M.a)(a,"count1",X,Object(V.a)(a)),Object(M.a)(a,"count2",Y,Object(V.a)(a)),Object(M.a)(a,"story",F,Object(V.a)(a)),a.startWatchState=function(){return Object(Q.e)((function(e){return a.updateStateAndBalance()}),{scheduler:function(e){return setInterval(e,5e3)}})},Object(M.a)(a,"updateStateAndBalance",G,Object(V.a)(a)),a.updateStateAndBalance(),a.startWatchState(),a}return Object(d.a)(t,e),t}(K),R=Object($.a)(J.prototype,"k1",[Q.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),H=Object($.a)(J.prototype,"k2",[Q.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),X=Object($.a)(J.prototype,"count1",[Q.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),Y=Object($.a)(J.prototype,"count2",[Q.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),F=Object($.a)(J.prototype,"story",[Q.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),G=Object($.a)(J.prototype,"updateStateAndBalance",[Q.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return Object(I.a)(C.a.mark((function t(){var a,n,r,c,o;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.rootStore.accountsStore.user&&e.rootStore.accountsStore.user.address){t.next=2;break}return t.abrupt("return");case 2:return a=e.rootStore.accountsStore.user.address,e.rootStore.accountsStore.updateBalance(),t.next=6,te.a.get("".concat(D,"/addresses/data/").concat(W));case 6:n=t.sent,r=n.data,c=function(e,t){var a=t.key,n=t.value;return oe({},e,Object(re.a)({},a,n))},o=r.reduce(c,{}),e.k1=o.q1_next,e.k2=o.q2_next,e.count1=o.n,e.count2=o.m,e.story=Object.entries(o).filter((function(e){var t=Object(ne.a)(e,2);t[0];return t[1]===a})).map((function(e){return Object(ne.a)(e,1)[0].split("_")[0]})).map((function(e){return{e:o["".concat(e,"_event")],k1:o["".concat(e,"_qoef1")],k2:o["".concat(e,"_qoef2")],i:+e}}));case 15:case"end":return t.stop()}}),t)})))}}),J),se=new function e(t){var a=this;Object(s.a)(this,e),this.accountsStore=void 0,this.dappStore=void 0,this.serialize=function(){return{accountsStore:a.accountsStore.serialize()}},null==t&&(t={}),this.accountsStore=new ae(this,t.accountsStore),this.dappStore=new ie(this)}(function(){try{return JSON.parse(localStorage.getItem("store"))||void 0}catch(e){return void console.log(e)}}());Object(Q.e)((function(){var e;console.dir(se),e=se.serialize(),localStorage.setItem("store",JSON.stringify(e))}),{delay:1e3}),i.a.render(c.a.createElement(B.a,se,c.a.createElement(T,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},72:function(e,t){}},[[143,1,2]]]);
//# sourceMappingURL=main.cd36ac55.chunk.js.map