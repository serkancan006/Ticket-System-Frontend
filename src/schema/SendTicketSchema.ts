import * as Yup from 'yup'

export const SendTicketSchema = Yup.object({
  //email: Yup.string().required('Email girminiz zorunludur.').email('lütfen bir e-mail adresi giriniz!'),
  subject: Yup.string()
    .required('konu alını girilmesi zorunludur!')
    .min(5, 'lütfen minimum 5 karakterlik bir konu giriniz!'),
  description: Yup.string().required('açıklama alını girilmesi zorunludur!'),
  file: Yup.mixed()
    .nullable()
    .test('fileType', 'Geçerli bir dosya seçin', value => {
      if (!value) return true // Eğer dosya yoksa, doğrulamayı geç.

      // Dosyanın türünü kontrol et
      if (Array.isArray(value)) {
        const allowedTypes = ['image/jpeg', 'image/png', 'application/pdf']

        return value.every(file => allowedTypes.includes(file.type))
      }

      return false
    })
})
