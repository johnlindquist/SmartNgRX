import{a as g}from"./chunk-3VZM5QD4.js";import{a as h}from"./chunk-YWRD4FHU.js";import"./chunk-WDR7ZGDV.js";import{a as n}from"./chunk-RVP6FOET.js";import{L as r,Qa as l,Ra as p,Rb as v,ia as i,va as c}from"./chunk-ECT43PI4.js";import{a as s,b as d,g as y}from"./chunk-JPKLQMV2.js";var w=y(v());var b={title:"Adding Rows",mdFile:"./index.md",order:9,category:g},t=b;var m=[];var R={},u=R;var k=`<h1 id="adding-rows" class="ngde">Adding Rows<a title="Link to heading" class="ng-doc-header-link ngde" href="/demo-walkthrough/adding-rows#adding-rows"><ng-doc-icon icon="link-2" size="16" class="ngde"></ng-doc-icon></a></h1><p class="ngde">You may have noticed while we were looking at the code that allows for editing, that there were some variables that mentioned <code class="ngde">add</code> so let's take a look at that next.</p><p class="ngde">In the demo app, we only allow you to add children to Department rows. We could add rows to any SmartNgRX row, but we've kept the demo simple.</p><p class="ngde">We kick off the add process in our <a href="https://github.com/DaveMBush/SmartNgRX/blob/main/apps/demo/src/app/shared/components/tree/tree.component.html#L108-L119" class="ngde">template file</a> by calling <code class="ngde">addChild()</code> specifying the current node and the type of child we want to add. Your code may only need to pass the current node. This will always be the parent of the new row.</p><p class="ngde">Since this is a new row, we set the <code class="ngde">editingContent</code> field to a default string that the end user can edit. More work is done in our <a href="https://github.com/DaveMBush/SmartNgRX/blob/main/apps/demo/src/app/shared/components/tree/tree-component.service.ts#L89-L97" class="ngde">TreeComponentService.addChild()</a> method that determines if the node needs to be expanded and adds the row to our state (but does not send it to the server). The remainder of the code in the <code class="ngde">tree.component.ts</code> file is to keep track of what we are doing in the view so that repaints don't disrupt the user's experience.</p><p class="ngde">You'll notice that we cast the children to an ArrayProxy. All the childe arrays in SmartNgRX are of type <code class="ngde ng-doc-code-with-link" class="ngde"><a href="/api/smart-ngrx/classes/ArrayProxy" class="ng-doc-code-anchor ngde" data-link-type="Class" class="ngde">ArrayProxy</a></code>. You will probably need to cast the children arrays to type ArrayProxy in your code as well to gain access to its methods.</p><p class="ngde">Similar to the edit process, <code class="ngde">ESC</code> calls <code class="ngde">cancelEdit()</code> and <code class="ngde">ENTER</code> calls <code class="ngde">saveNode()</code>. <code class="ngde">cancelEdit()</code> just sets things back to the way they were <a href="https://github.com/DaveMBush/SmartNgRX/blob/main/apps/demo/src/app/shared/components/tree/tree-component.service.ts#L105" class="ngde">including removing the new node from the store</a>.</p><p class="ngde"><a href="https://github.com/DaveMBush/SmartNgRX/blob/main/apps/demo/src/app/shared/components/tree/tree.component.ts#L99-L105" class="ngde">saveNode() is also similar</a>. But now you know why we have fields mentioning adding. Under the hood, SmartNgRX knows this is a row that needs to be added and ends up calling your Effects Service method to make that happen.</p>`,N=(()=>{let e=class e extends n{constructor(){super(),this.routePrefix="",this.pageType="guide",this.pageContent=k,this.page=t,this.demoAssets=u}};e.\u0275fac=function(a){return new(a||e)},e.\u0275cmp=r({type:e,selectors:[["ng-doc-page-demo-walkthrough-adding-rows"]],standalone:!0,features:[l([{provide:n,useExisting:e},m,t.providers??[]]),i,p],decls:1,vars:0,template:function(a,D){a&1&&c(0,"ng-doc-page")},dependencies:[h],encapsulation:2,changeDetection:0});let o=e;return o})(),x=[d(s({},(0,w.isRoute)(t.route)?t.route:{}),{path:"",component:N,title:"Adding Rows"})],Y=x;export{N as DynamicComponent,Y as default};
