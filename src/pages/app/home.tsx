import { NavLink } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'framer-motion';
import { useContext } from 'react';
import { DataContext } from '../../context/dataContext';
import { SocialIcon } from '../../components/projects/socialIcons';

export default function Home() {
  const { scrollYProgress } = useScroll();
  const { personalInfo } = useContext(DataContext);
  const { profile1 } = personalInfo.profiles;

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  return (
    <>
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-blue-500 origin-left z-50"
        style={{ scaleX }}
      />

      <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex items-center justify-center relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute h-64 w-64 rounded-full bg-purple-600/20 blur-3xl"
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{ top: '20%', left: '20%' }}
          />
          <motion.div
            className="absolute h-64 w-64 rounded-full bg-pink-600/20 blur-3xl"
            animate={{
              x: [0, -100, 0],
              y: [0, 50, 0],
              scale: [1.2, 1, 1.2],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{ top: '60%', right: '20%' }}
          />
        </div>

        <motion.div 
          className="max-w-4xl mx-4 text-center z-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Profile Image */}
          <motion.div 
            className="relative w-48 h-48 mx-auto mb-12"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-500 to-purple-500"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.8, 0.5]
               }}
               transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
               }}
               />
            <img
              src={profile1}
              alt="Profile"
              className="relative w-full h-full rounded-full object-cover border-4 border-white shadow-lg"
            />
          </motion.div>

          {/* Text Content */}
          <motion.h1
            variants={textVariants}
            className="text-6xl md:text-7xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-pink-200"
          >
            {personalInfo.name}
          </motion.h1>

          <motion.p
            variants={textVariants}
            className="text-2xl md:text-3xl text-white/90 mb-12"
          >
            {personalInfo.title}
          </motion.p>

          {/* Social Links */}
          <motion.div
            className="flex justify-center space-x-8 mb-12"
            variants={containerVariants}
          >
            {Object.entries(personalInfo.socialLinks).map(([platform, link]) => (
              <motion.div
                key={platform}
                className="mx-3"
              >
                <SocialIcon platform={platform} link={link} />
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.div
            variants={textVariants}
            className="flex justify-center space-x-6"
          >
            <NavLink to="/projects">
              <motion.button
                className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-4 rounded-full font-semibold shadow-lg"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 20px rgba(0,0,0,0.2)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                Ver Projetos
              </motion.button>
            </NavLink>
            <motion.button
             className="bg-white/10 text-white px-8 py-3 rounded-full hover:bg-white/20 transition"
             whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 20px rgba(0,0,0,0.2)"
            }}
            whileTap={{ scale: 0.95 }}
             >
              Download CV
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}





