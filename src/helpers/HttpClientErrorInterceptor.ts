import { AxiosInstance } from 'axios'
import { showNotifyStack } from 'src/helpers/NotiStackService'
import TokenService from './TokenService'

export function httpClientErrorInterceptor(httpClient: AxiosInstance): void {
  // Request interceptor
  httpClient.interceptors.request.use(
    config => {
      // Her isteğin öncesinde yapılacak işlemler (örneğin, header eklemek)

      const token = TokenService.getToken() // Token'i al

      if (token) {
        config.headers.Authorization = `Bearer ${token}` // Header'a Bearer token ekle
      }

      return config
    },
    error => {
      // İstek hataları burada yakalanır
      return Promise.reject(error)
    }
  )

  // Response interceptor
  httpClient.interceptors.response.use(
    response => {
      // Yanıt başarılı ise yapılacak işlemler
      //   if (response.status >= 200 && response.status < 300) {
      //     console.log('Success:', response.status)
      //   } else if (response.status >= 300 && response.status < 400) {
      //     console.log('Redirection:', response.status)
      //   }

      return response
    },
    error => {
      if (error.response) {
        // Sunucu hatası
        switch (error.response.status) {
          case 400:
            showNotifyStack('Not Found', 'error')
            console.log(error)
            console.log(error.response)
            break
          case 401:
            showNotifyStack('Lütfen Giriş Yapın', 'error')
            break
          case 403:
            showNotifyStack('Yetkisiz İşlem', 'error')
            break
          case 404:
            showNotifyStack('Bad Request', 'error')
            break
          case 500:
            showNotifyStack('Server Error', 'error')
            break
          default:
            showNotifyStack('Beklenmeyen bir hata', 'error')

          //console.error(`Hata ${error.response.status}:`, error.response.data)
        }
      }

      // else if (error.request) {
      //   // İstek yapıldı ama yanıt alınamadı
      //   console.error('No response received from API')
      // } else {
      //   // İstek hazırlanırken hata oluştu
      //   console.error(`Request Error: ${error.message}`)
      // }

      return Promise.reject(error)
    }
  )
}
