'use client'
import React,{useState,useEffect} from 'react'

export default function page() {

    const [valor, setvalor]=useState(0)
    const [respuesta, setrespuesta]=useState(0)
    const sumar=()=>{
        setvalor(valor+1)
    }

    const multiplicar=()=>{
        setvalor(0)
    }

    const restar=()=>{
        setvalor(valor-1)
        
    }

    useEffect(()=>{
        console.log("hola")
    },[valor])

    const sumarN=()=>{

    let inputNumero1=document.getElementById("Numero1") as HTMLInputElement;
    let inputNumero2=document.getElementById("Numero2") as HTMLInputElement;
        
        // Obtener el valor de los inputs
    const valorNumero1 = inputNumero1 ? inputNumero1.value : '';
    const valorNumero2 = inputNumero2 ? inputNumero2.value : '';

    const suma=parseInt(valorNumero1)+parseInt(valorNumero2);
    setrespuesta(suma)
        console.log(suma);
    }
  return (
    <>
        <h1>{valor}</h1>
        <h1>ingrese numeros en los recuadros</h1>
        <input type="text" id='Numero1'/>
        <input type="text" id='Numero2'/>
        <br />
        <button onClick={restar}>restar</button>
        <button onClick={multiplicar}>reiniciar</button>
        <button onClick={sumarN}>sumar</button>
        <h1>{respuesta}</h1>
    </>
  )
}
