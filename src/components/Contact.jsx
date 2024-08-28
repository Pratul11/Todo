import React from 'react'
import { useParams } from 'react-router-dom'

const Contact = () => {
    const params = useParams()
  return (
    <div>
      I'm contact page.
      Your name is {params.username}
    </div>
  )
}

export default Contact
