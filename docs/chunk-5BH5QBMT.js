import{a as p}from"./chunk-3VZM5QD4.js";import{a as h}from"./chunk-YWRD4FHU.js";import"./chunk-WDR7ZGDV.js";import{a as n}from"./chunk-RVP6FOET.js";import{L as c,Qa as g,Ra as l,Rb as w,ia as d,va as r}from"./chunk-ECT43PI4.js";import{a,b as i,g as k}from"./chunk-JPKLQMV2.js";var f=k(w());var S={title:"Processing WebSocket Messages",mdFile:"./index.md",order:11,category:p},s=S;var m=[];var v={},u=v;var D=`<h1 id="processing-websocket-messages" class="ngde">Processing WebSocket Messages<a title="Link to heading" class="ng-doc-header-link ngde" href="/demo-walkthrough/processing-websocket-messages#processing-websocket-messages"><ng-doc-icon icon="link-2" size="16" class="ngde"></ng-doc-icon></a></h1><p class="ngde">The demo makes use of socket.io to send messages from the server and process them on the client. You may choose whatever framework you want, or none at all.</p><h2 id="server-side" class="ngde">Server Side<a title="Link to heading" class="ng-doc-header-link ngde" href="/demo-walkthrough/processing-websocket-messages#server-side"><ng-doc-icon icon="link-2" size="16" class="ngde"></ng-doc-icon></a></h2><p class="ngde">On the server side, we send messages to the client when a row changes. Some examples you can look at include:</p><ul class="ngde"><li class="ngde"><a href="https://github.com/DaveMBush/SmartNgRX/blob/main/apps/server/src/app/departments/department.controller.ts#L36-L40" class="ngde">Sending a message when a row has been updated</a>.</li><li class="ngde"><a href="https://github.com/DaveMBush/SmartNgRX/blob/main/apps/server/src/app/departments/department.controller.ts#L86-L90" class="ngde">Sending a message when a row has been added</a></li><li class="ngde"><a href="https://github.com/DaveMBush/SmartNgRX/blob/main/apps/server/src/app/departments/department.controller.ts#L100-L104" class="ngde">Sending a message when a row has been deleted</a></li></ul><h3 id="some-things-to-note" class="ngde">Some things to note<a title="Link to heading" class="ng-doc-header-link ngde" href="/demo-walkthrough/processing-websocket-messages#some-things-to-note"><ng-doc-icon icon="link-2" size="16" class="ngde"></ng-doc-icon></a></h3><p class="ngde">When we send a notification for an add, we send an <code class="ngde">update</code> notification for the parent row. This is because we want the parent's child field array to be updated with the current lists of child IDs.</p><p class="ngde">When we send a notification for delete, we send a <code class="ngde">delete</code> notification because SmartNgRX is the best place to determine all the locations that need to be updated.</p><h2 id="client-side" class="ngde">Client Side<a title="Link to heading" class="ng-doc-header-link ngde" href="/demo-walkthrough/processing-websocket-messages#client-side"><ng-doc-icon icon="link-2" size="16" class="ngde"></ng-doc-icon></a></h2><p class="ngde">On the client side, we listen for the messages in one location and pass the information down to SmartNgRX to process.</p><p class="ngde">The main listener code is in <a href="https://github.com/DaveMBush/SmartNgRX/blob/main/apps/demo/src/app/shared/socket.service.ts" class="ngde">socket.service.ts</a></p><p class="ngde">The one thing to note here is that because the server is sending notifications about the tables it knows about, we need to translate the <code class="ngde">docs</code>, <code class="ngde">lists</code>, <code class="ngde">folders</code>, and <code class="ngde">sprintFolders</code> tables to <code class="ngde">departmentChildren</code> so the client can process them correctly. But the main processing of the notification is all done by SmartNgRX in <a href="https://github.com/DaveMBush/SmartNgRX/blob/main/apps/demo/src/app/shared/socket.service.ts#L39" class="ngde">handleSocketNotification()</a></p>`,N=(()=>{let e=class e extends n{constructor(){super(),this.routePrefix="",this.pageType="guide",this.pageContent=D,this.page=s,this.demoAssets=u}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=c({type:e,selectors:[["ng-doc-page-demo-walkthrough-processing-websocket-messages"]],standalone:!0,features:[g([{provide:n,useExisting:e},m,s.providers??[]]),d,l],decls:1,vars:0,template:function(o,P){o&1&&r(0,"ng-doc-page")},dependencies:[h],encapsulation:2,changeDetection:0});let t=e;return t})(),R=[i(a({},(0,f.isRoute)(s.route)?s.route:{}),{path:"",component:N,title:"Processing WebSocket Messages"})],B=R;export{N as DynamicComponent,B as default};
