import{v as e,aO as o,N as n,G as t,d as a,Q as s,cb as l,S as r,r as i,bA as c,s as u,H as d,cc as p,V as f,C as m,D as v,aP as g,_ as h,x as b,o as y,h as C,w as E,aI as x,a_ as w,g as B,e as k,n as M,a1 as I,aw as T,c as _,$ as S,Z as R,t as A,au as z,z as P,y as j,i as L,am as V,ao as $,bo as O,cd as H,b0 as D,ap as K,aK as q,aQ as U}from"./index.1a584bcd.js";import{E as F}from"./el-button.6ced23c5.js";import{E as Q}from"./el-input.7fd58405.js";import{E as Z,u as G,a as N,b as W}from"./el-overlay.93c3f3c1.js";import{o as J}from"./aria.288df782.js";import{d as X}from"./el-popper.24640a5f.js";import{i as Y}from"./validator.1fd8b150.js";import{u as ee}from"./index.2491c0b3.js";import{u as oe}from"./index.8e807811.js";const ne=[],te=e=>{if(0===ne.length)return;const o=ne[ne.length-1]["_trap-focus-children"];if(o.length>0&&e.code===t.tab){if(1===o.length)return e.preventDefault(),void(document.activeElement!==o[0]&&o[0].focus());const n=e.shiftKey,t=e.target===o[0],a=e.target===o[o.length-1];t&&n&&(e.preventDefault(),o[o.length-1].focus()),a&&!n&&(e.preventDefault(),o[0].focus())}},ae=a({name:"ElMessageBox",directives:{TrapFocus:{beforeMount(e){e["_trap-focus-children"]=J(e),ne.push(e),ne.length<=1&&document.addEventListener("keydown",te)},updated(e){n((()=>{e["_trap-focus-children"]=J(e)}))},unmounted(){ne.shift(),0===ne.length&&document.removeEventListener("keydown",te)}}},components:{ElButton:F,ElFocusTrap:X,ElInput:Q,ElOverlay:Z,ElIcon:s,...l},inheritAttrs:!1,props:{buttonSize:{type:String,validator:Y},modal:{type:Boolean,default:!0},lockScroll:{type:Boolean,default:!0},showClose:{type:Boolean,default:!0},closeOnClickModal:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},closeOnHashChange:{type:Boolean,default:!0},center:Boolean,draggable:Boolean,roundButton:{default:!1,type:Boolean},container:{type:String,default:"body"},boxType:{type:String,default:""}},emits:["vanish","action"],setup(t,{emit:a}){const{t:s}=ee(),l=r("message-box"),h=i(!1),{nextZIndex:b}=c(),y=u({autofocus:!0,beforeClose:null,callback:null,cancelButtonText:"",cancelButtonClass:"",confirmButtonText:"",confirmButtonClass:"",customClass:"",customStyle:{},dangerouslyUseHTMLString:!1,distinguishCancelAndClose:!1,icon:"",inputPattern:null,inputPlaceholder:"",inputType:"text",inputValue:null,inputValidator:null,inputErrorMessage:"",message:null,modalFade:!0,modalClass:"",showCancelButton:!1,showConfirmButton:!0,type:"",title:void 0,showInput:!1,action:"",confirmButtonLoading:!1,cancelButtonLoading:!1,confirmButtonDisabled:!1,editorErrorMessage:"",validateError:!1,zIndex:b()}),C=d((()=>{const e=y.type;return{[l.bm("icon",e)]:e&&p[e]}})),E=oe(),x=oe(),w=f(d((()=>t.buttonSize)),{prop:!0,form:!0,formItem:!0}),B=d((()=>y.icon||p[y.type]||"")),k=d((()=>!!y.message)),M=i(),I=i(),T=i(),_=i(),S=i(),R=d((()=>y.confirmButtonClass));e((()=>y.inputValue),(async e=>{await n(),"prompt"===t.boxType&&null!==e&&V()}),{immediate:!0}),e((()=>h.value),(e=>{var o,a;e&&("prompt"!==t.boxType&&(y.autofocus?T.value=null!=(a=null==(o=S.value)?void 0:o.$el)?a:M.value:T.value=M.value),y.zIndex=b()),"prompt"===t.boxType&&(e?n().then((()=>{var e;_.value&&_.value.$el&&(y.autofocus?T.value=null!=(e=$())?e:M.value:T.value=M.value)})):(y.editorErrorMessage="",y.validateError=!1))}));const A=d((()=>t.draggable));function z(){h.value&&(h.value=!1,n((()=>{y.action&&a("action",y.action)})))}G(M,I,A),m((async()=>{await n(),t.closeOnHashChange&&window.addEventListener("hashchange",z)})),v((()=>{t.closeOnHashChange&&window.removeEventListener("hashchange",z)}));const P=()=>{t.closeOnClickModal&&L(y.distinguishCancelAndClose?"close":"cancel")},j=W(P),L=e=>{var o;("prompt"!==t.boxType||"confirm"!==e||V())&&(y.action=e,y.beforeClose?null==(o=y.beforeClose)||o.call(y,e,y,z):z())},V=()=>{if("prompt"===t.boxType){const e=y.inputPattern;if(e&&!e.test(y.inputValue||""))return y.editorErrorMessage=y.inputErrorMessage||s("el.messagebox.error"),y.validateError=!0,!1;const o=y.inputValidator;if("function"==typeof o){const e=o(y.inputValue);if(!1===e)return y.editorErrorMessage=y.inputErrorMessage||s("el.messagebox.error"),y.validateError=!0,!1;if("string"==typeof e)return y.editorErrorMessage=e,y.validateError=!0,!1}}return y.editorErrorMessage="",y.validateError=!1,!0},$=()=>{const e=_.value.$refs;return e.input||e.textarea},O=()=>{L("close")};return t.lockScroll&&N(h),((n,t)=>{let a;e((()=>n.value),(e=>{var n,s;e?(a=document.activeElement,o(t)&&(null==(s=(n=t.value).focus)||s.call(n))):a.focus()}))})(h),{...g(y),ns:l,overlayEvent:j,visible:h,hasMessage:k,typeClass:C,contentId:E,inputId:x,btnSize:w,iconComponent:B,confirmButtonClasses:R,rootRef:M,focusStartRef:T,headerRef:I,inputRef:_,confirmRef:S,doClose:z,handleClose:O,onCloseRequested:()=>{t.closeOnPressEscape&&O()},handleWrapperClick:P,handleInputEnter:e=>{if("textarea"!==y.inputType)return e.preventDefault(),L("confirm")},handleAction:L,t:s}}}),se=["aria-label","aria-describedby"],le=["aria-label"],re=["id"];var ie=h(ae,[["render",function(e,o,n,t,a,s){const l=b("el-icon"),r=b("close"),i=b("el-input"),c=b("el-button"),u=b("el-focus-trap"),d=b("el-overlay");return y(),C(L,{name:"fade-in-linear",onAfterLeave:o[11]||(o[11]=o=>e.$emit("vanish")),persisted:""},{default:E((()=>[x(B(d,{"z-index":e.zIndex,"overlay-class":[e.ns.is("message-box"),e.modalClass],mask:e.modal},{default:E((()=>[k("div",{role:"dialog","aria-label":e.title,"aria-modal":"true","aria-describedby":e.showInput?void 0:e.contentId,class:M(`${e.ns.namespace.value}-overlay-message-box`),onClick:o[8]||(o[8]=(...o)=>e.overlayEvent.onClick&&e.overlayEvent.onClick(...o)),onMousedown:o[9]||(o[9]=(...o)=>e.overlayEvent.onMousedown&&e.overlayEvent.onMousedown(...o)),onMouseup:o[10]||(o[10]=(...o)=>e.overlayEvent.onMouseup&&e.overlayEvent.onMouseup(...o))},[B(u,{loop:"",trapped:e.visible,"focus-trap-el":e.rootRef,"focus-start-el":e.focusStartRef,onReleaseRequested:e.onCloseRequested},{default:E((()=>[k("div",{ref:"rootRef",class:M([e.ns.b(),e.customClass,e.ns.is("draggable",e.draggable),{[e.ns.m("center")]:e.center}]),style:I(e.customStyle),tabindex:"-1",onClick:o[7]||(o[7]=T((()=>{}),["stop"]))},[null!==e.title&&void 0!==e.title?(y(),_("div",{key:0,ref:"headerRef",class:M(e.ns.e("header"))},[k("div",{class:M(e.ns.e("title"))},[e.iconComponent&&e.center?(y(),C(l,{key:0,class:M([e.ns.e("status"),e.typeClass])},{default:E((()=>[(y(),C(S(e.iconComponent)))])),_:1},8,["class"])):R("v-if",!0),k("span",null,A(e.title),1)],2),e.showClose?(y(),_("button",{key:0,type:"button",class:M(e.ns.e("headerbtn")),"aria-label":e.t("el.messagebox.close"),onClick:o[0]||(o[0]=o=>e.handleAction(e.distinguishCancelAndClose?"close":"cancel")),onKeydown:o[1]||(o[1]=z(T((o=>e.handleAction(e.distinguishCancelAndClose?"close":"cancel")),["prevent"]),["enter"]))},[B(l,{class:M(e.ns.e("close"))},{default:E((()=>[B(r)])),_:1},8,["class"])],42,le)):R("v-if",!0)],2)):R("v-if",!0),k("div",{id:e.contentId,class:M(e.ns.e("content"))},[k("div",{class:M(e.ns.e("container"))},[e.iconComponent&&!e.center&&e.hasMessage?(y(),C(l,{key:0,class:M([e.ns.e("status"),e.typeClass])},{default:E((()=>[(y(),C(S(e.iconComponent)))])),_:1},8,["class"])):R("v-if",!0),e.hasMessage?(y(),_("div",{key:1,class:M(e.ns.e("message"))},[P(e.$slots,"default",{},(()=>[e.dangerouslyUseHTMLString?(y(),C(S(e.showInput?"label":"p"),{key:1,for:e.showInput?e.inputId:void 0,innerHTML:e.message},null,8,["for","innerHTML"])):(y(),C(S(e.showInput?"label":"p"),{key:0,for:e.showInput?e.inputId:void 0},{default:E((()=>[j(A(e.dangerouslyUseHTMLString?"":e.message),1)])),_:1},8,["for"]))]))],2)):R("v-if",!0)],2),x(k("div",{class:M(e.ns.e("input"))},[B(i,{id:e.inputId,ref:"inputRef",modelValue:e.inputValue,"onUpdate:modelValue":o[2]||(o[2]=o=>e.inputValue=o),type:e.inputType,placeholder:e.inputPlaceholder,"aria-invalid":e.validateError,class:M({invalid:e.validateError}),onKeydown:z(e.handleInputEnter,["enter"])},null,8,["id","modelValue","type","placeholder","aria-invalid","class","onKeydown"]),k("div",{class:M(e.ns.e("errormsg")),style:I({visibility:e.editorErrorMessage?"visible":"hidden"})},A(e.editorErrorMessage),7)],2),[[w,e.showInput]])],10,re),k("div",{class:M(e.ns.e("btns"))},[e.showCancelButton?(y(),C(c,{key:0,loading:e.cancelButtonLoading,class:M([e.cancelButtonClass]),round:e.roundButton,size:e.btnSize,onClick:o[3]||(o[3]=o=>e.handleAction("cancel")),onKeydown:o[4]||(o[4]=z(T((o=>e.handleAction("cancel")),["prevent"]),["enter"]))},{default:E((()=>[j(A(e.cancelButtonText||e.t("el.messagebox.cancel")),1)])),_:1},8,["loading","class","round","size"])):R("v-if",!0),x(B(c,{ref:"confirmRef",type:"primary",loading:e.confirmButtonLoading,class:M([e.confirmButtonClasses]),round:e.roundButton,disabled:e.confirmButtonDisabled,size:e.btnSize,onClick:o[5]||(o[5]=o=>e.handleAction("confirm")),onKeydown:o[6]||(o[6]=z(T((o=>e.handleAction("confirm")),["prevent"]),["enter"]))},{default:E((()=>[j(A(e.confirmButtonText||e.t("el.messagebox.confirm")),1)])),_:1},8,["loading","class","round","disabled","size"]),[[w,e.showConfirmButton]])],2)],6)])),_:3},8,["trapped","focus-trap-el","focus-start-el","onReleaseRequested"])],42,se)])),_:3},8,["z-index","overlay-class","mask"]),[[w,e.visible]])])),_:3})}],["__file","/home/runner/work/element-plus/element-plus/packages/components/message-box/src/index.vue"]]);const ce=new Map,ue=(o,n)=>{const t=document.createElement("div");o.onVanish=()=>{H(null,t),ce.delete(s)},o.onAction=e=>{const n=ce.get(s);let t;t=o.showInput?{value:s.inputValue,action:e}:e,o.callback?o.callback(t,a.proxy):"cancel"===e||"close"===e?o.distinguishCancelAndClose&&"cancel"!==e?n.reject("close"):n.reject("cancel"):n.resolve(t)};const a=((e,o,n=null)=>{const t=U(ie,e);return t.appContext=n,H(t,o),document.body.appendChild(o.firstElementChild),t.component})(o,t,n),s=a.proxy;for(const e in o)D(o,e)&&!D(s.$props,e)&&(s[e]=o[e]);return e((()=>s.message),((e,o)=>{O(e)?a.slots.default=()=>[e]:O(o)&&!O(e)&&delete a.slots.default}),{immediate:!0}),s.visible=!0,s};function de(e,o=null){if(!V)return Promise.reject();let n;return $(e)||O(e)?e={message:e}:n=e.callback,new Promise(((t,a)=>{const s=ue(e,null!=o?o:de._context);ce.set(s,{options:e,callback:n,resolve:t,reject:a})}))}const pe={alert:{closeOnPressEscape:!1,closeOnClickModal:!1},confirm:{showCancelButton:!0},prompt:{showCancelButton:!0,showInput:!0}};["alert","confirm","prompt"].forEach((e=>{de[e]=function(e){return(o,n,t,a)=>{let s;return K(n)?(t=n,s=""):s=q(n)?"":n,de(Object.assign({title:s,message:o,type:"",...pe[e]},t,{boxType:e}),a)}}(e)})),de.close=()=>{ce.forEach(((e,o)=>{o.doClose()})),ce.clear()},de._context=null;const fe=de;fe.install=e=>{fe._context=e._context,e.config.globalProperties.$msgbox=fe,e.config.globalProperties.$messageBox=fe,e.config.globalProperties.$alert=fe.alert,e.config.globalProperties.$confirm=fe.confirm,e.config.globalProperties.$prompt=fe.prompt};const me=fe;export{me as E};
