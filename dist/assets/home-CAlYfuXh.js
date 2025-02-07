import{r as d,j as e,m as o,A as u,M as p,T as x,L as h,G as b,D as j,N as v}from"./main-B8tcibwW.js";import{u as g,a as f}from"./use-spring-DzCrTR83.js";const w=({platform:t,link:a})=>{const[c,r]=d.useState(!1),s=()=>{switch(t){case"github":return{icon:e.jsx(b,{size:28}),tooltip:"Veja meus projetos no GitHub"};case"linkedin":return{icon:e.jsx(h,{size:28}),tooltip:"Conecte-se comigo no LinkedIn"};case"twitter":return{icon:e.jsx(x,{size:28}),tooltip:"Me siga no Twitter"};case"email":return{icon:e.jsx(p,{size:28}),tooltip:"Vamos trabalhar juntos?"};default:throw new Error(`Plataforma inválida: ${t}`)}},{icon:n,tooltip:l}=s(),i={email:"joao.kicungati@gmail.com",subject:"Vamos trabalhar juntos? 🚀",body:`Olá! 👋
  
    Espero que esteja tudo bem!  
  
    Primeiramente, quero agradecer por visitar meu portfólio. Fico muito feliz em saber que você se interessou pelo meu trabalho!  
  
    Adoraria conversar sobre como posso contribuir para o seu projeto. Seja para desenvolver uma solução inovadora, resolver um problema desafiador ou simplesmente trocar ideias, estou à disposição para ajudar.  
  
    Aqui estão algumas das áreas em que posso colaborar:  
    - Desenvolvimento de software personalizado  
    - Soluções web e mobile  
    - Automação de processos  
    - Consultoria em tecnologia  
  
    Vamos marcar uma conversa para discutir suas necessidades e como posso agregar valor ao seu projeto?  
  
    Fico no aguardo do seu retorno!  
  
    Atenciosamente,  
    João Kicunga  
    Desenvolvedor Frontend  
  
    📧 joao.kicunga@example.com  
    🔗 LinkedIn: [linkedin.com/in/joaokicunga](https://www.linkedin.com/in/joaokicunga)  
    🌐 Portfólio: [joaokicunga.com](https://www.joaokicunga.com)  
    `},m=()=>t==="email"?`mailto:${i.email}?subject=${encodeURIComponent(i.subject)}&body=${encodeURIComponent(i.body)}`:a;return e.jsxs(o.div,{className:"relative",onHoverStart:()=>r(!0),onHoverEnd:()=>r(!1),children:[e.jsx(o.a,{href:m(),className:"text-white/90 hover:text-white block",target:t!=="email"?"_blank":void 0,rel:t!=="email"?"noopener noreferrer":void 0,whileHover:{scale:1.2,rotate:360,transition:{duration:.3}},whileTap:{scale:.95},children:n}),e.jsx(u,{children:c&&e.jsxs(o.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},exit:{opacity:0,y:10},className:"absolute left-1/2 bottom-full mb-2 -translate-x-1/2 w-48 z-10",children:[e.jsx("div",{className:"bg-white/10 backdrop-blur-md p-3 rounded-lg shadow-xl",children:e.jsx("p",{className:"text-white text-sm text-center font-medium",children:l})}),e.jsx("div",{className:"w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-white/10 mx-auto"})]})})]})};function N(){const{scrollYProgress:t}=g(),{personalInfo:a}=d.useContext(j),{profile1:c}=a.profiles,r=f(t,{stiffness:100,damping:30,restDelta:.001}),s={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:.6}}},n={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.2,delayChildren:.3}}};return e.jsxs(e.Fragment,{children:[e.jsx(o.div,{className:"fixed top-0 left-0 right-0 h-1 bg-blue-500 origin-left z-50",style:{scaleX:r}}),e.jsx("div",{className:"min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex items-center justify-center relative overflow-hidden",children:e.jsxs(o.div,{className:"max-w-4xl mx-4 text-center z-10",variants:n,initial:"hidden",animate:"visible",children:[e.jsxs(o.div,{className:"relative w-48 h-48 mx-auto mb-12",whileHover:{scale:1.05},transition:{type:"spring",stiffness:300},children:[e.jsx(o.div,{className:"absolute inset-0 rounded-full bg-gradient-to-r from-pink-500 to-purple-500",animate:{scale:[1,1.2,1],opacity:[.5,.8,.5]},transition:{duration:2,repeat:1/0,ease:"easeInOut"}}),e.jsx("img",{src:c,alt:"Profile",className:"relative w-full h-full rounded-full object-cover border-4 border-white shadow-lg"})]}),e.jsx(o.h1,{variants:s,className:"text-6xl md:text-7xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-pink-200",children:a.name}),e.jsx(o.p,{variants:s,className:"text-2xl md:text-3xl text-white/90 mb-12",children:a.title}),e.jsx(o.div,{className:"flex justify-center space-x-8 mb-12",variants:n,children:Object.entries(a.socialLinks).map(([l,i])=>e.jsx(o.div,{className:"mx-3",children:e.jsx(w,{platform:l,link:i})},l))}),e.jsxs(o.div,{variants:s,className:"flex justify-center space-x-6",children:[e.jsx(v,{to:"/projects",children:e.jsx(o.button,{className:"bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-4 rounded-full font-semibold shadow-lg",whileHover:{scale:1.05,boxShadow:"0 10px 20px rgba(0,0,0,0.2)"},whileTap:{scale:.95},children:"Ver Projetos"})}),e.jsx(o.button,{className:"bg-white/10 text-white px-8 py-4 rounded-full hover:bg-white/20 transition shadow-lg font-semibold",whileHover:{scale:1.05,boxShadow:"0 10px 20px rgba(0,0,0,0.2)"},whileTap:{scale:.95},children:"Download CV"})]})]})})]})}export{N as default};
