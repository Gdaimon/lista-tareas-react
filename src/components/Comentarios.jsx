import React from 'react'
import { Imagen } from './Imagen'

export const Comentarios = ({ persona, despcipcion, pathUrl }) => {
  // style = "width: 18rem;"
  // https://picsum.photos/seed/picsum/200/300

  const styleCard = {
    width: '18rem'
  }


  return (
    <div className="card" style={styleCard}>
      <Imagen path={pathUrl} />
      <div className="card-body">
        <h5 className="card-title">{persona}</h5>
        <p className="card-text">{despcipcion}</p>
        {/* <a href="#" class ="btn btn-primary">Go somewhere</a> */}
      </div>
    </div>
  )
}
