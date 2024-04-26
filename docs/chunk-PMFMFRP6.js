import{a as l}from"./chunk-A7E2UISL.js";import"./chunk-LWJLGZAB.js";import{a as s}from"./chunk-H3E2WPX7.js";import{M as t,Sa as c,Ta as o,ka as d,xa as i}from"./chunk-GQV4C3N7.js";import"./chunk-P2VZOJAX.js";var g=`<header class="ngde"><div class="ng-doc-page-tags ngde"><span class="ng-doc-tag ngde" indexable="false" data-content="ng-doc-scope">smart-ngrx</span> <span class="ng-doc-inline-delimiter ngde" indexable="false">/</span> <span class="ng-doc-tag ngde" indexable="false" data-content="Function">Function</span></div><h1 id="fornext" class="ngde">forNext<a title="Link to heading" class="ng-doc-header-link ngde" href="/api/smart-ngrx/functions/forNext#fornext"><ng-doc-icon icon="link-2" size="16" class="ngde"></ng-doc-icon></a></h1></header><section class="ngde"><p class="ngde">Allows us to iterate over an array using for/next instead of using an iterator which is 10x slower.</p></section><section class="ngde"><h2 id="presentation" class="ngde">Presentation<a title="Link to heading" class="ng-doc-header-link ngde" href="/api/smart-ngrx/functions/forNext#presentation"><ng-doc-icon icon="link-2" size="16" class="ngde"></ng-doc-icon></a></h2><pre class="ngde hljs"><code lang="typescript" class="hljs language-typescript code-lines ngde"><span class="line ngde"><span class="hljs-keyword ngde">function</span> <span class="hljs-title function_ ngde"><a href="/api/smart-ngrx/functions/forNext" class="ng-doc-code-anchor ngde" data-link-type="Function" class="ngde">forNext</a></span>(<span class="hljs-params ngde">array: T[], callback: (item: T, index: <span class="hljs-built_in ngde">number</span>, array: T[]) => <span class="hljs-built_in ngde">void</span></span>): <span class="hljs-built_in ngde">void</span>;
</span></code></pre></section><section class="ngde"><h2 id="parameters" class="ngde">Parameters<a title="Link to heading" class="ng-doc-header-link ngde" href="/api/smart-ngrx/functions/forNext#parameters"><ng-doc-icon icon="link-2" size="16" class="ngde"></ng-doc-icon></a></h2><div class="ng-doc-table-wrapper ngde"><table class="ng-doc-parameters-table ngde"><thead class="ngde"><tr indexable="false" class="ngde"><th class="ng-doc-parameters-table-name ngde">Name</th><th class="ng-doc-parameters-table-type ngde">Type</th><th class="ng-doc-parameters-table-description ngde">Description</th></tr></thead><tbody class="ngde"><tr class="ngde"><td indexable="false" class="ngde">array<div class="ng-doc-node-details ngde"></div></td><td class="ngde"><code indexable="false" class="ngde">T[]</code></td><td class="ngde"><p class="ngde">the array we want to iterate over</p></td></tr><tr class="ngde"><td indexable="false" class="ngde">callback<div class="ng-doc-node-details ngde"></div></td><td class="ngde"><code indexable="false" class="ngde">(item: T, index: number, array: T[]) => void</code></td><td class="ngde"><p class="ngde">the callback function to call for each item in the array.</p></td></tr></tbody></table></div></section>`,p=(()=>{let e=class e extends s{constructor(){super(),this.routePrefix=void 0,this.pageType="api",this.pageContent=g,this.demo=void 0,this.demoAssets=void 0}};e.\u0275fac=function(a){return new(a||e)},e.\u0275cmp=t({type:e,selectors:[["ng-doc-page-api-smart-ngrx-functions-for-next"]],standalone:!0,features:[c([{provide:s,useExisting:e}]),d,o],decls:1,vars:0,template:function(a,f){a&1&&i(0,"ng-doc-page")},dependencies:[l],encapsulation:2,changeDetection:0});let n=e;return n})(),h=[{path:"",component:p,title:"forNext"}],x=h;export{p as DynamicComponent,x as default};
