import React from "react";
import "../css/sobreNosotros.css";
import Flyer from "../components/Flyer";
import sobreN from "../assets/img/sobreNosotros/sobreN.png";

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
    </div>
  );
};

export default SobreNosotros;
