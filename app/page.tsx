
'use client'
import {useState} from 'react'

import Carta from "@/components/carta/Carta"
import Header from '@/components/Header'


export interface CartaProps{
  imagen:string
  titulo:string
  descripcion:string
}

const cartaArray:CartaProps[]=[
  {
    imagen:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/613.png",
    titulo:"POKEMON",
    descripcion:"Tipo hielo"
  },
  {
    imagen:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/155.png",
    titulo:"Cyndaquil",
    descripcion:"Tipo fuego"
  },
  {
    imagen:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png",
    titulo:"Pikachu",
    descripcion:"Tipo electrico"
  }
]

export default function page() {

  const[List, setList]=useState<CartaProps[]>(cartaArray)

  return (
    <>
      <div >
        <Header/>

        {List.map((CartaProps,index)=>(
        <Carta
          Carta1={CartaProps}
          key={index}
          />
        ))}


        {/* <a href="https://www.posters.es/cine/"><button>Accion</button></a> */}
        
      {/* <Carta imagen="https://assets.pokemon.com/assets/cms2/img/pokedex/full/613.png" titulo="POKEMON" descripcion="Tipo hielo"/> */}
      {/* <Carta imagen="https://assets.pokemon.com/assets/cms2/img/pokedex/full/155.png" titulo="Cyndaquil" descripcion="Tipo fuego"/> */}
      {/* <Carta imagen="https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png" titulo="Pikachu"  descripcion="Tipo electrico"/> */}
      </div>
    </>

  )
}