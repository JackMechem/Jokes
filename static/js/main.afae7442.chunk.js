(this.webpackJsonpstateandlifecycle=this.webpackJsonpstateandlifecycle||[]).push([[0],{15:function(e,t,n){},17:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var s=n(1),c=n.n(s),r=n(5),a=n.n(r),i=(n(15),n(4)),o=n.n(i),j=n(6),u=n(7),l=n(8),b=n(10),d=n(9),h=(n(17),n(0));var O=function(e){return Object(h.jsx)("div",{className:"question",children:Object(h.jsx)("p",{children:e.Question})})};var x=function(e){return Object(h.jsx)("div",{className:"awnser",children:Object(h.jsx)("button",{className:"awnser-button",onClick:function(){alert(e.Awnser)},children:"Show Awnser"})})};n(3);var f=function(e){return null===e.Awnser?Object(h.jsx)("div",{className:"Joke-Card",children:Object(h.jsx)(O,{Question:e.question})}):Object(h.jsxs)("div",{className:"Joke-Card",children:[Object(h.jsx)(O,{Question:e.question}),Object(h.jsx)(x,{Awnser:e.awnser})]})};var v=function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{className:"header",children:Object(h.jsx)("h1",{children:"Hilarious Jokes"})}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{})]})};var p=function(){return Object(h.jsx)("div",{className:"footer",children:Object(h.jsx)("p",{children:"(c) Jack Mechem - It is simple but I made it with react so thats all that maters. :)"})})},m=function(e){Object(b.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(u.a)(this,n);for(var s=arguments.length,c=new Array(s),r=0;r<s;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={loading:!0,joke:null},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=Object(j.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"http://localhost:3000/users",e.next=3,fetch("http://localhost:3000/users");case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,this.setState({joke:n.data});case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(h.jsx)("div",{children:this.state.loading&&this.state.joke?Object(h.jsxs)("div",{children:[Object(h.jsx)(v,{}),this.state.joke.map((function(e){return Object(h.jsx)(f,{question:e.question,awnser:e.answer},e.id)})),Object(h.jsx)(p,{})]}):Object(h.jsx)("div",{children:"loading"})})}}]),n}(c.a.Component),w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,20)).then((function(t){var n=t.getCLS,s=t.getFID,c=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),s(e),c(e),r(e),a(e)}))};a.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(m,{})}),document.getElementById("root")),w()},3:function(e,t,n){}},[[19,1,2]]]);
//# sourceMappingURL=main.afae7442.chunk.js.map