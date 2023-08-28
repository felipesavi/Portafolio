import React, { useState } from 'react'
import Style from './Game.module.css'
import game  from '../img/game.gif'
import game1  from '../img/img_portafolio/proyecto_games/games1.jpg'
import game2  from '../img/img_portafolio/proyecto_games/games2.jpg'
import game3  from '../img/img_portafolio/proyecto_games/games3.jpg'
import game4  from '../img/img_portafolio/proyecto_games/games4.jpg'
import game5  from '../img/img_portafolio/proyecto_games/games5.jpg'
import prox from "../img/proximo.png"
import ant from "../img/anterior.png"
import salir from '../img/salir.png'
import { Link } from 'react-router-dom'

const Game = () => {
    const [games, setGames] = useState (0);
    const images = [game, game1, game2, game3, game4, game5];
  return (
    <div className={Style.cont}>
      <div className={Style.CntFoods}>
        <img src={images[games]} alt="Imagen" />
        <div className={Style.botones}>
          <button className={Style.btnAn} onClick={() =>setGames((prevIndex) =>prevIndex === 0 ? images.length - 1 : prevIndex - 1)}>
            <img src={ant} alt="" />
          </button>
          <button  className={Style.btnPx} onClick={() =>setGames((prevIndex) => (prevIndex + 1) % images.length)}>
          <img src={prox} alt="" />
          </button>
        </div>
        <div className={Style.txt} >
        <h2>Video Games</h2>
        <p>Este proyecto fue elaborado en dos semanas y media el fronten fue realizado con react, redux y css puro ya
           que era uno de los requisitos y no era posible utilizar bootstrap, el backen fue realizado con node.js y postgresql </p>
        </div>
      </div>
      |<Link className={Style.link} to="/portafolio" ><img src={salir} alt="" /></Link>
    </div>
  )
}

export default Game