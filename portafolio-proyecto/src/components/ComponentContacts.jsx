import React from 'react'
import "../styles/styleContacts.css"

export const ComponentContacts = () => {
  return (
    <div>
        <div className="form-container">
            <div className="form">
                <span className="heading">Contacto</span>
                <input placeholder="Nombre" type="text" className="input"/>
                <input placeholder="Correo Electronico" id="mail" type="email" className="input"/>
                <input placeholder="Asunto" id="asunto" type="text" className="input"/>
                <textarea placeholder="Mensaje" rows="10" cols="30" id="message" name="message" className="textarea"></textarea>
                <div className="button-container">
                <div className="send-button">Enviar</div>
            </div>
        </div>
        </div>
    </div>
  )
}
