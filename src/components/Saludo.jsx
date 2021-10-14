import React from 'react'

export const Saludo = ({ persona, edad }) => {
  // console.log(props);
  // console.log(props.persona);
  // console.log(props.edad);
  console.log(persona);
  console.log(edad);
  return (
    <div>
      <h2>Saludo a {persona} y tiene: {edad}</h2>
    </div>
  )
}
