import{Z as w,S as z,i as H,s as U,e as m,c as d,b as c,H as x,f as $,T as A,d as p,k as D,t as B,V as G,n as j,a as S,g as O,D as g,U as Z,O as q}from"../../chunks/vendor-495f2134.js";import{l as F}from"../../chunks/index-d8249f4e.js";import{c as J}from"../../chunks/getCountry-18a1af11.js";const K=()=>{const e=w("__svelte__");return{page:{subscribe:e.page.subscribe},navigating:{subscribe:e.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:e.navigating.subscribe}},session:e.session}},L={subscribe(e){return K().page.subscribe(e)}};function I(e,r,i){const a=e.slice();return a[4]=r[i],a[6]=i,a}function V(e){let r,i,a;return{c(){r=m("img"),this.h()},l(n){r=d(n,"IMG",{alt:!0,src:!0,class:!0}),this.h()},h(){c(r,"alt",i=`${e[0].short} ${e[6]}`),x(r.src,a=`/trip/${e[0].short}/${e[6]}.webp`)||c(r,"src",a),c(r,"class","svelte-1xke8m")},m(n,h){$(n,r,h)},p:A,d(n){n&&p(r)}}}function N(e){let r,i,a,n,h,b,l,f,C=e[0].location+"",k,E,_;document.title=r=""+(e[0].location+" | Trip Scrap");let v=Array(e[0].image),o=[];for(let t=0;t<v.length;t+=1)o[t]=V(I(e,v,t));return{c(){i=m("meta"),a=m("meta"),n=m("meta"),h=m("meta"),b=D(),l=m("div"),f=m("h1"),k=B(C),E=D(),_=m("div");for(let t=0;t<o.length;t+=1)o[t].c();this.h()},l(t){const u=G('[data-svelte="svelte-1mzy2di"]',document.head);i=d(u,"META",{property:!0,content:!0}),a=d(u,"META",{property:!0,content:!0}),n=d(u,"META",{property:!0,content:!0}),h=d(u,"META",{property:!0,content:!0}),u.forEach(p),b=j(t),l=d(t,"DIV",{class:!0});var s=S(l);f=d(s,"H1",{class:!0});var y=S(f);k=O(y,C),y.forEach(p),E=j(s),_=d(s,"DIV",{class:!0});var M=S(_);for(let T=0;T<o.length;T+=1)o[T].l(M);M.forEach(p),s.forEach(p),this.h()},h(){c(i,"property","og:url"),c(i,"content",`https://kota-yata.com/trip/${e[0].short}`),c(a,"property","og:title"),c(a,"content",`${e[0].location} | Trip Scrap`),c(n,"property","og:image"),c(n,"content",`https://kota-yata.com/trip/${e[0].short}/thumbnail.webp`),c(h,"property","og:description"),c(h,"content",e[0].description),c(f,"class","svelte-1xke8m"),c(_,"class","images svelte-1xke8m"),c(l,"class","container svelte-1xke8m")},m(t,u){g(document.head,i),g(document.head,a),g(document.head,n),g(document.head,h),$(t,b,u),$(t,l,u),g(l,f),g(f,k),g(l,E),g(l,_);for(let s=0;s<o.length;s+=1)o[s].m(_,null)},p(t,[u]){if(u&1&&r!==(r=""+(t[0].location+" | Trip Scrap"))&&(document.title=r),u&1){v=Array(t[0].image);let s;for(s=0;s<v.length;s+=1){const y=I(t,v,s);o[s]?o[s].p(y,u):(o[s]=V(y),o[s].c(),o[s].m(_,null))}for(;s<o.length;s+=1)o[s].d(1);o.length=v.length}},i:A,o:A,d(t){p(i),p(a),p(n),p(h),t&&p(b),t&&p(l),Z(o,t)}}}function P(e,r,i){let a,n;q(e,J,l=>i(1,a=l)),q(e,L,l=>i(2,n=l));const h=n.params.slug;return[F[a].trip.find(l=>l.short===h)]}class X extends z{constructor(r){super();H(this,r,P,N,U,{})}}export{X as default};
