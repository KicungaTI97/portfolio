import { z } from "zod";

export const contactSchema = z.object({
    name: z.string().min(2, { message: "Nome é obrigatório" }),
    email: z.string().email({ message: "Email inválido" }),
    subject: z.string().min(1, { message: "Assunto é obrigatório" }),
    message: z.string().min(1, { message: "Mensagem é obrigatório" })
  });