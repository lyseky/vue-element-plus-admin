import{F as e}from"./Form.54bd153b.js";import{d as l,b as o,H as a,r as t,C as i,s as n,x as r,o as p,h as m,w as d,g as s,e as c,t as f,c as u,Z as b,n as v,a as D,y as h,k as g}from"./index.f3f4d7ae.js";import{u as P}from"./useIcon.2bd4ec48.js";import{_ as y}from"./ContentWrap.vue_vue_type_script_setup_true_lang.24010a3e.js";import{_ as k}from"./_plugin-vue_export-helper.cdc0426e.js";import"./el-col.d0dfcaa4.js";import"./el-popper.019ca1f8.js";import"./index.a1b13704.js";import"./el-input.5ea972b7.js";import"./event.d298a7ab.js";import"./index.af14e373.js";import"./el-tag.dc6dcff0.js";import"./tsxHelper.3a3bac8b.js";import"./index.022341f5.js";import"./scroll.d7d432af.js";import"./debounce.bdf88653.js";import"./validator.1c19cce1.js";import"./el-button.bc0e1fcf.js";import"./el-input-number.3d506ff4.js";import"./el-switch.d50e6b9e.js";import"./el-divider.d4565a76.js";import"./InputPassword.ff74563d.js";import"./style.css_vue_type_style_index_0_src_true_lang.abea93e9.js";import"./aria.288df782.js";import"./browser.1d34d93c.js";import"./el-card.2c7fbfc0.js";const x=h(" Http:// "),j=h(" .com "),_={class:"value"},w={class:"link"},T={style:{float:"left"}},C={style:{float:"right","font-size":"13px",color:"var(--el-text-color-secondary)"}},S={style:{float:"left"}},$={style:{float:"right","font-size":"13px",color:"var(--el-text-color-secondary)"}},I={style:{float:"left"}},Y={style:{float:"right","font-size":"13px",color:"var(--el-text-color-secondary)"}},F={style:{float:"left"}},M={style:{float:"right","font-size":"13px",color:"var(--el-text-color-secondary)"}},N={key:0},A={class:"text"},B={key:0,class:"holiday"},E=k(l({__name:"DefaultForm",setup(l){const h=o(),{t:k}=g(),E=a((()=>h.getMobile)),G=t([]),R=(e,l)=>{l(e?G.value.filter(L(e)):G.value)},L=e=>l=>0===l.value.toLowerCase().indexOf(e.toLowerCase()),O=e=>{};i((()=>{G.value=[{value:"vue",link:"https://github.com/vuejs/vue"},{value:"element",link:"https://github.com/ElemeFE/element"},{value:"cooking",link:"https://github.com/ElemeFE/cooking"},{value:"mint-ui",link:"https://github.com/ElemeFE/mint-ui"},{value:"vuex",link:"https://github.com/vuejs/vuex"},{value:"vue-router",link:"https://github.com/vuejs/vue-router"},{value:"babel",link:"https://github.com/babel/babel"}]}));const V=["a","b","c","d","e","f","g","h","i","j"],z=t(Array.from({length:1e3}).map(((e,l)=>({value:`Option ${l+1}`,label:`${V[l%10]}${l}`})))),H=t(Array.from({length:10}).map(((e,l)=>{const o=l+1;return{value:`Group ${o}`,label:`Group ${o}`,options:Array.from({length:10}).map(((e,l)=>({value:`Option ${l+1+10*o}`,label:`${V[l%10]}${l+1+10*o}`})))}}))),W=[{value:"guide",label:"Guide",children:[{value:"disciplines",label:"Disciplines",children:[{value:"consistency",label:"Consistency"},{value:"feedback",label:"Feedback"},{value:"efficiency",label:"Efficiency"},{value:"controllability",label:"Controllability"}]},{value:"navigation",label:"Navigation",children:[{value:"side nav",label:"Side Navigation"},{value:"top nav",label:"Top Navigation"}]}]},{value:"component",label:"Component",children:[{value:"basic",label:"Basic",children:[{value:"layout",label:"Layout"},{value:"color",label:"Color"},{value:"typography",label:"Typography"},{value:"icon",label:"Icon"},{value:"button",label:"Button"}]},{value:"form",label:"Form",children:[{value:"radio",label:"Radio"},{value:"checkbox",label:"Checkbox"},{value:"input",label:"Input"},{value:"input-number",label:"InputNumber"},{value:"select",label:"Select"},{value:"cascader",label:"Cascader"},{value:"switch",label:"Switch"},{value:"slider",label:"Slider"},{value:"time-picker",label:"TimePicker"},{value:"date-picker",label:"DatePicker"},{value:"datetime-picker",label:"DateTimePicker"},{value:"upload",label:"Upload"},{value:"rate",label:"Rate"},{value:"form",label:"Form"}]},{value:"data",label:"Data",children:[{value:"table",label:"Table"},{value:"tag",label:"Tag"},{value:"progress",label:"Progress"},{value:"tree",label:"Tree"},{value:"pagination",label:"Pagination"},{value:"badge",label:"Badge"}]},{value:"notice",label:"Notice",children:[{value:"alert",label:"Alert"},{value:"loading",label:"Loading"},{value:"message",label:"Message"},{value:"message-box",label:"MessageBox"},{value:"notification",label:"Notification"}]},{value:"navigation",label:"Navigation",children:[{value:"menu",label:"Menu"},{value:"tabs",label:"Tabs"},{value:"breadcrumb",label:"Breadcrumb"},{value:"dropdown",label:"Dropdown"},{value:"steps",label:"Steps"}]},{value:"others",label:"Others",children:[{value:"dialog",label:"Dialog"},{value:"tooltip",label:"Tooltip"},{value:"popover",label:"Popover"},{value:"card",label:"Card"},{value:"carousel",label:"Carousel"},{value:"collapse",label:"Collapse"}]}]}],U=()=>{const e=[];for(let l=1;l<=15;l++)e.push({value:l,desc:`Option ${l}`,disabled:l%4==0});return e},Z=["2021-10-01","2021-10-02","2021-10-03","2021-10-04","2021-10-05","2021-10-06","2021-10-07"],q=({dayjs:e})=>Z.includes(e.format("YYYY-MM-DD")),J=n([{field:"field1",label:k("formDemo.input"),component:"Divider"},{field:"field2",label:k("formDemo.default"),component:"Input"},{field:"field3",label:`${k("formDemo.icon")}1`,component:"Input",componentProps:{suffixIcon:P({icon:"ep:calendar"}),prefixIcon:P({icon:"ep:calendar"})}},{field:"field4",label:`${k("formDemo.icon")}2`,component:"Input",componentProps:{slots:{suffix:!0,prefix:!0}}},{field:"field5",label:k("formDemo.mixed"),component:"Input",componentProps:{slots:{prepend:!0,append:!0}}},{field:"field6",label:k("formDemo.textarea"),component:"Input",componentProps:{type:"textarea",rows:1}},{field:"field7",label:k("formDemo.autocomplete"),component:"Divider"},{field:"field8",label:k("formDemo.default"),component:"Autocomplete",componentProps:{fetchSuggestions:R,onSelect:O}},{field:"field9",label:k("formDemo.slot"),component:"Autocomplete",componentProps:{fetchSuggestions:R,onSelect:O,slots:{default:!0}}},{field:"field10",component:"Divider",label:k("formDemo.inputNumber")},{field:"field11",label:k("formDemo.default"),component:"InputNumber",value:0},{field:"field12",label:k("formDemo.position"),component:"InputNumber",componentProps:{controlsPosition:"right"},value:0},{field:"field13",label:k("formDemo.select"),component:"Divider"},{field:"field14",label:k("formDemo.default"),component:"Select",componentProps:{options:[{label:"option1",value:"1"},{label:"option2",value:"2"}]}},{field:"field15",label:k("formDemo.slot"),component:"Select",componentProps:{options:[{label:"option1",value:"1"},{label:"option2",value:"2"}],optionsSlot:!0}},{field:"field16",label:k("formDemo.selectGroup"),component:"Select",componentProps:{options:[{label:"option1",options:[{label:"option1-1",value:"1-1"},{label:"option1-2",value:"1-2"}]},{label:"option2",options:[{label:"option2-1",value:"2-1"},{label:"option2-2",value:"2-2"}]}]}},{field:"field17",label:`${k("formDemo.selectGroup")}${k("formDemo.slot")}`,component:"Select",componentProps:{options:[{label:"option1",options:[{label:"option1-1",value:"1-1"},{label:"option1-2",value:"1-2"}]},{label:"option2",options:[{label:"option2-1",value:"2-1"},{label:"option2-2",value:"2-2"}]}],optionsSlot:!0}},{field:"field18",label:`${k("formDemo.selectV2")}`,component:"Divider"},{field:"field19",label:k("formDemo.default"),component:"SelectV2",componentProps:{options:z.value}},{field:"field20",label:k("formDemo.slot"),component:"SelectV2",componentProps:{options:z.value,slots:{default:!0}}},{field:"field21",label:k("formDemo.selectGroup"),component:"SelectV2",componentProps:{options:H.value}},{field:"field22",label:`${k("formDemo.selectGroup")}${k("formDemo.slot")}`,component:"SelectV2",componentProps:{options:H.value,slots:{default:!0}}},{field:"field23",label:k("formDemo.cascader"),component:"Divider"},{field:"field24",label:k("formDemo.default"),component:"Cascader",componentProps:{options:W}},{field:"field25",label:k("formDemo.slot"),component:"Cascader",componentProps:{options:W,slots:{default:!0}}},{field:"field26",label:k("formDemo.switch"),component:"Divider"},{field:"field27",label:k("formDemo.default"),component:"Switch",value:!1},{field:"field28",label:k("formDemo.icon"),component:"Switch",value:!1,componentProps:{activeIcon:P({icon:"ep:check"}),inactiveIcon:P({icon:"ep:close"})}},{field:"field29",label:k("formDemo.rate"),component:"Divider"},{field:"field30",label:k("formDemo.default"),component:"Rate",value:null},{field:"field31",label:k("formDemo.icon"),component:"Rate",value:null,componentProps:{voidIcon:P({icon:"ep:chat-round"}),icons:[P({icon:"ep:chat-round"}),P({icon:"ep:chat-line-round"}),P({icon:"ep:chat-dot-round"})]}},{field:"field32",label:k("formDemo.colorPicker"),component:"Divider"},{field:"field33",label:k("formDemo.default"),component:"ColorPicker"},{field:"field34",label:k("formDemo.transfer"),component:"Divider"},{field:"field35",label:k("formDemo.default"),component:"Transfer",componentProps:{props:{key:"value",label:"desc",disabled:"disabled"},data:U()},value:[],colProps:{span:24}},{field:"field36",label:k("formDemo.slot"),component:"Transfer",componentProps:{props:{key:"value",label:"desc",disabled:"disabled"},leftDefaultChecked:[2,3],rightDefaultChecked:[1],data:U(),slots:{default:!0}},value:[1],colProps:{span:24}},{field:"field37",label:`${k("formDemo.render")}`,component:"Transfer",componentProps:{props:{key:"value",label:"desc",disabled:"disabled"},leftDefaultChecked:[2,3],rightDefaultChecked:[1],data:U(),renderContent:(e,l)=>e("span",null,`${l.value} - ${l.desc}`)},value:[1],colProps:{span:24}},{field:"field38",label:k("formDemo.radio"),component:"Divider"},{field:"field39",label:k("formDemo.default"),component:"Radio",componentProps:{options:[{label:"option-1",value:"1"},{label:"option-2",value:"2"}]}},{field:"field40",label:k("formDemo.button"),component:"RadioButton",componentProps:{options:[{label:"option-1",value:"1"},{label:"option-2",value:"2"}]}},{field:"field41",label:k("formDemo.checkbox"),component:"Divider"},{field:"field42",label:k("formDemo.default"),component:"Checkbox",value:[],componentProps:{options:[{label:"option-1",value:"1"},{label:"option-2",value:"2"},{label:"option-3",value:"23"}]}},{field:"field43",label:k("formDemo.button"),component:"CheckboxButton",value:[],componentProps:{options:[{label:"option-1",value:"1"},{label:"option-2",value:"2"},{label:"option-3",value:"23"}]}},{field:"field44",component:"Divider",label:k("formDemo.slider")},{field:"field45",component:"Slider",label:k("formDemo.default"),value:0},{field:"field46",component:"Divider",label:k("formDemo.datePicker")},{field:"field47",component:"DatePicker",label:k("formDemo.default"),componentProps:{type:"date"}},{field:"field48",component:"DatePicker",label:k("formDemo.shortcuts"),componentProps:{type:"date",disabledDate:e=>e.getTime()>Date.now(),shortcuts:[{text:k("formDemo.today"),value:new Date},{text:k("formDemo.yesterday"),value:()=>{const e=new Date;return e.setTime(e.getTime()-864e5),e}},{text:k("formDemo.aWeekAgo"),value:()=>{const e=new Date;return e.setTime(e.getTime()-6048e5),e}}]}},{field:"field49",component:"DatePicker",label:k("formDemo.week"),componentProps:{type:"week",format:`[${k("formDemo.week")}] ww`}},{field:"field50",component:"DatePicker",label:k("formDemo.year"),componentProps:{type:"year"}},{field:"field51",component:"DatePicker",label:k("formDemo.month"),componentProps:{type:"month"}},{field:"field52",component:"DatePicker",label:k("formDemo.dates"),componentProps:{type:"dates"}},{field:"field53",component:"DatePicker",label:k("formDemo.daterange"),componentProps:{type:"daterange"}},{field:"field54",component:"DatePicker",label:k("formDemo.monthrange"),componentProps:{type:"monthrange"}},{field:"field55",component:"DatePicker",label:k("formDemo.slot"),componentProps:{type:"date",format:"YYYY/MM/DD",valueFormat:"YYYY-MM-DD",slots:{default:!0}}},{field:"field56",component:"Divider",label:k("formDemo.dateTimePicker")},{field:"field57",component:"DatePicker",label:k("formDemo.default"),componentProps:{type:"datetime"}},{field:"field58",component:"DatePicker",label:k("formDemo.shortcuts"),componentProps:{type:"datetime",shortcuts:[{text:k("formDemo.today"),value:new Date},{text:k("formDemo.yesterday"),value:()=>{const e=new Date;return e.setTime(e.getTime()-864e5),e}},{text:k("formDemo.aWeekAgo"),value:()=>{const e=new Date;return e.setTime(e.getTime()-6048e5),e}}]}},{field:"field59",component:"DatePicker",label:k("formDemo.dateTimerange"),componentProps:{type:"datetimerange"}},{field:"field60",component:"Divider",label:k("formDemo.timePicker")},{field:"field61",component:"TimePicker",label:k("formDemo.default")},{field:"field62",component:"Divider",label:k("formDemo.timeSelect")},{field:"field63",component:"TimeSelect",label:k("formDemo.default")}]);return(l,o)=>{const a=r("Icon");return p(),m(D(y),{title:D(k)("formDemo.defaultForm"),message:D(k)("formDemo.formDes")},{default:d((()=>[s(D(e),{schema:J,"label-width":"auto","label-position":D(E)?"top":"right"},{"field4-prefix":d((()=>[s(a,{icon:"ep:calendar",class:"el-input__icon"})])),"field4-suffix":d((()=>[s(a,{icon:"ep:calendar",class:"el-input__icon"})])),"field5-prepend":d((()=>[x])),"field5-append":d((()=>[j])),"field9-default":d((({item:e})=>[c("div",_,f(e.value),1),c("span",w,f(e.link),1)])),"field15-option":d((({item:e})=>[c("span",T,f(e.label),1),c("span",C,f(e.value),1)])),"field17-option":d((({item:e})=>[c("span",S,f(e.label),1),c("span",$,f(e.value),1)])),"field20-default":d((({item:e})=>[c("span",I,f(e.label),1),c("span",Y,f(e.value),1)])),"field22-default":d((({item:e})=>[c("span",F,f(e.label),1),c("span",M,f(e.value),1)])),"field25-default":d((({node:e,data:l})=>[c("span",null,f(l.label),1),e.isLeaf?b("v-if",!0):(p(),u("span",N," ("+f(l.children.length)+") ",1))])),"field36-default":d((({option:e})=>[c("span",null,f(e.value)+" - "+f(e.desc),1)])),"field55-default":d((e=>[c("div",{class:v(["cell",{current:e.isCurrent}])},[c("span",A,f(e.text),1),q(e)?(p(),u("span",B)):b("v-if",!0)],2)])),_:1},8,["schema","label-position"])])),_:1},8,["title","message"])}}}),[["__scopeId","data-v-fdc075d0"]]);export{E as default};
