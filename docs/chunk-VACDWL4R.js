import{a as r}from"./chunk-ZENSNN3E.js";import"./chunk-UWITOMAN.js";import{a as s}from"./chunk-KRN7VAZ7.js";import{L as t,Qa as l,Ra as i,ia as c,va as d}from"./chunk-V24WYP4H.js";import"./chunk-JPKLQMV2.js";var g=`<header class="ngde"><div class="ng-doc-page-tags ngde"><span class="ng-doc-tag ngde" indexable="false" data-content="ng-doc-scope">smart-ngrx</span> <span class="ng-doc-inline-delimiter ngde" indexable="false">/</span> <span class="ng-doc-tag ngde" indexable="false" data-content="Function">Function</span></div><h1 id="createsmartselector" class="ngde">createSmartSelector<a title="Link to heading" class="ng-doc-header-link ngde" href="/api/smart-ngrx/functions/createSmartSelector#createsmartselector"><ng-doc-icon icon="link-2" size="16" class="ngde"></ng-doc-icon></a></h1></header><section class="ngde"><p class="ngde">Wraps the specified child array(s) with a Proxy that will request the items from the server as they are accessed (virtual data) rather than loading everything from the array up front.</p><p class="ngde">In order to access the array without triggering a request, as is needed for a tree control that uses virtual data, the proxy adds support for a rawArray property that returns the original array before it was proxied.</p></section><section indexable="false" class="ngde"><h2 id="see-also" class="ngde">See Also<a title="Link to heading" class="ng-doc-header-link ngde" href="/api/smart-ngrx/functions/createSmartSelector#see-also"><ng-doc-icon icon="link-2" size="16" class="ngde"></ng-doc-icon></a></h2><ul class="ng-doc-see-also ngde"><li class="ngde"><p class="ngde"><code class="ngde">ProxyChild</code></p></li><li class="ngde"><p class="ngde"><code class="ngde ng-doc-code-with-link" class="ngde"><a href="/api/smart-ngrx/type-aliases/ParentSelector" class="ng-doc-code-anchor ngde" data-link-type="TypeAlias" class="ngde">ParentSelector</a></code></p></li></ul></section><section class="ngde"><h2 id="presentation" class="ngde">Presentation<a title="Link to heading" class="ng-doc-header-link ngde" href="/api/smart-ngrx/functions/createSmartSelector#presentation"><ng-doc-icon icon="link-2" size="16" class="ngde"></ng-doc-icon></a></h2><pre class="ngde hljs"><code lang="typescript" class="hljs language-typescript code-lines ngde"><span class="line ngde"><span class="hljs-keyword ngde">function</span> <span class="hljs-title function_ ngde"><a href="/api/smart-ngrx/functions/createSmartSelector" class="ng-doc-code-anchor ngde" data-link-type="Function" class="ngde">createSmartSelector</a></span>(<span class="hljs-params ngde">parentSelector: <a href="/api/smart-ngrx/type-aliases/ParentSelector" class="ng-doc-code-anchor ngde" data-link-type="TypeAlias" class="ngde">ParentSelector</a>&#x3C;P>, children: <a href="/api/smart-ngrx/interfaces/ChildDefinition" class="ng-doc-code-anchor ngde" data-link-type="Interface" class="ngde">ChildDefinition</a>&#x3C;P, <span class="hljs-built_in ngde">any</span>, <span class="hljs-built_in ngde">any</span>, <span class="hljs-built_in ngde">any</span>, <span class="hljs-built_in ngde">any</span>>[]</span>): <span class="hljs-title class_ ngde">MemoizedSelector</span>&#x3C;<span class="hljs-built_in ngde">object</span>, <span class="hljs-title class_ ngde">EntityState</span>&#x3C;P>, <span class="hljs-title class_ ngde">DefaultProjectorFn</span>&#x3C;<span class="hljs-title class_ ngde">EntityState</span>&#x3C;P>>>;
</span></code></pre></section><section class="ngde"><h2 id="parameters" class="ngde">Parameters<a title="Link to heading" class="ng-doc-header-link ngde" href="/api/smart-ngrx/functions/createSmartSelector#parameters"><ng-doc-icon icon="link-2" size="16" class="ngde"></ng-doc-icon></a></h2><div class="ng-doc-table-wrapper ngde"><table class="ng-doc-parameters-table ngde"><thead class="ngde"><tr indexable="false" class="ngde"><th class="ng-doc-parameters-table-name ngde">Name</th><th class="ng-doc-parameters-table-type ngde">Type</th><th class="ng-doc-parameters-table-description ngde">Description</th></tr></thead><tbody class="ngde"><tr class="ngde"><td indexable="false" class="ngde">parentSelector<div class="ng-doc-node-details ngde"></div></td><td class="ngde"><code indexable="false" class="ngde">ParentSelector&#x3C;P></code></td><td class="ngde"><p class="ngde">The selector to retrieve the parent data from the store.</p></td></tr><tr class="ngde"><td indexable="false" class="ngde">children<div class="ng-doc-node-details ngde"></div></td><td class="ngde"><code indexable="false" class="ngde">ChildDefinition&#x3C;P, any, any, any, any>[]</code></td><td class="ngde"><p class="ngde">The array of <code class="ngde">ProxyChild</code> objects that define the child data to retrieve.</p></td></tr></tbody></table></div></section>`,p=(()=>{let e=class e extends s{constructor(){super(),this.routePrefix=void 0,this.pageType="api",this.pageContent=g,this.demo=void 0,this.demoAssets=void 0}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t({type:e,selectors:[["ng-doc-page-api-smart-ngrx-functions-create-smart-selector"]],standalone:!0,features:[l([{provide:s,useExisting:e}]),c,i],decls:1,vars:0,template:function(n,f){n&1&&d(0,"ng-doc-page")},dependencies:[r],encapsulation:2,changeDetection:0});let a=e;return a})(),h=[{path:"",component:p,title:"createSmartSelector"}],y=h;export{p as DynamicComponent,y as default};
