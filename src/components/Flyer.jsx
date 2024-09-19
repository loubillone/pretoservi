import React from "react";
import { useLocation } from "react-router-dom";
import "../css/flyer.css";
import flyerSobreNosotros from "../assets/img/sobreNosotros/flyerSobreNosotros.png";
import flyerEmpresas from "../assets/img/empresasMineras/flyerEmpresas.jpg";
import flyerGaleria from "../assets/img/galeria/flyerGaleria.png";
import flyerContacto from "../assets/img/contacto/flyerContacto.png";

const Flyer = () => {
  const location = useLocation();

  const getImageAndText = () => {
    switch (location.pathname) {
      case "/sobrenosotros":
        return {
          image: flyerSobreNosotros,
          title: "Sobre Nosotros",
          subtitle: "Inicio/Sobre Nosotros",
        };
      case "/empresasMineras":
        return {
          image: flyerEmpresas,
          title: "Empresas Mineras",
          subtitle: "Inicio/Empresas Mineras",
        };
      case "/galeria":
        return {
          image: flyerGaleria,
          title: "Galería",
          subtitle: "Inicio/Galería",
        };
      case "/contacto":
        return {
          image: flyerContacto,
          title: "Contacto",
          subtitle: "Inicio/Contacto",
        };
      default:
        return {
          image: flyerSobreNosotros, // Imagen por defecto
          title: "Bienvenido",
          subtitle: "Inicio",
        };
    }
  };

  const { image, title, subtitle } = getImageAndText();

  return (
    <div>
      <div className="fila-imagen-home">
        <img src={image} alt={title} className="img-home" />
        <div className="container-textoImg-flyer">
          <h2 className="titulo-img-flyer">{title}</h2>
          <p className="subtitulo-img-flyer">{subtitle}</p>
        </div>
      </div>
    </div>
  );
};

export default Flyer;
