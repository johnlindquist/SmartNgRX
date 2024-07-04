import{a as o}from"./chunk-YWRD4FHU.js";import"./chunk-WDR7ZGDV.js";import{a as d}from"./chunk-RVP6FOET.js";import{L as n,Qa as l,Ra as r,ia as t,va as c}from"./chunk-ECT43PI4.js";import"./chunk-JPKLQMV2.js";var i=`<header class="ngde"><div class="ng-doc-page-tags ngde"><span class="ng-doc-tag ngde" indexable="false" data-content="ng-doc-scope">smart-ngrx</span> <span class="ng-doc-inline-delimiter ngde" indexable="false">/</span> <span class="ng-doc-tag ngde" indexable="false" data-content="Interface">Interface</span></div><h1 id="smartarray" class="ngde">SmartArray<a title="Link to heading" class="ng-doc-header-link ngde" href="/api/smart-ngrx/interfaces/SmartArray#smartarray"><ng-doc-icon icon="link-2" size="16" class="ngde"></ng-doc-icon></a></h1></header><section class="ngde"><p class="ngde">Interface that allows us to access the rawArray field and the addToStore and removeFromStore methods on a <code class="ngde ng-doc-code-with-link" class="ngde"><a href="/api/smart-ngrx/interfaces/SmartArray" class="ng-doc-code-anchor ngde" data-link-type="Interface" class="ngde">SmartArray</a></code></p></section><section class="ngde"><h2 id="properties" class="ngde">Properties<a title="Link to heading" class="ng-doc-header-link ngde" href="/api/smart-ngrx/interfaces/SmartArray#properties"><ng-doc-icon icon="link-2" size="16" class="ngde"></ng-doc-icon></a></h2><div class="ng-doc-table-wrapper ngde"><table class="ng-doc-properties-table ngde"><thead class="ngde"><tr indexable="false" class="ngde"><th class="ng-doc-properties-table-name ngde">Name</th><th class="ng-doc-properties-table-type ngde">Type</th><th class="ng-doc-properties-table-description ngde">Description</th></tr></thead><tbody class="ngde"><tr data-slug="rawArray" data-slugtype="member" id="rawArray" class="ngde"><td indexable="false" class="ngde">rawArray<div class="ng-doc-node-details ngde"></div></td><td class="ngde"><code indexable="false" class="ngde">string[] | undefined</code></td><td class="ngde"><p class="ngde">The array of IDs proxied by the <code class="ngde ng-doc-code-with-link" class="ngde"><a href="/api/smart-ngrx/classes/ArrayProxy" class="ng-doc-code-anchor ngde" data-link-type="Class" class="ngde">ArrayProxy</a></code></p></td></tr></tbody></table></div></section><section class="ngde"><h2 id="methods" class="ngde">Methods<a title="Link to heading" class="ng-doc-header-link ngde" href="/api/smart-ngrx/interfaces/SmartArray#methods"><ng-doc-icon icon="link-2" size="16" class="ngde"></ng-doc-icon></a></h2><div class="ng-doc-table-wrapper ngde"><table class="ng-doc-method-table ngde"><thead class="ngde"><tr class="ngde"><th indexable="false" class="ngde"><h3 data-slugtype="member" id="addtostore" class="ngde">addToStore()<a title="Link to heading" class="ng-doc-header-link ngde" href="/api/smart-ngrx/interfaces/SmartArray#addtostore"><ng-doc-icon icon="link-2" size="16" class="ngde"></ng-doc-icon></a></h3><div class="ng-doc-node-details ngde"></div></th></tr></thead><tbody class="ngde"><tr class="ngde"><td class="ngde"><p class="ngde">Adds a new row to the store</p></td></tr><tr class="ngde"><td class="ngde"><h5 class="no-anchor ngde" indexable="false">Presentation</h5><pre class="ngde hljs"><code lang="typescript" class="hljs language-typescript code-lines ngde"><span class="line ngde"><span class="hljs-title function_ ngde">addToStore</span>(<span class="hljs-attr ngde">newRow</span>: C, <span class="hljs-attr ngde">thisRow</span>: P): <span class="hljs-built_in ngde">void</span>;
</span></code></pre></td></tr><tr class="ngde"><td class="ngde"><h5 class="no-anchor ngde" indexable="false">Parameters</h5><div class="ng-doc-table-wrapper ngde"><table class="ng-doc-parameters-table ngde"><thead class="ngde"><tr indexable="false" class="ngde"><th class="ng-doc-parameters-table-name ngde">Name</th><th class="ng-doc-parameters-table-type ngde">Type</th><th class="ng-doc-parameters-table-description ngde">Description</th></tr></thead><tbody class="ngde"><tr class="ngde"><td indexable="false" class="ngde">newRow<div class="ng-doc-node-details ngde"></div></td><td class="ngde"><code indexable="false" class="ngde">C</code></td><td class="ngde"><p class="ngde">The new row to add</p></td></tr><tr class="ngde"><td indexable="false" class="ngde">thisRow<div class="ng-doc-node-details ngde"></div></td><td class="ngde"><code indexable="false" class="ngde">P</code></td><td class="ngde"><p class="ngde">The parent row</p></td></tr></tbody></table></div><h5 class="no-anchor ngde" indexable="false">Returns</h5><p class="ngde"><code indexable="false" class="ngde">void</code></p></td></tr></tbody></table></div><div class="ng-doc-table-wrapper ngde"><table class="ng-doc-method-table ngde"><thead class="ngde"><tr class="ngde"><th indexable="false" class="ngde"><h3 data-slugtype="member" id="removefromstore" class="ngde">removeFromStore()<a title="Link to heading" class="ng-doc-header-link ngde" href="/api/smart-ngrx/interfaces/SmartArray#removefromstore"><ng-doc-icon icon="link-2" size="16" class="ngde"></ng-doc-icon></a></h3><div class="ng-doc-node-details ngde"></div></th></tr></thead><tbody class="ngde"><tr class="ngde"><td class="ngde"><p class="ngde">Removes a row from the store</p></td></tr><tr class="ngde"><td class="ngde"><h5 class="no-anchor ngde" indexable="false">Presentation</h5><pre class="ngde hljs"><code lang="typescript" class="hljs language-typescript code-lines ngde"><span class="line ngde"><span class="hljs-title function_ ngde">removeFromStore</span>(<span class="hljs-attr ngde">row</span>: C, <span class="hljs-attr ngde">parent</span>: P): <span class="hljs-built_in ngde">void</span>;
</span></code></pre></td></tr><tr class="ngde"><td class="ngde"><h5 class="no-anchor ngde" indexable="false">Parameters</h5><div class="ng-doc-table-wrapper ngde"><table class="ng-doc-parameters-table ngde"><thead class="ngde"><tr indexable="false" class="ngde"><th class="ng-doc-parameters-table-name ngde">Name</th><th class="ng-doc-parameters-table-type ngde">Type</th><th class="ng-doc-parameters-table-description ngde">Description</th></tr></thead><tbody class="ngde"><tr class="ngde"><td indexable="false" class="ngde">row<div class="ng-doc-node-details ngde"></div></td><td class="ngde"><code indexable="false" class="ngde">C</code></td><td class="ngde"></td></tr><tr class="ngde"><td indexable="false" class="ngde">parent<div class="ng-doc-node-details ngde"></div></td><td class="ngde"><code indexable="false" class="ngde">P</code></td><td class="ngde"></td></tr></tbody></table></div><h5 class="no-anchor ngde" indexable="false">Returns</h5><p class="ngde"><code indexable="false" class="ngde">void</code></p></td></tr></tbody></table></div></section>`,p=(()=>{let e=class e extends d{constructor(){super(),this.routePrefix=void 0,this.pageType="api",this.pageContent=i,this.demo=void 0,this.demoAssets=void 0}};e.\u0275fac=function(s){return new(s||e)},e.\u0275cmp=n({type:e,selectors:[["ng-doc-page-api-smart-ngrx-interfaces-smart-array"]],standalone:!0,features:[l([{provide:d,useExisting:e}]),t,r],decls:1,vars:0,template:function(s,m){s&1&&c(0,"ng-doc-page")},dependencies:[o],encapsulation:2,changeDetection:0});let a=e;return a})(),h=[{path:"",component:p,title:"SmartArray"}],y=h;export{p as DynamicComponent,y as default};
