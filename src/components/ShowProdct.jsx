import React from 'react'
import { useLocation } from 'react-router-dom'

function ShowProdct() {
    const location=useLocation()
  return (
    <div>
        <h1>{location.prod.name}</h1>
    </div>
  )
}

export default ShowProdct