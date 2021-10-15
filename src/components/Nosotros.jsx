import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export const Nosotros = () => {

  const respuesta = [
    { id: 1, nombre: 'Juan' },
    { id: 2, nombre: 'Martha' },
    { id: 3, nombre: 'Diana' },
    { id: 4, nombre: 'Pedro' },
  ]

  const [usuarios, setUsuarios] = useState([])

  useEffect(() => {
    console.log('Usando useEffect');
    document.title = 'Use Effect'
    setUsuarios(respuesta)
  }, [])



  return (
    <div>
      <h2>Pagina Nosotros</h2>
      <hr />
      <ul>

        {
          usuarios.map((usuario) => {
            return (
              <li key={usuario.id}>
                <Link to={`/nosotros/${usuario.id}`}>
                  Nombre: {usuario.nombre}
                </Link>
              </li>
            )
          })
        }
      </ul>




    </div>
  )
}
