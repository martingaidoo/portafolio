import React from 'react'
import "../styles/styleHabilidadCard.css"

export const ComponentHabilidadCard = (props) => {
    const {imagen} = props || {};
  return (
    <div className='contenedorHabilidades'>
        <div class="card">
        <div class="card2">
            <img src={imagen}></img>
        </div>
        </div>
    </div>
  )
}
