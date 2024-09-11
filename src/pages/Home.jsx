import React from "react";
import "../css/home.css";
import homeFlyer from "../assets/img/home/homeFlyer.png";
import mano from "../assets/img/home/mano.png";
import shape from "../assets/img/home/shape.png";
import tanque from "../assets/img/home/tanque.png";

const Home = () => {
  return (
    <div>
      <div className="fila-imagen-home">
        <img src={homeFlyer} alt="camioneta petroservi" className="img-home" />
        <div className="container-textoImg-home">
          <h1 className="titulo-img-home">PetroServi</h1>
          <p className="subtitulo-img-home">Empresa Homologada por YPF SA.</p>
          <p className="texto-img-home">
            Tanques de combustible y agua, equipos de despacho completos,
            bombas, caudalímetros, sistemas de filtrado, mangueras
            especializadas, cisternas móviles y más. ¡Encuentra lo que necesitas
            para mantener tu operación funcionando al máximo!
          </p>
          <button className=" boton-img-home">Contactanos</button>
        </div>
      </div>

      <div className="container-experiencia">
        <div className="boxUno">
          <span className="num-box">147 </span>
          <span className="texto-box">Proyectos</span>
        </div>
        <div className="boxDos">
          <span className="num-box">25+ </span>
          <span className="texto-box">Años de experiencia</span>
        </div>

        <div className="boxTres">
          <div>
            <h2 className="titulo-box-tres ">
              Instalamos, Mantenemos y Suministramos Sistemas Industriales
            </h2>
          </div>

          <div className="container-data">
            <div className="box-data">
              <div>
                <img src={tanque} alt="tanque" />
              </div>

              <div>
                <span className="subtitulo-boxTres">
                  Instalación y Canalización
                </span>
                <p className="parrafo-boxTres">
                  Montaje de tanques, cañerías y sistemas eléctricos.
                </p>
              </div>
            </div>
            <div className="box-data">
              <div>
                <img src={shape} alt="shape" />
              </div>
              <div>
                <span className="subtitulo-boxTres">
                  Servicio Técnico y Mantenimiento
                </span>
                <p className="parrafo-boxTres">
                  Mantenimiento integral y soporte técnico especializado.
                </p>
              </div>
            </div>
            <div className="box-data">
              <div>
                <img src={mano} alt="mano" />
              </div>
              <div>
                <span className="subtitulo-boxTres">
                  Ventas de Repuestos y Accesorios
                </span>
                <p className="parrafo-boxTres">
                  Suministros esenciales para garantizar la operación.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
