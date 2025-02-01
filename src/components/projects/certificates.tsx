import { Award, Clock, ExternalLink } from 'lucide-react'
import { DataContext } from '../../context/dataContext'
import { useContext } from 'react'
export function Certificates() {
    const {certificates} = useContext(DataContext)
  return (
    <div>
               <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 flex items-center">
              <Award className="mr-2" /> Certificações
            </h2>
  
            <div className="grid md:grid-cols-2 gap-8">
              {certificates.map((cert, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-lg rounded-lg p-6 hover:bg-white/20 transition"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{cert.name}</h3>
                      <p className="text-pink-300">{cert.issuer}</p>
                      <p className="text-white/60 mt-2">
                        <Clock className="inline-block mr-1" size={16} /> {cert.date}
                      </p>
                    </div>
                    <a
                      href={cert.link}
                      className="text-white hover:text-pink-300 transition"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={24} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
    </div>
  )
}
