"use strict";(self.webpackChunkmydemo=self.webpackChunkmydemo||[]).push([[8956],{8956:(e,s,t)=>{t.r(s),t.d(s,{default:()=>i});var l=t(5043),a=t(6817),r=t(579);const i=function(){const[e,s]=(0,l.useState)([]),[t,i]=(0,l.useState)([]),[n,d]=(0,l.useState)("");return(0,r.jsxs)("div",{children:[(0,r.jsx)("h3",{className:"mt-5",children:"Todo App "}),(0,r.jsx)("p",{children:"Name based operation"}),(0,r.jsx)("div",{children:(0,r.jsxs)("form",{action:"",children:[(0,r.jsx)("label",{htmlFor:"task",children:"Add the Task"})," ",(0,r.jsx)("br",{}),(0,r.jsx)("input",{type:"text",name:"task",id:"task",value:n,placeholder:"Enter the task ...",className:"form-Input",onInput:e=>{0!==e.target.value.trim()&&d(e.target.value)},required:!0}),(0,r.jsx)("button",{onClick:t=>{t.preventDefault();const l=n.trim();l&&!e.includes(l)&&s([...e,l]),d("")},className:"ms-3 bg-success border-0 text-white px-3 py-2 rounded",children:"Add Task"})]})}),(0,r.jsxs)("div",{className:"d-flex justify-content-center align-item-center",children:[(0,r.jsxs)("div",{className:"mt-4 w-25 ms-4 me-3",children:[(0,r.jsx)("h3",{children:"Task List "}),e.map(((l,a)=>(0,r.jsx)("ul",{children:(0,r.jsxs)("li",{children:[l,(0,r.jsx)("button",{onClick:()=>{return a=l,i([...t,a]),void s([...e.filter((e=>e!==a))]);var a},className:"ms-3 bg-danger rounded border-0 px-2 py-1 text-white",children:"Compelted"},a),(0,r.jsxs)("select",{name:"select_Priority",id:"select_Priority",className:"ms-2 btn-group py-1",value:"select",onChange:t=>((t,l)=>{const a=e.filter((e=>e!==l)),r="high"===t.target.value?[l,...a]:[...a,l];s(r)})(t,l),children:[(0,r.jsx)("option",{value:"select",disabled:!0,children:"Select Priority"}),(0,r.jsx)("option",{value:"high",children:"High"}),(0,r.jsx)("option",{value:"low",children:"Low"})]})]},a)},a))),0===e.length?(0,r.jsx)("img",{src:a,alt:"No Data found",className:"w-100"}):" "]}),(0,r.jsxs)("div",{className:"mt-4 w-25 ms-5",children:[(0,r.jsx)("h3",{children:"Complted List "}),t.map(((l,a)=>(0,r.jsx)("ul",{children:(0,r.jsxs)("li",{children:[l,(0,r.jsx)("button",{onClick:a=>{return r=l,s([...e,r]),void i([...t.filter((e=>e!==r))]);var r},className:"ms-3 bg-warning rounded border-0 px-2 py-1",children:"Revent"})]})},a))),0===t.length?(0,r.jsx)("img",{src:a,alt:"No Data found",className:"w-100"}):" "]})]})]})}},6817:(e,s,t)=>{e.exports=t.p+"static/media/NoDataImg.d931f8e8b9ca19de5148.png"}}]);
//# sourceMappingURL=8956.b09e24f4.chunk.js.map