import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { contactSchema } from "../schemas/formSchema";

export function useContactForm(){
    return(
    useForm({
        resolver: zodResolver(contactSchema),
        defaultValues: {
            name: '',
            email: '',
            message: ''
        }
    })  
    )
}
