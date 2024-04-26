import{a as l}from"./chunk-A7E2UISL.js";import"./chunk-LWJLGZAB.js";import{a}from"./chunk-H3E2WPX7.js";import{M as s,Sa as c,Ta as o,ka as d,xa as i}from"./chunk-GQV4C3N7.js";import"./chunk-P2VZOJAX.js";var r=`<header class="ngde"><div class="ng-doc-page-tags ngde"><span class="ng-doc-tag ngde" indexable="false" data-content="ng-doc-scope">smart-ngrx</span> <span class="ng-doc-inline-delimiter ngde" indexable="false">/</span> <span class="ng-doc-tag ngde" indexable="false" data-content="Function">Function</span></div><h1 id="ensuredataloaded" class="ngde">ensureDataLoaded<a title="Link to heading" class="ng-doc-header-link ngde" href="/api/smart-ngrx/functions/ensureDataLoaded#ensuredataloaded"><ng-doc-icon icon="link-2" size="16" class="ngde"></ng-doc-icon></a></h1></header><section class="ngde"><p class="ngde">Internal function that ensures that the ID is loaded into the store for the entity by dispatching the action if it isn't.</p></section><section class="ngde"><h2 id="presentation" class="ngde">Presentation<a title="Link to heading" class="ng-doc-header-link ngde" href="/api/smart-ngrx/functions/ensureDataLoaded#presentation"><ng-doc-icon icon="link-2" size="16" class="ngde"></ng-doc-icon></a></h2><pre class="ngde hljs"><code lang="typescript" class="hljs language-typescript code-lines ngde"><span class="line ngde"><span class="hljs-keyword ngde">function</span> <span class="hljs-title function_ ngde"><a href="/api/smart-ngrx/functions/ensureDataLoaded" class="ng-doc-code-anchor ngde" data-link-type="Function" class="ngde">ensureDataLoaded</a></span>(<span class="hljs-params ngde">entityState: EntityState&#x3C;T>, id: <span class="hljs-built_in ngde">string</span>, feature: StringLiteralSource&#x3C;F>, entity: StringLiteralSource&#x3C;E></span>): <span class="hljs-built_in ngde">void</span>;
</span></code></pre></section><section class="ngde"><h2 id="parameters" class="ngde">Parameters<a title="Link to heading" class="ng-doc-header-link ngde" href="/api/smart-ngrx/functions/ensureDataLoaded#parameters"><ng-doc-icon icon="link-2" size="16" class="ngde"></ng-doc-icon></a></h2><div class="ng-doc-table-wrapper ngde"><table class="ng-doc-parameters-table ngde"><thead class="ngde"><tr indexable="false" class="ngde"><th class="ng-doc-parameters-table-name ngde">Name</th><th class="ng-doc-parameters-table-type ngde">Type</th><th class="ng-doc-parameters-table-description ngde">Description</th></tr></thead><tbody class="ngde"><tr class="ngde"><td indexable="false" class="ngde">entityState<div class="ng-doc-node-details ngde"></div></td><td class="ngde"><code indexable="false" class="ngde">EntityState&#x3C;T></code></td><td class="ngde"><p class="ngde">The entity to check for the id</p></td></tr><tr class="ngde"><td indexable="false" class="ngde">id<div class="ng-doc-node-details ngde"></div></td><td class="ngde"><code indexable="false" class="ngde">string</code></td><td class="ngde"><p class="ngde">The id to check for</p></td></tr><tr class="ngde"><td indexable="false" class="ngde">feature<div class="ng-doc-node-details ngde"></div></td><td class="ngde"><code indexable="false" class="ngde">StringLiteralSource&#x3C;F></code></td><td class="ngde"><p class="ngde">The feature this row belongs to</p></td></tr><tr class="ngde"><td indexable="false" class="ngde">entity<div class="ng-doc-node-details ngde"></div></td><td class="ngde"><code indexable="false" class="ngde">StringLiteralSource&#x3C;E></code></td><td class="ngde"><p class="ngde">The entity in the feature this row belongs to</p></td></tr></tbody></table></div></section>`,p=(()=>{let e=class e extends a{constructor(){super(),this.routePrefix=void 0,this.pageType="api",this.pageContent=r,this.demo=void 0,this.demoAssets=void 0}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s({type:e,selectors:[["ng-doc-page-api-smart-ngrx-functions-ensure-data-loaded"]],standalone:!0,features:[c([{provide:a,useExisting:e}]),d,o],decls:1,vars:0,template:function(t,u){t&1&&i(0,"ng-doc-page")},dependencies:[l],encapsulation:2,changeDetection:0});let n=e;return n})(),h=[{path:"",component:p,title:"ensureDataLoaded"}],x=h;export{p as DynamicComponent,x as default};
