import{a as p}from"./chunk-GB5MTUGM.js";import"./chunk-NCOWMHCX.js";import{a as u}from"./chunk-YWRD4FHU.js";import"./chunk-WDR7ZGDV.js";import{a as r}from"./chunk-RVP6FOET.js";import{L as s,Qa as m,Ra as c,Rb as D,ia as d,va as l}from"./chunk-ECT43PI4.js";import{a,b as i,g as w}from"./chunk-JPKLQMV2.js";var h=w(D());var k={title:"Introduction",mdFile:"./index.md",order:1,category:p},t=k;var f=[];var v={},g=v;var x=`<h1 id="mark-and-delete" class="ngde">Mark and Delete<a title="Link to heading" class="ng-doc-header-link ngde" href="/using-smart-ng-rx/mark-and-delete/intro#mark-and-delete"><ng-doc-icon icon="link-2" size="16" class="ngde"></ng-doc-icon></a></h1><p class="ngde">By default, the Mark and Delete mechanism in SmartNgRX will mark a row as dirty 15 minutes after it has been loaded. If the row is still being used somewhere on the screen, the system will re-request the row from the server. If the row is not being used, 15 minutes later, the row will be removed from the store. Said another way, if a row is loaded and then not used for 30 minutes, it will be removed from the store.</p><p class="ngde">Up until now we haven't even mentioned Mark and Delete because it is the default. If you don't pass any parameters for Mark and Delete, this is what you get "for free".</p><p class="ngde">But, you can customize the Mark and Delete behavior. Maybe you want to mark a row as dirty after 5 minutes instead of 15. Maybe you want rows to be deleted after an hour instead of 30 minutes. Maybe you don't want to re-retrieve rows from the server if they are still being used on the screen. Maybe you want to keep rows around forever.</p><p class="ngde">All this can be configured.</p>`,b=(()=>{let e=class e extends r{constructor(){super(),this.routePrefix="",this.pageType="guide",this.pageContent=x,this.page=t,this.demoAssets=g}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=s({type:e,selectors:[["ng-doc-page-using-smart-ng-rx-mark-and-delete-intro"]],standalone:!0,features:[m([{provide:r,useExisting:e},f,t.providers??[]]),d,c],decls:1,vars:0,template:function(n,P){n&1&&l(0,"ng-doc-page")},dependencies:[u],encapsulation:2,changeDetection:0});let o=e;return o})(),M=[i(a({},(0,h.isRoute)(t.route)?t.route:{}),{path:"",component:b,title:"Introduction"})],U=M;export{b as DynamicComponent,U as default};
