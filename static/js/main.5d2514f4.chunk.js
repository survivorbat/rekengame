(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(e,t,n){e.exports=n(44)},30:function(e,t,n){},31:function(e,t,n){},41:function(e,t){},44:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),u=n(21),c=n.n(u),l=(n(30),n(3)),o=(n(31),n(48)),i=n(46),s=n(47),m=n(49),f=function(e,t){return Math.round(Math.random()*(t-e))+e},v=function(e){return e[Math.floor(Math.random()*e.length)]},b=function(e,t,n,a){for(var r=[f(n,a).toString()],u=1;u<t;u+=1)r.push(v(e),f(n,a).toString());return m.a(r.join(" "))};var p=function(e){var t=e.submitAnswerCallback,n=Object(a.useState)(""),r=Object(l.a)(n,2),u=r[0],c=r[1];return a.createElement("form",{className:"d-flex justify-content-around",onSubmit:function(e){e.preventDefault(),t(parseInt(u,10)),c("")}},a.createElement("input",{autoComplete:"off",type:"number",className:"form-control",name:"answer",value:u,required:!0,autoFocus:!0,onChange:function(e){return c(e.target.value)}}),a.createElement("button",{type:"submit",className:"btn btn-primary"},"\u27a4"))};var E=function(e){var t=e.equation;return a.createElement("div",{className:"text-center"},a.createElement("span",{style:{fontSize:"8em"},className:"equation-display"},t))};var d=function(e){var t=e.previousCorrect,n=e.previousSolution,r=e.score,u=t?"green":"red";return a.createElement(i.a,null,a.createElement(s.a,null,"Score:\xa0",r),a.createElement(s.a,{style:{visibility:void 0===t?"hidden":"visible"}},"Previous:\xa0",a.createElement("span",{className:"fw-bold",style:{color:u}},n||"")))},h=function(e){return Math.ceil(e/20)},S=function(e){return Math.ceil(e/2)+1},j=function(e){return(Math.ceil(e/50)||1)+1},w=function(e){var t=["+"];return e>10&&t.push("-"),e>30&&t.push("*"),t};var y=function(){var e=Object(a.useState)(0),t=Object(l.a)(e,2),n=t[0],r=t[1],u=Object(a.useState)(b(["+"],2,1,1)),c=Object(l.a)(u,2),m=c[0],f=c[1],v=Object(a.useState)(0),y=Object(l.a)(v,2),O=y[0],g=y[1],M=Object(a.useState)(function(){}),C=Object(l.a)(M,2),N=C[0],k=C[1];return a.createElement(o.a,null,a.createElement(i.a,null,a.createElement(s.a,null,a.createElement(E,{equation:m.toString()}))),a.createElement(i.a,null,a.createElement(s.a,null,a.createElement(d,{score:n,previousCorrect:N,previousSolution:O}))),a.createElement(i.a,null,a.createElement(s.a,null,a.createElement(p,{submitAnswerCallback:function(e){var t=m.evaluate();g(t),t===e?(r(n+1),k(!0)):(r(n-1),k(!1)),function(e,t){var n=j(e),a=h(e),r=S(e),u=w(e);t(b(u,n,a,r))}(n,f)}}))))};n(43);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(y,null)),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.5d2514f4.chunk.js.map