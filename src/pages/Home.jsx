import React from "react";
import "../css/home.css";
import homeFlyer from "../assets/img/homeFlyer.png";

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
    </div>
  );
};

export default Home;
