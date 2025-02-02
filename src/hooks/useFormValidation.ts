import { zodResolver } from "@hookform/resolvers/zod";
import { DefaultValues, useForm, UseFormReturn } from "react-hook-form";
import { contactSchema } from "../schemas/formSchema";
import { z } from "zod";


type ContactFormData = z.infer<typeof contactSchema>
export function useContactForm<T extends ContactFormData>(): UseFormReturn<T> {
    return useForm<T>({
      resolver: zodResolver(contactSchema),
      defaultValues: {
        name: '',
        email: '',
        subject: '',
        message: '',
      } as DefaultValues<T>,
    });
  }