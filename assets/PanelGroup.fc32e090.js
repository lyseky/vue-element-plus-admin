import{bT as e,d as t,r as s,s as a,x as l,o as i,h as n,w as o,g as d,a as r,e as c,n as u,t as x,k as _,j as m}from"./index.1a584bcd.js";import{a as p,E as f}from"./el-col.907e663b.js";import{E as g}from"./el-card.999e59e2.js";import{E as v}from"./el-skeleton-item.9dd53b01.js";import{_ as y}from"./CountTo.vue_vue_type_script_setup_true_lang.c7f22aa0.js";import{_ as b}from"./_plugin-vue_export-helper.cdc0426e.js";const w=e(),h=async()=>{const e=await w.get({url:"/analysis/userAccessSource"});return e&&e.data},j=async()=>{const e=await w.get({url:"/analysis/weeklyUserActivity"});return e&&e.data},$=async()=>{const e=await w.get({url:"/analysis/monthlySales"});return e&&e.data},k={class:"flex flex-col justify-between"},z={class:"flex flex-col justify-between"},S={class:"flex flex-col justify-between"},P={class:"flex flex-col justify-between"},A=b(t({__name:"PanelGroup",setup(e){const{t:t}=_(),{getPrefixCls:b}=m(),h=b("panel"),j=s(!0);let $=a({users:0,messages:0,moneys:0,shoppings:0});return(async()=>{const e=await(async()=>{const e=await w.get({url:"/analysis/total"});return e&&e.data})().catch((()=>{})).finally((()=>{j.value=!1}));$=Object.assign($,(null==e?void 0:e.data)||{})})(),(e,s)=>{const a=l("Icon");return i(),n(r(f),{gutter:20,justify:"space-between",class:u(r(h))},{default:o((()=>[d(r(p),{xl:6,lg:6,md:12,sm:12,xs:24},{default:o((()=>[d(r(g),{shadow:"hover",class:"mb-20px"},{default:o((()=>[d(r(v),{loading:j.value,animated:"",rows:2},{default:o((()=>[c("div",{class:u(`${r(h)}__item flex justify-between`)},[c("div",null,[c("div",{class:u(`${r(h)}__item--icon ${r(h)}__item--peoples p-16px inline-block rounded-6px`)},[d(a,{icon:"svg-icon:peoples",size:40})],2)]),c("div",k,[c("div",{class:u(`${r(h)}__item--text text-16px text-gray-500 text-right`)},x(r(t)("analysis.newUser")),3),d(r(y),{class:"text-20px font-700 text-right","start-val":0,"end-val":102400,duration:2600})])],2)])),_:1},8,["loading"])])),_:1})])),_:1}),d(r(p),{xl:6,lg:6,md:12,sm:12,xs:24},{default:o((()=>[d(r(g),{shadow:"hover",class:"mb-20px"},{default:o((()=>[d(r(v),{loading:j.value,animated:"",rows:2},{default:o((()=>[c("div",{class:u(`${r(h)}__item flex justify-between`)},[c("div",null,[c("div",{class:u(`${r(h)}__item--icon ${r(h)}__item--message p-16px inline-block rounded-6px`)},[d(a,{icon:"svg-icon:message",size:40})],2)]),c("div",z,[c("div",{class:u(`${r(h)}__item--text text-16px text-gray-500 text-right`)},x(r(t)("analysis.unreadInformation")),3),d(r(y),{class:"text-20px font-700 text-right","start-val":0,"end-val":81212,duration:2600})])],2)])),_:1},8,["loading"])])),_:1})])),_:1}),d(r(p),{xl:6,lg:6,md:12,sm:12,xs:24},{default:o((()=>[d(r(g),{shadow:"hover",class:"mb-20px"},{default:o((()=>[d(r(v),{loading:j.value,animated:"",rows:2},{default:o((()=>[c("div",{class:u(`${r(h)}__item flex justify-between`)},[c("div",null,[c("div",{class:u(`${r(h)}__item--icon ${r(h)}__item--money p-16px inline-block rounded-6px`)},[d(a,{icon:"svg-icon:money",size:40})],2)]),c("div",S,[c("div",{class:u(`${r(h)}__item--text text-16px text-gray-500 text-right`)},x(r(t)("analysis.transactionAmount")),3),d(r(y),{class:"text-20px font-700 text-right","start-val":0,"end-val":9280,duration:2600})])],2)])),_:1},8,["loading"])])),_:1})])),_:1}),d(r(p),{xl:6,lg:6,md:12,sm:12,xs:24},{default:o((()=>[d(r(g),{shadow:"hover",class:"mb-20px"},{default:o((()=>[d(r(v),{loading:j.value,animated:"",rows:2},{default:o((()=>[c("div",{class:u(`${r(h)}__item flex justify-between`)},[c("div",null,[c("div",{class:u(`${r(h)}__item--icon ${r(h)}__item--shopping p-16px inline-block rounded-6px`)},[d(a,{icon:"svg-icon:shopping",size:40})],2)]),c("div",P,[c("div",{class:u(`${r(h)}__item--text text-16px text-gray-500 text-right`)},x(r(t)("analysis.totalShopping")),3),d(r(y),{class:"text-20px font-700 text-right","start-val":0,"end-val":13600,duration:2600})])],2)])),_:1},8,["loading"])])),_:1})])),_:1})])),_:1},8,["class"])}}}),[["__scopeId","data-v-843cc555"]]),E=Object.freeze(Object.defineProperty({__proto__:null,default:A},Symbol.toStringTag,{value:"Module"}));export{A as P,j as a,$ as b,E as c,h as g};
