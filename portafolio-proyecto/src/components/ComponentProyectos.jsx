import React from 'react'
import "../styles/styleProyectos.css"
export const ComponentProyectos = () => {
  return (
    <div className='componentProyectos'>

        <button className="buttonMovil" data-text="Awesome">
                <span className="actual-text">&nbsp;Proyectos&nbsp;</span>
                <span aria-hidden="true" className="hover-text">&nbsp;Proyectos&nbsp;</span>
            </button>
        <div className="cards">
        <div className="card red">
            <p className="tip">Hover Me</p>
            <p className="second-text">FOLLOW ME MY BROO</p>
        </div>
        <div className="card white">
            <p className="tip">Hover Me</p>
            <p className="second-text">FOLLOW ME MY BROO</p>
        </div>
    </div>

    </div>
  )
}
