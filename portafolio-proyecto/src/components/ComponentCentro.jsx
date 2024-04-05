import React from 'react'
import "../styles/styleCentro.css";
import { ComponentSobrMi } from './ComponentSobrMi';
import { ComponentHabilidades } from './ComponentHabilidades';
import { ComponentProyectos } from './ComponentProyectos';
import { ComponentContacts } from './ComponentContacts';

export const ComponentCentro = () => {
  return (
    <div className='componente__Centro'> 
        <ComponentSobrMi />
        <ComponentProyectos />
        <ComponentHabilidades />
        <ComponentContacts />
    </div>
  )
}
