import{D as e}from"./Descriptions.56fe5463.js";import{d as a,s as t,o,h as l,w as m,g as n,y as s,t as i,a as p,e as r,k as c}from"./index.f3f4d7ae.js";import{E as d}from"./el-tag.dc6dcff0.js";const f=["innerHTML"],D=a({__name:"Detail",props:{currentRow:{type:Object,default:()=>null}},setup(a){const{t:D}=c(),u=t([{field:"title",label:D("exampleDemo.title"),span:24},{field:"author",label:D("exampleDemo.author")},{field:"display_time",label:D("exampleDemo.displayTime")},{field:"importance",label:D("exampleDemo.importance")},{field:"pageviews",label:D("exampleDemo.pageviews")},{field:"content",label:D("exampleDemo.content"),span:24}]);return(t,c)=>(o(),l(p(e),{schema:u,data:a.currentRow||{}},{importance:m((({row:e})=>[n(p(d),{type:1===e.importance?"success":2===e.importance?"warning":"danger"},{default:m((()=>[s(i(1===e.importance?p(D)("tableDemo.important"):2===e.importance?p(D)("tableDemo.good"):p(D)("tableDemo.commonly")),1)])),_:2},1032,["type"])])),content:m((({row:e})=>[r("div",{innerHTML:e.content},null,8,f)])),_:1},8,["schema","data"]))}});export{D as _};
