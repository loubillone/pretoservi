import React from "react";
import Iframe from "react-iframe";
import "../css/mapa.css";
import telefono from "../assets/img/home/iconos/telefono.png";
import mensaje from "../assets/img/home/iconos/mensaje.png";

const Mapa = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="row mb-4 mt-5">
          <div className="col-12 p-0">
            <Iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1742.5601883733214!2d-65.41741484636202!3d-24.797388241801972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x941bc3a6185177c7%3A0xab839726f2203358!2sPellegrini%20633%2C%20A4400%20Salta!5e0!3m2!1ses-419!2sar!4v1728264643462!5m2!1ses-419!2sar"
              width="100%"
              height="300"
              style="border:0;"
              allowfullscreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></Iframe>
          </div>
        </div>
      </div>

      <div className="container ">
        <div className="row fila-home-infoPetro">
          <div className="col columna-home-infoPetro">
            <div className="container-home-infoDir">
              <span className="texto-infoPetro">DIRECCIÓN</span>
              <p className="subtexto-infoPetro">
                Pellegrini 633, Salta, Capital, Argentina
              </p>
            </div>
          </div>
          <div className="col columna-home-infoPetro">
            <div className="icono-home-infoPetro">
              <img src={telefono} alt="icono telefono" />
            </div>
            <div className="info-home-infoPetro">
              <span className="texto-infoPetro-datos ">TELÉFONOS</span>
              <p className="datos-infoPetro mb-0">+54 0387 511-2864</p>
              <p className="datos-infoPetro mb-0">+54 0387 512-9492</p>
              <p className="datos-infoPetro">+54 0387 529-4822</p>
            </div>
          </div>
          <div className="col columna-home-infoPetro">
            <div className="icono-home-infoPetro">
              <img src={mensaje} alt="icono mensaje" />
            </div>
            <div className="info-home-infoPetro">
              <span className="texto-infoPetro-datos">EMAIL</span>
              <p className="datos-infoPetro">petroservi.pastrana@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mapa;
