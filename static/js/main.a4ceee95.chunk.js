(this["webpackJsonpfirebase-movie-app"]=this["webpackJsonpfirebase-movie-app"]||[]).push([[0],{34:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var s=a(2),r=a.n(s),n=a(27),c=a.n(n),i=(a(34),a(20)),o=a(5),l=a(29),u=a(9),j=a(1),b=function(e){var t,a=e.title,s=e.poster_path,r=e.overview,n=e.vote_average;return Object(j.jsxs)("div",{className:"movie",children:[Object(j.jsx)("img",{src:"https://image.tmdb.org/t/p/w1280"+s,alt:"movie-poster"}),Object(j.jsxs)("div",{className:"movie-info",children:[Object(j.jsx)("h3",{children:a}),Object(j.jsx)("span",{className:"tag ".concat((t=n,t>=8?"green":t>=6?"orange":"red")),children:n})]}),Object(j.jsxs)("div",{className:"movie-over",children:[Object(j.jsx)("h2",{children:"Overview:"}),Object(j.jsx)("p",{children:r})]})]})},m=function(){var e=Object(s.useState)([]),t=Object(u.a)(e,2),a=t[0],r=t[1];console.log("movies",a);var n=Object(s.useState)(""),c=Object(u.a)(n,2),i=c[0],o=c[1];Object(s.useEffect)((function(){m("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1")}),[]);var m=function(e){fetch(e).then((function(e){return e.json()})).then((function(e){return r(e.results)}))};return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("form",{onSubmit:function(e){e.preventDefault(),o&&(m("https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query="+i),o(""))},children:Object(j.jsx)("input",{type:"search",className:"search-input",placeholder:"Search a movie...",onChange:function(e){return o(e.target.value)}})}),Object(j.jsx)("div",{className:"movie-container",children:a.map((function(e){return Object(j.jsx)(b,Object(l.a)({},e),e.id)}))})]})},d=Object(s.createContext)(),p=function(e){var t=Object(s.useState)(),a=Object(u.a)(t,2),r=a[0];a[1];return Object(j.jsx)(d.Provider,{value:{currentUser:r},children:e.children})},h=function(){var e=Object(o.f)(),t=Object(s.useContext)(d).currentUser;return Object(j.jsx)("div",{children:Object(j.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:Object(j.jsxs)("div",{className:"container-fluid",children:[Object(j.jsx)("a",{className:"navbar-brand",href:"/",style:{color:"white"},children:"React Movie App"}),Object(j.jsxs)("div",{className:"buttons",children:[t?Object(j.jsx)("h3",{children:t.displayName}):Object(j.jsx)("button",{type:"button",className:"ms-2 btn btn-outline-light",onClick:function(){return e.push("/login")},children:"Login"}),t?Object(j.jsx)("button",{type:"button",className:"ms-2 btn btn-outline-light",onClick:function(){return null},children:"Logout"}):Object(j.jsx)("button",{type:"button",className:"ms-2 btn btn-outline-light",onClick:function(){return e.push("/register")},children:"Register"})]})]})})})},f=a(17),O=a.n(f),v=a(21),x=a(14),g=(a(41),a(45),x.a.initializeApp({apiKey:"AIzaSyBYhSHEILWOei7TA_fJ_PrsDNN3JAVh4G8",authDomain:"fir-app-28b99.firebaseapp.com",projectId:"fir-app-28b99",storageBucket:"fir-app-28b99.appspot.com",messagingSenderId:"693771233000",appId:"1:693771233000:web:bf5a161925021437d10b5d"}),function(){var e=Object(v.a)(O.a.mark((function e(t,a,s,r){var n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.a.auth().createUserWithEmailAndPassword(t,a).then((function(e){var t=e.user;console.log("\ud83d\ude80 REGISTER USER",t),r.push("/")})).catch((function(e){e.code;var t=e.message;console.log("\ud83d\ude80 ~ file: firebase.js ~ line 26 ~ createUser ~ errorMessage",t)}));case 3:return n=x.a.auth().currentUser,e.next=6,n.updateProfile({displayName:s});case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),alert("The email address is already in use by another account!");case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,a,s,r){return e.apply(this,arguments)}}()),N=function(){var e=Object(v.a)(O.a.mark((function e(t,a,s){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.auth().signInWithEmailAndPassword(t,a).then((function(e){var t=e.user;console.log("\ud83d\ude80 LOGIN USER",t),s.push("/")})).catch((function(e){e.code;var t=e.message;alert(t)}));case 2:case"end":return e.stop()}}),e)})));return function(t,a,s){return e.apply(this,arguments)}}(),y=function(){var e=Object(s.useState)(""),t=Object(u.a)(e,2),a=t[0],r=t[1],n=Object(s.useState)(""),c=Object(u.a)(n,2),i=c[0],o=c[1],l=Object(s.useState)(""),b=Object(u.a)(l,2),m=b[0],d=b[1],p=Object(s.useState)(""),h=Object(u.a)(p,2),f=h[0],O=h[1];console.log({firstName:a,lastName:i,email:m,password:f});return Object(j.jsxs)("div",{className:"register",children:[Object(j.jsx)("div",{className:"form-image",children:Object(j.jsx)("img",{src:"https://picsum.photos/1200/900",alt:"sample"})}),Object(j.jsxs)("div",{className:"register-form",children:[Object(j.jsx)("h1",{className:"form-title display-3",children:"Register"}),Object(j.jsxs)("form",{id:"register",children:[Object(j.jsxs)("div",{className:"mb-3",children:[Object(j.jsx)("label",{for:"first-name",className:"form-label display-4",children:"First Name"}),Object(j.jsx)("input",{type:"first-name",className:"form-control",id:"first-name",placeholder:"Enter your first name...",onChange:function(e){return r(e.target.value)}})]}),Object(j.jsxs)("div",{className:"mb-3",children:[Object(j.jsx)("label",{for:"last-name",className:"form-label display-4",children:"Last Name"}),Object(j.jsx)("input",{type:"last-name",className:"form-control",id:"last-name",placeholder:"Enter your last name...",onChange:function(e){return o(e.target.value)}})]}),Object(j.jsxs)("div",{className:"mb-3",children:[Object(j.jsx)("label",{for:"email",className:"form-label display-4",children:"Email"}),Object(j.jsx)("input",{type:"email",className:"form-control",id:"email",placeholder:"Enter your email address...",onChange:function(e){return d(e.target.value)}})]}),Object(j.jsxs)("div",{className:"mb-3",children:[Object(j.jsx)("label",{for:"password",className:"form-label display-4",children:"Password"}),Object(j.jsx)("input",{type:"password",className:"form-control",id:"password",placeholder:"Enter your password address...",onChange:function(e){return O(e.target.value)}})]}),Object(j.jsx)("input",{type:"button",className:"btn btn-primary form-control",value:"Register",onClick:function(){g(m,f)}})]})]})]})},w=function(){var e=Object(o.f)(),t=Object(s.useState)(""),a=Object(u.a)(t,2),r=a[0],n=a[1],c=Object(s.useState)(""),i=Object(u.a)(c,2),l=i[0],b=i[1];return Object(j.jsxs)("div",{className:"register",children:[Object(j.jsxs)("div",{className:"register-form",children:[Object(j.jsx)("h1",{className:"form-title display-3",children:"Login"}),Object(j.jsxs)("form",{id:"login",children:[Object(j.jsxs)("div",{className:"mb-3",children:[Object(j.jsx)("label",{for:"email",className:"form-label display-4",children:"Email"}),Object(j.jsx)("input",{type:"email",className:"form-control",id:"email",placeholder:"Enter your email address...",onChange:function(e){return n(e.target.value)}})]}),Object(j.jsxs)("div",{className:"mb-3",children:[Object(j.jsx)("label",{for:"password",className:"form-label display-4",children:"Password"}),Object(j.jsx)("input",{type:"password",className:"form-control",id:"password",placeholder:"Enter your password address...",onChange:function(e){return b(e.target.value)}})]}),Object(j.jsx)("input",{type:"button",className:"btn btn-primary form-control",value:"Login",onClick:function(){N(r,l,e)}})]}),Object(j.jsx)("button",{className:"btn btn-primary form-control",onClick:function(){!function(){var e=new x.a.auth.GoogleAuthProvider;e.setCustomParameters({promt:"select_account"}),x.a.auth().signInWithPopup(e)}(),e.push("/")},children:"Continue with Google"})]}),Object(j.jsx)("div",{className:"form-image",children:Object(j.jsx)("img",{src:"https://picsum.photos/1200/900",alt:"sample"})})]})},S=function(){return Object(j.jsxs)(i.a,{children:[Object(j.jsx)(h,{}),Object(j.jsxs)(o.c,{children:[Object(j.jsx)(o.a,{path:"/register",component:y}),Object(j.jsx)(o.a,{path:"/login",component:w}),Object(j.jsx)(o.a,{path:"/",component:m})]})]})};var C=function(){return Object(j.jsx)(p,{children:Object(j.jsx)(S,{})})};c.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(C,{})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.a4ceee95.chunk.js.map