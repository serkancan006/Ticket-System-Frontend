import { Button } from '@mui/material'
import React from 'react'
import { showNotifyStack } from 'src/services/NotiStackService'
import { HttpClientService } from 'src/helpers/HttpClientService'

const TestPage = () => {
  const client = new HttpClientService()

  React.useEffect(() => {
    // https://jsonplaceholder.org/posts
    client.Get({ fullEndPoint: 'https://jsonplaceholder.org/posts' })
  })

  return (
    <div>
      <h1>Test Sayfası</h1>
      <Button onClick={() => showNotifyStack('Testing', 'success')}>Test Notify Stack</Button>
    </div>
  )
}

export default TestPage
