import React from 'react'
import "../styles/styleDerecho.css"
import { ComponentBotonDerecho } from './ComponentBotonDerecho'
import aboutImage from '../assets/about.png'
import resumeImage from "../assets/resume.png"
import worksImage from "../assets/works.png"
import blogsImage from "../assets/blogs.png"
import contactImage from "../assets/contact.png"
import { ComponentButonDarkLight } from './ComponentButonDarkLight'


export const ComponentDerecho = () => {
  return (
    <div className='container__Derecho'>
        <ComponentBotonDerecho texto="about" imagen={aboutImage}/>
        <ComponentBotonDerecho texto="resume" imagen={resumeImage}/>
        <ComponentBotonDerecho texto="Works" imagen={worksImage}/>
        <ComponentBotonDerecho texto="Blogs" imagen={blogsImage}/>
        <ComponentBotonDerecho texto="Contacts" imagen={contactImage}/>
        <ComponentButonDarkLight/>
        </div>
)
}
