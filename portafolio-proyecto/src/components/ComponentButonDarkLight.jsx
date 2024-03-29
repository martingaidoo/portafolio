import React from 'react'
import "../styles/styleButonDarkLight.css"

export const ComponentButonDarkLight = () => {
  return (
    <>
        <label className="switch">
        <input type="checkbox" className="input__check"></input>
        <span className="slider"></span>
        </label>

    </>
    )
}
