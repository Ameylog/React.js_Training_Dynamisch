"use strict";(self.webpackChunkmydemo=self.webpackChunkmydemo||[]).push([[7902],{7902:(n,t,e)=>{e.r(t),e.d(t,{default:()=>a});var s=e(5043);const r=function(n){const[t,e]=(0,s.useState)(null),[r,o]=(0,s.useState)(!0),[a,c]=(0,s.useState)(null);return(0,s.useEffect)((()=>(async function(){try{const t=await fetch(n);if(!t.ok)throw new Error("Failed to fetch data");const s=await t.json();e(s)}catch(a){c(a)}finally{o(!1)}}(),()=>{e(null),o(!0),c(null)})),[n]),{data:t,isLoading:r,error:a}};var o=e(579);const a=function(){const{data:n,isLoading:t,error:e}=r("https://jsonplaceholder.typicode.com/users");return t?(0,o.jsx)("div",{children:"Loading..."}):e?(0,o.jsxs)("div",{children:["Error: ",e.message]}):(0,o.jsxs)("div",{children:[(0,o.jsx)("h1",{children:"Data from API:"}),(0,o.jsx)("pre",{children:JSON.stringify(n,null,2)}),console.log(JSON.stringify(n,null,2))]})}}}]);
//# sourceMappingURL=7902.f157cb6c.chunk.js.map