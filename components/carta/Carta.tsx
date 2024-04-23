
import {CartaProps} from '@/app/page'

interface peliProps{
  Carta1:CartaProps
}

export default function Carta({Carta1}:peliProps) {
  return (
    <div className="border d-flex flex-column  border-black  border-4  ">
      
      <img className="w-25 " src={Carta1.imagen} alt="" />
      <h1>{Carta1.titulo}</h1>
      <p>{Carta1.descripcion}</p>

    </div>

  )
}