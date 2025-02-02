import { useContactForm } from '../../hooks/useFormValidation';
import { motion } from 'framer-motion';
import { showErrorToast, showSuccessToast } from '../../utils/toastUtils';
import { Send } from 'lucide-react';

// Types and Interfaces
interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormFieldProps {
  id: keyof ContactFormData;
  label: string;
  type?: 'text' | 'email' | 'textarea';
  placeholder: string;
  register: any; // Será tipado corretamente no componente
  error?: {
    message?: string;
  };
}

// Form Field Component
const FormField = ({ id, label, type = 'text', placeholder, register, error }: FormFieldProps) => {
  const InputComponent = type === 'textarea' ? motion.textarea : motion.input;
  const inputProps = {
    id,
    type: type === 'textarea' ? undefined : type,
    className: `w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white 
                focus:outline-none focus:border-pink-500 transition-colors
                ${type === 'textarea' ? 'h-36 resize-none' : ''}`,
    placeholder,
    'aria-invalid': error ? "true" : "false",
    'aria-describedby': `${id}-error`,
    ...register(id),
    whileFocus: { scale: 1.02, borderColor: "rgb(236, 72, 153)" },
    transition: { duration: 0.2 }
  };

  return (
    <div>
      <label htmlFor={id} className="block text-white/60 text-sm mb-2">
        {label}
      </label>
      <InputComponent {...inputProps} />
      {error && (
        <p id={`${id}-error`} className="text-red-500 text-sm mt-1" role="alert">
          {error.message}
        </p>
      )}
    </div>
  );
};

// Main Component
export function ContactForm() {
  const { 
    register, 
    handleSubmit, 
    formState: { errors }, 
    reset 
  } = useContactForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData): Promise<void> => {
    try {
      // Aqui você adicionaria a lógica de envio do formulário
      console.log("Dados enviados:", data);
      showSuccessToast("Mensagem enviada com sucesso!"); 
      reset();
    } catch (error) {
     if(error instanceof Error){
      showErrorToast("Erro ao enviar mensagem.");
     }
    }
  };

  const formFields: FormFieldProps[] = [
    {
      id: 'name',
      label: 'Nome',
      placeholder: 'Seu nome',
      register,
      error: errors.name
    },
    {
      id: 'email',
      label: 'Email',
      type: 'email',
      placeholder: 'seu@email.com',
      register,
      error: errors.email
    },
    {
      id: 'subject',
      label: 'Assunto',
      placeholder: 'Qual o assunto?',
      register,
      error: errors.subject
    },
    {
      id: 'message',
      label: 'Mensagem',
      type: 'textarea',
      placeholder: 'Sua mensagem...',
      register,
      error: errors.message
    }
  ];

  return (
    <form 
      onSubmit={handleSubmit(onSubmit)} 
      className="space-y-6"
      aria-labelledby="contact-form-title"
    >
      <div className="grid md:grid-cols-2 gap-6">
        <FormField {...formFields[0]} />
        <FormField {...formFields[1]} />
      </div>

      <FormField {...formFields[2]} />
      <FormField {...formFields[3]} />

      <motion.button
        type="submit"
        className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-4 
                   rounded-lg hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 
                   flex items-center justify-center space-x-2"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        aria-label="Enviar Mensagem"
      >
        <span>Enviar Mensagem</span>
        <Send className="w-5 h-5" />
      </motion.button>
    </form>
  );
}