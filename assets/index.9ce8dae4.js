import{n as L,j as R,r as a,R as D,a as I}from"./vendor.48cf8745.js";const P=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))u(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const e of n.addedNodes)e.tagName==="LINK"&&e.rel==="modulepreload"&&u(e)}).observe(document,{childList:!0,subtree:!0});function c(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerpolicy&&(n.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?n.credentials="include":t.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function u(t){if(t.ep)return;t.ep=!0;const n=c(t);fetch(t.href,n)}};P();const E=(l,r)=>1*1/(1+1*Math.pow(10,1*(l-r)/200)),F=(l,r)=>{const u=E(l,r),t=E(r,l);let n,e;return n=l+42*(1-t),e=r+42*(0-u),console.log(42*(1-t),"|",42*(0-u)),[n,e]},M=L("div")({display:"flex",justifyContent:"center",alignItems:"center","&> button":{padding:"8px 16px",fontSize:"1.25em",margin:"0 1em"}}),o=R.exports.jsx,f=R.exports.jsxs,N=R.exports.Fragment,A=({data:l=[]})=>{const r=L("div")({display:"grid",gridTemplateColumns:"repeat(3, 1fr)",color:"white",gap:"1em","&> .rank":{display:"flex",justifyContent:"center"}});return o(M,{children:f(r,{children:[o("h3",{className:"rank",children:"Rank"}),o("h3",{className:"rank",children:"Title"}),o("h3",{className:"rank",children:"Elo"}),l.map((c,u)=>f(N,{children:[o("div",{className:"rank",children:u},Math.floor(Math.random()*1e8)+1),o("div",{children:c.title},Math.floor(Math.random()*1e8)+1),o("div",{children:c.elo},Math.floor(Math.random()*1e8)+1)]}))]})})};function J(){console.time("LoadTime"),a.exports.useEffect(()=>{console.timeEnd("LoadTime")},[]);const[l,r]=a.exports.useState(0),[c,u]=a.exports.useState(0),[t,n]=a.exports.useState(1),[e,h]=a.exports.useState([{title:"Enter List"},{title:"Enter List"}]),[g,k]=a.exports.useState([]),b=a.exports.useRef(),w=a.exports.useRef(),[C,O]=a.exports.useState(""),x=a.exports.useRef();a.exports.useRef();const S=()=>Math.floor(Math.random()*e.length),v=(s,i)=>{console.log(s,"wins");const p=F(e[s].elo,e[i].elo);let d=e;d[s]={title:e[s].title,elo:p[0]},d[i]={title:e[i].title,elo:p[1]},h(d);const y=S();let m=S();for(;m===y;)m=S();u(y),n(m),k(e.sort((T,j)=>j.elo-T.elo)),r(l+1),console.log(e[y].title,"vs",e[m].title)};return f(N,{children:[o("textarea",{ref:b}),o("textarea",{ref:w}),o("input",{type:"text",placeholder:"Title for list",ref:x}),o("button",{onClick:()=>{const s=b.current.value.split(`
`),i=w.current.value.split(`
`);let p=[];for(let d in s)p.push({title:s[d],elo:i[d]*20});r(0),h(p),O(x.current.value)},children:"New set"}),o("button",{onClick:()=>{let s=`ERROR:
`;const i=x.current.value.trim();if(i===null&&(s+=`set title
`),localStorage.getItem("comparisonData-"+i)===null&&(s+=`no set found
`),s!==`ERROR:
`){alert(s);return}r(parseInt(localStorage.getItem("conparisonCount-"+i))),h(JSON.parse(localStorage.getItem("comparisonData-"+i))),O(i)},children:"Load set"}),f("h1",{style:{color:"white"},children:["What is better? Count: ",l]}),f(M,{children:[o("button",{onClick:s=>v(c,t),id:"1",children:e[c].title}),o("button",{onClick:s=>v(t,c),children:e[t].title})]}),o("button",{onClick:()=>{console.table(g),localStorage.setItem("comparisonData-"+C,JSON.stringify(g)),localStorage.setItem("conparisonCount-"+C,l)},children:"show results"}),o(A,{data:g})]})}D.render(o(I.StrictMode,{children:o(J,{})}),document.getElementById("root"));
