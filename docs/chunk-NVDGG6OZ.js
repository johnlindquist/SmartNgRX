import{a as h}from"./chunk-NCOWMHCX.js";import{a as l}from"./chunk-CDUCBZGU.js";import"./chunk-ELQQ62YC.js";import{a}from"./chunk-HBTGZLOF.js";import{L as r,Qa as p,Ra as g,Sb as x,ia as d,va as c}from"./chunk-H5ZZRFLE.js";import{a as i,b as o,g as R}from"./chunk-JPKLQMV2.js";var f=R(x());var N={title:"Entity Registration",mdFile:"./index.md",order:6,category:h},t=N;var m=[];var w={},u=w;var D=`<h1 id="entity-registration" class="ngde">Entity Registration<a title="Link to heading" class="ng-doc-header-link ngde" href="/using-smart-ng-rx/entity-registration#entity-registration"><ng-doc-icon icon="link-2" size="16" class="ngde"></ng-doc-icon></a></h1><p class="ngde">Now that we have all the pieces in place, we can register our definitions with Smart NgRX so that they can be used by the library.</p><p class="ngde">We register our definitions by feature. By making even your common NgRX entities feature specific, all your NgRX code looks the same and is easy to move to another feature as needed.</p><p class="ngde">The following is how we would register our User entity as part of the <code class="ngde">shared</code> feature with Smart NgRX:</p><pre class="ngde hljs"><code class="hljs language-typescript code-lines ngde" lang="typescript" name="" icon="" highlightedlines="[]"><span class="line ngde"><span class="hljs-meta ngde">@NgModule</span>({
</span><span class="line ngde">  <span class="hljs-comment ngde">// ...</span>
</span><span class="line ngde">  <span class="hljs-attr ngde">providers</span>: [<span class="hljs-title function_ ngde"><a href="/api/smart-ngrx/functions/provideSmartFeatureEntities" class="ng-doc-code-anchor ngde" data-link-type="Function" class="ngde">provideSmartFeatureEntities</a></span>(<span class="hljs-string ngde">'shared'</span>, [usersDefinition])],
</span><span class="line ngde">  <span class="hljs-comment ngde">// ...</span>
</span><span class="line ngde">})
</span><span class="line ngde"><span class="hljs-keyword ngde">export</span> <span class="hljs-keyword ngde">class</span> <span class="hljs-title class_ ngde">SharedModule</span> {}
</span></code></pre><p class="ngde">Remember, we defined <code class="ngde">usersDefinition</code> earlier in the <a href="/using-smart-ng-rx/entity-definitions" class="ngde">Entity Definitions</a> section.</p><p class="ngde">If there are other entities you want to register with this feature, you would add them to the array of entity definitions.</p>`,v=(()=>{let e=class e extends a{constructor(){super(),this.routePrefix="",this.pageType="guide",this.pageContent=D,this.page=t,this.demoAssets=u}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=r({type:e,selectors:[["ng-doc-page-using-smart-ng-rx-entity-registration"]],standalone:!0,features:[p([{provide:a,useExisting:e},m,t.providers??[]]),d,g],decls:1,vars:0,template:function(n,E){n&1&&c(0,"ng-doc-page")},dependencies:[l],encapsulation:2,changeDetection:0});let s=e;return s})(),P=[o(i({},(0,f.isRoute)(t.route)?t.route:{}),{path:"",component:v,title:"Entity Registration"})],L=P;export{v as DynamicComponent,L as default};
