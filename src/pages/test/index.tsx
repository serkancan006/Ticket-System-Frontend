import { Button } from '@mui/material'
import React from 'react'
import { showNotifyStack } from 'src/helpers/NotiStackService'
import HttpClientService from 'src/helpers/HttpClientService'

const TestPage = () => {
  React.useEffect(() => {
    // https://jsonplaceholder.org/posts

    HttpClientService.get({ fullEndPoint: 'https://jsonplaceholder.org/posts' })
      .then(response => console.log(response.data))
      .catch(error => console.error('hata: ', error))
  })

  type jsonDataType = {
    mesaj: string
    sayi: number
    dizi: Array<string>
    file?: File
  }

  const jsonData: jsonDataType = {
    mesaj: 'hahahaha',
    sayi: 10,
    dizi: ['ahmet', 'mehmet']
  }

  const handleJsonToFormData = <T extends Record<string, any>>(jsonData: T) => {
    Object.keys(jsonData).forEach(key => {
      const value = jsonData[key as keyof T]
      console.log(`${key}: ${typeof value}`)
    })
  }

  return (
    <div>
      <h1>Test Sayfası</h1>
      <Button onClick={() => showNotifyStack('Testing', 'success')}>Test Notify Stack</Button>
      <Button onClick={() => handleJsonToFormData(jsonData)}>object keys type log</Button>
    </div>
  )
}

export default TestPage
