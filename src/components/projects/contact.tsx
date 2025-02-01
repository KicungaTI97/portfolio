import { Coffee, Mail, User } from 'lucide-react'
import { ContactForm } from './contactForm'
import { DataContext } from '../../context/dataContext'
import { useContext } from 'react'
export default function Contact() {
    const {personalInfo} = useContext(DataContext)
    const {socialLinks, location} = personalInfo
  return (
    <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 flex items-center">
              <Mail className="mr-2" /> Contato
            </h2>
  
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6">
                <ContactForm />
              </div>
  
              <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6">
                <div className="space-y-6">
                  <div className="flex items-center text-white">
                    <Mail className="w-6 h-6 mr-4 text-pink-400" />
                    <div>
                      <h3 className="font-bold mb-1">Email</h3>
                      <p className="text-white/70">{socialLinks.email}</p>
                    </div>
                  </div>
  
                  <div className="flex items-center text-white">
                    <User className="w-6 h-6 mr-4 text-pink-400" />
                    <div>
                      <h3 className="font-bold mb-1">Localização</h3>
                      <p className="text-white/70">{location}</p>
                    </div>
                  </div>
  
                  <div className="flex items-center text-white">
                    <Coffee className="w-6 h-6 mr-4 text-pink-400" />
                    <div>
                      <h3 className="font-bold mb-1">Vamos conversar!</h3>
                      <p className="text-white/70">Disponível para novos projetos</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
  )
}
