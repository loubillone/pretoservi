import React, { useState } from "react";
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
  const imagenes = [
    imagenGalUno,
    imagenGalDos,
    imagenGalTres,
    imagenGalCuatro,
    imagenGalCinco,
    imagenGalSeis,
    imagenGalSiete,
    imagenGalOcho,
    imagenGalNueve,
  ];
  const [data, setData] = useState({ imagen: "", index: 0 });

  const vistaImagen = (imagen, index) => {
    setData({ imagen, index });
  };
  return (
    <div>
      <Flyer />
      <div>
        {data.imagen && (
          <div className="data-galeria">
            <img src={data.imagen} alt="" className="visualizadorImg" />
          </div>
        )}
        <div className="photos-galeria">
          <div className="galeria-galeria">
            {imagenes.map((imagen, index) => {
              return (
                <img
                  src={imagen}
                  key={index}
                  alt=""
                  className="myImg"
                  onClick={() => vistaImagen(imagen, index)}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Galeria;
