(this.webpackJsonptest=this.webpackJsonptest||[]).push([[0],{18:function(e,t,n){e.exports=n(32)},23:function(e,t,n){},24:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},25:function(e,t,n){},26:function(e,t){},32:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(5),c=n.n(l),o=(n(23),n(24),n(25),n(15));var i=function(){return r.a.createElement("nav",{className:"navbar navbar-expand-lg  justify-content-center"},r.a.createElement("div",{className:"navbar-brand"},"Employee Directory"))},u=n(11),m=n(12),s=n(17),d=n(16),E=n(34),h=function(e){Object(s.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).state={items:[],loading:!1},a}return Object(m.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://randomuser.me/api/?results=20").then((function(e){return e.json()})).then((function(t){return e.setState({items:t.results,loading:!0})}))}},{key:"render",value:function(){var e=this.state,t=e.items;return e.loading?r.a.createElement("div",{className:"container"},r.a.createElement(E.a,{striped:!0,bordered:!0,hover:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Picture"),r.a.createElement("th",null,"ID"),r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Email"),r.a.createElement("th",null,"Location"))),t.map((function(e){return r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("img",{src:e.picture.medium,alt:e.name.first})),r.a.createElement("td",null,e.location.street.number),r.a.createElement("td",null,e.name.first,"\xa0",e.name.last),r.a.createElement("td",null,e.email),r.a.createElement("td",null,e.location.city,",\xa0",e.location.state)))})))):r.a.createElement("div",null,"Loading...")}}]),n}(a.Component);n(26);function v(){return r.a.createElement(o.a,null,r.a.createElement(i,null),r.a.createElement(h,null))}var f=document.getElementById("root");c.a.render(r.a.createElement(v,null),f);var p=v;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.da4ca0f7.chunk.js.map