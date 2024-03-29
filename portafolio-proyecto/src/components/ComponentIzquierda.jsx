import React from 'react'
import "../styles/styleIzquierda.css"
import perfil from "../assets/martin.png"
import {ComponentBotonRedesIzquierda} from "./ComponentBotonRedesIzquierda"
import { ComponentInfoIzquierda } from './ComponentInfoIzquierda'
import phone from "../assets/phone.png" // Importa la imagen correctamente

export const ComponentIzquierda = () => {
  return (
    
    <div className='componente__Izquierda'>
        <img src={perfil} alt='Foto perfil'></img>
        <h1 className="componente__Izquierda__nombre">Martin Gaido</h1>
        <ComponentBotonRedesIzquierda/>
        <ComponentInfoIzquierda tipo="Phone" texto="3533499701" imagen={phone}/>
    </div>

  )
}
