import{s as $,n as w}from"../chunks/scheduler.BAhLphj5.js";import{S as z,i as P,e as m,s as M,k as S,c,m as y,f as _,a as I,l as T,d as a,n as q,g as r,o as H,p as L,q as j,r as A}from"../chunks/index.C1dtmE37.js";import{I as D}from"../chunks/image.QeTrz-hT.js";function E(k){let s,b="MMMap",h,p,n,f,o,x="MMMap is a tool that reads every track in your Spotify library, and creates a heatmap based on the birthplace of artists who contributed to the track.",u,l,g="To begin making a user's custom map, MMMap utilizes the Spotify API to fetch user's saved tracks. Next, for each artist in a user's library, there is a frequeny value that represents the number of times the artist is represented in the user's library. After using webscraping to extract each artist's birthplace and geocoding the provided birthplace, MMMap creates a heatmap! The MMMap database contains over 84,000 artists provided by Localify, a platform that personalizes local music recommendations by integrating Spotify playlists with tracks from local artists. Each time a new user uses MMMap, the artists they listen to are added to MMMap's  database.",d,i,C='<a href="https://mmmapproject.com" target="_blank" class="svelte-fx0rzy">Click here to visit the site!</a>',v;return n=new D({props:{baseUrl:"/mmmap/",className:"image-container",alt:"Description of your image"}}),{c(){s=m("h1"),s.textContent=b,h=M(),p=m("div"),S(n.$$.fragment),f=M(),o=m("p"),o.textContent=x,u=M(),l=m("p"),l.textContent=g,d=M(),i=m("p"),i.innerHTML=C,this.h()},l(t){s=c(t,"H1",{"data-svelte-h":!0}),y(s)!=="svelte-63oanm"&&(s.textContent=b),h=_(t),p=c(t,"DIV",{});var e=I(p);T(n.$$.fragment,e),e.forEach(a),f=_(t),o=c(t,"P",{"data-svelte-h":!0}),y(o)!=="svelte-1lkhgd"&&(o.textContent=x),u=_(t),l=c(t,"P",{"data-svelte-h":!0}),y(l)!=="svelte-14h9jvm"&&(l.textContent=g),d=_(t),i=c(t,"P",{class:!0,"data-svelte-h":!0}),y(i)!=="svelte-1wz6ffy"&&(i.innerHTML=C),this.h()},h(){q(i,"class","svelte-fx0rzy")},m(t,e){r(t,s,e),r(t,h,e),r(t,p,e),H(n,p,null),r(t,f,e),r(t,o,e),r(t,u,e),r(t,l,e),r(t,d,e),r(t,i,e),v=!0},p:w,i(t){v||(L(n.$$.fragment,t),v=!0)},o(t){j(n.$$.fragment,t),v=!1},d(t){t&&(a(s),a(h),a(p),a(f),a(o),a(u),a(l),a(d),a(i)),A(n)}}}class B extends z{constructor(s){super(),P(this,s,null,E,$,{})}}export{B as component};
