import { useContext } from 'react'
import { ProgressBar } from '../../context/animationContext'
import { DataContext } from '../../context/dataContext'
import { Code } from 'lucide-react'
export default function Skills() {
    const {skills} = useContext(DataContext)
  return (
    <section
    className="py-20 px-4">
     <div className="max-w-7xl mx-auto">
       <h2 className="text-3xl font-bold text-white mb-12 flex items-center">
         <Code className="mr-2" /> Habilidades
       </h2>

       <div className="grid md:grid-cols-3 gap-8">
         {/* Technical Skills */}
         <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6">
           <h3 className="text-xl font-bold text-white mb-6">Habilidades Técnicas</h3>
           {skills.technical.map((skill, index) => (
             <ProgressBar key={index} label={skill.name} value={skill.level} />
           ))}
         </div>

         {/* Soft Skills */}
         <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6">
           <h3 className="text-xl font-bold text-white mb-6">Soft Skills</h3>
           {skills.softSkills.map((skill, index) => (
             <ProgressBar key={index} label={skill.name} value={skill.level} />
           ))}
         </div>

         {/* Tools & Technologies */}
         <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6">
           <h3 className="text-xl font-bold text-white mb-6">Ferramentas</h3>
           {skills.tools.map((skill, index) => (
             <ProgressBar key={index} label={skill.name} value={skill.level} />
           ))}
         </div>
       </div>
     </div>
   </section>
  )
}
