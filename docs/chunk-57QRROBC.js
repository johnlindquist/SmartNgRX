import{a as ft,b as yt}from"./chunk-LL7UZ6XH.js";import{a as it,b as st,c as mt}from"./chunk-LWJLGZAB.js";import{$ as o,$a as O,Aa as T,Bb as Y,Db as Z,Ea as g,Eb as tt,Fb as h,Gb as et,Hb as nt,Hc as rt,Ic as A,Kb as S,La as y,M as F,Ma as _,Mb as E,Na as $,Nb as ot,Oa as P,Sa as V,Ta as D,Ua as X,Ub as I,Va as M,Vc as at,Xa as j,Xc as N,Ya as U,Yc as ct,Zc as pt,aa as C,ad as lt,bd as gt,cd as ut,e as v,ed as dt,f,fb as q,fd as _t,g as Dt,gb as K,j as b,jb as z,kb as W,la as s,na as i,p as G,va as c,vb as Mt,wa as a,xa as u,xb as H,yb as J,z as B,zb as Q}from"./chunk-GQV4C3N7.js";import{a as k,b as R,g as Pt}from"./chunk-P2VZOJAX.js";Dt();var w=Pt(Mt(),1);var xt=t=>({$implicit:t}),ht=()=>["left-center","right-center"],St=t=>[t];function Et(t,e){t&1&&u(0,"ng-doc-icon",16)}function It(t,e){t&1&&T(0)}function At(t,e){if(t&1&&(c(0,"ng-doc-option",20),s(1,It,1,0,"ng-container",21),a()),t&2){let n=e.$implicit;g(2);let r=y(4);i("value",n),o(),i("ngTemplateOutlet",r)("ngTemplateOutletContext",M(3,xt,n))}}function bt(t,e){if(t&1&&(c(0,"ng-doc-list"),s(1,At,2,5,"ng-doc-option",19),a()),t&2){let n=g(3);o(),i("ngForOf",n.scopes)}}function Tt(t,e){if(t&1&&_(0),t&2){let n=e.$implicit;P(" ",n," ")}}function Nt(t,e){if(t&1&&(c(0,"label",17)(1,"ng-doc-combobox",18),s(2,bt,2,1,"ng-doc-list",13)(3,Tt,1,1,"ng-template",null,2,O),a()()),t&2){let n=y(4),r=g(2);o(),i("formControl",r.formGroup.controls.scope)("valueContent",n)("readonly",!0)}}function wt(t,e){t&1&&T(0)}function Lt(t,e){if(t&1&&(c(0,"ng-doc-option",20),s(1,wt,1,0,"ng-container",21),a()),t&2){let n=e.$implicit;g(2);let r=y(12);i("value",n),o(),i("ngTemplateOutlet",r)("ngTemplateOutletContext",M(3,xt,n))}}function kt(t,e){if(t&1&&(c(0,"ng-doc-list"),s(1,Lt,2,5,"ng-doc-option",19),a()),t&2){let n=g(2);o(),i("ngForOf",n.types)}}function Rt(t,e){if(t&1&&(c(0,"div",3),u(1,"ng-doc-kind-icon",22),_(2),a()),t&2){let n=e.$implicit;o(),i("kind",n)("ngDocTooltip",n)("positions",X(4,ht)),o(),P(" ",n," ")}}function Gt(t,e){if(t&1&&(c(0,"li",28)(1,"a",29),u(2,"ng-doc-kind-icon",30),_(3),a()()),t&2){let n=e.$implicit;o(),i("routerLink",M(4,St,n.route)),o(),i("kind",n.type)("ngDocTooltip",n.type),o(),P(" ",n.name," ")}}function Bt(t,e){if(t&1&&(c(0,"ul",26),s(1,Gt,4,6,"li",27),a()),t&2){let n=g().$implicit;o(),i("ngForOf",n.items)}}function $t(t,e){if(t&1&&(c(0,"div",23)(1,"h3",24),_(2),a(),s(3,Bt,2,1,"ul",25),a()),t&2){let n=e.$implicit;o(2),$(n.title),o(),i("ngIf",n.items.length)}}function Vt(t,e){if(t&1&&(c(0,"div",5)(1,"form",6)(2,"label",7)(3,"ng-doc-input-wrapper",8),s(4,Et,1,0,"ng-template",null,0,O),u(6,"input",9),a()(),s(7,Nt,5,3,"label",10),c(8,"label",11)(9,"ng-doc-combobox",12),s(10,kt,2,1,"ng-doc-list",13)(11,Rt,3,5,"ng-template",null,1,O),a()()(),c(13,"div",14),s(14,$t,4,2,"div",15),a()()),t&2){let n=e.ngIf,r=y(5),p=y(12),l=g();o(),i("formGroup",l.formGroup),o(2),i("leftContent",r),o(3),i("formControl",l.formGroup.controls.filter),o(),i("ngIf",l.scopes.length),o(2),i("formControl",l.formGroup.controls.type)("valueContent",p)("readonly",!0),o(5),i("ngForOf",n)}}var Ct=(()=>{var e;let t=(e=class{constructor(r,p,l,Ft){this.apiList=r,this.formBuilder=p,this.route=l,this.router=Ft,this.formGroup=this.formBuilder.group({filter:[""],scope:[""],type:[""]}),this.route.queryParamMap.pipe(A(this)).subscribe(m=>this.formGroup.setValue({filter:m.get("filter")||null,scope:m.get("scope")||null,type:m.get("type")||null})),this.formGroup.valueChanges.pipe(A(this)).subscribe(m=>this.router.navigate([],{relativeTo:this.route,queryParams:m,queryParamsHandling:"merge"})),this.api$=this.formGroup.valueChanges.pipe(G(100),B(null),b(()=>this.formGroup.value),b(m=>this.apiList.filter(d=>!m?.scope||d.title===m?.scope).map(d=>R(k({},d),{items:d.items.filter(x=>x.name.toLowerCase().includes(m?.filter?.toLowerCase()??"")&&(!m?.type||x.type===m?.type)).sort((x,L)=>x.type.localeCompare(L.type)||x.name.localeCompare(L.name))})).filter(d=>d.items.length)),A(this))}get scopes(){return(0,w.asArray)(new Set(this.apiList.flatMap(r=>r.title))).sort()}get types(){return(0,w.asArray)(new Set(this.apiList.flatMap(r=>r.items).flatMap(r=>r.type))).sort()}},e.\u0275fac=function(p){return new(p||e)(C(I),C(h),C(S),C(E))},e.\u0275cmp=F({type:e,selectors:[["ng-doc-api-list"]],standalone:!0,features:[D],decls:4,vars:3,consts:[["leftContent",""],["comboboxTypeItem",""],["comboboxScopeItem",""],["ng-doc-text",""],["class","ng-doc-api-list-wrapper",4,"ngIf"],[1,"ng-doc-api-list-wrapper"],[1,"ng-doc-api-filter",3,"formGroup"],["ng-doc-label","Filter",1,"ng-doc-api-filter-item"],[3,"leftContent"],["ngDocInputString","","placeholder","Type the name","ngDocAutofocus","",3,"formControl"],["class","ng-doc-api-filter-item","ng-doc-label","Scope",4,"ngIf"],["ng-doc-label","Type",1,"ng-doc-api-filter-item"],["placeholder","Choose the entity type",3,"formControl","valueContent","readonly"],[4,"ngDocData"],[1,"ng-doc-api-list"],["class","ng-doc-api-scope",4,"ngFor","ngForOf"],["icon","search"],["ng-doc-label","Scope",1,"ng-doc-api-filter-item"],["placeholder","Choose the scope",3,"formControl","valueContent","readonly"],[3,"value",4,"ngFor","ngForOf"],[3,"value"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["ngDocTextLeft","",3,"kind","ngDocTooltip","positions"],[1,"ng-doc-api-scope"],["ng-doc-text","",1,"ng-doc-scope-title"],["class","ng-doc-scope-items",4,"ngIf"],[1,"ng-doc-scope-items"],["class","ng-doc-scope-item",4,"ngFor","ngForOf"],[1,"ng-doc-scope-item"],[1,"ng-doc-scope-item-link",3,"routerLink"],[3,"kind","ngDocTooltip"]],template:function(p,l){p&1&&(c(0,"h1",3),_(1,"API List"),a(),s(2,Vt,15,8,"div",4),j(3,"async")),p&2&&(o(2),i("ngIf",U(3,1,l.api$)))},dependencies:[dt,K,et,Y,H,J,Q,nt,Z,tt,ft,ct,at,pt,yt,mt,st,lt,q,gt,z,it,ut,_t,ot,W],styles:["[_nghost-%COMP%]   h1[_ngcontent-%COMP%]{margin-top:0}[_nghost-%COMP%]   .ng-doc-api-list-wrapper[_ngcontent-%COMP%]   .ng-doc-api-filter[_ngcontent-%COMP%]{display:flex;margin-top:calc(var(--ng-doc-base-gutter) * 3);flex-wrap:wrap;gap:calc(var(--ng-doc-base-gutter) * 2)}[_nghost-%COMP%]   .ng-doc-api-list-wrapper[_ngcontent-%COMP%]   .ng-doc-api-filter[_ngcontent-%COMP%]   .ng-doc-api-filter-item[_ngcontent-%COMP%]{width:200px}[_nghost-%COMP%]   .ng-doc-api-list-wrapper[_ngcontent-%COMP%]   .ng-doc-api-list[_ngcontent-%COMP%]{margin-top:calc(var(--ng-doc-base-gutter) * 2)}[_nghost-%COMP%]   .ng-doc-api-list-wrapper[_ngcontent-%COMP%]   .ng-doc-api-list[_ngcontent-%COMP%]   .ng-doc-api-scope[_ngcontent-%COMP%]{display:flex;flex-direction:column}[_nghost-%COMP%]   .ng-doc-api-list-wrapper[_ngcontent-%COMP%]   .ng-doc-api-list[_ngcontent-%COMP%]   .ng-doc-api-scope[_ngcontent-%COMP%]   .ng-doc-scope-items[_ngcontent-%COMP%]{margin-top:calc(var(--ng-doc-base-gutter) * 3);list-style:none;padding:0}[_nghost-%COMP%]   .ng-doc-api-list-wrapper[_ngcontent-%COMP%]   .ng-doc-api-list[_ngcontent-%COMP%]   .ng-doc-api-scope[_ngcontent-%COMP%]   .ng-doc-scope-items[_ngcontent-%COMP%]   .ng-doc-scope-item[_ngcontent-%COMP%]{margin:var(--ng-doc-base-gutter) 0;float:left;width:33%;overflow:hidden;min-width:330px;text-overflow:ellipsis;white-space:nowrap}[_nghost-%COMP%]   .ng-doc-api-list-wrapper[_ngcontent-%COMP%]   .ng-doc-api-list[_ngcontent-%COMP%]   .ng-doc-api-scope[_ngcontent-%COMP%]   .ng-doc-scope-items[_ngcontent-%COMP%]   .ng-doc-scope-item[_ngcontent-%COMP%]   .ng-doc-scope-item-link[_ngcontent-%COMP%]{display:flex;align-items:center;color:var(--ng-doc-text);text-decoration:none}[_nghost-%COMP%]   .ng-doc-api-list-wrapper[_ngcontent-%COMP%]   .ng-doc-api-list[_ngcontent-%COMP%]   .ng-doc-api-scope[_ngcontent-%COMP%]   .ng-doc-scope-items[_ngcontent-%COMP%]   .ng-doc-scope-item[_ngcontent-%COMP%]   .ng-doc-scope-item-link[_ngcontent-%COMP%]:hover{text-decoration:underline}[_nghost-%COMP%]   .ng-doc-api-list-wrapper[_ngcontent-%COMP%]   .ng-doc-api-list[_ngcontent-%COMP%]   .ng-doc-api-scope[_ngcontent-%COMP%]   .ng-doc-scope-items[_ngcontent-%COMP%]   .ng-doc-scope-item[_ngcontent-%COMP%]   .ng-doc-scope-item-link[_ngcontent-%COMP%]   ng-doc-kind-icon[_ngcontent-%COMP%]{margin-right:var(--ng-doc-base-gutter);text-decoration:none!important}[_nghost-%COMP%]   ng-doc-input-wrapper[_ngcontent-%COMP%]   ng-doc-icon[_ngcontent-%COMP%]{--ng-doc-icon-color: var(--ng-doc-text-muted)}"],changeDetection:0}),e);return v([N,f("design:type",Array),f("design:paramtypes",[])],t.prototype,"scopes",null),v([N,f("design:type",Array),f("design:paramtypes",[])],t.prototype,"types",null),t=v([rt(),f("design:paramtypes",[Array,h,S,E])],t),t})();var vt=[{title:"smart-ngrx",items:[{route:"smart-ngrx/interfaces/ActionGroup",type:"Interface",name:"ActionGroup"},{route:"smart-ngrx/functions/actionFactory",type:"Function",name:"actionFactory"},{route:"smart-ngrx/classes/ActionService",type:"Class",name:"ActionService"},{route:"smart-ngrx/functions/assert",type:"Function",name:"assert"},{route:"smart-ngrx/functions/castTo",type:"Function",name:"castTo"},{route:"smart-ngrx/functions/forNext",type:"Function",name:"forNext"},{route:"smart-ngrx/functions/isNullOrUndefined",type:"Function",name:"isNullOrUndefined"},{route:"smart-ngrx/variables/isProxy",type:"Variable",name:"isProxy"},{route:"smart-ngrx/variables/psi",type:"Variable",name:"psi"},{route:"smart-ngrx/functions/zoneless",type:"Function",name:"zoneless"},{route:"smart-ngrx/functions/bufferAction",type:"Function",name:"bufferAction"},{route:"smart-ngrx/classes/EffectService",type:"Class",name:"EffectService"},{route:"smart-ngrx/functions/effectsFactory",type:"Function",name:"effectsFactory"},{route:"smart-ngrx/interfaces/EffectsFactory",type:"Interface",name:"EffectsFactory"},{route:"smart-ngrx/type-aliases/LoadByIdsEffect",type:"TypeAlias",name:"LoadByIdsEffect"},{route:"smart-ngrx/type-aliases/LoadEffect",type:"TypeAlias",name:"LoadEffect"},{route:"smart-ngrx/functions/addEffect",type:"Function",name:"addEffect"},{route:"smart-ngrx/functions/addSuccessEffect",type:"Function",name:"addSuccessEffect"},{route:"smart-ngrx/functions/loadByIdsEffect",type:"Function",name:"loadByIdsEffect"},{route:"smart-ngrx/functions/loadByIdsPreloadEffect",type:"Function",name:"loadByIdsPreloadEffect"},{route:"smart-ngrx/functions/loadEffect",type:"Function",name:"loadEffect"},{route:"smart-ngrx/functions/markParentDirty",type:"Function",name:"markParentDirty"},{route:"smart-ngrx/functions/updateEffect",type:"Function",name:"updateEffect"},{route:"smart-ngrx/functions/manageMaps",type:"Function",name:"manageMaps"},{route:"smart-ngrx/functions/delayedRegisterEntity",type:"Function",name:"delayedRegisterEntity"},{route:"smart-ngrx/functions/provideSmartFeatureEntities",type:"Function",name:"provideSmartFeatureEntities"},{route:"smart-ngrx/functions/provideSmartNgRX",type:"Function",name:"provideSmartNgRX"},{route:"smart-ngrx/functions/resolveRemoveTime",type:"Function",name:"resolveRemoveTime"},{route:"smart-ngrx/functions/reducerFactory",type:"Function",name:"reducerFactory"},{route:"smart-ngrx/functions/registerEntity",type:"Function",name:"registerEntity"},{route:"smart-ngrx/functions/getEntityRegistry",type:"Function",name:"getEntityRegistry"},{route:"smart-ngrx/functions/unregisterEntity",type:"Function",name:"unregisterEntity"},{route:"smart-ngrx/functions/markAndDeleteEntity",type:"Function",name:"markAndDeleteEntity"},{route:"smart-ngrx/functions/markAndDeleteFeaturesInterval",type:"Function",name:"markAndDeleteFeaturesInterval"},{route:"smart-ngrx/functions/processMarkAndDelete",type:"Function",name:"processMarkAndDelete"},{route:"smart-ngrx/functions/getMarkAndDeleteEntityMap",type:"Function",name:"getMarkAndDeleteEntityMap"},{route:"smart-ngrx/functions/markAndDeleteEntities",type:"Function",name:"markAndDeleteEntities"},{route:"smart-ngrx/functions/registerGlobalMarkAndDeleteInit",type:"Function",name:"registerGlobalMarkAndDeleteInit"},{route:"smart-ngrx/functions/getGlobalMarkAndDeleteInit",type:"Function",name:"getGlobalMarkAndDeleteInit"},{route:"smart-ngrx/variables/markAndDeleteEffect",type:"Variable",name:"markAndDeleteEffect"},{route:"smart-ngrx/functions/registerEntityRows",type:"Function",name:"registerEntityRows"},{route:"smart-ngrx/functions/unregisterEntityRows",type:"Function",name:"unregisterEntityRows"},{route:"smart-ngrx/functions/defaultRows",type:"Function",name:"defaultRows"},{route:"smart-ngrx/functions/actionServiceRegistry",type:"Function",name:"actionServiceRegistry"},{route:"smart-ngrx/functions/entityDefinitionCache",type:"Function",name:"entityDefinitionCache"},{route:"smart-ngrx/functions/customProxyGet",type:"Function",name:"customProxyGet"},{route:"smart-ngrx/functions/customProxySet",type:"Function",name:"customProxySet"},{route:"smart-ngrx/classes/CustomProxy",type:"Class",name:"CustomProxy"},{route:"smart-ngrx/functions/rowProxy",type:"Function",name:"rowProxy"},{route:"smart-ngrx/functions/arrayProxyClassGet",type:"Function",name:"arrayProxyClassGet"},{route:"smart-ngrx/classes/ArrayProxy",type:"Class",name:"ArrayProxy"},{route:"smart-ngrx/functions/createInnerSmartSelector",type:"Function",name:"createInnerSmartSelector"},{route:"smart-ngrx/functions/createSmartSelector",type:"Function",name:"createSmartSelector"},{route:"smart-ngrx/functions/ensureDataLoaded",type:"Function",name:"ensureDataLoaded"},{route:"smart-ngrx/functions/getArrayItem",type:"Function",name:"getArrayItem"},{route:"smart-ngrx/functions/isArrayProxy",type:"Function",name:"isArrayProxy"},{route:"smart-ngrx/type-aliases/ParentSelector",type:"TypeAlias",name:"ParentSelector"},{route:"smart-ngrx/functions/realOrMocked",type:"Function",name:"realOrMocked"},{route:"smart-ngrx/variables/storeEffect",type:"Variable",name:"storeEffect"},{route:"smart-ngrx/functions/store",type:"Function",name:"store"},{route:"smart-ngrx/variables/globalStore",type:"Variable",name:"globalStore"},{route:"smart-ngrx/functions/convertEntityIdToName",type:"Function",name:"convertEntityIdToName"},{route:"smart-ngrx/functions/entityStateFactory",type:"Function",name:"entityStateFactory"},{route:"smart-ngrx/interfaces/Entity",type:"Interface",name:"Entity"},{route:"smart-ngrx/functions/clearState",type:"Function",name:"clearState"},{route:"smart-ngrx/functions/createStore",type:"Function",name:"createStore"},{route:"smart-ngrx/functions/setState",type:"Function",name:"setState"},{route:"smart-ngrx/interfaces/ChildDefinition",type:"Interface",name:"ChildDefinition"},{route:"smart-ngrx/type-aliases/EffectServiceToken",type:"TypeAlias",name:"EffectServiceToken"},{route:"smart-ngrx/interfaces/EntityAttributes",type:"Interface",name:"EntityAttributes"},{route:"smart-ngrx/interfaces/IdProp",type:"Interface",name:"IdProp"},{route:"smart-ngrx/interfaces/IdsProp",type:"Interface",name:"IdsProp"},{route:"smart-ngrx/interfaces/MarkAndDeleteInit",type:"Interface",name:"MarkAndDeleteInit"},{route:"smart-ngrx/interfaces/RowProp",type:"Interface",name:"RowProp"},{route:"smart-ngrx/interfaces/RowsProp",type:"Interface",name:"RowsProp"},{route:"smart-ngrx/interfaces/SmartEntityDefinition",type:"Interface",name:"SmartEntityDefinition"},{route:"smart-ngrx/type-aliases/SmartNgRXRowBaseSelector",type:"TypeAlias",name:"SmartNgRXRowBaseSelector"},{route:"smart-ngrx/interfaces/SmartNgRXRowBase",type:"Interface",name:"SmartNgRXRowBase"},{route:"smart-ngrx/interfaces/UpdateChanges",type:"Interface",name:"UpdateChanges"}]}];var jt=(()=>{let e=class e{};e.\u0275fac=function(p){return new(p||e)},e.\u0275cmp=F({type:e,selectors:[["ng-doc-api-list-page-api"]],standalone:!0,features:[V([{provide:I,useValue:vt}]),D],decls:1,vars:0,template:function(p,l){p&1&&u(0,"ng-doc-api-list")},dependencies:[Ct],encapsulation:2,changeDetection:0});let t=e;return t})(),Ut=[{path:"",component:jt},{path:"smart-ngrx",loadChildren:()=>import("./chunk-DBHIQCZ2.js")}],se=Ut;export{jt as DynamicComponent,se as default};
