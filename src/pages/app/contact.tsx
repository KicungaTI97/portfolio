import { useContext } from 'react';
import { Toaster } from 'sonner';
import {
  Mail,
  Phone,
  MapPin
} from 'lucide-react';
import { DataContext } from '../../context/dataContext';
import { useScroll, useSpring, motion } from 'framer-motion';
import { ContactForm } from '../../components/projects/contactForm';

export default function Contact(){

  const { scrollYProgress } = useScroll();
  const { socialLinks } = useContext(DataContext);


  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
      <Toaster richColors />
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-blue-500 origin-left z-50" 
        style={{ scaleX }}
      />
      <section className="py-20 px-4" id="contact">
        <div className="max-w-7xl mx-auto">
          <h2 
            className="text-3xl font-bold text-white mb-12 flex items-center"
            aria-label="Seção de Contato"
          >
            <Mail className="mr-2" /> Entre em Contato
          </h2>

          <div className="grid lg:grid-cols-2 gap-12">
            
              {/* ... (previous contact info card code) ... */}

              <div className="space-y-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Vamos Conversar!</h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-pink-500/10 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-pink-500" />
                  </div>
                  <div>
                    <p className="text-white/60">Email</p>
                    <p className="text-white">Kicungati@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-pink-500/10 p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-pink-500" />
                  </div>
                  <div>
                    <p className="text-white/60">Telefone</p>
                    <p className="text-white">(+244) 937811748</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-pink-500/10 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-pink-500" />
                  </div>
                  <div>
                    <p className="text-white/60">Localização</p>
                    <p className="text-white">Benguela - Lobito, Angola</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-white/10">
                <h4 className="text-white font-semibold mb-4">Me encontre nas redes</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/10 p-3 rounded-lg hover:bg-white/20 transition-all duration-300 group"
                    >
                      <div className="text-white group-hover:text-pink-500 transition-colors">
                        {social.icon}
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
        
            </div>

            {/* Contact Form with Improved Accessibility */}
            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-8">
              <ContactForm/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};