import { Heart} from 'lucide-react';
import { useContext, useState } from 'react';
import { DataContext } from '../context/dataContext';
import { toast, Toaster} from 'react-hot-toast';

export const Footer = () => {
  const [email, setEmail] = useState("")
  const [subscribedEmails, setSubscribedEmails] = useState<string[]>([]); //lista dos inscritos

  const currentYear = new Date().getFullYear();
  
  const { personalInfo, socialLinks } = useContext(DataContext)
  const { name, location } = personalInfo;
  //validação do email
  const isValidEmails = (email: string) => {
    return /\S+@\S+\.\S+/.test(email)
  }

  const sendEmailToSubscribers = (email: string) => {
    // implementar envio de email para a lista de inscritos
    console.log(`Email enviado para: ${email}`);
  }
  //notificação de sucesso para subscrição de newsletter
  const handleSubscribe = () => {
    if(!isValidEmails(email)){
      toast.error('Por favor, informe um endereço de e-mail válido.', {
        duration: 2000,
        position: 'bottom-right',
      });
      return;
    }

    if(subscribedEmails.includes(email)){
      toast.error('Este email já está cadastrado..', {
        duration: 2000,
        position: 'bottom-right',
      });
      return;
    }

     //adicionar email a lista de inscritos
     setSubscribedEmails([...subscribedEmails, email])
    
     toast.success("Subscrição realizada com sucesso!",{
       duration: 2000,
       position: 'bottom-right',
     })

     //enviar email de boas vindas
      sendEmailToSubscribers(email)

     //limpar o campo de email
     setEmail("")
    }


 
  return (
    <footer className="relative mt-16">
    <Toaster />
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-gray-900/50 -z-10" />
      
      {/* Top border with glow */}
      <div className="relative">
        <div className="absolute -top-px left-0 w-full h-px bg-gradient-to-r from-transparent via-pink-500/50 to-transparent" />
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand and social links */}
          <div className="text-center md:text-left">
            <h2 className="text-xl font-bold text-white/90 mb-2">{name}</h2>
            <p className="text-white/70 mb-4 max-w-md">
            Desenvolvedor Frontend apaixonado por criar experiências digitais excepcionais e interfaces intuitivas.
            </p>
            <div className="flex items-center justify-center md:justify-start space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon
            return(
              <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-pink-400 transform hover:-translate-y-1 transition-all duration-300"
              aria-label={social.name}
            >
              <Icon />
            </a>
            )
            })}
            </div>
          </div>

          {/* Newsletter form */}
          <div className="w-full md:w-auto">
            <div className="flex max-w-md mx-auto md:mx-0">
              <input
                required
                type="email"
                placeholder="Subscribe to newsletter"
                className="flex-1 bg-white/5 border border-white/10 rounded-l-lg px-4 py-2 text-white/90 
                         focus:outline-none focus:border-pink-500/50 focus:bg-white/10 transition-all"
              />
              <button
                onClick={handleSubscribe}
                disabled={!isValidEmails(email) || subscribedEmails.includes(email)}
                type="submit"
                className={`bg-pink-500/80 hover:bg-pink-500 text-white/90 px-6 py-2 rounded-r-lg 
                         transition-all duration-300 hover:shadow-[0_0_20px_rgba(236,72,153,0.3)]
                         ${!isValidEmails(email) || subscribedEmails.includes(email) ? "bg-gray-500 cursor-not-allowed"
                          : "bg-pink-500/80 hover:bg-pink-500 hover:shadow-[0_0_20px_rgba(236, 72, 153, 0.3)] text-white/90"
                          }`}               
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-white/10">
          <p className="text-white/60 m-b text-center">
            © {currentYear} {name}. Feito com{' '}
            <Heart className="inline-block w-4 h-4 text-pink-400 mx-1" />{' '}
            {location}
          </p>
        </div>

      </div>
    </footer>
  );
};
