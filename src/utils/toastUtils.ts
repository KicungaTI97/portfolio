import toast, { ToastOptions } from "react-hot-toast";

// Opções padrão para os toasts
const defaultToastOption: ToastOptions = {
  position: "top-right",
  duration: 3000,
};

// Função para exibir um toast de sucesso
export const showSuccessToast = (message: string, description?: string) => {
  toast.success(
    description ? `${message}\n${description}` : message, // Combina message e description
    defaultToastOption
  );
};

// Função para exibir um toast de erro
export const showErrorToast = (message: string, description?: string) => {
  toast.error(
    description ? `${message}\n${description}` : message, // Combina message e description
    defaultToastOption
  );
};