import * as Yup from 'yup'

export const LoginSchema = Yup.object({
  username: Yup.string().required('Lütfen kullanıcı adınızı giriniz!'),
  password: Yup.string().required('Lütfen şifrenizi giriniz')
})
