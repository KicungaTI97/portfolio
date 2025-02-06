import React, { useContext, useState } from 'react';
import {
  User, Calendar, MapPin, Briefcase, Download, Mail, Github, Linkedin
} from 'lucide-react';
import { DataContext } from '../../context/dataContext';
import { useScroll, useSpring, motion } from 'framer-motion';

export default function About(){
  const [activeTab, setActiveTab] = useState<'profile' | 'education' | 'hobbies'>('profile');
  const {personalInfo} = useContext(DataContext)
  
  const { scrollYProgress } = useScroll();
  const {profile3} = personalInfo.profiles
  const {
    bio,
    availability,
    education,
    interests,
    languages,
    name,
    location,
    socialLinks,
    yearsOfExperience,
    hobbies
  } = personalInfo

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });


  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 }
    }
  };

  const tabContentVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 }
    },
    exit: {
      opacity: 0,
      x: -20,
      transition: { duration: 0.3 }
    }
  };

  const skillItemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 200, damping: 10 }
    }
  };

  

  // Progress bar component
  const ProgressBar: React.FC<{ percentage: number }> = ({ percentage }) => (
    <motion.div 
    className="w-full bg-white/10 rounded-full h-2"
    initial={{ scaleX: 0 }}
    animate={{ scaleX: 1 }}
    transition={{ duration: 0.8, delay: 0.2 }}
  >
    <motion.div
      className="bg-gradient-to-r from-pink-500 to-purple-500 h-2 rounded-full"
      initial={{ width: 0 }}
      animate={{ width: `${percentage}%` }}
      transition={{ duration: 0.8, delay: 0.4 }}
    />
  </motion.div>
);

  return (<>
  <motion.div 
    className="fixed top-0 left-0 right-0 h-1 bg-blue-500 origin-left z-50"
    style={{ scaleX }}
    />
        <motion.section
        className="py-20 px-4"
        id="about"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
         <motion.div 
            className="text-center mb-16"
            variants={itemVariants}
          >
          <h2 className="text-4xl font-bold text-white mb-4">Sobre Mim</h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            {bio}
          </p>
        </motion.div>

        {/* Navigation Tabs */}
        <motion.div className="flex justify-center mb-12" variants={itemVariants}>
          <div className="flex space-x-2 bg-white/10 rounded-full p-1">
            {(['profile', 'education', 'hobbies'] as const).map((tab) => (
              <motion.button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`
                  px-6 py-2 rounded-full transition-all
                  ${activeTab === tab 
                    ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white' 
                    : 'text-white/70 hover:text-white'
                  }
                `}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Content Sections */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-8">
            {activeTab === 'profile' && (
             <motion.div
             key="profile"
             variants={tabContentVariants}
             initial="hidden"
             animate="visible"
             exit="exit"
             className='flex flex-col gap-6'
           >
                {/* Personal Info */}
                <motion.div
                 className="bg-white/10 backdrop-blur-lg rounded-lg p-6 "
                 whileHover={{ scale: 1.02 }}
                 transition={{ type: "spring", stiffness: 300 }}
                >
                  <h3 className="text-xl font-bold text-white mb-6">Informações Pessoais</h3>
                  <div className="space-y-4">
                    <div className="flex items-center text-white/70">
                      <User className="w-5 h-5 mr-3 text-pink-400" />
                      <span>Nome: <span className="text-white">{name}</span></span>
                    </div>
                    <div className="flex items-center text-white/70">
                      <Calendar className="w-5 h-5 mr-3 text-pink-400" />
                      <span>Experiência: <span className="text-white">{yearsOfExperience} anos</span></span>
                    </div>
                    <div className="flex items-center text-white/70">
                      <MapPin className="w-5 h-5 mr-3 text-pink-400" />
                      <span>Localização: <span className="text-white">{location}</span></span>
                    </div>
                    <div className="flex items-center text-white/70">
                      <Briefcase className="w-5 h-5 mr-3 text-pink-400" />
                      <span>Status:
                        <span className={`ml-2 px-3 py-1 rounded-full text-sm
                          ${availability === 'Disponível' ? 'bg-green-500/20 text-green-300' :
                            availability === 'Freelance' ? 'bg-blue-500/20 text-blue-300' :
                            'bg-red-500/20 text-red-300'}`}>
                          {availability}
                        </span>
                      </span>
                    </div>
                  </div>
                </motion.div>

                {/* Languages */}
                <motion.div
                 className="bg-white/10 backdrop-blur-lg rounded-lg p-6"
                 variants={skillItemVariants}
                 whileHover={{ scale: 1.02 }}
                 transition={{ type: "spring", stiffness: 300 }}
                 >
                  <h3 className="text-xl font-bold text-white mb-6">Idiomas</h3>
                  <div className="space-y-4">
                    {languages.map((language, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between text-white">
                          <span>{language.name}</span>
                          <span className="text-white/70">{language.level}</span>
                        </div>
                        <ProgressBar percentage={language.percentage} />
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Interests */}
                <motion.div
                 className="bg-white/10 backdrop-blur-lg rounded-lg p-6"
                 whileHover={{ scale: 1.02 }}
                 transition={{ type: "spring", stiffness: 300 }}
                 >
                  <h3 className="text-xl font-bold text-white mb-6">Interesses</h3>
                  <div className="flex flex-wrap gap-3">
                    {interests.map((interest, index) => (
                      <motion.span
                        key={index}
                        className="bg-white/10 text-white px-4 py-2 rounded-full text-sm"
                        whileHover={{ scale: 1.05, y: -5 }}
                          whileTap={{ scale: 0.95 }}
                          transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        {interest}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            )}

            {activeTab === 'education' && (
              <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6">
                <h3 className="text-xl font-bold text-white mb-6">Educação</h3>
                <div className="space-y-8">
                  {education.map((edu, index) => (
                    <div key={index} className="relative pl-6 border-l-2 border-pink-500">
                      <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-pink-500" />
                      <h4 className="text-lg font-semibold text-white">{edu.degree}</h4>
                      <p className="text-pink-300">{edu.institution}</p>
                      <p className="text-white/60 text-sm">{edu.period}</p>
                      <p className="text-white/70 mt-2">{edu.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {/*hobbies */}
          {activeTab === 'hobbies' && (
            <motion.div
              key="hobbies"
              variants={tabContentVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="space-y-8"
            >
              <motion.div
                className="bg-white/10 backdrop-blur-lg rounded-lg p-6"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h3 className="text-xl font-bold text-white mb-6">Meus Hobbies</h3>
                <div className="grid grid-cols-1 gap-4">
                  {hobbies.map((hobby, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      className="bg-white/5 p-6 rounded-lg hover:bg-white/10 transition-all duration-300"
                      whileHover={{ 
                        scale: 1.02,
                        backgroundColor: 'rgba(255,255,255,0.1)'
                      }}
                    >
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                            {hobby.name}
                            <span className="text-xs px-3 py-1 rounded-full bg-pink-500/20 text-pink-300">
                              {hobby.category}
                            </span>
                          </h4>
                          <p className="text-white/70">{hobby.description}</p>
                        </div>
                        <div className="shrink-0">
                          <span className="text-sm px-4 py-2 rounded-full bg-purple-500/20 text-purple-300">
                            {hobby.frequency}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            <motion.div>
            {/* Profile Image */}
            <div className="relative">
              <div className="aspect-square rounded-lg overflow-hidden">
              <motion.img
                    src={profile3}
                    alt="Profile"
                    className="w-full h-full object-cover opacity-80"
                    initial={{ scale: 1.2 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.8 }}
              />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            </div>
            </motion.div>

            {/* Social Links */}
            <motion.div 
             className="bg-white/10 backdrop-blur-lg rounded-lg p-6"
             whileHover={{ scale: 1.02 }}
             transition={{ type: "spring", stiffness: 300 }}
            >
              <h3 className="text-xl font-bold text-white mb-6">Conecte-se</h3>
              <div className="space-y-4">
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-white/70 hover:text-white transition"
                >
                  <Github className="w-5 h-5 mr-3" />
                  GitHub
                </a>
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-white/70 hover:text-white transition"
                >
                  <Linkedin className="w-5 h-5 mr-3" />
                  LinkedIn
                </a>
                <a
                  href={`mailto:${socialLinks.email}`}
                  className="flex items-center text-white/70 hover:text-white transition"
                >
                  <Mail className="w-5 h-5 mr-3" />
                  Email
                </a>
              </div>
            </motion.div>

            {/* Download CV Button */}
            <motion.button 
                className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-4 rounded-lg flex items-center justify-center"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Download className="w-5 h-5 mr-2" />
                Download CV
              </motion.button>
          </div>
        </div>
      </div>
    </motion.section>
  </>
  );
};
