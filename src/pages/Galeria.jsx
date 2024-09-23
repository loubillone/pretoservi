import React from "react";
import Flyer from "../components/Flyer";
import "../css/galeria.css";
import imagenGalUno from "../assets/img/galeria/imagenGalUno.png";
import imagenGalDos from "../assets/img/galeria/imagenGalDos.png";
import imagenGalTres from "../assets/img/galeria/imagenGalTres.png";
import imagenGalCuatro from "../assets/img/galeria/imagenGalCuatro.png";
import imagenGalCinco from "../assets/img/galeria/imagenGalCinco.png";
import imagenGalSeis from "../assets/img/galeria/imagenGalSeis.png";
import imagenGalSiete from "../assets/img/galeria/imagenGalSiete.png";
import imagenGalOcho from "../assets/img/galeria/imagenGalOcho.png";
import imagenGalNueve from "../assets/img/galeria/imagenGalNueve.png";

const Galeria = () => {
  return (
    <div>
      <Flyer />
      <div>
        <div className="photos-galeria">
          <div className="galeria-galeria">
            <div>
              <img src={imagenGalUno} alt="" />
            </div>

            <div className="img-b">
              <img src={imagenGalDos} alt="" />
            </div>

            <div className="img-c">
              <img src={imagenGalTres} alt="" />
            </div>

            <div className="img-d">
              <img src={imagenGalCuatro} alt="" />
            </div>

            <div className="img-f">
              <img src={imagenGalCinco} alt="" />
            </div>

            <div className="img-g">
              <img src={imagenGalSeis} alt="" />
            </div>

            <div className="img-h">
              <img src={imagenGalSiete} alt="" />
            </div>

            <div className="img-i">
              <img src={imagenGalOcho} alt="" />
            </div>

            <div className="img-j">
              <img src={imagenGalNueve} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Galeria;
