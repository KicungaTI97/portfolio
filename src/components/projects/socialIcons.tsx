import { useState } from 'react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Tipagem das props
interface SocialIconProps {
  platform: string;
  link: string;
}

export const SocialIcon = ({ platform, link }: SocialIconProps) => {
  const [isHovered, setIsHovered] = useState(false);

  // Função para obter ícone e tooltip com base na plataforma
  const getIconAndTooltip = () => {
    switch (platform) {
      case 'github':
        return {
          icon: <Github size={28} />,
          tooltip: "Veja meus projetos no GitHub",
        };
      case 'linkedin':
        return {
          icon: <Linkedin size={28} />,
          tooltip: "Conecte-se comigo no LinkedIn",
        };
      case 'twitter':
        return {
          icon: <Twitter size={28} />,
          tooltip: "Me siga no Twitter",
        };
      case 'email':
        return {
          icon: <Mail size={28} />,
          tooltip: "Vamos trabalhar juntos?",
        };
      default:
        throw new Error(`Plataforma inválida: ${platform}`);
    }
  };

  const { icon, tooltip } = getIconAndTooltip();

  // Configuração do e-mail
  const emailConfig = {
    email: 'joao.kicungati@gmail.com', // Considere passar isso como prop ou variável de ambiente
    subject: "Vamos trabalhar juntos? 🚀",
    body: `Olá! 👋
  
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
    `,
  };

  // Função para gerar o link correto com base na plataforma
  const getHref = () => {
    if (platform === 'email') {
      return `mailto:${emailConfig.email}?subject=${encodeURIComponent(
        emailConfig.subject
      )}&body=${encodeURIComponent(emailConfig.body)}`;
    }
    return link;
  };

  return (
    <motion.div
      className="relative"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Link ou botão */}
      <motion.a
        href={getHref()}
        className="text-white/90 hover:text-white block"
        target={platform !== 'email' ? "_blank" : undefined}
        rel={platform !== 'email' ? "noopener noreferrer" : undefined}
        whileHover={{
          scale: 1.2,
          rotate: 360,
          transition: { duration: 0.3 },
        }}
        whileTap={{ scale: 0.95 }}
      >
        {icon}
      </motion.a>

      {/* Tooltip animado */}
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