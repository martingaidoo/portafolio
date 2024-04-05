import React from 'react'
import "../styles/styleIzquierda.css"
import perfil from "../assets/martin.png"
import {ComponentBotonRedesIzquierda} from "./ComponentBotonRedesIzquierda"
import { ComponentInfoIzquierda } from './ComponentInfoIzquierda'
import phone from "../assets/phone.png" // Importa la imagen correctamente
import email from "../assets/email.png" // Importa la imagen correctamente
import location from "../assets/location.png" // Importa la imagen correctamente
import birthday from "../assets/birthday.png" // Importa la imagen correctamente
import { ComponentDescargarCV } from './ComponentDescargarCV'



export const ComponentIzquierda = () => {
  return (
    <div className="componente__Izquierda" >
        <img className="foto" src={perfil} alt='Foto perfil'></img>
    <div className='componente__Izquierda__Bajo'>
        <h1 className="componente__Izquierda__nombre" >Martin Gaido</h1>
        <ComponentBotonRedesIzquierda/>
        <ComponentInfoIzquierda tipo="Phone" texto="3533499701" imagen={phone}/>
        <ComponentInfoIzquierda tipo="Email" texto="martingaido00@gmail.com" imagen={email}/>
        <ComponentInfoIzquierda tipo="Location" texto="Argentina Cordoba Villa Maria" imagen={location}/>
        <ComponentInfoIzquierda tipo="BirthDay" texto="19/11/2003" imagen={birthday}/>
        <ComponentDescargarCV/>
    </div>
    </div>

  )
}
