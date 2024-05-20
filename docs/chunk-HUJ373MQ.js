import{a as h}from"./chunk-GB5MTUGM.js";import"./chunk-NCOWMHCX.js";import{a as m}from"./chunk-DOYEGAJD.js";import"./chunk-I2ZFZ3HE.js";import{a}from"./chunk-P73QIYSQ.js";import{M as r,Sa as l,Ta as g,Tb as w,ka as d,xa as c}from"./chunk-LOVS453K.js";import{a as s,b as o,g as y}from"./chunk-P2VZOJAX.js";var p=y(w());var D={title:"MarkAndDeleteInit",mdFile:"./index.md",order:2,category:h},t=D;var f=[];var v={},k=v;var x='<h1 id="markanddeleteinit" class="ngde">MarkAndDeleteInit<a title="Link to heading" class="ng-doc-header-link ngde" href="/using-smart-ng-rx/mark-and-delete/mark-and-delete-init#markanddeleteinit"><ng-doc-icon icon="link-2" size="16" class="ngde"></ng-doc-icon></a></h1><p class="ngde">The core interface for the Mark and Delete feature is the <code class="ngde ng-doc-code-with-link" class="ngde"><a href="/api/smart-ngrx/interfaces/MarkAndDeleteInit" class="ng-doc-code-anchor ngde" data-link-type="Interface" class="ngde">MarkAndDeleteInit</a></code> interface. This interface is used to configure the Mark and Delete feature for a given entity.</p><p class="ngde">The <code class="ngde ng-doc-code-with-link" class="ngde"><a href="/api/smart-ngrx/interfaces/MarkAndDeleteInit" class="ng-doc-code-anchor ngde" data-link-type="Interface" class="ngde">MarkAndDeleteInit</a></code> interface has the following properties:</p><h2 id="markdirtytime" class="ngde">markDirtyTime<a title="Link to heading" class="ng-doc-header-link ngde" href="/using-smart-ng-rx/mark-and-delete/mark-and-delete-init#markdirtytime"><ng-doc-icon icon="link-2" size="16" class="ngde"></ng-doc-icon></a></h2><p class="ngde">The time in milliseconds to wait before marking a row as dirty. When a row is marked as dirty, and it is being used it will re-retrieve the row if <code class="ngde">markDirtyFetchesNew</code> is true. If <code class="ngde">markDirtyFetchesNew</code> is false, it will just reset the isDirty flag in the row. his is how we know the row is still in use, or not.</p><p class="ngde">If <code class="ngde">markDirtyTime</code> is set to -1, then the row will never be marked as dirty, and <code class="ngde">removeTime</code> will be ignored. If you manually mark a row as dirty (coming soon), the system will assume you want to refetch the row from the server, regardless of what you set here. This allows us to use the same mechanism to refresh data for automated refreshes and manual refreshes in response to websocket notification.</p><p class="ngde">If <code class="ngde">markAndDelete</code> is not set, it will default to 15 minutes.</p><h2 id="markdirtyfetchesnew" class="ngde">markDirtyFetchesNew<a title="Link to heading" class="ng-doc-header-link ngde" href="/using-smart-ng-rx/mark-and-delete/mark-and-delete-init#markdirtyfetchesnew"><ng-doc-icon icon="link-2" size="16" class="ngde"></ng-doc-icon></a></h2><p class="ngde">As mentioned above, if this is set to true, than any time a row is marked as dirty the system will retrieve a new value from the server. Otherwise, it will just reset the dirty timeout internally.</p><h2 id="removetime" class="ngde">removeTime<a title="Link to heading" class="ng-doc-header-link ngde" href="/using-smart-ng-rx/mark-and-delete/mark-and-delete-init#removetime"><ng-doc-icon icon="link-2" size="16" class="ngde"></ng-doc-icon></a></h2><p class="ngde">The time in milliseconds to wait before removing a row from the store. <code class="ngde">removeTime</code> must be greater than <code class="ngde">markDirtyTime</code>. If it is not, it will automatically set to twice <code class="ngde">markDirtyTime</code>.</p><h2 id="runinterval" class="ngde">runInterval<a title="Link to heading" class="ng-doc-header-link ngde" href="/using-smart-ng-rx/mark-and-delete/mark-and-delete-init#runinterval"><ng-doc-icon icon="link-2" size="16" class="ngde"></ng-doc-icon></a></h2><p class="ngde">The time in milliseconds that determines how often the system looks at the rows to see if they need to be marked dirty or removed. If this is not set, it will default to one minute.</p><p class="ngde"><code class="ngde">runInterval</code> is only recognized at the global level. If you want to change it, you must change it at the global level.</p>',I=(()=>{let e=class e extends a{constructor(){super(),this.routePrefix="",this.pageType="guide",this.pageContent=x,this.page=t,this.demoAssets=k}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=r({type:e,selectors:[["ng-doc-page-using-smart-ng-rx-mark-and-delete-mark-and-delete-init"]],standalone:!0,features:[l([{provide:a,useExisting:e},f,t.providers??[]]),d,g],decls:1,vars:0,template:function(i,A){i&1&&c(0,"ng-doc-page")},dependencies:[m],encapsulation:2,changeDetection:0});let n=e;return n})(),T=[o(s({},(0,p.isRoute)(t.route)?t.route:{}),{path:"",component:I,title:"MarkAndDeleteInit"})],E=T;export{I as DynamicComponent,E as default};
