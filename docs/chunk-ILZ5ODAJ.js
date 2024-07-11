import{a as h}from"./chunk-CGH4GANM.js";import"./chunk-NCOWMHCX.js";import{a as g}from"./chunk-YWRD4FHU.js";import"./chunk-WDR7ZGDV.js";import{a as o}from"./chunk-RVP6FOET.js";import{L as i,Qa as c,Ra as p,Rb as x,ia as l,va as r}from"./chunk-ECT43PI4.js";import{a,b as d,g as w}from"./chunk-JPKLQMV2.js";var f=w(x());var D={title:"Delete a Row",mdFile:"./index.md",order:4,category:h},t=D;var m=[];var R={},u=R;var v=`<h1 id="deleting-a-row" class="ngde">Deleting a Row<a title="Link to heading" class="ng-doc-header-link ngde" href="/using-smart-ng-rx/crud-support/deleting#deleting-a-row"><ng-doc-icon icon="link-2" size="16" class="ngde"></ng-doc-icon></a></h1><p class="ngde">Every row that is returned by SmartNgRX is wrapped in the RowProxy class which provides access to a <code class="ngde">delete()</code> method. Calling <code class="ngde">delete()</code> on a row will optimistically remove the row from the store, including the child arrays in every parent that references it. Then the <code class="ngde">delete()</code> method in your Effect Service will get called. If the <code class="ngde">delete()</code> method fails, the delete will be rolled back.</p><p class="ngde">Sample code from the demo app:</p><pre class="ngde hljs"><code class="hljs language-typescript code-lines ngde" lang="typescript" name="" icon="" highlightedlines="[]"><span class="line ngde"><span class="hljs-title function_ ngde">deleteNode</span>(<span class="hljs-attr ngde">node</span>: <span class="hljs-title class_ ngde">TreeNode</span>): <span class="hljs-built_in ngde">void</span> {
</span><span class="line ngde">  node.<span class="hljs-property ngde">node</span>.<span class="hljs-property ngde">delete</span>!();
</span><span class="line ngde">}
</span></code></pre><p class="ngde">Note: node.node is typed as <code class="ngde ng-doc-code-with-link" class="ngde"><a href="/api/smart-ngrx/interfaces/RowProxyDelete" class="ng-doc-code-anchor ngde" data-link-type="Interface" class="ngde">RowProxyDelete</a></code>, which defines the optional delete method. Because the delete method will, by definition, be available, we can safely use the non-null assertion operator <code class="ngde">!</code> to call it.</p><p class="ngde">Everything else happens for you under the covers.</p>`,P=(()=>{let e=class e extends o{constructor(){super(),this.routePrefix="",this.pageType="guide",this.pageContent=v,this.page=t,this.demoAssets=u}};e.\u0275fac=function(s){return new(s||e)},e.\u0275cmp=i({type:e,selectors:[["ng-doc-page-using-smart-ng-rx-crud-support-deleting"]],standalone:!0,features:[c([{provide:o,useExisting:e},m,t.providers??[]]),l,p],decls:1,vars:0,template:function(s,C){s&1&&r(0,"ng-doc-page")},dependencies:[g],encapsulation:2,changeDetection:0});let n=e;return n})(),N=[d(a({},(0,f.isRoute)(t.route)?t.route:{}),{path:"",component:P,title:"Delete a Row"})],L=N;export{P as DynamicComponent,L as default};