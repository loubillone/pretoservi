import React from "react";
import "../css/home.css";
import homeFlyer from "../assets/img/home/homeFlyer.png";
import mano from "../assets/img/home/mano.png";
import shape from "../assets/img/home/shape.png";
import tanque from "../assets/img/home/tanque.png";
import homeNosotros from "../assets/img/home/homeNosotros.png";
import homeNosotrosDos from "../assets/img/home/homeNosotrosDos.png";
import cardUno from "../assets/img/home/cards/cardUno.png";
import cardDos from "../assets/img/home/cards/cardDos.png";
import cardTres from "../assets/img/home/cards/cardTres.png";
import cardCuatro from "../assets/img/home/cards/cardCuatro.png";
import cardCinco from "../assets/img/home/cards/cardCinco.png";
import trabajosUno from "../assets/img/home/trabajos/trabajosUno.jpg";
import trabajosDos from "../assets/img/home/trabajos/trabajosDos.jpg";
import trabajosTres from "../assets/img/home/trabajos/trabajosTres.png";
import trabajosCuatro from "../assets/img/home/trabajos/trabajosCuatro.jpg";
import Mapa from "../components/Mapa";

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
          <a href="https://wa.me/5493875112864" target="_blank" rel="noopener noreferrer">
  <button className="boton-img-home">Contactanos</button>
</a>

        </div>
      </div>

      <div className="container-experiencia">
        <div className="boxUno">
          <span className="num-box">40+ </span>
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
          <div className="col columna-home-nosotros__texto">
            <div>
              <span className="titulo-home-nosotros">SOBRE NOSOTROS</span>
              <h2 className="subtitulo-home-nosotros">
                Soluciones Innovadoras para el Éxito Industrial
              </h2>
              <h3 className="subtituloDos-home-nosotros">
                Comprometidos con la Excelencia y la Innovación
              </h3>
              <p className="parrafo-home-nosotros">
                En PetroServi, aplicamos nuestro profundo conocimiento en la
                instalación y mantenimiento de sistemas industriales para
                asegurar el éxito en cada proyecto. Ofrecemos soluciones
                integrales para estaciones de servicio, incluyendo tanques de
                combustible, equipos de despacho, cisternas móviles y más.
                Nuestro equipo está comprometido con la calidad y la innovación,
                garantizando un servicio confiable y eficiente para la industria
                petrolera y más allá.
              </p>
              <a href="/sobreNosotros">
  <button className="boton-img-home mt-1">Sobre Nosotros</button>
</a>

            </div>
          </div>
          <div className="col columna-home-nosotros__imagenes">
            <div className="imagen-home-nosotrosUno">
              <img src={homeNosotrosDos} alt="vista arriba" />
            </div>

            <div className="imagen-home-nosotrosDos">
              <img src={homeNosotros} alt="surtidor" />
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid container-cards-home">
        <div className="row fila-card no-gutters">
          <div className="col p-0 col-imagen-uno">
            <div className="div-card-uno">
              <img src={cardUno} alt="card uno" />
            </div>
          </div>
          <div className="col p-0">
            <div className="div-card overlay-container-rojo">
              <img src={cardDos} alt="card dos" />
              <div className="overlay-text">
                <h3>Mantenimiento en Sector Minero</h3>
                <p>
                  Instalación de surtidor Wayne 3G Super Alto Caudal. Puesta en
                  marcha. Provincia de San Juan
                </p>
              </div>

              <div className="card-flecha-azul">
  <a href="/empresasMineras" className="link-flecha-azul">
    <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
  </a>
</div>
            </div>
          </div>
          <div className="col p-0">
            <div className="div-card overlay-container-azul">
              <img src={cardTres} alt="card tres" />
              <div className="overlay-text">
                <h3>YPF San Lorenzo Chico SRL</h3>
                <p>
                  Instalación y provisión de membranas geotextil y membrana huv
                  apta y para hidrocarburos instalación y provisión de kit de
                  sujeción de tks full acero inoxidable con eslingas drakon.
                </p>
              </div>

              <div className="card-flecha-roja">
  <a href="/empresasMineras" className="link-flecha-roja">
    <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
  </a>
</div>
            </div>
          </div>
          <div className="col  p-0">
            <div className="div-card overlay-container-rojo">
              <img src={cardCuatro} alt="card cuatro" />
              <div className="overlay-text">
                <h3>Sector Minero MAFAP SRL</h3>
                <p>
                  Instalación de 3 tks. de 40m3 + 1 Tk de 40m3 compartimentado
                  (20m3+20m3) Instalación de cañerías de descarga centralizada,
                  cañerías de recuperación de gases, cañerías de ventilación.
                  Instalación de Cañerías de impulsión doble pared para 3 sump
                  dispenser óctuples y un sump dispenser dual
                </p>
              </div>
              <div className="card-flecha-azul">
  <a href="/empresasMineras" className="link-flecha-azul">
    <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
  </a>
</div>

            </div>
          </div>
          <div className="col p-0">
            <div className="div-card overlay-container-azul">
              <img src={cardCinco} alt="card cinco" />
              <div className="overlay-text">
                <h3>Otros Proyectos de Mineria</h3>
                <p>
                Te invitamos a descubrir otros emocionantes proyectos que hemos realizado en el sector minero. Explora nuestras soluciones innovadoras y efectivas que garantizan la seguridad y eficiencia en cada instalación. ¡Visita nuestra galería de proyectos para conocer más sobre nuestro compromiso con la excelencia en la industria!
                </p>
              </div>
              <div className="card-flecha-roja">
  <a href="/empresasMineras" className="link-flecha-roja">
    <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
  </a>
</div>

            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row fila-home-trabajos">
          <div className="col">
            <span className="titulo-home-trabajos">NUESTROS TRABAJOS</span>
          </div>
        </div>

        <div className="row ">
          <div className="col">
            <h2 className="subtitulo-home-trabajos">
              Algunos de nuestros proyectos
            </h2>
          </div>
        </div>

        <div className="photos">
          <div className="galeria-trabajos">
            <div className="img-a">
              <img src={homeNosotros} alt="" />
            </div>

            <div className="img-b">
              <img src={trabajosUno} alt="" />
            </div>

            <div className="img-c">
              <img src={trabajosDos} alt="" />
            </div>

            <div className="img-d">
              <img src={trabajosTres} alt="" />
            </div>

            <div className="img-e">
              <img src={trabajosCuatro} alt="" />
            </div>
          </div>
        </div>
      </div>

      <Mapa />
    </div>
  );
};

export default Home;
