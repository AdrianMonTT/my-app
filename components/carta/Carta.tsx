import React from 'react'

interface CartaProps{
  imagen:string
  titulo:string
  descripcion:string
}

export default function Carta(carta1:CartaProps) {
  return (
    <div className="border d-flex flex-column  border-black  border-4  ">
      
      <img className="w-25 " src={carta1.imagen} alt="" />
      <h1>{carta1.titulo}</h1>
      <p>{carta1.descripcion}</p>

    </div>

  )
}