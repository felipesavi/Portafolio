import React, { useState } from "react";
import Style from "./Food.module.css";
import food from "../img/food.gif";
import food1 from "../img/img_portafolio/proyectos_food/food1.jpg";
import food2 from "../img/img_portafolio/proyectos_food/food2.jpg";
import food3 from "../img/img_portafolio/proyectos_food/food3.jpg";
import food4 from "../img/img_portafolio/proyectos_food/food4.jpg";
import food5 from "../img/img_portafolio/proyectos_food/food5.jpg";
import prox from "../img/proximo.png"
import ant from "../img/anterior.png"
import salir from '../img/salir.png'
import { Link } from 'react-router-dom'

const Food = () => {
  const [foods, setFoods] = useState(0);
  const images = [food, food1, food2, food3, food4, food5];

  return (
    <div className={Style.cont}>
      <div className={Style.CntFoods}>
        <img src={images[foods]} alt="Imagen" />
        <div className={Style.botones}>
          <button className={Style.btnAn} onClick={() =>setFoods((prevIndex) =>prevIndex === 0 ? images.length - 1 : prevIndex - 1)}>
            <img src={ant} alt="" />
          </button>
          <button  className={Style.btnPx} onClick={() =>setFoods((prevIndex) => (prevIndex + 1) % images.length)}>
          <img src={prox} alt="" />
          </button>
        </div>
        <div className={Style.txt} >
        <h2>FooPi</h2>
        <p>Este proyecto fue elaborado en dos semanas y media el fronten fue realizado con react, redux y css puro ya
           que era uno de los requisitos y no era posible utilizar bootstrap, el backen fue realizado con node.js y postgresql </p>
        </div>
      </div>
      |<Link className={Style.link} to="/portafolio" ><img src={salir} alt="" /></Link>
    </div>
  );
};

export default Food;
