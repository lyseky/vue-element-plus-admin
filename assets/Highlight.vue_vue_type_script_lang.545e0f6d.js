import{d as t,a9 as r,H as e,a as s,aQ as a}from"./index.1a584bcd.js";const l=t({name:"Highlight",props:{tag:r.string.def("span"),keys:{type:Array,default:()=>[]},color:r.string.def("var(--el-color-primary)")},emits:["click"],setup(t,{emit:r,slots:l}){const o=e((()=>t.keys.map((e=>a("span",{onClick:()=>{r("click",e)},style:{color:t.color,cursor:"pointer"}},e))))),n=()=>{if(!(null==l?void 0:l.default))return null;const r=null==l?void 0:l.default()[0].children;if(!r)return null==l?void 0:l.default()[0];const e=(n=r,t.keys.forEach(((t,r)=>{const e=new RegExp(t,"g");n=n.replace(e,`{{${r}}}`)})),n.split(/{{|}}/));var n;const c=/^[0-9]*$/,i=e.map((t=>c.test(t)&&s(o)[t]||t));return a(t.tag,i)};return()=>n()}});export{l as _};
