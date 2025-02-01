import React, { useContext } from 'react'
import {motion} from 'framer-motion'
import { Briefcase, Star } from 'lucide-react'
import { DataContext } from '../../context/dataContext'
export default function Experiences() {
  const {personalInfo} = useContext(DataContext)
  const {experiences} = personalInfo

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const slideInFromLeft = {
    initial: { x: -100, opacity: 0 },
    whileInView: { x: 0, opacity: 1 },
    viewport: { once: true },
    transition: { duration: 0.5 }
  };
  
  return (
    <section className="py-20 px-4 bg-white/5">
    <motion.div
     className="max-w-7xl mx-auto"
     variants={fadeInUp}
     >
      <h2 className="text-3xl font-bold text-white mb-12 flex items-center">
        <Briefcase className="mr-2" /> Experiência Profissional
      </h2>
      
      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="bg-white/10 backdrop-blur-lg rounded-lg p-6 hover:bg-white/20 transition"
             variants={slideInFromLeft}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
          >
            <div className="flex flex-wrap justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                <p className="text-pink-300">{exp.company}</p>
              </div>
              <span className="text-white/60">{exp.period}</span>
            </div>
            
            <p className="text-white/80 mb-4">{exp.description}</p>
            
            <div className="space-y-2">
              {exp.achievements.map((achievement, i) => (
                <div key={i} className="flex items-center text-white/70">
                  <Star className="w-4 h-4 mr-2 text-pink-400" />
                  {achievement}
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </section>
  )
}
