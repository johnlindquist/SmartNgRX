import{a as o}from"./chunk-7XN64D54.js";import"./chunk-IJ3JGE56.js";import{a}from"./chunk-CKVFDSHY.js";import{Ba as l,Ca as i,K as t,da as c,na as d}from"./chunk-WYUNPEIA.js";import"./chunk-RS6LHQUM.js";var g=`<header class="ngde"><div class="ng-doc-page-tags ngde"><span class="ng-doc-tag ngde" indexable="false" data-content="ng-doc-scope">smart-ngrx</span> <span class="ng-doc-inline-delimiter ngde" indexable="false">/</span> <span class="ng-doc-tag ngde" indexable="false" data-content="Function">Function</span></div><h1 id="loadbyidseffect" class="ngde">loadByIdsEffect<a title="Link to heading" class="ng-doc-header-link ngde" href="/api/smart-ngrx/functions/loadByIdsEffect#loadbyidseffect"><ng-doc-icon icon="link-2" size="16" class="ngde"></ng-doc-icon></a></h1></header><section class="ngde"><p class="ngde">This is the effect that loads the ids from the service.</p></section><section class="ngde"><h2 id="presentation" class="ngde">Presentation<a title="Link to heading" class="ng-doc-header-link ngde" href="/api/smart-ngrx/functions/loadByIdsEffect#presentation"><ng-doc-icon icon="link-2" size="16" class="ngde"></ng-doc-icon></a></h2><pre class="ngde hljs"><code lang="typescript" class="hljs language-typescript code-lines ngde"><span class="line ngde"><span class="hljs-keyword ngde">function</span> <span class="hljs-title function_ ngde"><a href="/api/smart-ngrx/functions/loadByIdsEffect" class="ng-doc-code-anchor ngde" data-link-type="Function" class="ngde">loadByIdsEffect</a></span>(<span class="hljs-params ngde"></span>
</span><span class="line ngde"><span class="hljs-params ngde">  effectServiceToken: InjectionToken&#x3C;<a href="/api/smart-ngrx/classes/EffectService" class="ng-doc-code-anchor ngde" data-link-type="Class" class="ngde">EffectService</a>&#x3C;T>>,</span>
</span><span class="line ngde"><span class="hljs-params ngde">  actions: <a href="/api/smart-ngrx/interfaces/ActionGroup" class="ng-doc-code-anchor ngde" data-link-type="Interface" class="ngde">ActionGroup</a>&#x3C;T></span>
</span><span class="line ngde"><span class="hljs-params ngde"></span>): (<span class="hljs-params ngde"></span>
</span><span class="line ngde"><span class="hljs-params ngde">  actions$?: Actions&#x3C;</span><span class="hljs-built_in ngde">any</span><span class="hljs-params ngde">>,</span>
</span><span class="line ngde"><span class="hljs-params ngde">  actionService?: EffectService&#x3C;T>,</span>
</span><span class="line ngde"><span class="hljs-params ngde">  zone?: NgZone</span>
</span><span class="line ngde"><span class="hljs-params ngde"></span>) => <span class="hljs-title class_ ngde">Observable</span>&#x3C;<span class="hljs-title class_ ngde"><a href="/api/smart-ngrx/interfaces/RowsProp" class="ng-doc-code-anchor ngde" data-link-type="Interface" class="ngde">RowsProp</a></span>&#x3C;T> &#x26; <span class="hljs-title class_ ngde">TypedAction</span>&#x3C;<span class="hljs-string ngde">\`[<span class="hljs-subst ngde">\${<span class="hljs-built_in ngde">any</span>}</span>] Load By Ids Success\`</span>>>;
</span></code></pre></section><section class="ngde"><h2 id="parameters" class="ngde">Parameters<a title="Link to heading" class="ng-doc-header-link ngde" href="/api/smart-ngrx/functions/loadByIdsEffect#parameters"><ng-doc-icon icon="link-2" size="16" class="ngde"></ng-doc-icon></a></h2><div class="ng-doc-table-wrapper ngde"><table class="ng-doc-parameters-table ngde"><thead class="ngde"><tr indexable="false" class="ngde"><th class="ng-doc-parameters-table-name ngde">Name</th><th class="ng-doc-parameters-table-type ngde">Type</th><th class="ng-doc-parameters-table-description ngde">Description</th></tr></thead><tbody class="ngde"><tr class="ngde"><td indexable="false" class="ngde">effectServiceToken<div class="ng-doc-node-details ngde"></div></td><td class="ngde"><code indexable="false" class="ngde">InjectionToken&#x3C;EffectService&#x3C;T>></code></td><td class="ngde"><p class="ngde">the effect service token that knows how to load the ids</p></td></tr><tr class="ngde"><td indexable="false" class="ngde">actions<div class="ng-doc-node-details ngde"></div></td><td class="ngde"><code indexable="false" class="ngde">ActionGroup&#x3C;T></code></td><td class="ngde"><p class="ngde">the action group for the source provided</p></td></tr></tbody></table></div></section>`,r=(()=>{let e=class e extends a{constructor(){super(),this.routePrefix=void 0,this.pageType="api",this.pageContent=g,this.demo=void 0,this.demoAssets=void 0}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t({type:e,selectors:[["ng-doc-page-api-smart-ngrx-functions-load-by-ids-effect"]],standalone:!0,features:[l([{provide:a,useExisting:e}]),c,i],decls:1,vars:0,template:function(n,h){n&1&&d(0,"ng-doc-page")},dependencies:[o],encapsulation:2,changeDetection:0});let s=e;return s})(),f=[{path:"",component:r,title:"loadByIdsEffect"}],x=f;export{r as DynamicComponent,x as default};
