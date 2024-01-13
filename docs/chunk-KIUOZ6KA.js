import{a as g}from"./chunk-BXNM6JGC.js";import"./chunk-PLMEWMPA.js";import{a as i}from"./chunk-BRFVUSOP.js";import{Ba as r,Ca as h,Gb as k,K as d,da as l,na as c}from"./chunk-OM4NYFKY.js";import{a as s,b as a,f}from"./chunk-RS6LHQUM.js";var m=f(k());var b={title:"Home",mdFile:"./index.md",order:1},t=b;var p=[];var y={},u=y;var v=`<h1 id="smartngrx" class="ngde">SmartNgRX<a title="Link to heading" class="ng-doc-header-link ngde" href="/home#smartngrx"><ng-doc-icon icon="link-2" size="16" class="ngde"></ng-doc-icon></a></h1><h2 id="introduction" class="ngde">Introduction<a title="Link to heading" class="ng-doc-header-link ngde" href="/home#introduction"><ng-doc-icon icon="link-2" size="16" class="ngde"></ng-doc-icon></a></h2><p class="ngde">This project merges two concepts I've been playing with for a while.</p><p class="ngde">At one of my previous jobs, I needed to work with data that could be essentially an infinite number of rows. This made retrieving the entire data set practically impossible and required that we not only use virtual scrolling to render the data but also use a concept of virtual data where we only retrieved the data that was needed to render the current view.</p><p class="ngde">Fast forward to a similar situation and a lot more experience. One of the issues with the previous implementation was that I had to retrieve the data every time it scrolled into view. As you can imagine, even with the fastest retrieval times, this didn't paint nearly as fast as anyone would have liked. This time, we had more control over the data. It was still a large data set. But it was not infinite.</p><p class="ngde">As we were in a meeting one day with everyone discussing various ways would could make the application perform better, I said, "Let me tell you what I've been thinking about." I proceeded to lay out a concept based on my earlier work where we'd only load the rows as we needed them AND remove them once we had some assurance they were no longer being used.</p><p class="ngde">I was then told to go work on a POC for that concept and got far enough to know I was on to something but not far enough to solve all the issues we were going to run into.</p><p class="ngde">Meanwhile, new management came in that talked the original manager out of working on this at this time and I was told to work on other things. I'm not complaining. While I wish I could have continued working on this, this was the right decision for the company.</p><p class="ngde">Now, I couldn't let it go. I kept thinking about it. And another thought came to mind. If we always use essentially the same Actions, Effects and Reducers for each entity, could we just create factory methods that would generate them for us? And if we could do that, could we hide the bulk of what is NgRX from the developer?</p><p class="ngde">At this point, I merged the two concepts. Using the main library of this project, you can register your NgRX entities in a providers section and then use "SmartSelectors" to join the data back together again. Only the join doesn't just join the data, it retrieves the data as it is accessed.</p><p class="ngde">We are still at the very beginning of this project. We still need to provide a way of removing rows that are no longer being accessed. We still need to provide a way to perform CRUD operations on the rows. But the groundwork has been laid. At this point, the two things you need to know about NgRX are 1) You'll need to use selectors or the Smart Selectors from this library to "Join" or "Nest" rows and 2) you'll need to create Effect Services to deal with retrieving the data from the server (and ultimately perform the CRUD operations).</p><p class="ngde">Have a look at our "Ultimate Goals" to see where we are headed.</p><h2 id="ultimate-goals" class="ngde">Ultimate Goals<a title="Link to heading" class="ng-doc-header-link ngde" href="/home#ultimate-goals"><ng-doc-icon icon="link-2" size="16" class="ngde"></ng-doc-icon></a></h2><ul class="ngde"><li class="ngde"><input checked disabled type="checkbox" class="ngde"> Hide the NgRX boiler-plate code from the developer</li><li class="ngde"><input checked disabled type="checkbox" class="ngde"> Dynamically generate Actions, Reducers and Effects.</li><li class="ngde"><input disabled type="checkbox" class="ngde"> Support server-side searching for rows</li><li class="ngde"><input disabled type="checkbox" class="ngde"> Complete CRUD support.<ul class="ngde"><li class="ngde"><input disabled type="checkbox" class="ngde"> Create</li><li class="ngde"><input checked disabled type="checkbox" class="ngde"> Read</li><li class="ngde"><input checked disabled type="checkbox" class="ngde"> Update</li><li class="ngde"><input disabled type="checkbox" class="ngde"> Delete</li></ul></li><li class="ngde"><input disabled type="checkbox" class="ngde"> Provide optimistic UI natively</li><li class="ngde"><input checked disabled type="checkbox" class="ngde"> Optionally remove unused entity rows from the store.</li><li class="ngde"><input checked disabled type="checkbox" class="ngde"> Optionally allow data to refresh using polling.</li><li class="ngde"><input disabled type="checkbox" class="ngde"> Allow this to work with other NgRX implementations or use only this implementation as desired or needed.</li><li class="ngde"><input disabled type="checkbox" class="ngde"> Provide multiple ways to retrieve child rows.<ul class="ngde"><li class="ngde"><input checked disabled type="checkbox" class="ngde"> For small sets of nested data, provide the IDs of the child elements in an array of the parent.</li><li class="ngde"><input disabled type="checkbox" class="ngde"> For larger sets of nested data, provide another mechanism that will allow for "paging" the rows.</li></ul></li><li class="ngde"><input checked disabled type="checkbox" class="ngde"> Allow this to work with code that has to account for write lag on the server (you can control this by using the Effects Service you have complete control over).</li><li class="ngde"><input disabled type="checkbox" class="ngde"> Allow the server to notify this code via websockets (or any future server side notification) that a row needs to be updated and have the code automatically refresh if the row is currently rendered someplace.</li><li class="ngde"><input disabled type="checkbox" class="ngde"> Provide hooks that allow the client to tell the server what rows/entities it is interested in hearing about changes for.</li><li class="ngde"><input disabled type="checkbox" class="ngde"> Use Signals, as an alternative, under the hood instead of Observables to allow for better performance and less memory usage.</li></ul><h2 id="documentation" class="ngde">Documentation<a title="Link to heading" class="ng-doc-header-link ngde" href="/home#documentation"><ng-doc-icon icon="link-2" size="16" class="ngde"></ng-doc-icon></a></h2><p class="ngde">All the documentation can be found at <a href="https://davembush.github.io/SmartNgRX/" class="ngde">SmartNgRX Documentation</a></p><h2 id="how-to-run-the-main-projects" class="ngde">How to run the main projects<a title="Link to heading" class="ng-doc-header-link ngde" href="/home#how-to-run-the-main-projects"><ng-doc-icon icon="link-2" size="16" class="ngde"></ng-doc-icon></a></h2><h3 id="prerequisites" class="ngde">Prerequisites<a title="Link to heading" class="ng-doc-header-link ngde" href="/home#prerequisites"><ng-doc-icon icon="link-2" size="16" class="ngde"></ng-doc-icon></a></h3><ul class="ngde"><li class="ngde"><a href="https://nodejs.org/en/" class="ngde">NodeJS</a> - ^18.10.0 || ^20.0.0</li><li class="ngde"><a href="https://pnpm.io/" class="ngde">pnpm</a> - ^8</li></ul><h3 id="steps" class="ngde">Steps<a title="Link to heading" class="ng-doc-header-link ngde" href="/home#steps"><ng-doc-icon icon="link-2" size="16" class="ngde"></ng-doc-icon></a></h3><ul class="ngde"><li class="ngde">Checkout the project</li><li class="ngde">Run <code class="ngde">pnpm i</code></li><li class="ngde">start the server with <code class="ngde">pnpm run start:server</code></li><li class="ngde">start the client with <code class="ngde">pnpm run start</code></li><li class="ngde">open a browser to <code class="ngde">http://localhost:4200</code></li></ul><h2 id="how-to-run-the-documentation-project" class="ngde">How to run the documentation project<a title="Link to heading" class="ng-doc-header-link ngde" href="/home#how-to-run-the-documentation-project"><ng-doc-icon icon="link-2" size="16" class="ngde"></ng-doc-icon></a></h2><ul class="ngde"><li class="ngde">Checkout the project (if you haven't already)</li><li class="ngde">Run <code class="ngde">pnpm i</code> (if you haven't already)</li><li class="ngde">start the documentation server with <code class="ngde">pnpm run start:documentation</code></li><li class="ngde">open a browser to <code class="ngde">http://localhost:4201</code></li></ul><h2 id="participating" class="ngde">Participating<a title="Link to heading" class="ng-doc-header-link ngde" href="/home#participating"><ng-doc-icon icon="link-2" size="16" class="ngde"></ng-doc-icon></a></h2><h3 id="code-of-conduct" class="ngde"><a href="https://github.com/DaveMBush/SmartNgRX/blob/main/CODE_OF_CONDUCT.md" class="ngde">Code of Conduct</a><a title="Link to heading" class="ng-doc-header-link ngde" href="/home#code-of-conduct"><ng-doc-icon icon="link-2" size="16" class="ngde"></ng-doc-icon></a></h3><h3 id="contributing" class="ngde"><a href="https://github.com/DaveMBush/SmartNgRX/blob/main/CONTRIBUTING.md" class="ngde">Contributing</a><a title="Link to heading" class="ng-doc-header-link ngde" href="/home#contributing"><ng-doc-icon icon="link-2" size="16" class="ngde"></ng-doc-icon></a></h3>`,x=(()=>{let e=class e extends i{constructor(){super(),this.routePrefix="",this.pageType="guide",this.pageContent=v,this.page=t,this.demoAssets=u}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=d({type:e,selectors:[["ng-doc-page-home"]],standalone:!0,features:[r([{provide:i,useExisting:e},p,t.providers??[]]),l,h],decls:1,vars:0,template:function(o,N){o&1&&c(0,"ng-doc-page")},dependencies:[g],encapsulation:2,changeDetection:0});let n=e;return n})(),R=[a(s({},(0,m.isRoute)(t.route)?t.route:{}),{path:"",component:x,title:"Home"})],U=R;export{x as DynamicComponent,U as default};
