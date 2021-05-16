var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function s(t){return"function"==typeof t}function r(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function i(t,e){t.appendChild(e)}function u(t,e,n){t.insertBefore(e,n||null)}function c(t){t.parentNode.removeChild(t)}function l(t){return document.createElement(t)}function a(t){return document.createTextNode(t)}function d(){return a(" ")}function f(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function p(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function h(t){return""===t?null:+t}function $(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function m(t,e){t.value=null==e?"":e}function _(t,e){for(let n=0;n<t.options.length;n+=1){const o=t.options[n];if(o.__value===e)return void(o.selected=!0)}}let g;function v(t){g=t}const y=[],b=[],x=[],w=[],C=Promise.resolve();let k=!1;function U(t){x.push(t)}function G(t){w.push(t)}let I=!1;const L=new Set;function S(){if(!I){I=!0;do{for(let t=0;t<y.length;t+=1){const e=y[t];v(e),T(e.$$)}for(v(null),y.length=0;b.length;)b.pop()();for(let t=0;t<x.length;t+=1){const e=x[t];L.has(e)||(L.add(e),e())}x.length=0}while(y.length);for(;w.length;)w.pop()();k=!1,I=!1,L.clear()}}function T(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(U)}}const D=new Set;function M(t,e){t&&t.i&&(D.delete(t),t.i(e))}function E(t,e,n,o){if(t&&t.o){if(D.has(t))return;D.add(t),undefined.c.push((()=>{D.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}}function q(t,e){t.d(1),e.delete(t.key)}function H(t,e,n){const o=t.$$.props[e];void 0!==o&&(t.$$.bound[o]=n,n(t.$$.ctx[o]))}function P(t){t&&t.c()}function W(t,n,r,i){const{fragment:u,on_mount:c,on_destroy:l,after_update:a}=t.$$;u&&u.m(n,r),i||U((()=>{const n=c.map(e).filter(s);l?l.push(...n):o(n),t.$$.on_mount=[]})),a.forEach(U)}function j(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function N(t,e){-1===t.$$.dirty[0]&&(y.push(t),k||(k=!0,C.then(S)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function A(e,s,r,i,u,l,a=[-1]){const d=g;v(e);const f=e.$$={fragment:null,ctx:null,props:l,update:t,not_equal:u,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(d?d.$$.context:s.context||[]),callbacks:n(),dirty:a,skip_bound:!1};let p=!1;if(f.ctx=r?r(e,s.props||{},((t,n,...o)=>{const s=o.length?o[0]:n;return f.ctx&&u(f.ctx[t],f.ctx[t]=s)&&(!f.skip_bound&&f.bound[t]&&f.bound[t](s),p&&N(e,t)),n})):[],f.update(),p=!0,o(f.before_update),f.fragment=!!i&&i(f.ctx),s.target){if(s.hydrate){const t=function(t){return Array.from(t.childNodes)}(s.target);f.fragment&&f.fragment.l(t),t.forEach(c)}else f.fragment&&f.fragment.c();s.intro&&M(e.$$.fragment),W(e,s.target,s.anchor,s.customElement),S()}v(d)}class O{$destroy(){j(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function X(e){let n;return{c(){n=l("footer"),n.innerHTML='<div class="content has-text-centered"><p><strong>Proxmox LXC idmap helper</strong> by\n            <a href="https://nieradko.com">Stanisław Nieradko</a>.\n            <a href="https://github.com/KanarekLife/proxmox-idmap-helper">The source code</a>\n            is released under\n            <a href="http://opensource.org/licenses/mit-license.php">MIT License</a>.</p> \n        <p>Created with ❤️ @ 2021</p></div>',p(n,"class","footer")},m(t,e){u(t,n,e)},p:t,i:t,o:t,d(t){t&&c(n)}}}class B extends O{constructor(t){super(),A(this,t,null,X,r,{})}}function K(t,e,n){const o=t.slice();return o[13]=e[n],o[14]=e,o[15]=n,o}function R(t,e){let n,s,r,a,$,g,v,y,b,x,w,C,k,U,G,I,L,S,T;function D(...t){return e[6](e[13],e[14],e[15],...t)}function M(){e[7].call(w,e[14],e[15])}function E(){e[8].call(U,e[14],e[15])}function q(...t){return e[9](e[13],...t)}return{key:t,first:null,c(){n=l("tr"),s=l("td"),r=l("div"),a=l("select"),$=l("option"),$.textContent="User",g=l("option"),g.textContent="User Without User Group",v=l("option"),v.textContent="Group",b=d(),x=l("td"),w=l("input"),C=d(),k=l("td"),U=l("input"),G=d(),I=l("td"),L=l("button"),L.textContent="Remove",$.__value="0",$.value=$.__value,g.__value="1",g.value=g.__value,v.__value="2",v.value=v.__value,p(r,"class","select"),p(w,"class","input svelte-1dn006t"),p(w,"type","number"),p(w,"min","0"),p(w,"max","65534"),p(U,"class","input svelte-1dn006t"),p(U,"type","number"),p(U,"min","0"),p(U,"max","65534"),p(L,"class","button is-danger"),this.first=n},m(t,o){u(t,n,o),i(n,s),i(s,r),i(r,a),i(a,$),i(a,g),i(a,v),_(a,e[13].type.toString()),i(n,b),i(n,x),i(x,w),m(w,e[13].id_in_host),i(n,C),i(n,k),i(k,U),m(U,e[13].id_in_container),i(n,G),i(n,I),i(I,L),S||(T=[f(a,"blur",D),f(w,"input",M),f(U,"input",E),f(L,"click",q)],S=!0)},p(t,n){e=t,1&n&&y!==(y=e[13].type.toString())&&_(a,e[13].type.toString()),1&n&&h(w.value)!==e[13].id_in_host&&m(w,e[13].id_in_host),1&n&&h(U.value)!==e[13].id_in_container&&m(U,e[13].id_in_container)},d(t){t&&c(n),S=!1,o(T)}}}function z(e){let n,s,r,a,$,g,v,y,b,x,w,C,k,G,I,L,S,T,D,E,H,P,W,j,N,A,O,X,B,z,F,J,Q=[],V=new Map,Y=e[0];const Z=t=>t[13];for(let t=0;t<Y.length;t+=1){let n=K(e,Y,t),o=Z(n);V.set(o,Q[t]=R(o,n))}return{c(){n=l("section"),s=l("h1"),s.textContent="Input",r=d(),a=l("h2"),a.textContent="Enter which uids or gids you want to pass:",$=d(),g=l("div"),v=d(),y=l("div"),b=l("table"),x=l("thead"),x.innerHTML='<th>Type</th> \n                <th><abbr title="UID or GID in your proxmox host">H_ID</abbr></th> \n                <th><abbr title="Desired UID or GID in your container">C_ID</abbr></th> \n                <th></th>',w=d(),C=l("tbody");for(let t=0;t<Q.length;t+=1)Q[t].c();var t,o,i;k=d(),G=l("tr"),I=l("td"),L=l("div"),S=l("select"),T=l("option"),T.textContent="Choose type of new rule",D=l("option"),D.textContent="User",E=l("option"),E.textContent="User Without User Group",H=l("option"),H.textContent="Group",P=d(),W=l("td"),j=l("input"),N=d(),A=l("td"),O=l("input"),X=d(),B=l("td"),z=l("button"),z.textContent="Add",p(s,"class","title"),p(a,"class","subtitle"),p(g,"class","notifications block"),T.__value="-1",T.value=T.__value,D.__value="0",D.value=D.__value,E.__value="1",E.value=E.__value,H.__value="2",H.value=H.__value,void 0===e[1]&&U((()=>e[10].call(S))),p(L,"class","select"),p(j,"class","input svelte-1dn006t"),p(j,"type","number"),p(j,"placeholder","GID / UID in host for new rule"),p(j,"min","0"),p(j,"max","65534"),p(O,"class","input svelte-1dn006t"),p(O,"type","number"),p(O,"min","0"),p(O,"max","65534"),p(O,"placeholder","GID / UID in container for new rule"),p(z,"class","button is-success"),p(b,"class","table is-bordered is-striped is-fullwidth"),p(y,"class","table-container"),t="overflow-x",o="auto",y.style.setProperty(t,o,i?"important":""),p(n,"class","section")},m(t,o){u(t,n,o),i(n,s),i(n,r),i(n,a),i(n,$),i(n,g),i(n,v),i(n,y),i(y,b),i(b,x),i(b,w),i(b,C);for(let t=0;t<Q.length;t+=1)Q[t].m(C,null);i(C,k),i(C,G),i(G,I),i(I,L),i(L,S),i(S,T),i(S,D),i(S,E),i(S,H),_(S,e[1]),i(G,P),i(G,W),i(W,j),m(j,e[2]),i(G,N),i(G,A),i(A,O),m(O,e[3]),i(G,X),i(G,B),i(B,z),F||(J=[f(S,"change",e[10]),f(j,"input",e[11]),f(O,"input",e[12]),f(z,"click",e[4])],F=!0)},p(t,[e]){33&e&&(Y=t[0],Q=function(t,e,n,o,s,r,i,u,c,l,a,d){let f=t.length,p=r.length,h=f;const $={};for(;h--;)$[t[h].key]=h;const m=[],_=new Map,g=new Map;for(h=p;h--;){const t=d(s,r,h),u=n(t);let c=i.get(u);c?o&&c.p(t,e):(c=l(u,t),c.c()),_.set(u,m[h]=c),u in $&&g.set(u,Math.abs(h-$[u]))}const v=new Set,y=new Set;function b(t){M(t,1),t.m(u,a),i.set(t.key,t),a=t.first,p--}for(;f&&p;){const e=m[p-1],n=t[f-1],o=e.key,s=n.key;e===n?(a=e.first,f--,p--):_.has(s)?!i.has(o)||v.has(o)?b(e):y.has(s)?f--:g.get(o)>g.get(s)?(y.add(o),b(e)):(v.add(s),f--):(c(n,i),f--)}for(;f--;){const e=t[f];_.has(e.key)||c(e,i)}for(;p;)b(m[p-1]);return m}(Q,e,Z,1,t,Y,V,C,q,R,k,K)),2&e&&_(S,t[1]),4&e&&h(j.value)!==t[2]&&m(j,t[2]),8&e&&h(O.value)!==t[3]&&m(O,t[3])},i:t,o:t,d(t){t&&c(n);for(let t=0;t<Q.length;t+=1)Q[t].d();F=!1,o(J)}}}function F(t){const e=document.createElement("div");e.classList.add("notification","is-danger"),document.querySelector(".notifications").appendChild(e);const n=document.createElement("button");n.classList.add("delete"),n.addEventListener("click",(()=>{e.remove()})),e.innerText=t,e.appendChild(n)}function J(t,e,n){let o,s,r,{rules:i}=e;function u(t){n(0,i=i.filter((e=>e!==t)))}return t.$$set=t=>{"rules"in t&&n(0,i=t.rules)},[i,o,s,r,function(){let t=!0;-1==o&&(F("Type of rule wasn't specified."),t=!1),(!s||"number"!=typeof s||s<0||s>65534)&&(F("H_ID must be a numeric value between 0 and 65534 (inclusive)."),t=!1),(!r||"number"!=typeof r||r<0||r>65534)&&(F("C_ID must be a numeric value between 0 and 65534 (inclusive)."),t=!1),t&&(n(0,i=[...i,{type:o,id_in_host:s,id_in_container:r}]),n(1,o=-1),n(2,s=void 0),n(3,r=void 0))},u,(t,e,o,s)=>n(0,e[o].type=parseInt(s.target.value),i),function(t,e){t[e].id_in_host=h(this.value),n(0,i)},function(t,e){t[e].id_in_container=h(this.value),n(0,i)},(t,e)=>u(t),function(){o=function(t){const e=t.querySelector(":checked")||t.options[0];return e&&e.__value}(this),n(1,o)},function(){s=h(this.value),n(2,s)},function(){r=h(this.value),n(3,r)}]}class Q extends O{constructor(t){super(),A(this,t,J,z,r,{rules:0})}}var V;!function(t){t[t.UserWithGroup=0]="UserWithGroup",t[t.User=1]="User",t[t.Group=2]="Group"}(V||(V={}));const Y=["# Generated with Proxmox LXC idmap helper created by Stanisław Nieradko"];function Z(t,e=1e4){const n=function(t){const e=new Map;for(const n of t)e.set(n.id_in_host,n);return e}(t);let o=[],s=[],r=[];for(let t=0;t<65536;t++){const e=n.get(t);e?(e.type==V.Group&&(r=r.filter((t=>t!==e.id_in_host)),s.push(t)),e.type==V.User&&(s=s.filter((t=>t!==e.id_in_host)),r.push(t)),o=o.concat(st(e))):(s.push(t),r.push(t))}return o=o.concat(ot(s).map((t=>nt("u",e,t)))).concat(ot(r).map((t=>nt("g",e,t)))),Y.concat(o.sort(tt).map(et)).join("\n")}function tt(t,e){return t.start_host-e.start_host}function et(t){return`lxc.idmap: ${t.type} ${t.start_host} ${t.start_container} ${t.count}`}function nt(t,e,n){return{type:t,start_host:n.start,start_container:n.start+e,count:n.count}}function ot(t){const e=[];let n=[];for(const o of t)null!=n.slice(-1)[0]&&n.slice(-1)[0]+1==o||(n.length>0&&e.push({start:n[0],count:n.length}),n=[]),n.push(o);return n.length>0&&e.push({start:n[0],count:n.length}),e}function st(t){return t.type==V.UserWithGroup?[{type:"u",start_host:t.id_in_host,start_container:t.id_in_container,count:1},{type:"g",start_host:t.id_in_host,start_container:t.id_in_container,count:1}]:t.type==V.User?[{type:"u",start_host:t.id_in_host,start_container:t.id_in_container,count:1}]:t.type==V.Group?[{type:"g",start_host:t.id_in_host,start_container:t.id_in_container,count:1}]:(console.error("Invalid rule type found!",t),void alert("Invalid rule type found! Check console to find out what happened!"))}function rt(e){let n,o,s,r,f,h,m;return{c(){n=l("section"),o=l("h1"),o.textContent="LXC Configuration",s=d(),r=l("h2"),r.innerHTML='Paste this code into <code class="svelte-18f7qc9">/etc/pve/lxc/{container_id}.conf</code>',f=d(),h=l("code"),m=a(e[0]),p(o,"class","title"),p(r,"class","subtitle"),p(h,"class","svelte-18f7qc9"),p(n,"class","section")},m(t,e){u(t,n,e),i(n,o),i(n,s),i(n,r),i(n,f),i(n,h),i(h,m)},p(t,[e]){1&e&&$(m,t[0])},i:t,o:t,d(t){t&&c(n)}}}function it(t,e,n){let o,{rules:s}=e;return t.$$set=t=>{"rules"in t&&n(1,s=t.rules)},t.$$.update=()=>{2&t.$$.dirty&&n(0,o=Z(s))},[o,s]}class ut extends O{constructor(t){super(),A(this,t,it,rt,r,{rules:1})}}function ct(e){let n,o,s,r,f,h,m;return{c(){n=l("section"),o=l("h1"),o.textContent="SubGid Configuration",s=d(),r=l("h2"),r.innerHTML='Paste this code into <code class="svelte-18f7qc9">/etc/subgid</code>',f=d(),h=l("code"),m=a(e[0]),p(o,"class","title"),p(r,"class","subtitle"),p(h,"class","svelte-18f7qc9"),p(n,"class","section")},m(t,e){u(t,n,e),i(n,o),i(n,s),i(n,r),i(n,f),i(n,h),i(h,m)},p(t,[e]){1&e&&$(m,t[0])},i:t,o:t,d(t){t&&c(n)}}}function lt(t,e,n){let o,{rules:s}=e;return t.$$set=t=>{"rules"in t&&n(1,s=t.rules)},t.$$.update=()=>{2&t.$$.dirty&&n(0,o=function(t){const e=t.filter((t=>t.type==V.Group||t.type==V.UserWithGroup)),n=[...new Set(e)].map((t=>t.id_in_host)).map((t=>`root:${t}:1`));return Y.concat("root:100000:65536").concat(n).join("\n")}(s))},[o,s]}class at extends O{constructor(t){super(),A(this,t,lt,ct,r,{rules:1})}}function dt(e){let n,o,s,r,f,h,m;return{c(){n=l("section"),o=l("h1"),o.textContent="SubUid Configuration",s=d(),r=l("h2"),r.innerHTML='Paste this code into <code class="svelte-18f7qc9">/etc/subuid</code>',f=d(),h=l("code"),m=a(e[0]),p(o,"class","title"),p(r,"class","subtitle"),p(h,"class","svelte-18f7qc9"),p(n,"class","section")},m(t,e){u(t,n,e),i(n,o),i(n,s),i(n,r),i(n,f),i(n,h),i(h,m)},p(t,[e]){1&e&&$(m,t[0])},i:t,o:t,d(t){t&&c(n)}}}function ft(t,e,n){let o,{rules:s}=e;return t.$$set=t=>{"rules"in t&&n(1,s=t.rules)},t.$$.update=()=>{2&t.$$.dirty&&n(0,o=function(t){const e=t.filter((t=>t.type==V.User||t.type==V.UserWithGroup)),n=[...new Set(e)].map((t=>t.id_in_host)).map((t=>`root:${t}:1`));return Y.concat("root:100000:65536").concat(n).join("\n")}(s))},[o,s]}class pt extends O{constructor(t){super(),A(this,t,ft,dt,r,{rules:1})}}function ht(t){let e,n,o,s,r,a,f,h,$;return s=new ut({props:{rules:t[0]}}),a=new pt({props:{rules:t[0]}}),h=new at({props:{rules:t[0]}}),{c(){e=l("section"),n=l("h1"),n.textContent="Output",o=d(),P(s.$$.fragment),r=d(),P(a.$$.fragment),f=d(),P(h.$$.fragment),p(n,"class","title"),p(e,"class","section")},m(t,c){u(t,e,c),i(e,n),i(e,o),W(s,e,null),i(e,r),W(a,e,null),i(e,f),W(h,e,null),$=!0},p(t,[e]){const n={};1&e&&(n.rules=t[0]),s.$set(n);const o={};1&e&&(o.rules=t[0]),a.$set(o);const r={};1&e&&(r.rules=t[0]),h.$set(r)},i(t){$||(M(s.$$.fragment,t),M(a.$$.fragment,t),M(h.$$.fragment,t),$=!0)},o(t){E(s.$$.fragment,t),E(a.$$.fragment,t),E(h.$$.fragment,t),$=!1},d(t){t&&c(e),j(s),j(a),j(h)}}}function $t(t,e,n){let{rules:o}=e;return t.$$set=t=>{"rules"in t&&n(0,o=t.rules)},[o]}class mt extends O{constructor(t){super(),A(this,t,$t,ht,r,{rules:0})}}function _t(t){let e,n,o,s,r,a,f;function p(e){t[1](e)}let h={};function $(e){t[2](e)}void 0!==t[0]&&(h.rules=t[0]),n=new Q({props:h}),b.push((()=>H(n,"rules",p)));let m={};return void 0!==t[0]&&(m.rules=t[0]),r=new mt({props:m}),b.push((()=>H(r,"rules",$))),{c(){e=l("div"),P(n.$$.fragment),s=d(),P(r.$$.fragment)},m(t,o){u(t,e,o),W(n,e,null),i(e,s),W(r,e,null),f=!0},p(t,[e]){const s={};!o&&1&e&&(o=!0,s.rules=t[0],G((()=>o=!1))),n.$set(s);const i={};!a&&1&e&&(a=!0,i.rules=t[0],G((()=>a=!1))),r.$set(i)},i(t){f||(M(n.$$.fragment,t),M(r.$$.fragment,t),f=!0)},o(t){E(n.$$.fragment,t),E(r.$$.fragment,t),f=!1},d(t){t&&c(e),j(n),j(r)}}}function gt(t,e,n){let o=[];return[o,function(t){o=t,n(0,o)},function(t){o=t,n(0,o)}]}class vt extends O{constructor(t){super(),A(this,t,gt,_t,r,{})}}function yt(e){let n;return{c(){n=l("section"),n.innerHTML='<div class="hero-body"><p class="title">Proxmox LXC idmap helper</p> \n        <p class="subtitle">Tool created by <a href="https://nieradko.com">Stanisław Nieradko</a> @ 2021</p></div>',p(n,"class","hero is-small")},m(t,e){u(t,n,e)},p:t,i:t,o:t,d(t){t&&c(n)}}}class bt extends O{constructor(t){super(),A(this,t,null,yt,r,{})}}function xt(e){let n,o,s,r,a,f,p,h;return o=new bt({}),a=new vt({}),p=new B({}),{c(){n=l("main"),P(o.$$.fragment),s=d(),r=l("main"),P(a.$$.fragment),f=d(),P(p.$$.fragment)},m(t,e){u(t,n,e),W(o,n,null),i(n,s),i(n,r),W(a,r,null),i(n,f),W(p,n,null),h=!0},p:t,i(t){h||(M(o.$$.fragment,t),M(a.$$.fragment,t),M(p.$$.fragment,t),h=!0)},o(t){E(o.$$.fragment,t),E(a.$$.fragment,t),E(p.$$.fragment,t),h=!1},d(t){t&&c(n),j(o),j(a),j(p)}}}return new class extends O{constructor(t){super(),A(this,t,null,xt,r,{})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
