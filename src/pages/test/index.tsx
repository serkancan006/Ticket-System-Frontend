import { Button } from '@mui/material'
import React from 'react'
import { showNotifyStack } from 'src/services/NotiStackService'
import HttpClientService from 'src/helpers/HttpClientService'

const TestPage = () => {
  React.useEffect(() => {
    // https://jsonplaceholder.org/posts

    HttpClientService.get({ fullEndPoint: 'https://jsonplaceholder.org/postss' })
      .then(response => console.log(response.data))
      .catch(error => console.error('hata: ', error))
  })

  return (
    <div>
      <h1>Test Sayfası</h1>
      <Button onClick={() => showNotifyStack('Testing', 'success')}>Test Notify Stack</Button>
    </div>
  )
}

export default TestPage
