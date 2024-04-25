
'use client'
import {useEffect, useState} from 'react'

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
  const[pokemons,setpokemons]=useState<CartaProps[]>([])
  useEffect(()=>{
    fetch("https://pokeapi.co/api/v2/pokemon?limit=2000")
    .then((respuesta)=>respuesta.json())
    .then((datos)=>{
      const results:any[]=datos.results
      const mapPokemon:CartaProps[]=results.map(poke=>({
        imagen:`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${results.indexOf(poke)+1}.png`,
        titulo:poke.name,
        descripcion:''
      }))
      setpokemons(mapPokemon)
      }
    )})
    

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

        {pokemons.map((pokemons, index)=>(
          <Carta
            Carta1={pokemons}
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