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

  const accionImagen = (accion) => {
    let i = data.index;

    if (accion === "imagen-siguiente") {
      setData({ imagen: imagenes[i + 1], index: i + 1 });
    }
    if (accion === "imagen-previa") {
      setData({ imagen: imagenes[i - 1], index: i - 1 });
    }

    if (!accion) {
      setData({ imagen: "", index: "" });
    }
  };
  return (
    <div>
      <Flyer />
      <div>
        {data.imagen && (
          <div className="data-galeria">
            <button className="boton-galeria" onClick={() => accionImagen()}>
              X
            </button>

            <button
              className="boton-previo"
              onClick={() => accionImagen("imagen-previa")}
            >
              <i class="fa fa-angle-left" aria-hidden="true"></i>
            </button>
            <img src={data.imagen} alt="" className="visualizadorImg" />
            <button
              className="boton-siguiente"
              onClick={() => accionImagen("imagen-siguiente")}
            >
              <i class="fa fa-angle-right" aria-hidden="true"></i>
            </button>
          </div>
        )}

        <div className="photos-galeria">
          <div className="galeria-galeria">
            {imagenes.map((imagen, index) => {
              return (
                <img
                  src={imagen}
                  key={index}
                  alt="imagenes varias de galeria"
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
