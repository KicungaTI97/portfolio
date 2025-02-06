import{c as s,j as e,m as i,C as v}from"./main-BBCKjpYd.js";import{u as y,a as u}from"./use-spring-s3dmg55D.js";import{S as f}from"./star-B-HVVpgW.js";/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]],g=s("Database",k);/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=[["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]],w=s("Palette",j);/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M9 21V9",key:"1oto5p"}]],b=s("PanelsTopLeft",N);/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C=[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]],D=s("Terminal",C);function M(){const{scrollYProgress:o}=y(),c=u(o,{stiffness:100,damping:30,restDelta:.001}),d=[{title:"Frontend Development",icon:e.jsx(b,{className:"w-6 h-6 text-pink-400"}),skills:[{name:"React.js",level:90},{name:"TypeScript",level:85},{name:"Next.js",level:80},{name:"Tailwind CSS",level:95}]},{title:"Backend Development",icon:e.jsx(D,{className:"w-6 h-6 text-pink-400"}),skills:[{name:"Node.js",level:85},{name:"Express",level:80},{name:"Python",level:75},{name:"REST APIs",level:90}]},{title:"Database",icon:e.jsx(g,{className:"w-6 h-6 text-pink-400"}),skills:[{name:"MongoDB",level:85},{name:"PostgreSQL",level:80},{name:"Firebase",level:75},{name:"Redis",level:70}]},{title:"UI/UX Design",icon:e.jsx(w,{className:"w-6 h-6 text-pink-400"}),skills:[{name:"Figma",level:85},{name:"UI Design",level:80},{name:"Responsive Design",level:90},{name:"Prototyping",level:75}]}],r={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.2}}},m={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:.5,staggerChildren:.1}}},x={hidden:{opacity:0,x:-20},visible:{opacity:1,x:0,transition:{duration:.3}}},h={hidden:{width:0},visible:t=>({width:`${t}%`,transition:{duration:.8,ease:"easeOut"}})};return e.jsxs(e.Fragment,{children:[e.jsx(i.div,{className:"fixed top-0 left-0 right-0 h-1 bg-blue-500 origin-left z-50",style:{scaleX:c}}),e.jsx(i.section,{className:"py-20 px-4",initial:"hidden",whileInView:"visible",viewport:{once:!0},variants:r,children:e.jsxs("div",{className:"max-w-7xl mx-auto",children:[e.jsxs(i.div,{className:"text-3xl font-bold text-white mb-12 flex items-center",initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.5},children:[e.jsx(v,{className:"mr-2"})," Habilidades"]}),e.jsx(i.div,{className:"grid md:grid-cols-2 gap-8",variants:r,children:d.map((t,a)=>e.jsxs(i.div,{className:"bg-white/10 backdrop-blur-lg rounded-lg p-6 hover:bg-white/20 transition",variants:m,whileHover:{scale:1.02},transition:{duration:.2},children:[e.jsxs(i.div,{className:"flex items-center mb-6",initial:{x:-20,opacity:0},animate:{x:0,opacity:1},transition:{delay:a*.1},children:[e.jsx(i.div,{whileHover:{rotate:360},transition:{duration:.5},children:t.icon}),e.jsx("h3",{className:"text-xl font-bold text-white ml-2",children:t.title})]}),e.jsx("div",{className:"space-y-4",children:t.skills.map((l,p)=>e.jsxs(i.div,{variants:x,children:[e.jsxs("div",{className:"flex justify-between items-center mb-2",children:[e.jsx("span",{className:"text-white/90",children:l.name}),e.jsx("div",{className:"flex items-center",children:[...Array(5)].map((S,n)=>e.jsx(i.div,{initial:{opacity:0,scale:0},animate:{opacity:1,scale:1},transition:{delay:n*.1+a*.2},children:e.jsx(f,{size:16,className:`${n<Math.round(l.level/20)?"text-pink-400 fill-pink-400":"text-white/20"} ml-1`})},n))})]}),e.jsx("div",{className:"w-full bg-white/10 rounded-full h-2",children:e.jsx(i.div,{className:"bg-gradient-to-r from-pink-500 to-purple-500 h-2 rounded-full",variants:h,custom:l.level,initial:"hidden",whileInView:"visible",viewport:{once:!0}})})]},p))})]},a))})]})})]})}export{M as default};
