import React from 'react'

export const Imagen = ({ path }) => {
  return (
    <div>
      <img src={path} className="card-img-top" alt="imagen dinamica" />
    </div>
  )
}
