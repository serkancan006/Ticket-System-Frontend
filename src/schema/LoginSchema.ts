import * as Yup from "yup";

export const LoginSchema = Yup.object({
    email: Yup.string().required("Lütfen emailinizi giriniz!").email("geçersiz email adresi!"),
    password: Yup.string().required("Lütfen şifrenizi giriniz"),
})
