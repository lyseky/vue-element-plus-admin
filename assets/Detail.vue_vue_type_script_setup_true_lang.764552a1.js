import{D as a}from"./Descriptions.b8f9a82e.js";import{d as e,o as t,h as o,w as r,g as n,y as s,t as c,a as m,e as i,k as p}from"./index.1a584bcd.js";import{E as l}from"./el-tag.31c6003e.js";const d=["innerHTML"],u=e({__name:"Detail",props:{currentRow:{type:Object,default:()=>null},detailSchema:{type:Array,default:()=>[]}},setup(e){const{t:u}=p();return(p,f)=>(t(),o(m(a),{schema:e.detailSchema,data:e.currentRow||{}},{importance:r((({row:a})=>[n(m(l),{type:1===a.importance?"success":2===a.importance?"warning":"danger"},{default:r((()=>[s(c(1===a.importance?m(u)("tableDemo.important"):2===a.importance?m(u)("tableDemo.good"):m(u)("tableDemo.commonly")),1)])),_:2},1032,["type"])])),content:r((({row:a})=>[i("div",{innerHTML:a.content},null,8,d)])),_:1},8,["schema","data"]))}});export{u as _};
