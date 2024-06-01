import { Button } from '@mui/material'
import React from 'react'
import { showNotifyStack } from 'src/services/NotiStackService'

const Test = () => {
  return (
    <div>
      <h1>Test Sayfası</h1>
      <Button onClick={() => showNotifyStack('Testing', 'success')}>Test Notify Stack</Button>
    </div>
  )
}

export default Test
