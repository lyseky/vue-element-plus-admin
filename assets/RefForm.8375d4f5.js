import{F as e}from"./Form.54bd153b.js";import{_ as l}from"./ContentWrap.vue_vue_type_script_setup_true_lang.24010a3e.js";import{d as o,s as t,r as a,o as i,c as m,g as r,w as n,a as d,y as f,t as s,a0 as p,k as c,c7 as u}from"./index.f3f4d7ae.js";import{E as b}from"./el-button.bc0e1fcf.js";import{u as v}from"./useValidator.e06c4c9d.js";import"./el-col.d0dfcaa4.js";import"./el-popper.019ca1f8.js";import"./index.a1b13704.js";import"./el-input.5ea972b7.js";import"./event.d298a7ab.js";import"./index.af14e373.js";import"./el-tag.dc6dcff0.js";import"./tsxHelper.3a3bac8b.js";import"./index.022341f5.js";import"./scroll.d7d432af.js";import"./debounce.bdf88653.js";import"./validator.1c19cce1.js";import"./el-input-number.3d506ff4.js";import"./el-switch.d50e6b9e.js";import"./el-divider.d4565a76.js";import"./InputPassword.ff74563d.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./style.css_vue_type_style_index_0_src_true_lang.abea93e9.js";import"./aria.288df782.js";import"./browser.1d34d93c.js";import"./el-card.2c7fbfc0.js";const _=o({__name:"RefForm",setup(o){const{required:_}=v(),{t:D}=c(),j=t([{field:"field1",label:D("formDemo.input"),component:"Input",formItemProps:{rules:[_()]}},{field:"field2",label:D("formDemo.select"),component:"Select",componentProps:{options:[{label:"option1",value:"1"},{label:"option2",value:"2"}]}},{field:"field3",label:D("formDemo.radio"),component:"Radio",componentProps:{options:[{label:"option-1",value:"1"},{label:"option-2",value:"2"}]}},{field:"field4",label:D("formDemo.checkbox"),component:"Checkbox",value:[],componentProps:{options:[{label:"option-1",value:"1"},{label:"option-2",value:"2"},{label:"option-3",value:"3"}]}},{field:"field5",component:"DatePicker",label:D("formDemo.datePicker"),componentProps:{type:"date"}},{field:"field6",component:"TimeSelect",label:D("formDemo.timeSelect")}]),h=a(),k=e=>{var l;null==(l=d(h))||l.setProps({labelWidth:e})},C=e=>{var l;null==(l=d(h))||l.setProps({size:e})},P=e=>{var l;null==(l=d(h))||l.setProps({disabled:e})},g=e=>{var l,o;e?null==(l=d(h))||l.delSchema("field2"):e||"field2"===j[1].field||null==(o=d(h))||o.addSchema({field:"field2",label:D("formDemo.select"),component:"Select",componentProps:{options:[{label:"option1",value:"1"},{label:"option2",value:"2"}]}},1)},x=e=>{var l,o;const t=null==(l=d(h))?void 0:l.getElFormRef();e?null==t||t.resetFields():null==(o=d(h))||o.setValues({field1:"field1",field2:"2",field3:"2",field4:["1","3"],field5:"2022-01-27",field6:"17:00"})},y=a(7),F=()=>{var e;null==(e=d(h))||e.setSchema([{field:"field2",path:"label",value:`${D("formDemo.select")} ${y.value}`},{field:"field2",path:"componentProps.options",value:[{label:"option-1",value:"1"},{label:"option-2",value:"2"},{label:"option-3",value:"3"}]}]),y.value++},S=()=>{var e,l;d(y)%2==0?null==(e=d(h))||e.addSchema({field:`field${d(y)}`,label:`${D("formDemo.input")}${d(y)}`,component:"Input"}):null==(l=d(h))||l.addSchema({field:`field${d(y)}`,label:`${D("formDemo.input")}${d(y)}`,component:"Input"},d(y)),y.value++},$=()=>{var e,l;const o=null==(e=d(h))?void 0:e.getElFormRef();null==(l=null==o?void 0:o.validate())||l.catch((()=>{}))},R=()=>{var e;const l=null==(e=d(h))?void 0:e.getElFormRef();null==l||l.resetFields()},w=async()=>{var e;const l=await u();l&&(null==(e=d(h))||e.setSchema([{field:"field2",path:"componentProps.options",value:l.data}]))};return(o,t)=>(i(),m(p,null,[r(d(l),{title:`RefForm ${d(D)("formDemo.operate")}`},{default:n((()=>[r(d(b),{onClick:t[0]||(t[0]=e=>k(150))},{default:n((()=>[f(s(d(D)("formDemo.change"))+" labelWidth",1)])),_:1}),r(d(b),{onClick:t[1]||(t[1]=e=>k("auto"))},{default:n((()=>[f(s(d(D)("formDemo.restore"))+" labelWidth",1)])),_:1}),r(d(b),{onClick:t[2]||(t[2]=e=>C("large"))},{default:n((()=>[f(s(d(D)("formDemo.change"))+" size",1)])),_:1}),r(d(b),{onClick:t[3]||(t[3]=e=>C("default"))},{default:n((()=>[f(s(d(D)("formDemo.restore"))+" size",1)])),_:1}),r(d(b),{onClick:t[4]||(t[4]=e=>P(!0))},{default:n((()=>[f(s(d(D)("formDemo.disabled")),1)])),_:1}),r(d(b),{onClick:t[5]||(t[5]=e=>P(!1))},{default:n((()=>[f(s(d(D)("formDemo.disablement")),1)])),_:1}),r(d(b),{onClick:t[6]||(t[6]=e=>g(!0))},{default:n((()=>[f(s(d(D)("formDemo.delete"))+" "+s(d(D)("formDemo.select")),1)])),_:1}),r(d(b),{onClick:t[7]||(t[7]=e=>g(!1))},{default:n((()=>[f(s(d(D)("formDemo.add"))+" "+s(d(D)("formDemo.select")),1)])),_:1}),r(d(b),{onClick:t[8]||(t[8]=e=>x(!1))},{default:n((()=>[f(s(d(D)("formDemo.setValue")),1)])),_:1}),r(d(b),{onClick:t[9]||(t[9]=e=>x(!0))},{default:n((()=>[f(s(d(D)("formDemo.resetValue")),1)])),_:1}),r(d(b),{onClick:F},{default:n((()=>[f(s(d(D)("formDemo.set"))+" "+s(d(D)("formDemo.select"))+" label ",1)])),_:1}),r(d(b),{onClick:S},{default:n((()=>[f(s(d(D)("formDemo.add"))+" "+s(d(D)("formDemo.subitem")),1)])),_:1}),r(d(b),{onClick:$},{default:n((()=>[f(s(d(D)("formDemo.formValidation")),1)])),_:1}),r(d(b),{onClick:R},{default:n((()=>[f(s(d(D)("formDemo.verifyReset")),1)])),_:1}),r(d(b),{onClick:w},{default:n((()=>[f(s(d(D)("searchDemo.dynamicOptions")),1)])),_:1})])),_:1},8,["title"]),r(d(l),{title:`RefForm ${d(D)("formDemo.example")}`},{default:n((()=>[r(d(e),{schema:j,ref_key:"formRef",ref:h},null,8,["schema"])])),_:1},8,["title"])],64))}});export{_ as default};
