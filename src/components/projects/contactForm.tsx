import { useContactForm } from '../../hooks/useFormValidation';
import { motion } from 'framer-motion';
import { showErrorToast, showSuccessToast } from '../../utils/toastUtils';
import { Send } from 'lucide-react';

export function ContactForm() {
      const { register, handleSubmit, formState: { errors }, reset } = useContactForm();

      const onSubmit = async (data: any) => {
        try {
          console.log("Dados enviados:", data);
    
          showSuccessToast("Mensagem enviada com sucesso!"); // ✅ Chamando a função do Toast
          reset();
        } catch (error) {
          showErrorToast("Erro ao enviar mensagem."); // ✅ Chamando a função do Toast
        }
      };
      
  return (
    <form 
    onSubmit={handleSubmit(onSubmit)} 
    className="space-y-6"
    aria-labelledby="contact-form-title"
  >

    <div className="grid md:grid-cols-2 gap-6">
      <div>
        <label 
          htmlFor="name" 
          className="block text-white/60 text-sm mb-2"
        >
          Nome
        </label>
        <input
          id="name"
          type="text"
          {...register('name')}
          className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-pink-500 transition-colors"
          placeholder="Seu nome"
          aria-invalid={errors.name ? "true" : "false"}
          aria-describedby="name-error"
        />
        {errors.name && (
          <p 
            id="name-error" 
            className="text-red-500 text-sm mt-1"
            role="alert"
          >
            {errors.name.message}
          </p>
        )}
      </div>
      <div>
        <label 
          htmlFor="email" 
          className="block text-white/60 text-sm mb-2"
        >
          Email
        </label>
        <motion.input
          id="email"
          type="email"
          {...register('email')}
          className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-pink-500 transition-colors"
          placeholder="seu@email.com"
          aria-invalid={errors.email ? "true" : "false"}
          aria-describedby="email-error"
          whileFocus={{ scale: 1.02, borderColor: "rgb(236, 72, 153)" }}
          transition={{ duration: 0.2 }}
        />
        {errors.email && (
          <p 
            id="email-error" 
            className="text-red-500 text-sm mt-1"
            role="alert"
          >
            {errors.email.message}
          </p>
        )}
      </div>
    </div>

    <div>
      <label 
        htmlFor="subject" 
        className="block text-white/60 text-sm mb-2"
      >
        Assunto
      </label>
      <motion.input
        id="subject"
        type="text"
        {...register('subject')}
        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-pink-500 transition-colors"
        placeholder="Qual o assunto?"
        aria-invalid={errors.subject ? "true" : "false"}
        aria-describedby="subject-error"
        whileFocus={{ scale: 1.02, borderColor: "rgb(236, 72, 153)" }}
        transition={{ duration: 0.2 }}
      />
      {errors.subject && (
        <p 
          id="subject-error" 
          className="text-red-500 text-sm mt-1"
          role="alert"
        >
          {errors.subject.message}
        </p>
      )}
    </div>

    <div>
      <label 
        htmlFor="message" 
        className="block text-white/60 text-sm mb-2"
      >
        Mensagem
      </label>
      <motion.textarea
        id="message"
        {...register('message')}
        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-pink-500 transition-colors h-36 resize-none"
        placeholder="Sua mensagem..."
        aria-invalid={errors.message ? "true" : "false"}
        aria-describedby="message-error"
        whileFocus={{ scale: 1.02, borderColor: "rgb(236, 72, 153)" }}
        transition={{ duration: 0.2 }}
      />
      {errors.message && (
        <p 
          id="message-error" 
          className="text-red-500 text-sm mt-1"
          role="alert"
        >
          {errors.message.message}
        </p>
      )}
    </div>

    <button
      type="submit"
      className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-4 rounded-lg hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center space-x-2"
      aria-label="Enviar Mensagem"
    >
      <span>Enviar Mensagem</span>
      <Send className="w-5 h-5" />
    </button>
  </form>
  )
}
