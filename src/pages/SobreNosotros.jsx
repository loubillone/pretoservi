import React from "react";
import "../css/sobreNosotros.css";
import Flyer from "../components/Flyer";
import sobreN from "../assets/img/sobreNosotros/sobreN.png";
import sobreNdos from "../assets/img/sobreNosotros/sobreNdos.png";

const SobreNosotros = () => {
  return (
    <div>
      <Flyer />

      <div className="container container-sobreN">
        <div className="row">
          <div className="col">
            <div className="div-img-sobreN">
              <img src={sobreN} alt="personal 25 años de experiencia" />
            </div>
          </div>
          <div className="col">
            <div className="row fila-sobreN">
              <div className="col">
                <span className="titulo-sobreN">SOBRE NOSOTROS</span>
              </div>
              <div className="col">
                <h3 className="subtitulo-sobreN">
                  Estamos brindando el mejor servicio al cliente.
                </h3>
              </div>
              <div className="col">
                <p className="parrafo-sobreN">
                  PetroServi es una empresa líder en soluciones para la
                  industria petrolera, con años de experiencia en el sector. Nos
                  especializamos en la instalación de tanques de combustible,
                  cañerías hidráulicas, y canalizaciones eléctricas
                  antiexplosivas, brindando un servicio de alta calidad. Además,
                  ofrecemos mantenimiento general y técnico, así como la venta
                  de repuestos y accesorios. Nuestra dedicación a la excelencia
                  nos ha convertido en un referente, garantizando la seguridad y
                  eficiencia en cada proyecto.
                </p>
              </div>
              <div className="col">
                <button className=" boton-img-home">Contactanos</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="fila-imagen-sobreNdos">
        <img src={sobreNdos} alt="" className="img-pages-sobreNdos" />
        <div>
          <div className="row fila-textoImg-sobreNdos">
            <div className="col">
              <h4 className="titulo-sobreN-img">Solicita una Cotización</h4>
            </div>
            <div className="col">
              <h3 className="subtitulo-sobreN-img">Impulsa tu Proyecto Hoy</h3>
            </div>
            <div className="col">
              <p className="parrafo-sobreN-img">
                PetroServi es una empresa líder en la industria petrolera,
                especializada en la instalación de tanques de combustible,
                cañerías hidráulicas, y canalizaciones eléctricas
                antiexplosivas. Desde nuestros inicios, nos hemos comprometido
                con la calidad y la seguridad, convirtiéndonos en un referente
                confiable en el sector.
              </p>
            </div>
            <div className="col">
              <button className="boton-img-sobreN">Contactanos</button>
            </div>
          </div>
        </div>

        <div className="container cajas-sobreN">
          <div className="row fila-cajas-numero">
            <div className="col caja-numeros-sobreN">
              <div>
                <span>01</span>
              </div>
              <div>
                <span>Asesoramiento Profesional</span>
                <span>Soluciones a medida y efectivas</span>
              </div>
            </div>
            <div className="col caja-numeros-sobreN ">
              <div>
                <span>02</span>
              </div>
              <div>
                <span>Instalaciones Seguras</span>
                <span>Servicios de instalación confiables</span>
              </div>
            </div>
            <div className="col caja-numeros-sobreN ">
              <div>
                <span>03</span>
              </div>
              <div>
                <span>Soporte Completo</span>
                <span>Mantenimiento y repuestos sin interrupciones</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SobreNosotros;
