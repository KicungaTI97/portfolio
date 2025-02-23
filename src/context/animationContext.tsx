import { createContext, useContext, ReactNode } from "react";
import { motion, Transition } from "framer-motion";

// 🎯 Tipagem para o contexto de animação
interface AnimationVariants {
  fadeIn: {
    initial: object;
    animate: object;
    exit?: object;
    transition: Transition;
  };
  staggerChildren: {
    animate: object;
    transition: Transition;
  };
  slideIn: {
    initial: object;
    animate: object;
    transition: Transition;
  };
  scale: {
    initial: object;
    animate: object;
    transition: Transition;
  };
  headerAnimation: {
    initial: object;
    animate: object;
    transition: Transition;
  };
  cardHover: {
    whileHover: object;
    whileTap?: object;
    transition?: Transition;
  };
}


const AnimationContext = createContext<AnimationVariants | null>(null);

// 🎯 Tipagem para componentes que recebem `children` e `className`
interface AnimatedProps {
  children: ReactNode;
  className?: string;
}

// 🎯 Tipagem para a barra de progresso
interface ProgressBarProps {
  value: number;
  label: string;
}

// 📌 Componente de Barra de Progresso
export const ProgressBar = ({ value, label }: ProgressBarProps) => (
  <motion.div
    className="mb-4"
    initial={{ width: 0, opacity: 0 }}
    whileInView={{ width: "100%", opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
  >
    <div className="flex justify-between mb-1">
      <span className="text-white">{label}</span>
      <span className="text-white">{value}%</span>
    </div>
    <div className="w-full bg-white/10 rounded-full h-2.5">
      <motion.div
        className="bg-gradient-to-r from-pink-500 to-purple-500 h-2.5 rounded-full"
        initial={{ width: 0 }}
        whileInView={{ width: `${value}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
      />
    </div>
  </motion.div>
);

// 📌 Provider das animações
interface AnimationProviderProps {
  children: ReactNode;
}

export const AnimationProvider = ({ children }: AnimationProviderProps) => {
  const animations: AnimationVariants = {
    fadeIn: {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: -20 },
      transition: { duration: 0.6, ease: "easeOut" },
    },
    staggerChildren: {
      animate:{},
      transition: { staggerChildren: 0.1 } ,
    },
    slideIn: {
      initial: { x: -30, opacity: 0 },
      animate: { x: 0, opacity: 1 },
      transition: { duration: 0.6, ease: "easeOut" },
    },
    scale: {
      initial: { scale: 0.95, opacity: 0 },
      animate: { scale: 1, opacity: 1 },
      transition: { duration: 0.5, ease: "easeOut" },
    },
    headerAnimation: {
      initial: { y: -100, opacity: 0 },
      animate: { y: 0, opacity: 1 },
      transition: { duration: 0.8, ease: "easeOut" },
    },
    cardHover: {
      whileHover: {
        scale: 1.02,
        transition: { duration: 0.2 },
      },
      whileTap: { scale: 0.98 },
    },
  };

  return (
    <AnimationContext.Provider value={animations}>
      {children}
    </AnimationContext.Provider>
  );
};

// 📌 Hook personalizado para usar as animações
export const useAnimation = () => {
  const context = useContext(AnimationContext);
  if (!context) {
    throw new Error("useAnimation deve ser usado dentro de um AnimationProvider");
  }
  return context;
};

// 📌 Componentes animados reutilizáveis
export const AnimatedSection = ({ children, className }: AnimatedProps) => (
  <motion.section
    initial="initial"
    whileInView="animate"
    viewport={{ once: true, amount: 0.2 }}
    variants={{
      initial: { opacity: 0, y: 30 },
      animate: { opacity: 1, y: 0 },
    }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.section>
);

export const AnimatedCard = ({ children, className }: AnimatedProps) => (
  <motion.div
    initial="initial"
    whileInView="animate"
    whileHover="hover"
    viewport={{ once: true }}
    variants={{
      initial: { opacity: 0, scale: 0.95 },
      animate: { opacity: 1, scale: 1 },
      hover: { y: -5, transition: { duration: 0.2 } },
    }}
    transition={{ duration: 0.5 }}
    className={className}
  >
    {children}
  </motion.div>
);

export const AnimatedTitle = ({ children, className }: AnimatedProps) => (
  <motion.h2
    initial="initial"
    whileInView="animate"
    viewport={{ once: true }}
    variants={{
      initial: { opacity: 0, x: -20 },
      animate: { opacity: 1, x: 0 },
    }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.h2>
);

// 🎯 Tipagem para textos animados que podem ter `delay`
interface AnimatedTextProps extends AnimatedProps {
  delay?: number;
}

export const AnimatedText = ({ children, className, delay = 0 }: AnimatedTextProps) => (
  <motion.p
    initial="initial"
    whileInView="animate"
    viewport={{ once: true }}
    variants={{
      initial: { opacity: 0, y: 10 },
      animate: { opacity: 1, y: 0 },
    }}
    transition={{ duration: 0.5, delay }}
    className={className}
  >
    {children}
  </motion.p>
);

// 🎯 Tipagem para habilidades animadas (com índice opcional)
interface AnimatedSkillProps extends AnimatedProps {
  index?: number;
}

export const AnimatedSkill = ({ children, className, index = 0 }: AnimatedSkillProps) => (
  <motion.div
    initial="initial"
    whileInView="animate"
    whileHover="hover"
    viewport={{ once: true }}
    variants={{
      initial: { opacity: 0, x: -20 },
      animate: { opacity: 1, x: 0 },
      hover: { scale: 1.05, transition: { duration: 0.2 } },
    }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className={className}
  >
    {children}
  </motion.div>
);
