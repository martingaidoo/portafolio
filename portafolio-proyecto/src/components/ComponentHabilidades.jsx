import React from 'react'
import "../styles/styleHabilidades.css"
import { ComponentHabilidadCard } from './ComponentHabilidadCard'
import html from "../assets/html.png"
import css from "../assets/css.png"
import javascript from "../assets/javascript.png"
import python from "../assets/python.png"
import java from "../assets/java.png"
import react from "../assets/react.png"
import node from "../assets/node.png"
import express from "../assets/express.png"
import git from "../assets/git.png"
import github from "../assets/github.png"
import npm from "../assets/npm.png"
import figma from "../assets/figma.png"
import photoshop from "../assets/photoshop.png"
import bootstrap from '../assets/bootstrap.png'






export const ComponentHabilidades = () => {
  return (
    <>
      <button className="buttonMovil" data-text="Awesome">
        <span className="actual-text">&nbsp;Habilidades&nbsp;</span>
        <span aria-hidden="true" className="hover-text">&nbsp;Habilidades&nbsp;</span>
    </button>
    <h2>Lenguajes</h2>
    <div className='contenedorHabilidades'>
    <ComponentHabilidadCard imagen={html}/>
    <ComponentHabilidadCard imagen={css}/>
    <ComponentHabilidadCard imagen={javascript}/>
    <ComponentHabilidadCard imagen={python}/>
    <ComponentHabilidadCard imagen={java}/>
    </div>
    <h2>Frameworks y Librerias</h2>

    <div className='contenedorHabilidades'>
    <ComponentHabilidadCard imagen={react}/>
    <ComponentHabilidadCard imagen={node}/>
    <ComponentHabilidadCard imagen={express}/>
    </div>
    <h2>Tecnologias y Herramientas</h2>

    <div className='contenedorHabilidades'>
    <ComponentHabilidadCard imagen={git}/>
    <ComponentHabilidadCard imagen={github}/>
    <ComponentHabilidadCard imagen={npm}/>
    <ComponentHabilidadCard imagen={figma}/>
    <ComponentHabilidadCard imagen={photoshop}/>
    <ComponentHabilidadCard imagen={bootstrap}/>

    </div>

    </>
  )
}
