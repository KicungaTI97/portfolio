import { Briefcase, Calendar, Building2, ArrowUpRight } from 'lucide-react';
import { AnimatedSection } from '../../context/animationContext';
import { useContext } from 'react';
import { DataContext } from '../../context/dataContext';
import { useScroll, motion, useSpring } from 'framer-motion';

export const Experience = () => {
const {scrollYProgress} = useScroll()

const scaleX = useSpring(scrollYProgress, {
  stiffness: 100,
  damping: 30,
  restDelta: 0.001
});

const {personalInfo} = useContext(DataContext)
  return (
    <>
    <motion.div className="fixed top-0 left-0 right-0 h-1 bg-blue-500 origin-left z-50" style={{ scaleX }}/>
    <AnimatedSection className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-12 flex items-center">
          <Briefcase className="mr-2" /> Experiência Profissional
        </h2>

        <div className="space-y-8">
          { personalInfo.experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-lg rounded-lg p-6 hover:bg-white/20 transition-all duration-300"
            >
              <div className="md:grid md:grid-cols-[200px,1fr] gap-8">
                {/* Company Info */}
                <div className="mb-6 md:mb-0">
                  <div className="flex items-center space-x-4 mb-4">
                    <img
                      src={exp.companyLogo}
                      alt={exp.company}
                      className="w-16 h-16 rounded-lg bg-white/10"
                    />
                    <div>
                      <h3 className="text-xl font-bold text-white">{exp.company}</h3>
                      <p className="text-pink-400">{exp.position}</p>
                    </div>
                  </div>
                  <div className="space-y-2 text-white/60">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {exp.period}
                    </div>
                    <div className="flex items-center">
                      <Building2 className="w-4 h-4 mr-2" />
                      {exp.location}
                    </div>
                  </div>
                </div>

                {/* Experience Details */}
                <div>
                  <p className="text-white/80 mb-6">{exp.description}</p>

                  <div className="space-y-4 mb-6">
                    {exp.achievements.map((achievement, i) => (
                      <div key={i} className="flex items-start">
                        <ArrowUpRight className="w-5 h-5 mr-2 text-pink-400 mt-1 flex-shrink-0" />
                        <p className="text-white/70">{achievement}</p>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-pink-500/10 text-pink-400 px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
    </>
  );
};
