"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[6306],{6306:(ct,_,o)=>{o.r(_),o.d(_,{DynamicComponent:()=>h,default:()=>et});var y=o(8016),s=o(9938),u=o(9551),t=o(1720),r=o(9204),d=o(7309),T=o(2140),x=o(8989),v=o(6654),A=o(9237),F=o(9868),I=o(7058),Z=o(362),D=o(587),S=o(2730),E=o(6055),J=o(3302),b=o(8368),L=o(9595),C=o(5312),f=o(8416),N=o(1793),Q=o(5761),O=o(2043);function Y(n,c){1&n&&t._UZ(0,"ng-doc-icon",15)}function w(n,c){1&n&&t.GkF(0)}const P=n=>({$implicit:n});function U(n,c){if(1&n&&(t.TgZ(0,"ng-doc-option",20),t.YNc(1,w,1,0,"ng-container",21),t.qZA()),2&n){const e=c.$implicit;t.oxw(2);const i=t.MAs(4);t.Q6J("value",e),t.xp6(1),t.Q6J("ngTemplateOutlet",i)("ngTemplateOutletContext",t.VKq(3,P,e))}}function k(n,c){if(1&n&&(t.TgZ(0,"ng-doc-list"),t.YNc(1,U,2,5,"ng-doc-option",19),t.qZA()),2&n){const e=t.oxw(3);t.xp6(1),t.Q6J("ngForOf",e.scopes)}}function G(n,c){1&n&&t._uU(0),2&n&&t.hij(" ",c.$implicit," ")}function $(n,c){if(1&n&&(t.TgZ(0,"label",16)(1,"ng-doc-combobox",17),t.YNc(2,k,2,1,"ng-doc-list",11)(3,G,1,1,"ng-template",null,18,t.W1O),t.qZA()()),2&n){const e=t.MAs(4),i=t.oxw(2);t.xp6(1),t.Q6J("formControl",i.formGroup.controls.scope)("valueContent",e)("readonly",!0)}}function j(n,c){1&n&&t.GkF(0)}function R(n,c){if(1&n&&(t.TgZ(0,"ng-doc-option",20),t.YNc(1,j,1,0,"ng-container",21),t.qZA()),2&n){const e=c.$implicit;t.oxw(2);const i=t.MAs(12);t.Q6J("value",e),t.xp6(1),t.Q6J("ngTemplateOutlet",i)("ngTemplateOutletContext",t.VKq(3,P,e))}}function V(n,c){if(1&n&&(t.TgZ(0,"ng-doc-list"),t.YNc(1,R,2,5,"ng-doc-option",19),t.qZA()),2&n){const e=t.oxw(2);t.xp6(1),t.Q6J("ngForOf",e.types)}}const B=()=>["left-center","right-center"];function z(n,c){if(1&n&&(t.TgZ(0,"div",0),t._UZ(1,"ng-doc-kind-icon",22),t._uU(2),t.qZA()),2&n){const e=c.$implicit;t.xp6(1),t.Q6J("kind",e)("ngDocTooltip",e)("positions",t.DdM(4,B)),t.xp6(1),t.hij(" ",e," ")}}const W=n=>[n];function H(n,c){if(1&n&&(t.TgZ(0,"li",28)(1,"a",29),t._UZ(2,"ng-doc-kind-icon",30),t._uU(3),t.qZA()()),2&n){const e=c.$implicit;t.xp6(1),t.Q6J("routerLink",t.VKq(4,W,e.route)),t.xp6(1),t.Q6J("kind",e.type)("ngDocTooltip",e.type),t.xp6(1),t.hij(" ",e.name," ")}}function K(n,c){if(1&n&&(t.TgZ(0,"ul",26),t.YNc(1,H,4,6,"li",27),t.qZA()),2&n){const e=t.oxw().$implicit;t.xp6(1),t.Q6J("ngForOf",e.items)}}function X(n,c){if(1&n&&(t.TgZ(0,"div",23)(1,"h3",24),t._uU(2),t.qZA(),t.YNc(3,K,2,1,"ul",25),t.qZA()),2&n){const e=c.$implicit;t.xp6(2),t.Oqu(e.title),t.xp6(1),t.Q6J("ngIf",e.items.length)}}function q(n,c){if(1&n&&(t.TgZ(0,"div",2)(1,"form",3)(2,"label",4)(3,"ng-doc-input-wrapper",5),t.YNc(4,Y,1,0,"ng-template",null,6,t.W1O),t._UZ(6,"input",7),t.qZA()(),t.YNc(7,$,5,3,"label",8),t.TgZ(8,"label",9)(9,"ng-doc-combobox",10),t.YNc(10,V,2,1,"ng-doc-list",11)(11,z,3,5,"ng-template",null,12,t.W1O),t.qZA()()(),t.TgZ(13,"div",13),t.YNc(14,X,4,2,"div",14),t.qZA()()),2&n){const e=c.ngIf,i=t.MAs(5),p=t.MAs(12),l=t.oxw();t.xp6(1),t.Q6J("formGroup",l.formGroup),t.xp6(2),t.Q6J("leftContent",i),t.xp6(3),t.Q6J("formControl",l.formGroup.controls.filter),t.xp6(1),t.Q6J("ngIf",l.scopes.length),t.xp6(2),t.Q6J("formControl",l.formGroup.controls.type)("valueContent",p)("readonly",!0),t.xp6(5),t.Q6J("ngForOf",e)}}let tt=(()=>{var n;let c=((n=class{constructor(i,p,l,ot){this.apiList=i,this.formBuilder=p,this.route=l,this.router=ot,this.formGroup=this.formBuilder.group({filter:[""],scope:[""],type:[""]}),this.route.queryParamMap.pipe((0,f.t)(this)).subscribe(a=>this.formGroup.setValue({filter:a.get("filter")||null,scope:a.get("scope")||null,type:a.get("type")||null})),this.formGroup.valueChanges.pipe((0,f.t)(this)).subscribe(a=>this.router.navigate([],{relativeTo:this.route,queryParams:a,queryParamsHandling:"merge"})),this.api$=this.formGroup.valueChanges.pipe((0,N.b)(100),(0,Q.O)(null),(0,O.U)(()=>this.formGroup.value),(0,O.U)(a=>this.apiList.filter(g=>!a?.scope||g.title===a?.scope).map(g=>({...g,items:g.items.filter(m=>m.name.toLowerCase().includes(a?.filter?.toLowerCase()??"")&&(!a?.type||m.type===a?.type)).sort((m,M)=>m.type.localeCompare(M.type)||m.name.localeCompare(M.name))})).filter(g=>g.items.length)),(0,f.t)(this))}get scopes(){return(0,x.asArray)(new Set(this.apiList.flatMap(i=>i.title))).sort()}get types(){return(0,x.asArray)(new Set(this.apiList.flatMap(i=>i.items).flatMap(i=>i.type))).sort()}}).\u0275fac=function(i){return new(i||n)(t.Y36(y.Pt),t.Y36(r.qu),t.Y36(d.gz),t.Y36(d.F0))},n.\u0275cmp=t.Xpm({type:n,selectors:[["ng-doc-api-list"]],standalone:!0,features:[t.jDz],decls:4,vars:3,consts:[["ng-doc-text",""],["class","ng-doc-api-list-wrapper",4,"ngIf"],[1,"ng-doc-api-list-wrapper"],[1,"ng-doc-api-filter",3,"formGroup"],["ng-doc-label","Filter",1,"ng-doc-api-filter-item"],[3,"leftContent"],["leftContent",""],["ngDocInputString","","placeholder","Type the name","ngDocAutofocus","",3,"formControl"],["class","ng-doc-api-filter-item","ng-doc-label","Scope",4,"ngIf"],["ng-doc-label","Type",1,"ng-doc-api-filter-item"],["placeholder","Choose the entity type",3,"formControl","valueContent","readonly"],[4,"ngDocData"],["comboboxTypeItem",""],[1,"ng-doc-api-list"],["class","ng-doc-api-scope",4,"ngFor","ngForOf"],["icon","search"],["ng-doc-label","Scope",1,"ng-doc-api-filter-item"],["placeholder","Choose the scope",3,"formControl","valueContent","readonly"],["comboboxScopeItem",""],[3,"value",4,"ngFor","ngForOf"],[3,"value"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["ngDocTextLeft","",3,"kind","ngDocTooltip","positions"],[1,"ng-doc-api-scope"],["ng-doc-text","",1,"ng-doc-scope-title"],["class","ng-doc-scope-items",4,"ngIf"],[1,"ng-doc-scope-items"],["class","ng-doc-scope-item",4,"ngFor","ngForOf"],[1,"ng-doc-scope-item"],[1,"ng-doc-scope-item-link",3,"routerLink"],[3,"kind","ngDocTooltip"]],template:function(i,p){1&i&&(t.TgZ(0,"h1",0),t._uU(1,"API List"),t.qZA(),t.YNc(2,q,15,8,"div",1),t.ALo(3,"async")),2&i&&(t.xp6(2),t.Q6J("ngIf",t.lcZ(3,1,p.api$)))},dependencies:[v.Uy,u.O5,r.u5,r._Y,r.Fj,r.JJ,r.JL,r.UX,r.oH,r.sg,A.J,F.u,I.q,Z.v,D.o,S.L,E.N,J.k,u.ax,b.e,u.tP,T.U,v.eo,L.A,d.rH,u.Ov],styles:["[_nghost-%COMP%]   h1[_ngcontent-%COMP%]{margin-top:0}[_nghost-%COMP%]   .ng-doc-api-list-wrapper[_ngcontent-%COMP%]   .ng-doc-api-filter[_ngcontent-%COMP%]{display:flex;margin-top:calc(var(--ng-doc-base-gutter) * 3);flex-wrap:wrap;grid-gap:calc(var(--ng-doc-base-gutter) * 2);gap:calc(var(--ng-doc-base-gutter) * 2)}[_nghost-%COMP%]   .ng-doc-api-list-wrapper[_ngcontent-%COMP%]   .ng-doc-api-filter[_ngcontent-%COMP%]   .ng-doc-api-filter-item[_ngcontent-%COMP%]{width:200px}[_nghost-%COMP%]   .ng-doc-api-list-wrapper[_ngcontent-%COMP%]   .ng-doc-api-list[_ngcontent-%COMP%]{margin-top:calc(var(--ng-doc-base-gutter) * 2)}[_nghost-%COMP%]   .ng-doc-api-list-wrapper[_ngcontent-%COMP%]   .ng-doc-api-list[_ngcontent-%COMP%]   .ng-doc-api-scope[_ngcontent-%COMP%]{display:flex;flex-direction:column}[_nghost-%COMP%]   .ng-doc-api-list-wrapper[_ngcontent-%COMP%]   .ng-doc-api-list[_ngcontent-%COMP%]   .ng-doc-api-scope[_ngcontent-%COMP%]   .ng-doc-scope-items[_ngcontent-%COMP%]{margin-top:calc(var(--ng-doc-base-gutter) * 3);list-style:none;padding:0}[_nghost-%COMP%]   .ng-doc-api-list-wrapper[_ngcontent-%COMP%]   .ng-doc-api-list[_ngcontent-%COMP%]   .ng-doc-api-scope[_ngcontent-%COMP%]   .ng-doc-scope-items[_ngcontent-%COMP%]   .ng-doc-scope-item[_ngcontent-%COMP%]{margin:var(--ng-doc-base-gutter) 0;float:left;width:33%;overflow:hidden;min-width:330px;text-overflow:ellipsis;white-space:nowrap}[_nghost-%COMP%]   .ng-doc-api-list-wrapper[_ngcontent-%COMP%]   .ng-doc-api-list[_ngcontent-%COMP%]   .ng-doc-api-scope[_ngcontent-%COMP%]   .ng-doc-scope-items[_ngcontent-%COMP%]   .ng-doc-scope-item[_ngcontent-%COMP%]   .ng-doc-scope-item-link[_ngcontent-%COMP%]{display:flex;align-items:center;color:var(--ng-doc-text);text-decoration:none}[_nghost-%COMP%]   .ng-doc-api-list-wrapper[_ngcontent-%COMP%]   .ng-doc-api-list[_ngcontent-%COMP%]   .ng-doc-api-scope[_ngcontent-%COMP%]   .ng-doc-scope-items[_ngcontent-%COMP%]   .ng-doc-scope-item[_ngcontent-%COMP%]   .ng-doc-scope-item-link[_ngcontent-%COMP%]:hover{text-decoration:underline}[_nghost-%COMP%]   .ng-doc-api-list-wrapper[_ngcontent-%COMP%]   .ng-doc-api-list[_ngcontent-%COMP%]   .ng-doc-api-scope[_ngcontent-%COMP%]   .ng-doc-scope-items[_ngcontent-%COMP%]   .ng-doc-scope-item[_ngcontent-%COMP%]   .ng-doc-scope-item-link[_ngcontent-%COMP%]   ng-doc-kind-icon[_ngcontent-%COMP%]{margin-right:var(--ng-doc-base-gutter);text-decoration:none!important}[_nghost-%COMP%]   ng-doc-input-wrapper[_ngcontent-%COMP%]   ng-doc-icon[_ngcontent-%COMP%]{--ng-doc-icon-color: var(--ng-doc-text-muted)}"],changeDetection:0}),n);return(0,s.__decorate)([C.g,(0,s.__metadata)("design:type",Array),(0,s.__metadata)("design:paramtypes",[])],c.prototype,"scopes",null),(0,s.__decorate)([C.g,(0,s.__metadata)("design:type",Array),(0,s.__metadata)("design:paramtypes",[])],c.prototype,"types",null),c=(0,s.__decorate)([(0,f.c)(),(0,s.__metadata)("design:paramtypes",[Array,r.qu,d.gz,d.F0])],c),c})();const nt=JSON.parse('[{"title":"smart-ngrx","items":[{"route":"smart-ngrx/functions/assert","type":"Function","name":"assert"},{"route":"smart-ngrx/functions/castTo","type":"Function","name":"castTo"},{"route":"smart-ngrx/functions/bufferAction","type":"Function","name":"bufferAction"},{"route":"smart-ngrx/classes/EffectService","type":"Class","name":"EffectService"},{"route":"smart-ngrx/interfaces/EffectsFactory","type":"Interface","name":"EffectsFactory"},{"route":"smart-ngrx/functions/effectsFactory","type":"Function","name":"effectsFactory"},{"route":"smart-ngrx/type-aliases/LoadByIdsEffect","type":"TypeAlias","name":"LoadByIdsEffect"},{"route":"smart-ngrx/type-aliases/LoadEffect","type":"TypeAlias","name":"LoadEffect"},{"route":"smart-ngrx/functions/actionFactory","type":"Function","name":"actionFactory"},{"route":"smart-ngrx/functions/provideSmartFeatureEntities","type":"Function","name":"provideSmartFeatureEntities"},{"route":"smart-ngrx/functions/registerEntity","type":"Function","name":"registerEntity"},{"route":"smart-ngrx/functions/unregisterEntity","type":"Function","name":"unregisterEntity"},{"route":"smart-ngrx/functions/reducerFactory","type":"Function","name":"reducerFactory"},{"route":"smart-ngrx/functions/defaultRows","type":"Function","name":"defaultRows"},{"route":"smart-ngrx/classes/ArrayProxy","type":"Class","name":"ArrayProxy"},{"route":"smart-ngrx/functions/createInnerSmartSelector","type":"Function","name":"createInnerSmartSelector"},{"route":"smart-ngrx/functions/createSmartSelector","type":"Function","name":"createSmartSelector"},{"route":"smart-ngrx/functions/ensureDataLoaded","type":"Function","name":"ensureDataLoaded"},{"route":"smart-ngrx/functions/getArrayItem","type":"Function","name":"getArrayItem"},{"route":"smart-ngrx/functions/isArrayProxy","type":"Function","name":"isArrayProxy"},{"route":"smart-ngrx/type-aliases/ParentSelector","type":"TypeAlias","name":"ParentSelector"},{"route":"smart-ngrx/functions/realOrMocked","type":"Function","name":"realOrMocked"},{"route":"smart-ngrx/classes/StoreEffects","type":"Injectable","name":"StoreEffects"},{"route":"smart-ngrx/functions/store","type":"Function","name":"store"},{"route":"smart-ngrx/variables/globalStore","type":"Variable","name":"globalStore"},{"route":"smart-ngrx/functions/convertEntityIdToName","type":"Function","name":"convertEntityIdToName"},{"route":"smart-ngrx/functions/entityStateFactory","type":"Function","name":"entityStateFactory"},{"route":"smart-ngrx/interfaces/Entity","type":"Interface","name":"Entity"},{"route":"smart-ngrx/type-aliases/EffectServiceToken","type":"TypeAlias","name":"EffectServiceToken"},{"route":"smart-ngrx/interfaces/EntityAttributes","type":"Interface","name":"EntityAttributes"},{"route":"smart-ngrx/interfaces/EntityDefinition","type":"Interface","name":"EntityDefinition"},{"route":"smart-ngrx/interfaces/IdProp","type":"Interface","name":"IdProp"},{"route":"smart-ngrx/interfaces/IdsProp","type":"Interface","name":"IdsProp"},{"route":"smart-ngrx/type-aliases/MarkAndDeleteSelector","type":"TypeAlias","name":"MarkAndDeleteSelector"},{"route":"smart-ngrx/interfaces/MarkAndDelete","type":"Interface","name":"MarkAndDelete"},{"route":"smart-ngrx/interfaces/ProxyChild","type":"Interface","name":"ProxyChild"},{"route":"smart-ngrx/interfaces/RowProp","type":"Interface","name":"RowProp"},{"route":"smart-ngrx/interfaces/RowsProp","type":"Interface","name":"RowsProp"}]}]');let h=(()=>{var n;class c{}return(n=c).\u0275fac=function(i){return new(i||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["ng-doc-api-list-page-api"]],standalone:!0,features:[t._Bn([{provide:y.Pt,useValue:nt}]),t.jDz],decls:1,vars:0,template:function(i,p){1&i&&t._UZ(0,"ng-doc-api-list")},dependencies:[tt],encapsulation:2,changeDetection:0}),c})();const et=[{path:"",component:h},{path:"smart-ngrx",loadChildren:()=>o.e(2466).then(o.bind(o,2466))}]}}]);