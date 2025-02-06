import{c as m,j as e,r as l,D as L,m as M,G as P}from"./main-BBCKjpYd.js";import{u as _,a as B}from"./use-spring-s3dmg55D.js";import{B as z}from"./briefcase-oZyl5Y5t.js";import{S as j}from"./star-B-HVVpgW.js";/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],k=m("ExternalLink",T);/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E=[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]],G=m("LayoutGrid",E);/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V=[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}],["path",{d:"M14 4h7",key:"3xa0d5"}],["path",{d:"M14 9h7",key:"1icrd9"}],["path",{d:"M14 15h7",key:"1mj8o2"}],["path",{d:"M14 20h7",key:"11slyb"}]],q=m("LayoutList",V);/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]],F=m("Search",D),w=({variant:r="primary",size:c="medium",children:n,icon:o,href:a,onClick:d,className:x="",target:u="_self"})=>{const p={primary:"bg-gradient-to-r from-pink-500 to-purple-500 text-white hover:shadow-lg",secondary:"bg-white/10 text-white hover:bg-white/20",outline:"border-2 border-pink-500 text-white hover:bg-pink-500/10",ghost:"bg-transparent hover:bg-white/5 text-white"},g={small:"px-4 py-2 text-sm",medium:"px-8 py-3 text-base",large:"px-10 py-4 text-lg"},b=`
    inline-flex items-center justify-center
    rounded-full
    transform hover:-translate-y-1
    transition-all duration-300
    font-medium
  `,f=a?"a":"button",h=a?{href:a,target:u}:{onClick:d};return e.jsxs(f,{...h,className:`
        ${b}
        ${p[r]}
        ${g[c]}
        ${x}
      `,children:[o&&e.jsx(o,{className:"w-5 h-5 mr-2"})," ",e.jsx("span",{children:n}),a&&e.jsx(k,{className:"w-4 h-4 ml-2"})]})};function Y(){const[r,c]=l.useState(""),[n,o]=l.useState([]),[a,d]=l.useState("grid"),[x,u]=l.useState([]),[p,g]=l.useState([]),{scrollYProgress:b}=_(),f=B(b,{stiffness:100,damping:30,restDelta:.001}),{projects:h}=l.useContext(L),N=Array.from(new Set(h.flatMap(t=>t.tags))),y=h.filter(t=>{const s=t.title.toLowerCase().includes(r.toLowerCase())||t.description.toLowerCase().includes(r.toLowerCase()),i=n.length===0||n.every($=>t.tags.includes($));return s&&i}),v=t=>{u(s=>s.includes(t)?s.filter(i=>i!==t):[...s,t])},C=t=>{g(s=>s.includes(t)?s.filter(i=>i!==t):[...s,t])},S=t=>{o(s=>s.includes(t)?s.filter(i=>i!==t):[...s,t])};return e.jsxs(e.Fragment,{children:[e.jsx(M.div,{className:"fixed top-0 left-0 right-0 h-1 bg-blue-500 origin-left z-50",style:{scaleX:f}}),e.jsx("section",{className:"py-20 px-4 ",id:"projects",children:e.jsxs("div",{className:"max-w-7xl mx-auto",children:[e.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-center mb-12",children:[e.jsxs("h2",{className:"text-3xl font-bold text-white flex items-center",children:[e.jsx(z,{className:"mr-2"})," Projetos"]}),e.jsxs("div",{className:"flex flex-wrap gap-4 mt-4 md:mt-0",children:[e.jsxs("div",{className:"relative",children:[e.jsx("input",{type:"text",placeholder:"Buscar projetos...",value:r,onChange:t=>c(t.target.value),className:"bg-white/10 border border-white/20 rounded-full px-4 py-2 pl-10 text-white focus:outline-none focus:border-pink-500 w-64"}),e.jsx(F,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60 w-4 h-4"})]}),e.jsxs("div",{className:"flex rounded-full bg-white/10 p-1",children:[e.jsx("button",{onClick:()=>d("grid"),title:"button View Mode Grid",className:`p-2 rounded-full transition ${a==="grid"?"bg-pink-500 text-white":"text-white/60"}`,children:e.jsx(G,{size:20})}),e.jsx("button",{onClick:()=>d("list"),title:"button View Mode Grid",className:`p-2 rounded-full transition ${a==="list"?"bg-pink-500 text-white":"text-white/60"}`,children:e.jsx(q,{size:20})})]})]})]}),e.jsx("div",{className:"flex flex-wrap gap-2 mb-8",children:N.map(t=>e.jsx("button",{onClick:()=>S(t),className:`px-4 py-2 rounded-full text-sm transition ${n.includes(t)?"bg-pink-500 text-white":"bg-white/10 text-white/70 hover:bg-white/20"}`,children:t},t))}),e.jsx("div",{className:`
          ${a==="grid"?"grid md:grid-cols-2 lg:grid-cols-3 gap-8":"space-y-8"}
        `,children:y.map(t=>e.jsxs("div",{className:`
                bg-white/10 backdrop-blur-lg rounded-lg overflow-hidden
                group hover:transform hover:scale-105 transition duration-300
                ${a==="list"?"flex gap-6":""}
              `,children:[e.jsxs("div",{className:`relative ${a==="list"?"w-64":""}`,children:[e.jsx("img",{src:t.image,alt:t.title,className:"w-full h-48 object-cover"}),e.jsx("div",{className:"absolute top-4 right-4 space-x-2 ",children:e.jsx("button",{onClick:()=>C(t.id),title:"button Bookmark",className:"p-2 bg-black/50 rounded-full hover:bg-black/70 transition ",children:e.jsx(j,{className:`w-5 h-5 ${p.includes(t.id)?"text-yellow-400 fill-current":"text-white"}`})})}),e.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center",children:e.jsxs("div",{className:"space-x-4",children:[e.jsx(w,{variant:"primary",size:"small",href:t.link,target:"_blank",icon:k,children:"Demo"}),e.jsx(w,{variant:"secondary",size:"small",href:t.github,target:"_blank",icon:P,children:"Código"})]})})]}),e.jsxs("div",{className:"p-6 flex-1",children:[e.jsxs("div",{className:"flex justify-between items-start mb-4",children:[e.jsx("h3",{className:"text-xl font-bold text-white",children:t.title}),e.jsx("span",{className:"bg-pink-500/20 text-pink-300 px-2 py-1 rounded-full text-xs",children:t.status})]}),e.jsxs("p",{className:"text-white/70 mb-4",children:[x.includes(t.id)?t.description:`${t.description.slice(0,100)}...`,e.jsx("button",{onClick:()=>v(t.id),className:"text-pink-400 hover:text-pink-300 ml-2",children:x.includes(t.id)?"Ver menos":"Ver mais"})]}),e.jsx("div",{className:"flex flex-wrap gap-2 mb-4",children:t.tags.map((s,i)=>e.jsx("span",{className:"bg-white/10 text-white/90 px-3 py-1 rounded-full text-sm",children:s},i))}),e.jsx("div",{className:"space-y-2",children:t.highlights.map((s,i)=>e.jsxs("div",{className:"flex items-center text-white/70",children:[e.jsx(j,{className:"w-4 h-4 mr-2 text-pink-400"}),s]},i))}),t.collaborators&&e.jsxs("div",{className:"mt-4 pt-4 border-t border-white/10",children:[e.jsx("h4",{className:"text-white font-medium mb-2",children:"Colaboradores"}),e.jsx("div",{className:"flex -space-x-2",children:t.collaborators.map((s,i)=>e.jsx("img",{src:s.avatar,alt:s.name,className:"w-8 h-8 rounded-full border-2 border-purple-500",title:s.name},i))})]}),e.jsxs("div",{className:"mt-4 flex gap-4 text-white/60 text-sm",children:[e.jsxs("span",{children:[t.metrics.views," visualizações"]}),e.jsxs("span",{children:[t.metrics.likes," likes"]}),e.jsxs("span",{children:[t.metrics.commits," commits"]})]})]})]},t.id))}),y.length===0&&e.jsxs("div",{className:"text-center py-20",children:[e.jsx("p",{className:"text-white/70 text-lg",children:"Nenhum projeto encontrado com os filtros atuais."}),e.jsx(w,{variant:"secondary",className:"mt-4",onClick:()=>{c(""),o([])},children:"Limpar Filtros"})]})]})})]})}export{Y as default};
