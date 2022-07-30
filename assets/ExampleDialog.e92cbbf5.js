import{_ as e}from"./ContentWrap.vue_vue_type_script_setup_true_lang.a51315dc.js";import{_ as a}from"./Search.vue_vue_type_script_setup_true_lang.5e427118.js";import{_ as t}from"./Dialog.vue_vue_type_style_index_0_lang.13153ef2.js";import{d as l,s as o,aQ as i,r,aY as s,o as m,c as n,g as p,w as d,a as c,e as u,y as f,t as _,aI as v,h as b,Z as g,a0 as j,k as y}from"./index.1a584bcd.js";import{E as h}from"./el-button.6ced23c5.js";import{E as w}from"./el-tag.31c6003e.js";import{_ as x}from"./Table.vue_vue_type_script_lang.2f321e34.js";import{g as D,d as k,s as S}from"./index.ccc64ebb.js";import{u as P}from"./useTable.4d2ca7c4.js";import{_ as C}from"./Write.vue_vue_type_script_setup_true_lang.8ffe72bf.js";import{_ as R}from"./Detail.vue_vue_type_script_setup_true_lang.764552a1.js";import{u as z}from"./useCrudSchemas.525961b7.js";import"./el-card.999e59e2.js";import"./el-popper.24640a5f.js";import"./index.8e807811.js";import"./Form.80728730.js";import"./el-col.907e663b.js";import"./el-input.7fd58405.js";import"./event.d298a7ab.js";import"./index.940ec409.js";import"./tsxHelper.53794469.js";import"./index.2491c0b3.js";import"./scroll.1a09b5b9.js";import"./debounce.4f0af629.js";import"./validator.1fd8b150.js";import"./el-input-number.f1c3271a.js";import"./el-switch.5d28d55d.js";import"./el-divider.2181f3ba.js";import"./InputPassword.28fe880d.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./style.css_vue_type_style_index_0_src_true_lang.d43a7947.js";import"./aria.288df782.js";import"./browser.c71dec55.js";import"./useForm.ef5af9a3.js";import"./el-overlay.93c3f3c1.js";import"./vnode.50153e34.js";import"./use-dialog.9f63090b.js";import"./refs.eabb4a9e.js";import"./el-message-box.9e9aad09.js";import"./useValidator.d9b250d0.js";import"./Descriptions.b8f9a82e.js";import"./index.340a37b0.js";import"./tree.b6e955f9.js";const F={class:"mb-10px"},L=l({__name:"ExampleDialog",setup(l){const{register:L,tableObject:Y,methods:E}=P({getListApi:D,delListApi:k,response:{list:"list",total:"total"}}),{getList:V,setSearchParams:H}=E;V();const{t:I}=y(),T=o([{field:"index",label:I("tableDemo.index"),type:"index",form:{show:!1},detail:{show:!1}},{field:"title",label:I("tableDemo.title"),search:{show:!0},form:{colProps:{span:24}},detail:{span:24}},{field:"author",label:I("tableDemo.author")},{field:"display_time",label:I("tableDemo.displayTime"),form:{component:"DatePicker",componentProps:{type:"datetime",valueFormat:"YYYY-MM-DD HH:mm:ss"}}},{field:"importance",label:I("tableDemo.importance"),formatter:(e,a,t)=>i(w,{type:1===t?"success":2===t?"warning":"danger"},(()=>I(1===t?"tableDemo.important":2===t?"tableDemo.good":"tableDemo.commonly"))),form:{component:"Select",componentProps:{style:{width:"100%"},options:[{label:"重要",value:3},{label:"良好",value:2},{label:"一般",value:1}]}}},{field:"pageviews",label:I("tableDemo.pageviews"),form:{component:"InputNumber",value:0}},{field:"content",label:I("exampleDemo.content"),table:{show:!1},form:{component:"Editor",colProps:{span:24}},detail:{span:24}},{field:"action",width:"260px",label:I("tableDemo.action"),form:{show:!1},detail:{show:!1}}]),{allSchemas:U}=z(T),A=r(!1),M=r(""),W=()=>{M.value=I("exampleDemo.add"),Y.currentRow=null,A.value=!0},N=r(!1),O=async(e,a)=>{var t;Y.currentRow=e;const{delList:l,getSelections:o}=E,i=await o();N.value=!0,await l(a?i.map((e=>e.id)):[null==(t=Y.currentRow)?void 0:t.id],a).finally((()=>{N.value=!1}))},Q=r(""),Z=(e,a)=>{M.value=I("edit"===a?"exampleDemo.edit":"exampleDemo.detail"),Q.value=a,Y.currentRow=e,A.value=!0},q=r(),B=r(!1),G=async()=>{var e;const a=c(q);await(null==(e=null==a?void 0:a.elFormRef)?void 0:e.validate((async e=>{if(e){B.value=!0;const e=await(null==a?void 0:a.getFormData());await S(e).catch((()=>{})).finally((()=>{B.value=!1}))&&(A.value=!1,Y.currentPage=1,V())}})))};return(l,o)=>{const i=s("hasPermi");return m(),n(j,null,[p(c(e),null,{default:d((()=>[p(c(a),{schema:c(U).searchSchema,onSearch:c(H),onReset:c(H)},null,8,["schema","onSearch","onReset"]),u("div",F,[p(c(h),{type:"primary",onClick:W},{default:d((()=>[f(_(c(I)("exampleDemo.add")),1)])),_:1}),p(c(h),{loading:N.value,type:"danger",onClick:o[0]||(o[0]=e=>O(null,!0))},{default:d((()=>[f(_(c(I)("exampleDemo.del")),1)])),_:1},8,["loading"])]),p(c(x),{pageSize:c(Y).pageSize,"onUpdate:pageSize":o[1]||(o[1]=e=>c(Y).pageSize=e),currentPage:c(Y).currentPage,"onUpdate:currentPage":o[2]||(o[2]=e=>c(Y).currentPage=e),columns:c(U).tableColumns,data:c(Y).tableList,loading:c(Y).loading,pagination:{total:c(Y).total},onRegister:c(L)},{action:d((({row:e})=>[v((m(),b(c(h),{type:"primary",onClick:a=>Z(e,"edit")},{default:d((()=>[f(_(c(I)("exampleDemo.edit")),1)])),_:2},1032,["onClick"])),[[i,["example:dialog:edit"]]]),v((m(),b(c(h),{type:"success",onClick:a=>Z(e,"detail")},{default:d((()=>[f(_(c(I)("exampleDemo.detail")),1)])),_:2},1032,["onClick"])),[[i,["example:dialog:view"]]]),v((m(),b(c(h),{type:"danger",onClick:a=>O(e,!1)},{default:d((()=>[f(_(c(I)("exampleDemo.del")),1)])),_:2},1032,["onClick"])),[[i,["example:dialog:delete"]]])])),_:1},8,["pageSize","currentPage","columns","data","loading","pagination","onRegister"])])),_:1}),p(c(t),{modelValue:A.value,"onUpdate:modelValue":o[4]||(o[4]=e=>A.value=e),title:M.value},{footer:d((()=>["detail"!==Q.value?(m(),b(c(h),{key:0,type:"primary",loading:B.value,onClick:G},{default:d((()=>[f(_(c(I)("exampleDemo.save")),1)])),_:1},8,["loading"])):g("v-if",!0),p(c(h),{onClick:o[3]||(o[3]=e=>A.value=!1)},{default:d((()=>[f(_(c(I)("dialogDemo.close")),1)])),_:1})])),default:d((()=>["detail"!==Q.value?(m(),b(C,{key:0,ref_key:"writeRef",ref:q,"form-schema":c(U).formSchema,"current-row":c(Y).currentRow},null,8,["form-schema","current-row"])):g("v-if",!0),"detail"===Q.value?(m(),b(R,{key:1,"detail-schema":c(U).detailSchema,"current-row":c(Y).currentRow},null,8,["detail-schema","current-row"])):g("v-if",!0)])),_:1},8,["modelValue","title"])],64)}}});export{L as default};
