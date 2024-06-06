import * as Yup from 'yup'

export const ForgotPasswordSchema = Yup.object({
  email: Yup.string().required('Lütfen emailinizi giriniz!').email('geçersiz email adresi!'),
  password: Yup.string().required('Lütfen şifrenizi giriniz'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Şifreler eşleşmiyor')
    .required('Lütfen şifre tekrar giriniz')
})
