import{a as o}from"./chunk-3QZ37UL7.js";import"./chunk-PWJYSUCV.js";import{a}from"./chunk-6MCERC7U.js";import{Ba as i,Ca as d,K as t,da as l,na as c}from"./chunk-LZX4EJTP.js";import"./chunk-RS6LHQUM.js";var g=`<header class="ngde"><div class="ng-doc-page-tags ngde"><span class="ng-doc-tag ngde" indexable="false" data-content="ng-doc-scope">smart-ngrx</span> <span class="ng-doc-inline-delimiter ngde" indexable="false">/</span> <span class="ng-doc-tag ngde" indexable="false" data-content="TypeAlias">TypeAlias</span></div><h1 id="markanddeleteselector" class="ngde">MarkAndDeleteSelector<a title="Link to heading" class="ng-doc-header-link ngde" href="/api/smart-ngrx/type-aliases/MarkAndDeleteSelector#markanddeleteselector"><ng-doc-icon icon="link-2" size="16" class="ngde"></ng-doc-icon></a></h1></header><section class="ngde"><p class="ngde">This type allows us to deal with just the MarkAndDelete part of an entity. This is used internally.</p></section><section indexable="false" class="ngde"><h2 id="see-also" class="ngde">See Also<a title="Link to heading" class="ng-doc-header-link ngde" href="/api/smart-ngrx/type-aliases/MarkAndDeleteSelector#see-also"><ng-doc-icon icon="link-2" size="16" class="ngde"></ng-doc-icon></a></h2><ul class="ng-doc-see-also ngde"><li class="ngde"><p class="ngde">MarkAndDelete</p></li></ul></section><section class="ngde"><h2 id="presentation" class="ngde">Presentation<a title="Link to heading" class="ng-doc-header-link ngde" href="/api/smart-ngrx/type-aliases/MarkAndDeleteSelector#presentation"><ng-doc-icon icon="link-2" size="16" class="ngde"></ng-doc-icon></a></h2><pre class="ngde hljs"><code lang="typescript" class="hljs language-typescript code-lines ngde"><span class="line ngde"><span class="hljs-keyword ngde">type</span> <span class="hljs-title class_ ngde"><a href="/api/smart-ngrx/type-aliases/MarkAndDeleteSelector" class="ng-doc-code-anchor ngde" data-link-type="TypeAlias" class="ngde">MarkAndDeleteSelector</a></span> = <span class="hljs-title class_ ngde">MemoizedSelector</span>&#x3C;
</span><span class="line ngde">  <span class="hljs-built_in ngde">object</span>,
</span><span class="line ngde">  <span class="hljs-title class_ ngde">EntityState</span>&#x3C;<span class="hljs-title class_ ngde"><a href="/api/smart-ngrx/interfaces/MarkAndDelete" class="ng-doc-code-anchor ngde" data-link-type="Interface" class="ngde">MarkAndDelete</a></span>>,
</span><span class="line ngde">  <span class="hljs-title class_ ngde">DefaultProjectorFn</span>&#x3C;<span class="hljs-title class_ ngde">EntityState</span>&#x3C;<span class="hljs-title class_ ngde"><a href="/api/smart-ngrx/interfaces/MarkAndDelete" class="ng-doc-code-anchor ngde" data-link-type="Interface" class="ngde">MarkAndDelete</a></span>>>
</span><span class="line ngde">>;
</span></code></pre></section>`,p=(()=>{let e=class e extends a{constructor(){super(),this.routePrefix=void 0,this.pageType="api",this.pageContent=g,this.demo=void 0,this.demoAssets=void 0}};e.\u0275fac=function(s){return new(s||e)},e.\u0275cmp=t({type:e,selectors:[["ng-doc-page-api-smart-ngrx-type-aliases-mark-and-delete-selector"]],standalone:!0,features:[i([{provide:a,useExisting:e}]),l,d],decls:1,vars:0,template:function(s,f){s&1&&c(0,"ng-doc-page")},dependencies:[o],encapsulation:2,changeDetection:0});let n=e;return n})(),h=[{path:"",component:p,title:"MarkAndDeleteSelector"}],u=h;export{p as DynamicComponent,u as default};
