import{a as r}from"./chunk-CYWK6LGP.js";import"./chunk-JX3X7FZD.js";import{a}from"./chunk-HLYYGOZE.js";import{G as s,Ta as i,Ua as o,la as d,ya as c}from"./chunk-B2YEXT7W.js";import"./chunk-P2VZOJAX.js";var g=`<header class="ngde"><div class="ng-doc-page-tags ngde"><span class="ng-doc-tag ngde" indexable="false" data-content="ng-doc-scope">smart-ngrx</span> <span class="ng-doc-inline-delimiter ngde" indexable="false">/</span> <span class="ng-doc-tag ngde" indexable="false" data-content="Function">Function</span></div><h1 id="getarrayitem" class="ngde">getArrayItem<a title="Link to heading" class="ng-doc-header-link ngde" href="/api/smart-ngrx/functions/getArrayItem#getarrayitem"><ng-doc-icon icon="link-2" size="16" class="ngde"></ng-doc-icon></a></h1></header><section class="ngde"><p class="ngde">Internal function used by <code class="ngde ng-doc-code-with-link" class="ngde"><a href="/api/smart-ngrx/functions/createInnerSmartSelector" class="ng-doc-code-anchor ngde" data-link-type="Function" class="ngde">createInnerSmartSelector</a></code> use to load the data if it doesn't exist in the store and return a placeholder row if it doesn't exist.</p></section><section class="ngde"><h2 id="presentation" class="ngde">Presentation<a title="Link to heading" class="ng-doc-header-link ngde" href="/api/smart-ngrx/functions/getArrayItem#presentation"><ng-doc-icon icon="link-2" size="16" class="ngde"></ng-doc-icon></a></h2><pre class="ngde hljs"><code lang="typescript" class="hljs language-typescript code-lines ngde"><span class="line ngde"><span class="hljs-keyword ngde">function</span> <span class="hljs-title function_ ngde"><a href="/api/smart-ngrx/functions/getArrayItem" class="ng-doc-code-anchor ngde" data-link-type="Function" class="ngde">getArrayItem</a></span>(<span class="hljs-params ngde">entityState: EntityState&#x3C;T>, id: <span class="hljs-built_in ngde">string</span>, feature: StringLiteralSource&#x3C;F>, entity: StringLiteralSource&#x3C;E></span>): T;
</span></code></pre></section><section class="ngde"><h2 id="parameters" class="ngde">Parameters<a title="Link to heading" class="ng-doc-header-link ngde" href="/api/smart-ngrx/functions/getArrayItem#parameters"><ng-doc-icon icon="link-2" size="16" class="ngde"></ng-doc-icon></a></h2><div class="ng-doc-table-wrapper ngde"><table class="ng-doc-parameters-table ngde"><thead class="ngde"><tr indexable="false" class="ngde"><th class="ng-doc-parameters-table-name ngde">Name</th><th class="ng-doc-parameters-table-type ngde">Type</th><th class="ng-doc-parameters-table-description ngde">Description</th></tr></thead><tbody class="ngde"><tr class="ngde"><td indexable="false" class="ngde">entityState<div class="ng-doc-node-details ngde"></div></td><td class="ngde"><code indexable="false" class="ngde">EntityState&#x3C;T></code></td><td class="ngde"><p class="ngde">The entity to check for the id</p></td></tr><tr class="ngde"><td indexable="false" class="ngde">id<div class="ng-doc-node-details ngde"></div></td><td class="ngde"><code indexable="false" class="ngde">string</code></td><td class="ngde"><p class="ngde">The id to check</p></td></tr><tr class="ngde"><td indexable="false" class="ngde">feature<div class="ng-doc-node-details ngde"></div></td><td class="ngde"><code indexable="false" class="ngde">StringLiteralSource&#x3C;F></code></td><td class="ngde"><p class="ngde">the feature name we are running this code for</p></td></tr><tr class="ngde"><td indexable="false" class="ngde">entity<div class="ng-doc-node-details ngde"></div></td><td class="ngde"><code indexable="false" class="ngde">StringLiteralSource&#x3C;E></code></td><td class="ngde"><p class="ngde">the entity in the feature we are running this code for</p></td></tr></tbody></table></div></section>`,p=(()=>{let e=class e extends a{constructor(){super(),this.routePrefix=void 0,this.pageType="api",this.pageContent=g,this.demo=void 0,this.demoAssets=void 0}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s({type:e,selectors:[["ng-doc-page-api-smart-ngrx-functions-get-array-item"]],standalone:!0,features:[i([{provide:a,useExisting:e}]),d,o],decls:1,vars:0,template:function(t,f){t&1&&c(0,"ng-doc-page")},dependencies:[r],encapsulation:2,changeDetection:0});let n=e;return n})(),h=[{path:"",component:p,title:"getArrayItem"}],x=h;export{p as DynamicComponent,x as default};
