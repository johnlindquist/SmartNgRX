import{$ as D,Ba as R,Ca as pe,Cc as Ee,Da as T,Dc as Re,Ea as _,Fc as Te,Ga as A,Gc as Ie,H as J,Ha as Q,Hb as De,Ia as U,J as c,Ka as I,Kb as _e,L as u,Lb as N,Ma as S,N as O,O as P,P as X,Ra as v,Rb as Ze,Sa as he,T as ee,Ta as me,Tc as F,U as f,Ub as ke,Uc as Se,V as M,Va as ue,Vb as Oe,W as te,Wa as fe,_ as g,ab as ve,bb as Ce,ca as C,cd as Ne,da as ne,db as be,e as $,ea as oe,eb as ye,f as Z,fa as re,g as Ve,ga as ie,ha as ce,ia as ae,j as y,ja as w,ka as E,l as K,la as p,m as L,ma as se,nc as Pe,o as x,p as z,qa as de,qc as Me,ra as le,rb as xe,sa as ge,sb as qe,sc as we,t as W,ta as d,tb as Ge,ua as l,ub as $e,va as h,z as Y}from"./chunk-ECT43PI4.js";import{g as k,i as G}from"./chunk-JPKLQMV2.js";var j=class{};var Fe=(()=>{let e=class e{set ngDocChecked(o){this.updateProperty("checked",o||!1),this.updateProperty("indeterminate",o===null)}constructor(o,n){this.element=o,this.renderer=n,this.ngDocCheckedChange=new M,this.updateProperty("checked",!1)}onChange({checked:o}){this.updateProperty("indeterminate",!1),this.ngDocCheckedChange.emit(o)}updateProperty(o,n){this.renderer.setProperty(this.element.nativeElement,o,n)}};e.\u0275fac=function(n){return new(n||e)(D(f),D(C))},e.\u0275dir=O({type:e,selectors:[["input","ngDocChecked",""],["input","ngDocCheckedChange",""]],hostBindings:function(n,r){n&1&&R("change",function(s){return r.onChange(s.target)})},inputs:{ngDocChecked:"ngDocChecked"},outputs:{ngDocCheckedChange:"ngDocCheckedChange"},standalone:!0});let t=e;return t})();var Ke=[[["ng-doc-icon"]],"*"],We=["ng-doc-icon","*"];function Ye(t,e){t&1&&h(0,"ng-doc-icon",8)}function Je(t,e){t&1&&h(0,"ng-doc-icon",9)}var _t=(()=>{let e=class e extends Me{constructor(){super({host:we({optional:!0}),compareHost:c(Pe,{optional:!0})}),this.color="primary"}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=u({type:e,selectors:[["ng-doc-checkbox"]],hostVars:1,hostBindings:function(n,r){n&2&&E("data-lu-color",r.color)},inputs:{color:"color"},standalone:!0,features:[ae,v],ngContentSelectors:We,decls:10,vars:5,consts:[[1,"ng-doc-checkbox-wrapper"],[1,"ng-doc-checkbox"],["type","checkbox",3,"ngDocCheckedChange","blur","disabled","ngDocChecked","ngDocFocusable"],["icon","minus",4,"ngIf"],["icon","check",4,"ngIf"],[1,"ng-doc-checkbox-content"],[1,"ng-doc-checkbox-icons"],[1,"ng-doc-checkbox-text"],["icon","minus"],["icon","check"]],template:function(n,r){n&1&&(T(Ke),d(0,"label",0)(1,"div",1)(2,"input",2),R("ngDocCheckedChange",function(){return r.toggle(),r.touch()})("blur",function(){return r.touch()}),l(),w(3,Ye,1,0,"ng-doc-icon",3)(4,Je,1,0,"ng-doc-icon",4),l(),d(5,"div",5)(6,"span",6),_(7),l(),d(8,"div",7),_(9,1),l()()()),n&2&&(g(2),p("disabled",r.disabled)("ngDocChecked",r.checked())("ngDocFocusable",!1),g(),p("ngIf",r.isIntermediate),g(),p("ngIf",r.checked()))},dependencies:[Fe,Re,ye,F],styles:["[_nghost-%COMP%]{display:inline-flex;align-items:flex-start;flex-direction:column;font-family:var(--ng-doc-font-family);font-variant:no-contextual;color:var(--ng-doc-text);line-height:var(--ng-doc-line-height);font-size:var(--ng-doc-font-size);font-weight:var(--ng-doc-font-weight)}[_nghost-%COMP%]:not(:last-of-type){margin-bottom:var(--ng-doc-list-element-vertical-space);margin-right:var(--ng-doc-list-element-horizontal-space)}[_nghost-%COMP%]:hover:not([data-checked=true])   .ng-doc-checkbox[_ngcontent-%COMP%]{border:var(--ng-doc-checkbox-border-hover)}[_nghost-%COMP%]:not([data-disabled=true])   .ng-doc-checkbox-wrapper[_ngcontent-%COMP%]{cursor:pointer}[data-checked=true][_nghost-%COMP%]   .ng-doc-checkbox[_ngcontent-%COMP%]{background-color:var(--ng-doc-checkbox-color);--ng-doc-checkbox-border: var(--ng-doc-checkbox-color);--ng-doc-checkbox-border-hover: var(--ng-doc-checkbox-color);--ng-doc-icon-color: var(--ng-doc-checkbox-color-text)}input[_ngcontent-%COMP%]{position:absolute;bottom:0;left:50%;border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;width:1px;outline:0}.ng-doc-checkbox-wrapper[_ngcontent-%COMP%]{display:flex}.ng-doc-checkbox[_ngcontent-%COMP%]{position:relative;display:flex;align-items:center;justify-content:center;width:calc(var(--ng-doc-base-gutter) * 2 + var(--ng-doc-base-gutter) / 2);height:calc(var(--ng-doc-base-gutter) * 2 + var(--ng-doc-base-gutter) / 2);border:var(--ng-doc-checkbox-border);flex:0 0 calc(var(--ng-doc-base-gutter) * 2 + var(--ng-doc-base-gutter) / 2);background-color:var(--ng-doc-base-0);transition:background-color var(--ng-doc-transition);box-sizing:border-box;border-radius:calc(var(--ng-doc-base-gutter) / 2)}.ng-doc-checkbox-content[_ngcontent-%COMP%]{display:flex;align-items:flex-start}.ng-doc-checkbox-icons[_ngcontent-%COMP%]{display:flex;margin-left:var(--ng-doc-base-gutter);margin-top:calc(var(--ng-doc-base-gutter) / 2)}.ng-doc-checkbox-icons[_ngcontent-%COMP%]:empty{display:none}.ng-doc-checkbox-text[_ngcontent-%COMP%]{margin-left:var(--ng-doc-base-gutter);line-height:calc(var(--ng-doc-base-gutter) * 2 + var(--ng-doc-base-gutter) / 2)}.ng-doc-checkbox-text[_ngcontent-%COMP%]:empty{display:none}"],changeDetection:0});let t=e;return t})();var Xe=t=>["/",t];function et(t,e){if(t&1&&(d(0,"span",3)(1,"span",4),h(2,"ng-doc-icon",5),I(3),l()()),t&2){let a=e.$implicit;g(3),S(" ",a," ")}}var St=(()=>{let e=class e{constructor(){this.breadcrumbs=[],this.home=c(j).routePrefix||""}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=u({type:e,selectors:[["ng-doc-breadcrumb"]],inputs:{breadcrumbs:"breadcrumbs"},standalone:!0,features:[v],decls:3,vars:4,consts:[["ng-doc-button-icon","",1,"ng-doc-breadcrumb",3,"routerLink"],["icon","home"],["class","ng-doc-breadcrumb",4,"ngFor","ngForOf"],[1,"ng-doc-breadcrumb"],["ng-doc-text",""],["icon","chevron-right"]],template:function(n,r){n&1&&(d(0,"a",0),h(1,"ng-doc-icon",1),l(),w(2,et,4,1,"span",2)),n&2&&(p("routerLink",me(2,Xe,r.home)),g(2),p("ngForOf",r.breadcrumbs))},dependencies:[Se,N,F,be,Ne],styles:["[_nghost-%COMP%]{display:flex;align-items:center;flex-wrap:wrap;margin-bottom:calc(var(--ng-doc-base-gutter) * 2);opacity:.9}[_nghost-%COMP%]   .ng-doc-breadcrumb[_ngcontent-%COMP%]:not(:first-child){margin-right:var(--ng-doc-base-gutter)}[_nghost-%COMP%]   .ng-doc-breadcrumb[_ngcontent-%COMP%]:not(:first-child):not(:last-child){opacity:.6}"],changeDetection:0});let t=e;return t})();var H=k(Ze(),1),zt=(()=>{let e=class e{constructor(){this.html="",this.afterRender=new M,this.processors=c(ke,{optional:!0})??[],this.customProcessors=c(Oe,{optional:!0})??[],this.elementRef=c(f),this.viewContainerRef=c(ie),this.injector=c(ee),this.renderer=c(C)}ngOnChanges({html:o}){o&&(this.renderer.setProperty(this.elementRef.nativeElement,"innerHTML",this.html),this.afterRender.emit())}ngOnInit(){(0,H.asArray)(this.processors,this.customProcessors).forEach(this.process.bind(this))}process(o){Array.from(this.elementRef.nativeElement.querySelectorAll(o.selector)).forEach(n=>{if(n.parentNode){let r=(o.nodeToReplace&&o.nodeToReplace(n,this.injector))??n,i=o.extractOptions(n,this.elementRef.nativeElement),s=this.viewContainerRef.createComponent(o.component,{projectableNodes:i.content,injector:this.injector});i.inputs&&(0,H.objectKeys)(i.inputs).forEach(m=>i.inputs&&s.setInput(m,i.inputs[m])),r.parentNode?.replaceChild(s.location.nativeElement,r),s.changeDetectorRef.markForCheck()}})}};e.\u0275fac=function(n){return new(n||e)},e.\u0275dir=O({type:e,selectors:[["","ngDocPageProcessor",""]],hostAttrs:["ngSkipHydration","true"],inputs:{html:[0,"ngDocPageProcessor","html"]},outputs:{afterRender:"afterRender"},standalone:!0,features:[X]});let t=e;return t})();Ve();var B=k(qe(),1);var je=(()=>{let e=class e{transform(o){try{return decodeURIComponent(o)}catch{return o}}};e.\u0275fac=function(n){return new(n||e)},e.\u0275pipe=P({name:"decodeUriComponent",type:e,pure:!0,standalone:!0});let t=e;return t})();var tt=["ng-doc-toc-element",""],nt=["*"],ot=()=>[],rt=["selection"];function it(t,e){if(t&1&&(d(0,"li",5),I(1),l()),t&2){let a=e.$implicit,o=pe();p("path",a.path)("hash",a.hash)("level",a.level)("selected",a===o.activeItem()),g(),S(" ",a.title," ")}}var He=(()=>{let e=class e{constructor(){this.path="",this.hash="",this.selected=!1,this.level=1,this.elementRef=c(f)}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=u({type:e,selectors:[["li","ng-doc-toc-element",""]],hostVars:2,hostBindings:function(n,r){n&2&&E("data-ng-doc-selected",r.selected)("data-ng-doc-level",r.level)},inputs:{path:"path",hash:"hash",selected:"selected",level:"level"},standalone:!0,features:[v],attrs:tt,ngContentSelectors:nt,decls:3,vars:7,consts:[[3,"routerLink","fragment"]],template:function(n,r){n&1&&(T(),d(0,"a",0),ue(1,"decodeUriComponent"),_(2),l()),n&2&&(se("padding-left","calc(var(--ng-doc-toc-indent) * "+r.level+")"),p("routerLink",he(6,ot))("fragment",fe(1,4,r.hash)))},dependencies:[N,je],styles:['[_nghost-%COMP%]{display:flex;margin:0;color:var(--ng-doc-text)}[data-ng-doc-level="1"][_nghost-%COMP%]   a[_ngcontent-%COMP%]{padding-left:var(--ng-doc-base-gutter)}[data-ng-doc-selected=true][_nghost-%COMP%]{color:var(--ng-doc-primary)}[_nghost-%COMP%]:hover{cursor:pointer;color:var(--ng-doc-primary)}[_nghost-%COMP%]   a[_ngcontent-%COMP%]{font-family:var(--ng-doc-font-family);font-variant:no-contextual;color:var(--ng-doc-text);line-height:var(--ng-doc-line-height);font-size:var(--ng-doc-font-size);font-weight:var(--ng-doc-font-weight);padding:calc(var(--ng-doc-base-gutter) / 2);color:inherit;width:100%;text-decoration:none;word-break:break-word;--ng-doc-font-size: 14px}'],changeDetection:0});let t=e;return t})(),an=(()=>{var e;let t=(e=class{constructor(){this.tableOfContent=[],this.elements=new te,this.activeItem=ce(void 0),this.document=c(Ce),this.ngZone=c(ne),this.changeDetectorRef=c(ve),this.renderer=c(C),this.router=c(_e),re(()=>{let o=K(this.document,"scroll").pipe(x(()=>!!this.tableOfContent.length),y(i=>i.target.scrollingElement),Y(this.document.scrollingElement),y(i=>{let s=i.scrollTop*100/(i.scrollHeight-i.offsetHeight),m=i.scrollTop+i.offsetHeight*s/100;return this.tableOfContent.length?this.tableOfContent.reduce((V,q)=>{let Qe=V.element.getBoundingClientRect().top+i.scrollTop,Ue=q.element.getBoundingClientRect().top+i.scrollTop;return Math.abs(Ue-m)<Math.abs(Qe-m)?q:V}):null}),x(B.isPresent)),n=this.router.events.pipe(y(i=>{if(i instanceof De){let s=this.tableOfContent.find(m=>m.path.includes(i.routerEvent.url));if(s)return s}return null}),x(B.isPresent),z(20)),r=this.elements.changes.pipe(y(()=>this.activeItem()),x(B.isPresent));L(L(o,n).pipe(W()),r).pipe(z(0),Ee(this.ngZone),Ie(this)).subscribe(this.select.bind(this))},{phase:oe.Write})}ngOnInit(){this.activeItem.set(this.tableOfContent[0])}select(o){let n=this.tableOfContent.indexOf(o);if(this.selection){let r=this.elements.toArray()[n]?.elementRef.nativeElement;r&&(this.renderer.setStyle(this.selection.nativeElement,"top",`${r.offsetTop}px`),this.renderer.setStyle(this.selection.nativeElement,"height",`${r.offsetHeight}px`),r.scrollIntoView({block:"nearest"}))}this.activeItem.set(o)}},e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=u({type:e,selectors:[["ng-doc-toc"]],viewQuery:function(n,r){if(n&1&&(A(rt,5,f),A(He,5)),n&2){let i;Q(i=U())&&(r.selection=i.first),Q(i=U())&&(r.elements=i)}},inputs:{tableOfContent:"tableOfContent"},standalone:!0,features:[v],decls:7,vars:0,consts:[["selection",""],[1,"ng-doc-toc-wrapper"],[1,"ng-doc-toc-container"],[1,"ng-doc-toc-selection"],[1,"ng-doc-toc"],["ng-doc-toc-element","",3,"path","hash","level","selected"]],template:function(n,r){n&1&&(d(0,"div",1)(1,"div",2),h(2,"div",3,0),d(4,"ul",4),le(5,it,2,5,"li",5,de),l()()()),n&2&&(g(5),ge(r.tableOfContent))},dependencies:[He],styles:["[_nghost-%COMP%]   .ng-doc-toc-wrapper[_ngcontent-%COMP%]{position:relative;width:var(--ng-doc-toc-width)}[_nghost-%COMP%]   .ng-doc-toc-wrapper[_ngcontent-%COMP%]   .ng-doc-toc-container[_ngcontent-%COMP%]{position:fixed;overflow-y:auto;height:calc(100% - var(--ng-doc-navbar-height) - var(--ng-doc-base-gutter) * 5);width:var(--ng-doc-toc-width)}[_nghost-%COMP%]   .ng-doc-toc-wrapper[_ngcontent-%COMP%]   .ng-doc-toc-selection[_ngcontent-%COMP%]{position:absolute;transform:translate(-50%);width:calc(var(--ng-doc-base-gutter) / 2);border-radius:calc(var(--ng-doc-base-gutter) / 2);background-color:var(--ng-doc-primary);left:calc(var(--ng-doc-toc-margin) + 1px);transition:var(--ng-doc-transition)}[_nghost-%COMP%]   .ng-doc-toc-wrapper[_ngcontent-%COMP%]   .ng-doc-toc[_ngcontent-%COMP%]{list-style:none;margin:0 0 0 var(--ng-doc-toc-margin);border-left:1px solid var(--ng-doc-base-3);padding:0 0 0 var(--ng-doc-base-gutter)}@media (max-width: 1200px){[_nghost-%COMP%]   .ng-doc-toc-wrapper[_ngcontent-%COMP%]{display:none}}"],changeDetection:0}),e);return t=$([Te(),Z("design:paramtypes",[])],t),t})();var Le=k(Ge(),1),ze=k($e(),1);function dn(t,e,a){t.clear();let o=t.createComponent(e);a&&Object.entries(a).forEach(([n,r])=>{o.setInput(n,r)})}function ln(t){return G(this,null,function*(){return(yield import("./chunk-A4B45LET.js")).default.html(t.trim(),{wrap:50,markup:{forceIndent:!0}})})}function gn(t){let e=["h1","h2","h3","h4","h5","h6"],a=Array.from(t.querySelectorAll(e.join(", "))).filter(n=>n.id),o=(0,Le.asArray)(new Set(a.map(Be).sort()));return a.reduce((n,r)=>{let i=Be(r),s=r.querySelector("a.ng-doc-header-link");return s&&n.push({title:r.textContent?.trim()??"",element:r,path:s.pathname,hash:s.hash.replace("#",""),level:o.indexOf(i)+1}),n},[])}function Be(t){return Number(t.tagName.toLowerCase().replace(/[a-z]*/g,"")||1)}function pn(t){return(0,ze.objectKeys)(t).includes("type")}var Ae=new Map;function fn(t,e,a){let o=new J(`NG_DOC_TYPE_CONTROL_${t}`,{providedIn:"root",factory:()=>({control:e,options:a})});return Ae.set(t,o),{provide:"nothing",useValue:null}}function vn(t){return Ae.get(t)}var yn=(()=>{let e=class e{constructor(o){this.sanitizer=o}transform(o){return this.sanitizer.bypassSecurityTrustHtml(o)}};e.\u0275fac=function(n){return new(n||e)(D(xe,16))},e.\u0275pipe=P({name:"ngDocSanitizeHtml",type:e,pure:!0,standalone:!0});let t=e;return t})();export{j as a,_t as b,St as c,zt as d,je as e,yn as f,an as g,dn as h,ln as i,gn as j,pn as k,fn as l,vn as m};