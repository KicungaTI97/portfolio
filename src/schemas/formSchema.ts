import { z } from "zod";

export const contactSchema = z.object({
    name: z.string().min(2, { message: "Nome deve ter pelo menos 2 caracteres" }),
    email: z.string().email({ message: "Email inválido" }),
    subject: z.string().min(3, { message: "Assunto deve ter pelo menos 3 caracteres" }),
    message: z.string().min(10, { message: "Mensagem deve ter pelo menos 10 caracteres" })
  });