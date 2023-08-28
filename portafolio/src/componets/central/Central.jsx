import React, { useEffect } from 'react'
import {gsap} from 'gsap'
import Style from '../central/Central.module.css'
import { Outlet } from 'react-router-dom'
import Himg1 from '../img/bandera.png'
import Himg2 from '../img/acordeon.png'


const Central = () => {
  const timeline = gsap.timeline();
   useEffect(()=> {
    const Titulo = document.querySelector('.Titulo');
    const Titulo2 = document.querySelector('.Titulo2');
    const Cuadrado1 = document.querySelector(`.${Style.Cuadrado_1}`);
    const Cuadrado2 = document.querySelector(`.${Style.Cuadrado_2}`);
    const Cuadrado3 = document.querySelector(`.${Style.Cuadrado_3}`);
    const Img = document.querySelectorAll('.img')

    timeline.from( Titulo, { opacity: 1, x: -40,duration:2} )
            .from(Titulo2, { opacity: 0, y:50 , duration:2}, "-=2" )
            .to(Cuadrado1, { opacity: 2, duration:3, x: "80%", left: "-10%", borderRadius: 100, ease: 'bounce.out', rotate: 360 },"-=1" )
            .to(Cuadrado2, { opacity: 2, duration:3, x: "-45%", right: "-10%", borderRadius: 100, ease: 'bounce.out', rotate: -360 }, "-=3")
            .to(Cuadrado3, { opacity: 2, duration:3, x: "80%", left: "-10%", borderRadius: 100, ease: 'bounce.out', rotate: 360 }, "-=3")
            .from(Img, { opacity:0, duration:1, delay:0.5 });
   },[timeline])
   
  return (
    <>
      <div className={Style.conts}>
         <h2 className='Titulo'>Hola, Soy Felipe Sandoval y soy desarrollador web en Colombia, y ofrezco mis servicios de 
         <strong className='Titulo2'> programación y desarrollo </strong> 
         en todo tipo de proyectos web.</h2> 
         <div className={Style.animation}>
              <div className={`${Style.Cuadrado} ${Style.Cuadrado_1}`}>
                  <h1>JS</h1> 
              </div>
              <div className={`${Style.Cuadrado} ${Style.Cuadrado_2}`}>
                  <h1>CSS</h1>
              </div>
              <div className={`${Style.Cuadrado} ${Style.Cuadrado_3}`}>
                  <h1>HTML</h1>
              </div>
         </div>
         <div className={`${Style.img1} img`}>
            <img src={Himg1} alt="" />
         </div>
         <div className={`${Style.img2} img`}>
            <img src={Himg2} alt="" />
         </div>
      </div>
      <Outlet/>
    </>
  )
}

export default Central