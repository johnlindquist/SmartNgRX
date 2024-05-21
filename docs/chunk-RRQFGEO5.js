import{a as l}from"./chunk-CJGZZP52.js";import"./chunk-2EMCU6A5.js";import{a as s}from"./chunk-WRKT5673.js";import{M as t,Sa as i,Ta as o,ka as d,xa as c}from"./chunk-WJ4POMBQ.js";import"./chunk-P2VZOJAX.js";var p=`<header class="ngde"><div class="ng-doc-page-tags ngde"><span class="ng-doc-tag ngde" indexable="false" data-content="ng-doc-scope">smart-ngrx</span> <span class="ng-doc-inline-delimiter ngde" indexable="false">/</span> <span class="ng-doc-tag ngde" indexable="false" data-content="Function">Function</span></div><h1 id="managemaps" class="ngde">manageMaps<a title="Link to heading" class="ng-doc-header-link ngde" href="/api/smart-ngrx/functions/manageMaps#managemaps"><ng-doc-icon icon="link-2" size="16" class="ngde"></ng-doc-icon></a></h1></header><section class="ngde"><p class="ngde">Helper function that updates the maps used in update-effect.function.ts so we can implement optimistic updates and can rollback on error when needed.</p></section><section class="ngde"><h2 id="presentation" class="ngde">Presentation<a title="Link to heading" class="ng-doc-header-link ngde" href="/api/smart-ngrx/functions/manageMaps#presentation"><ng-doc-icon icon="link-2" size="16" class="ngde"></ng-doc-icon></a></h2><pre class="ngde hljs"><code lang="typescript" class="hljs language-typescript code-lines ngde"><span class="line ngde"><span class="hljs-keyword ngde">function</span> <span class="hljs-title function_ ngde"><a href="/api/smart-ngrx/functions/manageMaps" class="ng-doc-code-anchor ngde" data-link-type="Function" class="ngde">manageMaps</a></span>(<span class="hljs-params ngde">lastRow: <span class="hljs-built_in ngde">Map</span>&#x3C;<span class="hljs-built_in ngde">string</span>, T>, lastRowTimeout: <span class="hljs-built_in ngde">Map</span>&#x3C;<span class="hljs-built_in ngde">string</span>, <span class="hljs-built_in ngde">number</span>>, action: { old: <a href="/api/smart-ngrx/interfaces/RowProp" class="ng-doc-code-anchor ngde" data-link-type="Interface" class="ngde">RowProp</a>&#x3C;T>; <span class="hljs-keyword ngde">new</span>: <a href="/api/smart-ngrx/interfaces/RowProp" class="ng-doc-code-anchor ngde" data-link-type="Interface" class="ngde">RowProp</a>&#x3C;T>; }</span>): <span class="hljs-built_in ngde">void</span>;
</span></code></pre></section><section class="ngde"><h2 id="parameters" class="ngde">Parameters<a title="Link to heading" class="ng-doc-header-link ngde" href="/api/smart-ngrx/functions/manageMaps#parameters"><ng-doc-icon icon="link-2" size="16" class="ngde"></ng-doc-icon></a></h2><div class="ng-doc-table-wrapper ngde"><table class="ng-doc-parameters-table ngde"><thead class="ngde"><tr indexable="false" class="ngde"><th class="ng-doc-parameters-table-name ngde">Name</th><th class="ng-doc-parameters-table-type ngde">Type</th><th class="ng-doc-parameters-table-description ngde">Description</th></tr></thead><tbody class="ngde"><tr class="ngde"><td indexable="false" class="ngde">lastRow<div class="ng-doc-node-details ngde"></div></td><td class="ngde"><code indexable="false" class="ngde">Map&#x3C;string, T></code></td><td class="ngde"><p class="ngde">the map of the last row sent to the server</p></td></tr><tr class="ngde"><td indexable="false" class="ngde">lastRowTimeout<div class="ng-doc-node-details ngde"></div></td><td class="ngde"><code indexable="false" class="ngde">Map&#x3C;string, number></code></td><td class="ngde"><p class="ngde">the map of the last time a row was sent to the server</p></td></tr><tr class="ngde"><td indexable="false" class="ngde">action<div class="ng-doc-node-details ngde"></div></td><td class="ngde"><code indexable="false" class="ngde">{ old: RowProp&#x3C;T>; new: RowProp&#x3C;T>; }</code></td><td class="ngde"><p class="ngde">the action that was dispatched</p></td></tr></tbody></table></div></section>`,r=(()=>{let e=class e extends s{constructor(){super(),this.routePrefix=void 0,this.pageType="api",this.pageContent=p,this.demo=void 0,this.demoAssets=void 0}};e.\u0275fac=function(a){return new(a||e)},e.\u0275cmp=t({type:e,selectors:[["ng-doc-page-api-smart-ngrx-functions-manage-maps"]],standalone:!0,features:[i([{provide:s,useExisting:e}]),d,o],decls:1,vars:0,template:function(a,m){a&1&&c(0,"ng-doc-page")},dependencies:[l],encapsulation:2,changeDetection:0});let n=e;return n})(),h=[{path:"",component:r,title:"manageMaps"}],x=h;export{r as DynamicComponent,x as default};
