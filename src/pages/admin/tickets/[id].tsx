import React from 'react'
import { useRouter } from 'next/router'

const Index = () => {
  const { query } = useRouter()

  return (
    <div>
      <h1>Ticket Detail sayfası</h1>
      <p>{query.id}</p>
    </div>
  )
}

export default Index
