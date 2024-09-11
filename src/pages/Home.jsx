import React from "react";
import "../css/home.css";
import homeFlyer from "../assets/img/home/homeFlyer.png";
import mano from "../assets/img/home/mano.png";
import shape from "../assets/img/home/shape.png";
import tanque from "../assets/img/home/tanque.png";
import homeNosotros from "../assets/img/home/homeNosotros.png";
import homeNosotrosDos from "../assets/img/home/homeNosotrosDos.png";

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

      <div className="container container-home-nosotros">
        <div className="row fila-home-nosotros">
          <div className="col">
            <div>
              <span>Sobre nosotros</span>
              <h2>Soluciones Innovadoras para el Éxito Industrial</h2>
              <h3>Comprometidos con la Excelencia y la Innovación</h3>
              <p>
                En PetroServi, aplicamos nuestro profundo conocimiento en la
                instalación y mantenimiento de sistemas industriales para
                asegurar el éxito en cada proyecto. Ofrecemos soluciones
                integrales para estaciones de servicio, incluyendo tanques de
                combustible, equipos de despacho, cisternas móviles y más.
                Nuestro equipo está comprometido con la calidad y la innovación,
                garantizando un servicio confiable y eficiente para la industria
                petrolera y más allá.
              </p>
              <button className="boton-img-home">Sobre Nosotros</button>
            </div>
          </div>
          <div className="col">
            <div className="imagen-home-nosotrosUno">
              <img src={homeNosotrosDos} alt="vista arriba" />
            </div>

            <div className="imagen-home-nosotrosDos">
              <img src={homeNosotros} alt="surtidor" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
