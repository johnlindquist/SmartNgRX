import{a as i}from"./chunk-YWRD4FHU.js";import"./chunk-WDR7ZGDV.js";import{a as n}from"./chunk-RVP6FOET.js";import{L as d,Qa as c,Ra as o,ia as t,va as l}from"./chunk-ECT43PI4.js";import"./chunk-JPKLQMV2.js";var g=`<header class="ngde"><div class="ng-doc-page-tags ngde"><span class="ng-doc-tag ngde" indexable="false" data-content="ng-doc-scope">smart-ngrx</span> <span class="ng-doc-inline-delimiter ngde" indexable="false">/</span> <span class="ng-doc-tag ngde" indexable="false" data-content="Class">Class</span></div><h1 id="rowproxy" class="ngde">RowProxy<a title="Link to heading" class="ng-doc-header-link ngde" href="/api/smart-ngrx/classes/RowProxy#rowproxy"><ng-doc-icon icon="link-2" size="16" class="ngde"></ng-doc-icon></a></h1><div class="ng-doc-header-details ngde" indexable="false"><span class="ng-doc-header-details-label ngde">Implements</span><code indexable="false" class="ngde ng-doc-code-with-link" class="ngde"><a href="/api/smart-ngrx/interfaces/RowProxyDelete" class="ng-doc-code-anchor ngde" data-link-type="Interface" class="ngde">RowProxyDelete</a></code></div></header><section class="ngde"><p class="ngde">RowProxy wraps the row so we can intercept changes to it and fire off the appropriate actions to update the store and the server.</p><p class="ngde">Since proxying the row directly will cause the setter to throw an error when the NgRX rules are turned on that disallow mutating the row directly, we need to wrap the row in our own class that uses the Proxy class to handle the updates. By casting the RowProxy to type T (above) the rest of our code still believes it is working with the original row.</p></section><section class="ngde"><h2 id="constructor" class="ngde">Constructor<a title="Link to heading" class="ng-doc-header-link ngde" href="/api/smart-ngrx/classes/RowProxy#constructor"><ng-doc-icon icon="link-2" size="16" class="ngde"></ng-doc-icon></a></h2><div class="ng-doc-table-wrapper ngde"><table class="ng-doc-method-table ngde"><tbody class="ngde"><tr class="ngde"><td class="ngde"><p class="ngde">This is the constructor for the RowProxy class.</p></td></tr><tr class="ngde"><td class="ngde"><h5 class="no-anchor ngde" indexable="false">Presentation</h5><pre class="ngde hljs"><code lang="typescript" class="hljs language-typescript code-lines ngde"><span class="line ngde"><span class="hljs-title function_ ngde">constructor</span>(<span class="hljs-params ngde"></span>
</span><span class="line ngde"><span class="hljs-params ngde">	row: T, </span>
</span><span class="line ngde"><span class="hljs-params ngde">	</span><span class="hljs-keyword ngde">private</span><span class="hljs-params ngde"> service: <a href="/api/smart-ngrx/classes/ActionService" class="ng-doc-code-anchor ngde" data-link-type="Class" class="ngde">ActionService</a>&#x3C;T>, </span>
</span><span class="line ngde"><span class="hljs-params ngde">	parentService: <a href="/api/smart-ngrx/classes/ActionService" class="ng-doc-code-anchor ngde" data-link-type="Class" class="ngde">ActionService</a>&#x3C;P></span>
</span><span class="line ngde"><span class="hljs-params ngde"></span>): <span class="hljs-title class_ ngde"><a href="/api/smart-ngrx/classes/RowProxy" class="ng-doc-code-anchor ngde" data-link-type="Class" class="ngde">RowProxy</a></span>&#x3C;T, P>;
</span></code></pre></td></tr><tr class="ngde"><td class="ngde"><h5 class="no-anchor ngde" indexable="false">Parameters</h5><div class="ng-doc-table-wrapper ngde"><table class="ng-doc-parameters-table ngde"><thead class="ngde"><tr indexable="false" class="ngde"><th class="ng-doc-parameters-table-name ngde">Name</th><th class="ng-doc-parameters-table-type ngde">Type</th><th class="ng-doc-parameters-table-description ngde">Description</th></tr></thead><tbody class="ngde"><tr data-slug="row" data-slugtype="member" id="row" class="ngde"><td indexable="false" class="ngde">row<div class="ng-doc-node-details ngde"></div></td><td class="ngde"><code indexable="false" class="ngde">T</code></td><td class="ngde"><p class="ngde">The row to create the custom proxy for</p></td></tr><tr data-slug="service" data-slugtype="member" id="service" class="ngde"><td indexable="false" class="ngde">service<div class="ng-doc-node-details ngde"></div></td><td class="ngde"><code indexable="false" class="ngde">ActionService&#x3C;T></code></td><td class="ngde"><p class="ngde">The service that will handle updating the row</p></td></tr><tr data-slug="parentService" data-slugtype="member" id="parentService" class="ngde"><td indexable="false" class="ngde">parentService<div class="ng-doc-node-details ngde"></div></td><td class="ngde"><code indexable="false" class="ngde">ActionService&#x3C;P></code></td><td class="ngde"><p class="ngde">The service that will handle updating the parent row</p></td></tr></tbody></table></div></td></tr></tbody></table></div></section><section class="ngde"><h2 id="properties" class="ngde">Properties<a title="Link to heading" class="ng-doc-header-link ngde" href="/api/smart-ngrx/classes/RowProxy#properties"><ng-doc-icon icon="link-2" size="16" class="ngde"></ng-doc-icon></a></h2><div class="ng-doc-table-wrapper ngde"><table class="ng-doc-properties-table ngde"><thead class="ngde"><tr indexable="false" class="ngde"><th class="ng-doc-properties-table-name ngde">Name</th><th class="ng-doc-properties-table-type ngde">Type</th><th class="ng-doc-properties-table-description ngde">Description</th></tr></thead><tbody class="ngde"><tr data-slug="changes" data-slugtype="member" id="changes" class="ngde"><td indexable="false" class="ngde">changes<div class="ng-doc-node-details ngde"></div></td><td class="ngde"><code indexable="false" class="ngde">Record&#x3C;string | symbol, unknown></code></td><td class="ngde"></td></tr><tr data-slug="record" data-slugtype="member" id="record" class="ngde"><td indexable="false" class="ngde">record<div class="ng-doc-node-details ngde"></div></td><td class="ngde"><code indexable="false" class="ngde">Record&#x3C;string | symbol, unknown></code></td><td class="ngde"></td></tr></tbody></table></div></section><section class="ngde"><h2 id="methods" class="ngde">Methods<a title="Link to heading" class="ng-doc-header-link ngde" href="/api/smart-ngrx/classes/RowProxy#methods"><ng-doc-icon icon="link-2" size="16" class="ngde"></ng-doc-icon></a></h2><div class="ng-doc-table-wrapper ngde"><table class="ng-doc-method-table ngde"><thead class="ngde"><tr class="ngde"><th indexable="false" class="ngde"><h3 data-slugtype="member" id="delete" class="ngde">delete()<a title="Link to heading" class="ng-doc-header-link ngde" href="/api/smart-ngrx/classes/RowProxy#delete"><ng-doc-icon icon="link-2" size="16" class="ngde"></ng-doc-icon></a></h3><div class="ng-doc-node-details ngde">implements <code class="ngde ng-doc-code-with-link" class="ngde"><a href="/api/smart-ngrx/interfaces/RowProxyDelete" class="ng-doc-code-anchor ngde" data-link-type="Interface" class="ngde">RowProxyDelete</a></code></div></th></tr></thead><tbody class="ngde"><tr class="ngde"><td class="ngde"><p class="ngde">Initiates delete of this object from the server which will also optimistically update the store</p></td></tr><tr class="ngde"><td class="ngde"><h5 class="no-anchor ngde" indexable="false">Presentation</h5><pre class="ngde hljs"><code lang="typescript" class="hljs language-typescript code-lines ngde"><span class="line ngde"><span class="hljs-title function_ ngde">delete</span>(): <span class="hljs-built_in ngde">void</span>;
</span></code></pre></td></tr><tr class="ngde"><td class="ngde"><h5 class="no-anchor ngde" indexable="false">Returns</h5><p class="ngde"><code indexable="false" class="ngde">void</code></p></td></tr></tbody></table></div><div class="ng-doc-table-wrapper ngde"><table class="ng-doc-method-table ngde"><thead class="ngde"><tr class="ngde"><th indexable="false" class="ngde"><h3 data-slugtype="member" id="getrealrow" class="ngde">getRealRow()<a title="Link to heading" class="ng-doc-header-link ngde" href="/api/smart-ngrx/classes/RowProxy#getrealrow"><ng-doc-icon icon="link-2" size="16" class="ngde"></ng-doc-icon></a></h3><div class="ng-doc-node-details ngde"></div></th></tr></thead><tbody class="ngde"><tr class="ngde"><td class="ngde"><p class="ngde">This retrieves the backing row for this proxy</p></td></tr><tr class="ngde"><td class="ngde"><h5 class="no-anchor ngde" indexable="false">Presentation</h5><pre class="ngde hljs"><code lang="typescript" class="hljs language-typescript code-lines ngde"><span class="line ngde"><span class="hljs-title function_ ngde">getRealRow</span>(): T;
</span></code></pre></td></tr><tr class="ngde"><td class="ngde"><h5 class="no-anchor ngde" indexable="false">Returns</h5><p class="ngde"><code indexable="false" class="ngde">T</code></p></td></tr></tbody></table></div><div class="ng-doc-table-wrapper ngde"><table class="ng-doc-method-table ngde"><thead class="ngde"><tr class="ngde"><th indexable="false" class="ngde"><h3 data-slugtype="member" id="tojson" class="ngde">toJSON()<a title="Link to heading" class="ng-doc-header-link ngde" href="/api/smart-ngrx/classes/RowProxy#tojson"><ng-doc-icon icon="link-2" size="16" class="ngde"></ng-doc-icon></a></h3><div class="ng-doc-node-details ngde"></div></th></tr></thead><tbody class="ngde"><tr class="ngde"><td class="ngde"><p class="ngde">When we stringify this object, it needs to stringify the real row and any changes we've made to it.</p></td></tr><tr class="ngde"><td class="ngde"><h5 class="no-anchor ngde" indexable="false">Presentation</h5><pre class="ngde hljs"><code lang="typescript" class="hljs language-typescript code-lines ngde"><span class="line ngde"><span class="hljs-title function_ ngde">toJSON</span>(): T &#x26; <span class="hljs-title class_ ngde">Record</span>&#x3C;<span class="hljs-built_in ngde">string</span> | <span class="hljs-built_in ngde">symbol</span>, <span class="hljs-built_in ngde">unknown</span>>;
</span></code></pre></td></tr><tr class="ngde"><td class="ngde"><h5 class="no-anchor ngde" indexable="false">Returns</h5><p class="ngde"><code indexable="false" class="ngde">T &#x26; Record&#x3C;string | symbol, unknown></code></p></td></tr></tbody></table></div></section>`,p=(()=>{let e=class e extends n{constructor(){super(),this.routePrefix=void 0,this.pageType="api",this.pageContent=g,this.demo=void 0,this.demoAssets=void 0}};e.\u0275fac=function(a){return new(a||e)},e.\u0275cmp=d({type:e,selectors:[["ng-doc-page-api-smart-ngrx-classes-row-proxy"]],standalone:!0,features:[c([{provide:n,useExisting:e}]),t,o],decls:1,vars:0,template:function(a,b){a&1&&l(0,"ng-doc-page")},dependencies:[i],encapsulation:2,changeDetection:0});let s=e;return s})(),h=[{path:"",component:p,title:"RowProxy"}],y=h;export{p as DynamicComponent,y as default};