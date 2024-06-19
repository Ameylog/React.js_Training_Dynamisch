"use strict";(self.webpackChunkmydemo=self.webpackChunkmydemo||[]).push([[1497],{3817:(e,t,s)=>{s.r(t),s.d(t,{default:()=>c});var d=s(5043),o=s(7154),l=s(1036),r=(s(2342),s(579));const c=function(){const[e,t]=(0,d.useState)([]),[s,c]=(0,d.useState)({userId:"",title:"",body:""});(0,d.useEffect)((()=>{n()}),[]);const n=async()=>{try{const e=(await o.A.get("https://jsonplaceholder.typicode.com/posts")).data;t([...e])}catch(e){console.log(e)}},i=e=>{c({...s,[e.target.name]:e.target.value})};return(0,r.jsxs)("div",{children:[(0,r.jsx)("h3",{children:"Fetching Api using Axios "})," ",(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("input",{type:"number",name:"userId",id:"userId",placeholder:"Add userID",onChange:i,value:s.userId})," ",(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),(0,r.jsx)("input",{type:"text",name:"title",id:"title",placeholder:"Add title",onChange:i,value:s.title}),(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),(0,r.jsx)("input",{type:"text",name:"body",id:"body",placeholder:"Add description",onChange:i,value:s.body})]}),(0,r.jsx)("br",{}),(0,r.jsxs)("div",{style:{display:"flex",justifyContent:"center"},children:[(0,r.jsx)("button",{onClick:async()=>{try{200===(await o.A.delete("https://jsonplaceholder.typicode.com/posts/".concat(parseInt(s.userId)))).status&&l.oR.warning("Record Deleted Sucefully"),c({userId:"",title:"",body:""})}catch(e){console.log(e)}},style:{border:"none",background:"#640D6B",color:"white",padding:"12px",borderRadius:"6%"},children:"Delete Record"}),(0,r.jsx)("button",{onClick:async()=>{try{const e=await o.A.post("https://jsonplaceholder.typicode.com/posts",s);201===e.status&&l.oR.success("Record Added Sucessfully");const t=e.data;c({userId:"",title:"",body:""}),console.log(t)}catch(e){console.log(e)}},style:{marginLeft:"15px",border:"none",background:"#41B06E",borderRadius:"6%"},children:"Create Record"}),(0,r.jsx)("button",{onClick:async()=>{try{const e=await o.A.put("https://jsonplaceholder.typicode.com/posts/1",s);console.log(e.data),200===e.status&&l.oR.success("Record Updated Sucessfully"),c({userId:"",title:"",body:""})}catch(e){console.log(e)}},style:{marginLeft:"15px",border:"none",background:"#5BBCFF",borderRadius:"6%"},children:"Update Record"})]})]}),(0,r.jsx)(l.N9,{}),(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),(0,r.jsx)("div",{style:{marginLeft:"20%",marginBottom:"5%",marginRight:"5%"},children:(0,r.jsxs)("table",{border:"1px solid black",children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{style:{border:"1px solid black"},children:"ID"}),(0,r.jsx)("th",{style:{border:"1px solid black"},children:"Title"}),(0,r.jsx)("th",{style:{border:"1px solid black"},children:"Completed"})]})}),(0,r.jsx)("tbody",{children:e.map(((e,t)=>(0,r.jsxs)("tr",{style:{border:"1px solid black"},children:[(0,r.jsx)("td",{style:{border:"1px solid black"},children:e.id}),(0,r.jsx)("td",{style:{border:"1px solid black"},children:e.title}),(0,r.jsx)("td",{style:{border:"1px solid black"},children:e.body})]},e.id)))})]})})]})}}}]);
//# sourceMappingURL=1497.26a921b7.chunk.js.map