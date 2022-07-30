import{_ as e}from"./ContentWrap.vue_vue_type_script_setup_true_lang.a51315dc.js";import{d as a,s as t,aQ as l,r as o,o as i,c as s,g as r,w as n,a as d,y as m,t as p,e as b,a0 as c,k as u}from"./index.1a584bcd.js";import{_ as f}from"./Table.vue_vue_type_script_lang.2f321e34.js";import{g}from"./index.ccc64ebb.js";import{E as _}from"./el-tag.31c6003e.js";import{E as D}from"./el-button.6ced23c5.js";import{u as v}from"./useTable.4d2ca7c4.js";import"./el-card.999e59e2.js";import"./el-popper.24640a5f.js";import"./index.8e807811.js";import"./tsxHelper.53794469.js";import"./index.940ec409.js";import"./event.d298a7ab.js";import"./el-input.7fd58405.js";import"./index.2491c0b3.js";import"./scroll.1a09b5b9.js";import"./debounce.4f0af629.js";import"./validator.1fd8b150.js";import"./el-message-box.9e9aad09.js";import"./el-overlay.93c3f3c1.js";import"./vnode.50153e34.js";import"./aria.288df782.js";const j={class:"ml-30px"},x=a({__name:"RefTable",setup(a){const{t:x}=u(),h=t([{field:"index",label:x("tableDemo.index"),type:"index"},{field:"content",label:x("tableDemo.header"),children:[{field:"title",label:x("tableDemo.title")},{field:"author",label:x("tableDemo.author")},{field:"display_time",label:x("tableDemo.displayTime")},{field:"importance",label:x("tableDemo.importance"),formatter:(e,a,t)=>l(_,{type:1===t?"success":2===t?"warning":"danger"},(()=>x(1===t?"tableDemo.important":2===t?"tableDemo.good":"tableDemo.commonly")))},{field:"pageviews",label:x("tableDemo.pageviews")}]},{field:"action",label:x("tableDemo.action")}]),{register:y,tableObject:k,methods:C}=v({getListApi:g,response:{list:"list",total:"total"},props:{columns:h}}),{getList:w}=C;w();const P=o(),R=o(),T=e=>{R.value=e?{total:k.total}:void 0},S=e=>{var a;null==(a=d(P))||a.setProps({reserveIndex:e})},z=e=>{var a;null==(a=d(P))||a.setProps({selection:e})},E=o(1),$=()=>{var e;null==(e=d(P))||e.setColumn([{field:"title",path:"label",value:`${x("tableDemo.title")}${d(E)}`}]),E.value++},I=e=>{var a;null==(a=d(P))||a.setProps({expand:e})};return(a,t)=>(i(),s(c,null,[r(d(e),{title:`RefTable ${d(x)("tableDemo.operate")}`},{default:n((()=>[r(d(D),{onClick:t[0]||(t[0]=e=>T(!0))},{default:n((()=>[m(p(d(x)("tableDemo.show"))+" "+p(d(x)("tableDemo.pagination")),1)])),_:1}),r(d(D),{onClick:t[1]||(t[1]=e=>T(!1))},{default:n((()=>[m(p(d(x)("tableDemo.hidden"))+" "+p(d(x)("tableDemo.pagination")),1)])),_:1}),r(d(D),{onClick:t[2]||(t[2]=e=>S(!0))},{default:n((()=>[m(p(d(x)("tableDemo.reserveIndex")),1)])),_:1}),r(d(D),{onClick:t[3]||(t[3]=e=>S(!1))},{default:n((()=>[m(p(d(x)("tableDemo.restoreIndex")),1)])),_:1}),r(d(D),{onClick:t[4]||(t[4]=e=>z(!0))},{default:n((()=>[m(p(d(x)("tableDemo.showSelections")),1)])),_:1}),r(d(D),{onClick:t[5]||(t[5]=e=>z(!1))},{default:n((()=>[m(p(d(x)("tableDemo.hiddenSelections")),1)])),_:1}),r(d(D),{onClick:$},{default:n((()=>[m(p(d(x)("tableDemo.changeTitle")),1)])),_:1}),r(d(D),{onClick:t[6]||(t[6]=e=>I(!0))},{default:n((()=>[m(p(d(x)("tableDemo.showExpandedRows")),1)])),_:1}),r(d(D),{onClick:t[7]||(t[7]=e=>I(!1))},{default:n((()=>[m(p(d(x)("tableDemo.hiddenExpandedRows")),1)])),_:1})])),_:1},8,["title"]),r(d(e),{title:`RefTable ${d(x)("tableDemo.example")}`},{default:n((()=>[r(d(f),{ref_key:"tableRef",ref:P,pageSize:d(k).pageSize,"onUpdate:pageSize":t[8]||(t[8]=e=>d(k).pageSize=e),currentPage:d(k).currentPage,"onUpdate:currentPage":t[9]||(t[9]=e=>d(k).currentPage=e),data:d(k).tableList,loading:d(k).loading,pagination:R.value,onRegister:d(y)},{action:n((e=>[r(d(D),{type:"primary",onClick:e=>{}},{default:n((()=>[m(p(d(x)("tableDemo.action")),1)])),_:2},1032,["onClick"])])),expand:n((e=>[b("div",j,[b("div",null,p(d(x)("tableDemo.title"))+"："+p(e.row.title),1),b("div",null,p(d(x)("tableDemo.author"))+"："+p(e.row.author),1),b("div",null,p(d(x)("tableDemo.displayTime"))+"："+p(e.row.display_time),1)])])),_:1},8,["pageSize","currentPage","data","loading","pagination","onRegister"])])),_:1},8,["title"])],64))}});export{x as default};
