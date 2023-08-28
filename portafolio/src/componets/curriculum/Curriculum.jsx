import React from "react";
import Style from "./Curriculum.module.css";
import foto from "../img/foto.jpg";
import ProgressBar from "../progressBar/ProgressBar";

const Curriculum = () => {
  return (
    <div className={Style.conts}>
      <div className={Style.ContCurriculum}>
        <img className={Style.foto} src={foto} alt="" />
        <div className={Style.PrnDtl}>
          <h3>Datos Personales: </h3>
          <ul>
            <li className={Style.itmDpl}>
              <span>Nombres:</span>
              <p>Duvan Felipe </p>
            </li>
            <li className={Style.itmDpl}>
              <span>Apellidos:</span>
              <p>Sandoval Villalobos</p>
            </li>
            <li className={Style.itmDpl} >
              <span>País:</span>
              <p>Colombia</p>
            </li>
            <li className={Style.itmDpl} >
              <span>Departamento:</span>
              <p>Boyacá</p>
            </li>
            <li className={Style.itmDpl}>
              <span>telefono:</span>
              <p>3158073621</p>
            </li>
            <li className={Style.itmDpl}>
              <span>Correo electrónico:</span>
              <p>felipesandovalvillalobos@hotmail.com</p>
            </li>
          </ul>
        </div>
        <div className={Style.PflLbr}>
          <h3>Perfil Laboral: </h3>
          <p>
          Soy una persona responsable, respetuosa, con valores altos y
           sentido de pertenecía. Poseo conocimientos como desarrollador y 
           me desempeño en esta área, soy autodidacta por lo cual me gusta 
           aprender y tener desafíos en el mundo de la programación
          </p>
        </div>
        <div className={Style.skills}>
          <h3>Habilidades: </h3>
          <div>
            <ul>
              <li>
                HTML:
                <ProgressBar progress={95} />
              </li>
              <li>
                Css:
                <ProgressBar progress={90} />
              </li>
              <li>
                JavaScript:
                <ProgressBar progress={85} />
              </li>
              <li>
                React:
                <ProgressBar progress={75} />
              </li>
              <li>
                Redux:
                <ProgressBar progress={60} />
              </li>
              <li>
                Node js:
                <ProgressBar progress={80} />
              </li>
            </ul>
          </div>
        </div>
        <div className={Style.Edct}>
          <h3>Educación formal no tradicional:</h3>
          <ul>
            <li className={Style.itmEdc} >
              <h4>DESARROLLADOR FULL STACK</h4>
              <p><strong>Tipo capacitación o certificación: </strong>Bootcamp</p>
              <p><strong>Institución: </strong>Soy Henry</p>
            </li >
            <li className={Style.itmEdc}>
              <h4>NODE.JS, API REST, EXPRESS, MONGODB</h4>
              <p><strong>Tipo capacitación o certificación: </strong>Curso</p>
              <p><strong>Institución: </strong>Udemy</p>
            </li>
            <li className={Style.itmEdc}>
              <h4>CURSO JAVASCRIPT</h4>
                <p><strong>Tipo capacitación o certificación: </strong>Curso</p>
                <p><strong>Institución: </strong>Udemy</p>
              </li>
          </ul>
        </div>
        <div className={Style.EdcFml}>
          <h3>Educación tradicional:</h3>
          <ul>
            <li className={Style.itmEdcFml} >
              <h4>INGENERIA DE SISTEMAS</h4>
              <p><strong>Estado: </strong> En proceso</p>
              <p><strong>Institución: </strong>Uniremington</p>
            </li >
            <li className={Style.itmEdcFml}>
              <h4>TECNICO EN SISTEMAS</h4>
              <p><strong>Estado: </strong>Graduado</p>
              <p><strong>Institución: </strong>SERVICIO NACIONAL DE APRENDIZAJE-SENA</p>
            </li>
            <li className={Style.itmEdcFml}>
              <h4>BACHILLER</h4>
              <p><strong>Estado: </strong>Graduado</p>
              <p><strong>Institución: </strong>Instituto Técnico Gonzalo Suárez Rendón</p>
              </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Curriculum;
