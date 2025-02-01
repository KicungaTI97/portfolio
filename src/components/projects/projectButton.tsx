import { ExternalLink } from "lucide-react";

interface ProjectButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'small' | 'medium' | 'large';
  children: React.ReactNode;
  icon?: React.ComponentType<any>;
  href?: string;
  onClick?: () => void;
  className?: string;
  target?: string;
}

export const ProjectButton: React.FC<ProjectButtonProps> = ({ 
  variant = 'primary',
  size = 'medium',
  children,
  icon: Icon,
  href,
  onClick,
  className = '',
  target = '_self'
}) => {
  const variants = {
    primary: 'bg-gradient-to-r from-pink-500 to-purple-500 text-white hover:shadow-lg',
    secondary: 'bg-white/10 text-white hover:bg-white/20',
    outline: 'border-2 border-pink-500 text-white hover:bg-pink-500/10',
    ghost: 'bg-transparent hover:bg-white/5 text-white'
  };

  const sizes = {
    small: 'px-4 py-2 text-sm',
    medium: 'px-8 py-3 text-base',
    large: 'px-10 py-4 text-lg'
  };

  const baseClasses = `
    inline-flex items-center justify-center
    rounded-full
    transform hover:-translate-y-1
    transition-all duration-300
    font-medium
  `;

  const ButtonComponent = href ? 'a' : 'button';
  const buttonProps = href ? { href, target } : { onClick };

  return (
    <ButtonComponent
      {...buttonProps}
      className={`
        ${baseClasses}
        ${variants[variant]}
        ${sizes[size]}
        ${className}
      `}
    >
      {Icon && <Icon className="w-5 h-5 mr-2" />}
      <span>{children}</span>
      {href && <ExternalLink className="w-4 h-4 ml-2" />}
    </ButtonComponent>
  );
};