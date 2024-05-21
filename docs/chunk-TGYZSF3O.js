import{a as o}from"./chunk-CJGZZP52.js";import"./chunk-2EMCU6A5.js";import{a}from"./chunk-WRKT5673.js";import{M as t,Sa as l,Ta as c,ka as i,xa as d}from"./chunk-WJ4POMBQ.js";import"./chunk-P2VZOJAX.js";var r=`<header class="ngde"><div class="ng-doc-page-tags ngde"><span class="ng-doc-tag ngde" indexable="false" data-content="ng-doc-scope">smart-ngrx</span> <span class="ng-doc-inline-delimiter ngde" indexable="false">/</span> <span class="ng-doc-tag ngde" indexable="false" data-content="Function">Function</span></div><h1 id="assert" class="ngde">assert<a title="Link to heading" class="ng-doc-header-link ngde" href="/api/smart-ngrx/functions/assert#assert"><ng-doc-icon icon="link-2" size="16" class="ngde"></ng-doc-icon></a></h1></header><section class="ngde"><p class="ngde">This is an internal function documented here for reference by people doing development on this library.</p><p class="ngde">Asserts that a value is true. You should only use one condition at a time. If you are working with a value that should always be true, this is easier than putting if(condition) around what you are going to use the condition for.</p><h2 id="example" class="ngde">Example<a title="Link to heading" class="ng-doc-header-link ngde" href="/api/smart-ngrx/functions/assert#example"><ng-doc-icon icon="link-2" size="16" class="ngde"></ng-doc-icon></a></h2><h3 id="instead-of-this" class="ngde">instead of this:<a title="Link to heading" class="ng-doc-header-link ngde" href="/api/smart-ngrx/functions/assert#instead-of-this"><ng-doc-icon icon="link-2" size="16" class="ngde"></ng-doc-icon></a></h3><pre class="ngde hljs"><code class="hljs language-ts code-lines ngde" lang="ts" name="" icon="" highlightedlines="[]"><span class="line ngde"><span class="hljs-keyword ngde">let</span> <span class="hljs-attr ngde">variableWeExpectWilNotBeNullOrUndefined</span>: <span class="hljs-title class_ ngde">SomeType</span>;
</span><span class="line ngde"><span class="hljs-comment ngde">// somewhere in here we set the variable</span>
</span><span class="line ngde"><span class="hljs-keyword ngde">if</span>(variableWeExpectWilNotBeNullOrUndefined) {
</span><span class="line ngde">  <span class="hljs-keyword ngde">return</span>; <span class="hljs-comment ngde">// or throw an exception or whatever</span>
</span><span class="line ngde">}
</span><span class="line ngde"><span class="hljs-comment ngde">// now use the variable without having to use ? or ! everywhere</span>
</span></code></pre><h3 id="do-this" class="ngde">do this:<a title="Link to heading" class="ng-doc-header-link ngde" href="/api/smart-ngrx/functions/assert#do-this"><ng-doc-icon icon="link-2" size="16" class="ngde"></ng-doc-icon></a></h3><pre class="ngde hljs"><code class="hljs language-ts code-lines ngde" lang="ts" name="" icon="" highlightedlines="[]"><span class="line ngde"><span class="hljs-keyword ngde">let</span> <span class="hljs-attr ngde">variableWeExpectWilNotBeNullOrUndefined</span>: <span class="hljs-title class_ ngde">SomeType</span>;
</span><span class="line ngde"><span class="hljs-comment ngde">// somewhere in here we set the variable</span>
</span><span class="line ngde"><span class="hljs-title function_ ngde"><a href="/api/smart-ngrx/functions/assert" class="ng-doc-code-anchor ngde" data-link-type="Function" class="ngde">assert</a></span>(variableWeExpectWilNotBeNullOrUndefined, <span class="hljs-string ngde">'variableWeExpectWilNotBeNullOrUndefined'</span>);
</span><span class="line ngde"><span class="hljs-comment ngde">// now use the variable without having to use ? or ! everywhere</span>
</span></code></pre></section><section class="ngde"><h2 id="presentation" class="ngde">Presentation<a title="Link to heading" class="ng-doc-header-link ngde" href="/api/smart-ngrx/functions/assert#presentation"><ng-doc-icon icon="link-2" size="16" class="ngde"></ng-doc-icon></a></h2><pre class="ngde hljs"><code lang="typescript" class="hljs language-typescript code-lines ngde"><span class="line ngde"><span class="hljs-keyword ngde">function</span> <span class="hljs-title function_ ngde"><a href="/api/smart-ngrx/functions/assert" class="ng-doc-code-anchor ngde" data-link-type="Function" class="ngde">assert</a></span>(<span class="hljs-params ngde">condition: <span class="hljs-built_in ngde">boolean</span>, context: <span class="hljs-built_in ngde">string</span></span>): <span class="hljs-built_in ngde">void</span>;
</span></code></pre></section><section class="ngde"><h2 id="parameters" class="ngde">Parameters<a title="Link to heading" class="ng-doc-header-link ngde" href="/api/smart-ngrx/functions/assert#parameters"><ng-doc-icon icon="link-2" size="16" class="ngde"></ng-doc-icon></a></h2><div class="ng-doc-table-wrapper ngde"><table class="ng-doc-parameters-table ngde"><thead class="ngde"><tr indexable="false" class="ngde"><th class="ng-doc-parameters-table-name ngde">Name</th><th class="ng-doc-parameters-table-type ngde">Type</th><th class="ng-doc-parameters-table-description ngde">Description</th></tr></thead><tbody class="ngde"><tr class="ngde"><td indexable="false" class="ngde">condition<div class="ng-doc-node-details ngde"></div></td><td class="ngde"><code indexable="false" class="ngde">boolean</code></td><td class="ngde"><p class="ngde">condition to check</p></td></tr><tr class="ngde"><td indexable="false" class="ngde">context<div class="ng-doc-node-details ngde"></div></td><td class="ngde"><code indexable="false" class="ngde">string</code></td><td class="ngde"><p class="ngde">description of what we checked. If you put a GUID in the string it will make it easier to find the error in the source code.</p></td></tr></tbody></table></div></section>`,p=(()=>{let e=class e extends a{constructor(){super(),this.routePrefix=void 0,this.pageType="api",this.pageContent=r,this.demo=void 0,this.demoAssets=void 0}};e.\u0275fac=function(s){return new(s||e)},e.\u0275cmp=t({type:e,selectors:[["ng-doc-page-api-smart-ngrx-functions-assert"]],standalone:!0,features:[l([{provide:a,useExisting:e}]),i,c],decls:1,vars:0,template:function(s,u){s&1&&d(0,"ng-doc-page")},dependencies:[o],encapsulation:2,changeDetection:0});let n=e;return n})(),h=[{path:"",component:p,title:"assert"}],x=h;export{p as DynamicComponent,x as default};
