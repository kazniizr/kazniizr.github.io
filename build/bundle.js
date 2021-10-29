var app=function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function r(t){t.forEach(n)}function c(t){return"function"==typeof t}function l(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function o(t,n){t.appendChild(n)}function a(t){t.parentNode.removeChild(t)}function i(t){return document.createElement(t)}function s(t){return document.createTextNode(t)}function d(){return s(" ")}function u(t,n,e,r){return t.addEventListener(n,e,r),()=>t.removeEventListener(n,e,r)}function f(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function h(t){return""===t?null:+t}function v(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function g(t,n){t.value=null==n?"":n}let p;function b(t){p=t}const _=[],m=[],$=[],x=[],y=Promise.resolve();let k=!1;function C(t){$.push(t)}let w=!1;const E=new Set;function L(){if(!w){w=!0;do{for(let t=0;t<_.length;t+=1){const n=_[t];b(n),T(n.$$)}for(b(null),_.length=0;m.length;)m.pop()();for(let t=0;t<$.length;t+=1){const n=$[t];E.has(n)||(E.add(n),n())}$.length=0}while(_.length);for(;x.length;)x.pop()();k=!1,w=!1,E.clear()}}function T(t){if(null!==t.fragment){t.update(),r(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(C)}}const M=new Set;function N(t,n){-1===t.$$.dirty[0]&&(_.push(t),k||(k=!0,y.then(L)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function H(l,o,i,s,d,u,f,h=[-1]){const v=p;b(l);const g=l.$$={fragment:null,ctx:null,props:u,update:t,not_equal:d,bound:e(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(o.context||(v?v.$$.context:[])),callbacks:e(),dirty:h,skip_bound:!1,root:o.target||v.$$.root};f&&f(g.root);let _=!1;if(g.ctx=i?i(l,o.props||{},((t,n,...e)=>{const r=e.length?e[0]:n;return g.ctx&&d(g.ctx[t],g.ctx[t]=r)&&(!g.skip_bound&&g.bound[t]&&g.bound[t](r),_&&N(l,t)),n})):[],g.update(),_=!0,r(g.before_update),g.fragment=!!s&&s(g.ctx),o.target){if(o.hydrate){const t=function(t){return Array.from(t.childNodes)}(o.target);g.fragment&&g.fragment.l(t),t.forEach(a)}else g.fragment&&g.fragment.c();o.intro&&((m=l.$$.fragment)&&m.i&&(M.delete(m),m.i($))),function(t,e,l,o){const{fragment:a,on_mount:i,on_destroy:s,after_update:d}=t.$$;a&&a.m(e,l),o||C((()=>{const e=i.map(n).filter(c);s?s.push(...e):r(e),t.$$.on_mount=[]})),d.forEach(C)}(l,o.target,o.anchor,o.customElement),L()}var m,$;b(v)}function O(n){let e,c,l,p,b,_,m,$,x,y,k,C,w,E,L,T,M,N,H,O,A,j,B,S,q,I,K,z,D,F,G,J,Q,R,U,V,W,X,Y,Z,tt,nt,et,rt,ct,lt,ot,at,it,st,dt,ut,ft,ht,vt,gt,pt,bt,_t,mt,$t,xt,yt,kt,Ct,wt=35*n[0]/100+"",Et=12*n[0]/100+"",Lt=40*n[0]/100+"",Tt=420*n[0]/100+"",Mt=144*n[0]/100+"",Nt=480*n[0]/100+"";return{c(){e=i("main"),c=i("header"),c.innerHTML='<div class="container"><div class="d-flex"><div class="header__logo svelte-1un0fhb"></div> \n\t\t\t\t<nav class="nav svelte-1un0fhb"><ul class="nav__list svelte-1un0fhb"><li class="nav__item svelte-1un0fhb"><a href="#" class="nav__link svelte-1un0fhb">Документация</a></li> \n\t\t\t\t\t\t<li class="nav__item svelte-1un0fhb"><a href="#" class="nav__link svelte-1un0fhb">О проекте</a></li> \n\t\t\t\t\t\t<li class="nav__item svelte-1un0fhb"><a href="#" class="nav__link svelte-1un0fhb">Наша команда</a></li></ul></nav></div></div>',l=d(),p=i("section"),b=i("div"),_=i("div"),m=i("table"),$=i("thead"),$.innerHTML="<tr><th>№ пп</th> \n\t\t\t\t\t\t\t<th>Показатели</th> \n\t\t\t\t\t\t\t<th>ед.изм</th> \n\t\t\t\t\t\t\t<th>N</th> \n\t\t\t\t\t\t\t<th>P2O5</th> \n\t\t\t\t\t\t\t<th>K2O</th></tr>",x=d(),y=i("tbody"),k=i("tr"),k.innerHTML='<td align="center">1</td> \n\t\t\t\t\t\t\t<td>Культура</td> \n\t\t\t\t\t\t\t<td></td> \n\t\t\t\t\t\t\t<td align="center" colspan="3">Кукуруза на зерно</td>',C=d(),w=i("tr"),E=i("td"),E.textContent="2",L=d(),T=i("td"),T.textContent="Вынос на 1 тонну продкции с учетом побочной\n\t\t\t\t\t\t\t\t(справочное)",M=d(),N=i("td"),N.textContent="кг/га",H=d(),O=i("td"),A=s(wt),j=d(),B=i("td"),S=s(Et),q=d(),I=i("td"),K=s(Lt),z=d(),D=i("tr"),F=i("td"),F.textContent="3",G=d(),J=i("td"),J.textContent="Планируемый уровень урожайности",Q=d(),R=i("td"),R.textContent="ц/га",U=d(),V=i("td"),W=i("input"),X=d(),Y=i("tr"),Z=i("td"),Z.textContent="4",tt=d(),nt=i("td"),nt.textContent="Вынос питательных веществ",et=d(),rt=i("td"),rt.textContent="кг/га",ct=d(),lt=i("td"),ot=s(Tt),at=d(),it=i("td"),st=s(Mt),dt=d(),ut=i("td"),ft=s(Nt),ht=d(),vt=i("h2"),vt.textContent="Удобрения",gt=d(),pt=i("div"),bt=i("div"),bt.innerHTML="<table><tr><th>Аммофос Аммиачная селитра Содержпние N,% 34</th></tr> \n\t\t\t\t\t\t\t<tr><td>Содержание P2O5,%</td> \n\t\t\t\t\t\t\t\t<td>52</td></tr> \n\t\t\t\t\t\t\t<tr><td>Содержпние N,%</td> \n\t\t\t\t\t\t\t\t<td>12</td></tr> \n\t\t\t\t\t\t\t<tr><th>Аммиачная селитра</th></tr> \n\t\t\t\t\t\t\t<tr><td>Содержпние N,%</td> \n\t\t\t\t\t\t\t\t<td>34</td></tr></table>",_t=d(),mt=i("div"),$t=i("div"),$t.textContent="Распечатать данные",xt=d(),yt=i("footer"),yt.innerHTML='<div class="container"><div class="copyright svelte-1un0fhb">КазНИИЗиР © 2021 Все права защищены.</div></div>',f(c,"class","header svelte-1un0fhb"),f(E,"align","center"),f(N,"align","center"),f(O,"align","center"),f(B,"align","center"),f(I,"align","center"),f(F,"align","center"),f(R,"align","center"),f(W,"type","number"),f(V,"align","center"),f(V,"colspan","3"),f(D,"class","bold"),f(Z,"align","center"),f(rt,"align","center"),f(lt,"align","center"),f(it,"align","center"),f(ut,"align","center"),f(vt,"class","calc__heading"),f(bt,"class","cacl__block calc__block--6 svelte-1un0fhb"),f($t,"class","btn"),f(mt,"class","cacl__block calc__block--6 svelte-1un0fhb"),f(pt,"class","calc__block svelte-1un0fhb"),f(_,"class","calc__left"),f(b,"class","container"),f(p,"class","calc svelte-1un0fhb"),f(p,"id","printarea"),f(yt,"class","footer svelte-1un0fhb")},m(t,r){!function(t,n,e){t.insertBefore(n,e||null)}(t,e,r),o(e,c),o(e,l),o(e,p),o(p,b),o(b,_),o(_,m),o(m,$),o(m,x),o(m,y),o(y,k),o(y,C),o(y,w),o(w,E),o(w,L),o(w,T),o(w,M),o(w,N),o(w,H),o(w,O),o(O,A),o(w,j),o(w,B),o(B,S),o(w,q),o(w,I),o(I,K),o(y,z),o(y,D),o(D,F),o(D,G),o(D,J),o(D,Q),o(D,R),o(D,U),o(D,V),o(V,W),g(W,n[0]),o(y,X),o(y,Y),o(Y,Z),o(Y,tt),o(Y,nt),o(Y,et),o(Y,rt),o(Y,ct),o(Y,lt),o(lt,ot),o(Y,at),o(Y,it),o(it,st),o(Y,dt),o(Y,ut),o(ut,ft),o(_,ht),o(_,vt),o(_,gt),o(_,pt),o(pt,bt),o(pt,_t),o(pt,mt),o(mt,$t),o(e,xt),o(e,yt),kt||(Ct=[u(W,"input",n[1]),u($t,"click",P)],kt=!0)},p(t,[n]){1&n&&wt!==(wt=35*t[0]/100+"")&&v(A,wt),1&n&&Et!==(Et=12*t[0]/100+"")&&v(S,Et),1&n&&Lt!==(Lt=40*t[0]/100+"")&&v(K,Lt),1&n&&h(W.value)!==t[0]&&g(W,t[0]),1&n&&Tt!==(Tt=420*t[0]/100+"")&&v(ot,Tt),1&n&&Mt!==(Mt=144*t[0]/100+"")&&v(st,Mt),1&n&&Nt!==(Nt=480*t[0]/100+"")&&v(ft,Nt)},i:t,o:t,d(t){t&&a(e),kt=!1,r(Ct)}}}function P(){var t='<style type="text/css">table th, table td {border:1px solid #000;padding;0.5em;}</style>';t+=document.getElementById("printarea").outerHTML;let n=window.open("");n.document.write("<h3 align='center'>Print Page</h3>"),n.document.write(t),n.print(),n.close()}function A(t,n,e){let r=120;return[r,function(){r=h(this.value),e(0,r)}]}return new class extends class{$destroy(){!function(t,n){const e=t.$$;null!==e.fragment&&(r(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}{constructor(t){super(),H(this,t,A,O,l,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
