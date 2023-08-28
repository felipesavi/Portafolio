import React from 'react'
import Style from '../contacto/Contacto.module.css'

const Contacto = () => {
  return (
    <>
      <div className={Style.cont}>
            <h1>Contacto</h1>
            <form className={Style.contact} action="felipesandoval@hotmail.com">
                <input type="text" placeholder='Nombre' />
                <input type="text" placeholder='Apellidos'/>
                <input type="text" placeholder='Email'/>
                <textarea name="" id="" cols="30" rows="10" placeholder='Motivo de contacto'></textarea>
                <input type="submit" value="Enviar"/>
               
            </form>
      </div>
    </> 
  )
}

export default Contacto