import React from 'react'
import "../styles/styleBotonDerecho.css"


export const ComponentBotonDerecho = (props) => {
    const { texto, imagen, link } = props || {};
    return (
        <div className='container__Boton__Derecho'>
            <button className='boton__Derecho'>
                <img src={imagen} alt="imagen de about" />
                <label>{texto}</label>
            </button>
        </div>
    )
}