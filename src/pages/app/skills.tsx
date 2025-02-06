import { Code, Database, Palette, Terminal, Layout, Star } from 'lucide-react';
import { motion, useScroll, useSpring } from 'framer-motion';

export default function Skills(){
  const {scrollYProgress} = useScroll()

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });


  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Layout className="w-6 h-6 text-pink-400" />,
      skills: [
        { name: "React.js", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "Next.js", level: 80 },
        { name: "Tailwind CSS", level: 95 }
      ]
    },
    {
      title: "Backend Development",
      icon: <Terminal className="w-6 h-6 text-pink-400" />,
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express", level: 80 },
        { name: "Python", level: 75 },
        { name: "REST APIs", level: 90 }
      ]
    },
    {
      title: "Database",
      icon: <Database className="w-6 h-6 text-pink-400" />,
      skills: [
        { name: "MongoDB", level: 85 },
        { name: "PostgreSQL", level: 80 },
        { name: "Firebase", level: 75 },
        { name: "Redis", level: 70 }
      ]
    },
    {
      title: "UI/UX Design",
      icon: <Palette className="w-6 h-6 text-pink-400" />,
      skills: [
        { name: "Figma", level: 85 },
        { name: "UI Design", level: 80 },
        { name: "Responsive Design", level: 90 },
        { name: "Prototyping", level: 75 }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  };

  const skillVariants = {
    hidden: { 
      opacity: 0,
      x: -20
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3
      }
    }
  };

  const progressVariants = {
    hidden: { width: 0 },
    visible: (level:number) => ({
      width: `${level}%`,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    })
  };

  return (
    <>
    <motion.div className="fixed top-0 left-0 right-0 h-1 bg-blue-500 origin-left z-50" style={{ scaleX }}/>
    <motion.section 
      className="py-20 px-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-3xl font-bold text-white mb-12 flex items-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Code className="mr-2" /> Habilidades
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="bg-white/10 backdrop-blur-lg rounded-lg p-6 hover:bg-white/20 transition"
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div 
                className="flex items-center mb-6"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  {category.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-white ml-2">{category.title}</h3>
              </motion.div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div 
                    key={skillIndex}
                    variants={skillVariants}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white/90">{skill.name}</span>
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1 + index * 0.2 }}
                          >
                            <Star
                              size={16}
                              className={`${
                                i < Math.round(skill.level / 20)
                                  ? 'text-pink-400 fill-pink-400'
                                  : 'text-white/20'
                              } ml-1`}
                            />
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    <div className="w-full bg-white/10 rounded-full h-2">
                      <motion.div
                        className="bg-gradient-to-r from-pink-500 to-purple-500 h-2 rounded-full"
                        variants={progressVariants}
                        custom={skill.level}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
    </>
  );
};

