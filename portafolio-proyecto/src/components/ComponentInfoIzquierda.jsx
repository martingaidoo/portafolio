import React from 'react'
import "../styles/styleInfoIzquierda.css"


export const ComponentInfoIzquierda = (props) => {
    const {tipo, texto, imagen} = props || {};
  return (
    <div className="container__Info__Izquierda">
          <img src={imagen} alt='phone'></img>
          <h5 >{tipo}</h5>
          <label>{texto}</label>
    </div>
  )
}
