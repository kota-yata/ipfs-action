import{S as V,i as G,s as H,e as p,k as E,t as T,c as v,a as b,n as y,g as j,d as u,b as f,H as O,f as A,D as m,h as w,T as P,j as M,m as N,o as U,x as C,u as I,v as Y,V as F,w as J,U as L,O as Q,r as R}from"../../chunks/vendor-495f2134.js";import{l as z}from"../../chunks/index-d8249f4e.js";import{c as W}from"../../chunks/getCountry-18a1af11.js";function X(n){let a,s,r,o,e,c,t,i,l,_,g,k;return{c(){a=p("div"),s=p("img"),o=E(),e=p("h2"),c=T(n[0]),t=E(),i=p("span"),l=T(n[2]),_=E(),g=p("p"),k=T(n[3]),this.h()},l(d){a=v(d,"DIV",{class:!0});var h=b(a);s=v(h,"IMG",{alt:!0,src:!0,class:!0}),o=y(h),e=v(h,"H2",{class:!0});var S=b(e);c=j(S,n[0]),S.forEach(u),t=y(h),i=v(h,"SPAN",{class:!0});var q=b(i);l=j(q,n[2]),q.forEach(u),_=y(h),g=v(h,"P",{class:!0});var D=b(g);k=j(D,n[3]),D.forEach(u),h.forEach(u),this.h()},h(){f(s,"alt","thumbnail"),O(s.src,r=n[1])||f(s,"src",r),f(s,"class","svelte-lroe1p"),f(e,"class","svelte-lroe1p"),f(i,"class","date svelte-lroe1p"),f(g,"class","svelte-lroe1p"),f(a,"class","container svelte-lroe1p")},m(d,h){A(d,a,h),m(a,s),m(a,o),m(a,e),m(e,c),m(a,t),m(a,i),m(i,l),m(a,_),m(a,g),m(g,k)},p(d,[h]){h&2&&!O(s.src,r=d[1])&&f(s,"src",r),h&1&&w(c,d[0]),h&4&&w(l,d[2]),h&8&&w(k,d[3])},i:P,o:P,d(d){d&&u(a)}}}function Z(n,a,s){let{location:r}=a,{image:o}=a,{date:e}=a,{description:c}=a;return n.$$set=t=>{"location"in t&&s(0,r=t.location),"image"in t&&s(1,o=t.image),"date"in t&&s(2,e=t.date),"description"in t&&s(3,c=t.description)},[r,o,e,c]}class $ extends V{constructor(a){super();G(this,a,Z,X,H,{location:0,image:1,date:2,description:3})}}function B(n,a,s){const r=n.slice();return r[1]=a[s],r}function K(n){let a,s,r,o;return s=new $({props:{location:n[1].location,image:`/trip/${n[1].short}/thumbnail.webp`,date:n[1].date,description:n[1].description}}),{c(){a=p("a"),M(s.$$.fragment),this.h()},l(e){a=v(e,"A",{href:!0,class:!0,"sveltekit:prefetch":!0});var c=b(a);N(s.$$.fragment,c),c.forEach(u),this.h()},h(){f(a,"href",r=`/trip/${n[1].short}`),f(a,"class","card svelte-nyhvon"),f(a,"sveltekit:prefetch","")},m(e,c){A(e,a,c),U(s,a,null),o=!0},p(e,c){const t={};c&1&&(t.location=e[1].location),c&1&&(t.image=`/trip/${e[1].short}/thumbnail.webp`),c&1&&(t.date=e[1].date),c&1&&(t.description=e[1].description),s.$set(t),(!o||c&1&&r!==(r=`/trip/${e[1].short}`))&&f(a,"href",r)},i(e){o||(C(s.$$.fragment,e),o=!0)},o(e){I(s.$$.fragment,e),o=!1},d(e){e&&u(a),Y(s)}}}function x(n){let a,s,r,o=z[n[0]].trip,e=[];for(let t=0;t<o.length;t+=1)e[t]=K(B(n,o,t));const c=t=>I(e[t],1,1,()=>{e[t]=null});return{c(){a=E(),s=p("div");for(let t=0;t<e.length;t+=1)e[t].c();this.h()},l(t){F('[data-svelte="svelte-1vhpble"]',document.head).forEach(u),a=y(t),s=v(t,"DIV",{class:!0});var l=b(s);for(let _=0;_<e.length;_+=1)e[_].l(l);l.forEach(u),this.h()},h(){document.title="Trip Scrap | KOTA YATAGAI",f(s,"class","container svelte-nyhvon")},m(t,i){A(t,a,i),A(t,s,i);for(let l=0;l<e.length;l+=1)e[l].m(s,null);r=!0},p(t,[i]){if(i&1){o=z[t[0]].trip;let l;for(l=0;l<o.length;l+=1){const _=B(t,o,l);e[l]?(e[l].p(_,i),C(e[l],1)):(e[l]=K(_),e[l].c(),C(e[l],1),e[l].m(s,null))}for(R(),l=o.length;l<e.length;l+=1)c(l);J()}},i(t){if(!r){for(let i=0;i<o.length;i+=1)C(e[i]);r=!0}},o(t){e=e.filter(Boolean);for(let i=0;i<e.length;i+=1)I(e[i]);r=!1},d(t){t&&u(a),t&&u(s),L(e,t)}}}function ee(n,a,s){let r;return Q(n,W,o=>s(0,r=o)),[r]}class le extends V{constructor(a){super();G(this,a,ee,x,H,{})}}export{le as default};
