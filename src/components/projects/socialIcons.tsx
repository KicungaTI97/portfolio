import React, { useState } from 'react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const SocialIcon = ({ platform, link }) => {
  const [isHovered, setIsHovered] = useState(false);

  const getIconAndTooltip = () => {
    switch (platform) {
      case 'github':
        return {
          icon: <Github size={28} />,
          tooltip: "Veja meus projetos no GitHub"
        };
      case 'linkedin':
        return {
          icon: <Linkedin size={28} />,
          tooltip: "Conecte-se comigo no LinkedIn"
        };
      case 'twitter':
        return {
          icon: <Twitter size={28} />,
          tooltip: "Me siga no Twitter"
        };
      case 'email':
        return {
          icon: <Mail size={28} />,
          tooltip: "Vamos trabalhar juntos?"
        };
      default:
        return null;
    }
  };

  const { icon, tooltip } = getIconAndTooltip();

  const emailConfig = {
    subject: "Vamos conversar?",
    body: `Olá!

Fiquei muito interessado no seu trabalho e adoraria trocar algumas ideias.

Aguardo seu retorno!

Atenciosamente,`
  };

  const getHref = () => {
    if (platform === 'email') {
      return `mailto:kicungati@gmail.com?subject=${encodeURIComponent(emailConfig.subject)}&body=${encodeURIComponent(emailConfig.body)}`;
    }
    return link;
  };

  return (
    <motion.div
      className="relative"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.a
        href={getHref()}
        className="text-white/90 hover:text-white block"
        target={platform !== 'email' ? "_blank" : undefined}
        rel={platform !== 'email' ? "noopener noreferrer" : undefined}
        whileHover={{ 
          scale: 1.2,
          rotate: 360,
          transition: { duration: 0.3 }
        }}
        whileTap={{ scale: 0.95 }}
      >
        {icon}
      </motion.a>

      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute left-1/2 bottom-full mb-2 -translate-x-1/2 w-48 z-10"
          >
            <div className="bg-white/10 backdrop-blur-md p-3 rounded-lg shadow-xl">
              <p className="text-white text-sm text-center font-medium">
                {tooltip}
              </p>
            </div>
            <div className="w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-white/10 mx-auto" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
