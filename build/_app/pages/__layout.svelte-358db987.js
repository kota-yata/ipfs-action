import{S as Z,i as $,s as x,e as g,t as T,c as E,a as k,g as j,d as u,b as h,f as I,D as d,h as ee,E as z,F as Q,G as te,k as A,n as J,H as se,I as B,J as U,x as M,u as R,w as ae,K as le,L as oe,M as ie,N as re,O as ne,A as ue,P as W,r as fe,Q as _e,R as ce}from"../chunks/vendor-495f2134.js";import{c as q}from"../chunks/getCountry-18a1af11.js";import{l as pe}from"../chunks/index-d8249f4e.js";/* empty css                    */function X(i){let t,s,l,r;return{c(){t=g("div"),s=T(i[2]),this.h()},l(a){t=E(a,"DIV",{class:!0});var f=k(t);s=j(f,i[2]),f.forEach(u),this.h()},h(){h(t,"class","dialog svelte-mvi9uu")},m(a,f){I(a,t,f),d(t,s),r=!0},p(a,f){(!r||f&4)&&ee(s,a[2])},i(a){r||(z(()=>{l||(l=Q(t,W,{},!0)),l.run(1)}),r=!0)},o(a){l||(l=Q(t,W,{},!1)),l.run(0),r=!1},d(a){a&&u(t),a&&l&&l.end()}}}function he(i){let t,s,l,r,a,f,b,c,m,O,p,v,S,D,y,P,C,w,G,o=i[1]&&X(i);const F=i[5].default,_=te(F,i,i[4],null);return{c(){t=g("header"),s=g("select"),l=g("option"),r=T("Japanese"),a=g("option"),f=T("English"),b=A(),c=g("a"),m=g("img"),p=A(),v=g("main"),o&&o.c(),S=A(),_&&_.c(),D=A(),y=g("footer"),P=T("@ 2021 Kota Yatagai"),this.h()},l(e){t=E(e,"HEADER",{class:!0});var n=k(t);s=E(n,"SELECT",{name:!0});var K=k(s);l=E(K,"OPTION",{});var H=k(l);r=j(H,"Japanese"),H.forEach(u),a=E(K,"OPTION",{});var L=k(a);f=j(L,"English"),L.forEach(u),K.forEach(u),b=J(n),c=E(n,"A",{href:!0,"sveltekit:prefetch":!0,class:!0});var V=k(c);m=E(V,"IMG",{alt:!0,src:!0,width:!0,height:!0}),V.forEach(u),n.forEach(u),p=J(e),v=E(e,"MAIN",{class:!0});var N=k(v);o&&o.l(N),S=J(N),_&&_.l(N),N.forEach(u),D=J(e),y=E(e,"FOOTER",{class:!0});var Y=k(y);P=j(Y,"@ 2021 Kota Yatagai"),Y.forEach(u),this.h()},h(){l.__value="JP",l.value=l.__value,a.__value="EN",a.value=a.__value,h(s,"name","language"),i[0]===void 0&&z(()=>i[6].call(s)),h(m,"alt","to trip page"),se(m.src,O="/airplane.svg")||h(m,"src",O),h(m,"width","50px"),h(m,"height","50px"),h(c,"href","/trip"),h(c,"sveltekit:prefetch",""),h(c,"class","svelte-mvi9uu"),h(t,"class","svelte-mvi9uu"),h(v,"class","svelte-mvi9uu"),h(y,"class","svelte-mvi9uu")},m(e,n){I(e,t,n),d(t,s),d(s,l),d(l,r),d(s,a),d(a,f),B(s,i[0]),d(t,b),d(t,c),d(c,m),I(e,p,n),I(e,v,n),o&&o.m(v,null),d(v,S),_&&_.m(v,null),I(e,D,n),I(e,y,n),d(y,P),C=!0,w||(G=[U(s,"change",i[6]),U(s,"change",i[7])],w=!0)},p(e,[n]){n&1&&B(s,e[0]),e[1]?o?(o.p(e,n),n&2&&M(o,1)):(o=X(e),o.c(),M(o,1),o.m(v,S)):o&&(fe(),R(o,1,1,()=>{o=null}),ae()),_&&_.p&&(!C||n&16)&&le(_,F,e,e[4],C?ie(F,e[4],n,null):oe(e[4]),null)},i(e){C||(M(o),M(_,e),C=!0)},o(e){R(o),R(_,e),C=!1},d(e){e&&u(t),e&&u(p),e&&u(v),o&&o.d(),_&&_.d(e),e&&u(D),e&&u(y),w=!1,re(G)}}}function de(i,t,s){let l,r;ne(i,q,p=>s(0,r=p));let{$$slots:a={},$$scope:f}=t;ue(()=>{const p=sessionStorage.getItem("countryCode");p&&_e(q,r=p,r)});const b=()=>{s(1,c=!0),setTimeout(()=>{s(1,c=!1)},6e3)};let c=!1;function m(){r=ce(this),q.set(r)}const O=()=>{sessionStorage.setItem("countryCode",r),b()};return i.$$set=p=>{"$$scope"in p&&s(4,f=p.$$scope)},i.$$.update=()=>{i.$$.dirty&1&&s(2,l=pe[r].dialog)},[r,c,l,b,f,a,m,O]}class ke extends Z{constructor(t){super();$(this,t,de,he,x,{})}}export{ke as default};
