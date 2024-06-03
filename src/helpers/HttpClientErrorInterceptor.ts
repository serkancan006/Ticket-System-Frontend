import { AxiosInstance } from 'axios'
import { showNotifyStack } from 'src/services/NotiStackService'

export function httpClientErrorInterceptor(httpClient: AxiosInstance): void {
  // Request interceptor
  httpClient.interceptors.request.use(
    config => {
      // Her isteğin öncesinde yapılacak işlemler (örneğin, header eklemek)
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
            showNotifyStack('Bad Request', 'error')
            break
          case 401:
            showNotifyStack('Bad Request', 'error')
            break
          case 403:
            showNotifyStack('Bad Request', 'error')
            break
          case 404:
            showNotifyStack('Bad Request', 'error')
            break
          case 500:
            showNotifyStack('Bad Request', 'error')
            break
          default:
            console.error(`Error ${error.response.status}:`, error.response.data)
        }
      } else if (error.request) {
        // İstek yapıldı ama yanıt alınamadı
        console.error('No response received from API')
      } else {
        // İstek hazırlanırken hata oluştu
        console.error(`Request Error: ${error.message}`)
      }
      
      return Promise.reject(error)
    }
  )
}
