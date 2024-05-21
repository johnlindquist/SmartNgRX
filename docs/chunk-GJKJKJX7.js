import{a as u}from"./chunk-NCOWMHCX.js";import{a as g}from"./chunk-CJGZZP52.js";import"./chunk-2EMCU6A5.js";import{a as n}from"./chunk-WRKT5673.js";import{M as r,Sa as h,Ta as c,Tb as b,ka as d,xa as l}from"./chunk-WJ4POMBQ.js";import{a as i,b as s,g as w}from"./chunk-P2VZOJAX.js";var m=w(b());var k={title:"Intro",mdFile:"./index.md",order:1,category:u},t=k;var p=[];var v={},y=v;var x=`<h1 id="intro" class="ngde">Intro<a title="Link to heading" class="ng-doc-header-link ngde" href="/using-smart-ng-rx/intro#intro"><ng-doc-icon icon="link-2" size="16" class="ngde"></ng-doc-icon></a></h1><h2 id="entities-under-the-hood" class="ngde">Entities Under the Hood<a title="Link to heading" class="ng-doc-header-link ngde" href="/using-smart-ng-rx/intro#entities-under-the-hood"><ng-doc-icon icon="link-2" size="16" class="ngde"></ng-doc-icon></a></h2><p class="ngde">Smart NgRX uses NgRX Entities under the hood to manage the state of the application. This means that the state of the application is stored in a de-normalized way. This is a very powerful approach that allows us to easily manage the state of the application and to easily update the state of the application.</p><p class="ngde">The main benefit of using Entities is that we can do lookups for existing data quickly.</p><p class="ngde">Everything that Smart NgRX is doing uses standard NgRX patterns and practices with one minor exception. Smart NgRX is based on the command Action pattern rather than the event pattern. By doing this we are able to create the factories for Actions, Reducers and Effects that allow us to hide these details from you.</p><p class="ngde">However, because this is still NgRX, any NgRX dev tools you might be using, such as the Redux Dev Tools, will still work.</p><h2 id="only-what-you-need" class="ngde">Only What you Need<a title="Link to heading" class="ng-doc-header-link ngde" href="/using-smart-ng-rx/intro#only-what-you-need"><ng-doc-icon icon="link-2" size="16" class="ngde"></ng-doc-icon></a></h2><p class="ngde">Another concept you'll need to understand is that Smart NgRX only loads the data that you need. This means that if you have a page that only needs to display a list of users, then Smart NgRX will only load the users. If you have a page that needs to display a list of users and a list of roles, then Smart NgRX will load the users and the roles.</p><p class="ngde">It also only loads the data when you need it. Not only does this mean that it will only navigate the data when you are on the page that request the data, but if you've already loaded the data, it won't load it again, unless the data has been marked dirty (coming soon).</p><p class="ngde">But what, exactly, does it mean for an application to "need" the data? It means that something in your code has requested it. This could be because you've requested it directly, or because you've used a selector that has requested it. This is a very powerful concept that allows us to only load the data that is needed. But what this means is that you'll want to be careful about how you access your data.</p><p class="ngde">For example, as our example app demonstrates, if you are using Virtual Scrolling, you'll want to be sure you only access the data that is being displayed. Don't request every row in a list. Instead, request only the rows that are being displayed. This will ensure that your application is as performant as possible.</p><h2 id="dirty-data" class="ngde">Dirty Data<a title="Link to heading" class="ng-doc-header-link ngde" href="/using-smart-ng-rx/intro#dirty-data"><ng-doc-icon icon="link-2" size="16" class="ngde"></ng-doc-icon></a></h2><p class="ngde">There are multiple ways data might become "dirty". The first is by setting an expiration time on the data. This can be done when we register the entity using the <code class="ngde ng-doc-code-with-link" class="ngde"><a href="/api/smart-ngrx/functions/provideSmartFeatureEntities" class="ng-doc-code-anchor ngde" data-link-type="Function" class="ngde">provideSmartFeatureEntities</a></code> method. By setting the time, Smart NgRX will mark rows dirty when the expiration time is hit. The second is that you can mark the data dirty for any number of reasons. The main one might be because a websocket message was received that indicates the data needs to be refreshed. Whenever data is marked dirty, Smart NgRX will automatically reload the data if or when it is needed. That is, if your code is accessing the row, Smart NgRX will use the same mechanisms it originally used to get a fresh copy of the data.</p><h2 id="what-this-means-for-your-code" class="ngde">What this Means for Your Code<a title="Link to heading" class="ng-doc-header-link ngde" href="/using-smart-ng-rx/intro#what-this-means-for-your-code"><ng-doc-icon icon="link-2" size="16" class="ngde"></ng-doc-icon></a></h2><p class="ngde">Because of the way Smart NgRX works, you'll want to be sure to take advantage of Virtual Scrolling and, once Angular 17 is released, <code class="ngde">@Defer()</code>, to ensure that you are only loading the data that you need. This will ensure that your application is as performant as possible. By doing this, you'll be able to get the benefits of Virtual Data as well as Virtual Scrolling.</p><p class="ngde">It may also mean you'll want to re-think how you've structured your data. For example, imagine the situation where you've a set of fields in your row that you only display some of the time. In this case, you might want to consider moving those fields to a separate entity. This will ensure that you are only loading the data that you need.</p><p class="ngde">But lets take this a bit further. Let's say each of those fields is conditionally displayed. In this case, it might make more sense to make the entity a list of fields that each relate back to the main entity. By doing this, you can retrieve and display only the rows that are being displayed.</p><h2 id="performance" class="ngde">Performance<a title="Link to heading" class="ng-doc-header-link ngde" href="/using-smart-ng-rx/intro#performance"><ng-doc-icon icon="link-2" size="16" class="ngde"></ng-doc-icon></a></h2><p class="ngde">You might be wondering how all this will impact performance. It is top of mind for us as well. We will be adding in various ways of retrieving data so that you can choose the best way to structure your data based on individual scenarios. There may be times when you want to load all the data up front. For example, lookup tables. There are other cases when you'll have a set of related entities that you want to load together rather than waiting for them to display. We'll be adding in ways to do this as well. All while hiding the details from you and your team.</p>`,N=(()=>{let e=class e extends n{constructor(){super(),this.routePrefix="",this.pageType="guide",this.pageContent=x,this.page=t,this.demoAssets=y}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=r({type:e,selectors:[["ng-doc-page-using-smart-ng-rx-intro"]],standalone:!0,features:[h([{provide:n,useExisting:e},p,t.providers??[]]),d,c],decls:1,vars:0,template:function(o,S){o&1&&l(0,"ng-doc-page")},dependencies:[g],encapsulation:2,changeDetection:0});let a=e;return a})(),R=[s(i({},(0,m.isRoute)(t.route)?t.route:{}),{path:"",component:N,title:"Intro"})],C=R;export{N as DynamicComponent,C as default};
