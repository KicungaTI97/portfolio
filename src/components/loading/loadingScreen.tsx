import { motion } from 'framer-motion';
import { Code } from 'lucide-react';

export function LoadingScreen(){
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex items-center justify-center overflow-hidden">
      {/* Background animations */}
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

      {/* Central loading animation */}
      <div className="relative z-10">
        <motion.div 
          className="relative w-32 h-32 mx-auto"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Rotating outer ring */}
          <motion.div
            className="absolute inset-0 rounded-full border-4 border-transparent border-t-pink-500 border-r-purple-500"
            animate={{ rotate: 360 }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          
          {/* Pulsing middle ring */}
          <motion.div
            className="absolute inset-2 rounded-full border-4 border-transparent border-t-purple-500 border-l-pink-500"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.7, 1, 0.7],
              rotate: -360
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          {/* Center icon */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Code className="w-12 h-12 text-white" />
          </motion.div>
        </motion.div>

        {/* Loading text */}
        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <motion.h2 
            className="text-2xl font-bold bg-gradient-to-r from-white to-pink-200 bg-clip-text text-transparent mb-2"
            animate={{
              opacity: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            Carregando
          </motion.h2>
          
          <motion.div 
            className="flex items-center justify-center gap-1"
            animate={{
              opacity: [0.7, 1, 0.7]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="w-2 h-2 rounded-full bg-pink-500"
                animate={{
                  y: [0, -8, 0]
                }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.15
                }}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};
