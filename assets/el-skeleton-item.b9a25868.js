import{r as e,C as a,v as t,E as s,d as l,S as n,o,c as r,h as u,a as i,c2 as p,Z as c,n as m,_ as d,J as k,a0 as v,ab as f,z as y,g,Y as h,L as w,a2 as b,a3 as x}from"./index.f3f4d7ae.js";const S=s({animated:{type:Boolean,default:!1},count:{type:Number,default:1},rows:{type:Number,default:3},loading:{type:Boolean,default:!0},throttle:{type:Number}});var _=d(l({name:"ElSkeletonItem",props:s({variant:{type:String,values:["circle","rect","h1","h3","text","caption","p","image","button"],default:"text"}}),setup(e){const a=n("skeleton");return(e,t)=>(o(),r("div",{class:m([i(a).e("item"),i(a).e(e.variant)])},["image"===e.variant?(o(),u(i(p),{key:0})):c("v-if",!0)],2))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/skeleton/src/skeleton-item.vue"]]);const E=b(d(l({name:"ElSkeleton",props:S,setup(s,{expose:l}){const p=s,d=n("skeleton"),b=((s,l=0)=>{if(0===l)return s;const n=e(!1);let o=0;const r=()=>{o&&clearTimeout(o),o=window.setTimeout((()=>{n.value=s.value}),l)};return a(r),t((()=>s.value),(e=>{e?r():n.value=e})),n})(k(p,"loading"),p.throttle);return l({uiLoading:b}),(e,a)=>i(b)?(o(),r("div",h({key:0,class:[i(d).b(),i(d).is("animated",e.animated)]},e.$attrs),[(o(!0),r(v,null,f(e.count,(a=>(o(),r(v,{key:a},[e.loading?y(e.$slots,"template",{key:a},(()=>[g(_,{class:m(i(d).is("first")),variant:"p"},null,8,["class"]),(o(!0),r(v,null,f(e.rows,(a=>(o(),u(_,{key:a,class:m([i(d).e("paragraph"),i(d).is("last",a===e.rows&&e.rows>1)]),variant:"p"},null,8,["class"])))),128))])):c("v-if",!0)],64)))),128))],16)):y(e.$slots,"default",w(h({key:1},e.$attrs)))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/skeleton/src/skeleton.vue"]]),{SkeletonItem:_});x(_);export{E};
