import * as Yup from "yup";

export const SendTicketSchema = Yup.object({
    email: Yup.string().required("Email girminiz zorunludur.").email("lütfen bir e-mail adresi giriniz!"),
    subject: Yup.string().required("konu alını girilmesi zorunludur!").min(5, "lütfen minimum 5 karakterlik bir konu giriniz!"),
    description: Yup.string().required("konu alını girilmesi zorunludur!"),
})
