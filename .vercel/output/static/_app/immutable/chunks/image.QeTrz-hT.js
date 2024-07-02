import{s as f,a as m,b as g,d as c,n as u}from"./scheduler.BAhLphj5.js";import{S as _,i as o,e as b,c as h,n as a,g as d,d as N}from"./index.C1dtmE37.js";function U(l){let e,i,t,w;return{c(){e=b("img"),this.h()},l(s){e=h(s,"IMG",{src:!0,srcset:!0,sizes:!0,alt:!0,loading:!0,class:!0}),this.h()},h(){m(e.src,i=l[0]+"original.webp")||a(e,"src",i),g(e,t=`\r
    `+l[0]+`567w.webp 567w,\r
    `+l[0]+`768w.webp 768w,\r
    `+l[0]+`992w.webp 992w\r
    `)||a(e,"srcset",t),a(e,"sizes",`(max-width: 567px) 567w,\r
    (max-width: 768px) 768w,\r
    (max-width: 992px) 992w`),a(e,"alt",l[1]),a(e,"loading",l[3]),a(e,"class",w=c(l[2])+" svelte-c4ss4y")},m(s,n){d(s,e,n)},p(s,[n]){n&1&&!m(e.src,i=s[0]+"original.webp")&&a(e,"src",i),n&1&&t!==(t=`\r
    `+s[0]+`567w.webp 567w,\r
    `+s[0]+`768w.webp 768w,\r
    `+s[0]+`992w.webp 992w\r
    `)&&a(e,"srcset",t),n&2&&a(e,"alt",s[1]),n&8&&a(e,"loading",s[3]),n&4&&w!==(w=c(s[2])+" svelte-c4ss4y")&&a(e,"class",w)},i:u,o:u,d(s){s&&N(e)}}}function q(l,e,i){let{baseUrl:t}=e,{alt:w}=e,{className:s}=e,{loading:n}=e;return l.$$set=r=>{"baseUrl"in r&&i(0,t=r.baseUrl),"alt"in r&&i(1,w=r.alt),"className"in r&&i(2,s=r.className),"loading"in r&&i(3,n=r.loading)},[t,w,s,n]}class z extends _{constructor(e){super(),o(this,e,q,U,f,{baseUrl:0,alt:1,className:2,loading:3})}}export{z as I};
