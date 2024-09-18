import React from "react";
import "../css/footer.css";
import logoPetroBlanco from "../assets/img/home/logoPetroBlanco.png";

const Footer = () => {
  return (
    <div>
      <div className="container-fluid ">
        <div className="row fila-footer">
          <div className="col-5 columna-footer-uno">
            <div className="container-img-footer py-2">
              <img src={logoPetroBlanco} alt="" />
            </div>

            <div className="contactanos-footer py-2">
              <span className="texto-footerUno">CONTACTANOS</span>{" "}
              <span className="numero-footerUno">+54 0987 511-2864</span>
            </div>

            <div className="container-iconos-footer py-3">
              <i class="fa fa-twitter" aria-hidden="true"></i>
              <i class="fa fa-facebook" aria-hidden="true"></i>
              <i class="fa fa-linkedin" aria-hidden="true"></i>
              <i class="fa fa-youtube-play" aria-hidden="true"></i>
            </div>

            <div className="py-2">
              <span className="texto-footerUno-final ">
                Garantizamos soluciones eficientes y adaptadas a tus
                necesidades.
              </span>
            </div>
          </div>

          <div className="col-7 columna-footer-dos">
            <div className="row">
              <div className="col">
                <div>
                  <span>Enlaces Útiles</span>
                  <span>Inicio</span>
                  <span>Servicios</span>
                  <span>Galería</span>
                  <span>Contacto</span>
                </div>
              </div>
              <div className="col">
                <div>
                  <span>Nuestros Servicios</span>
                  <span>Instalación de Tanques</span>
                  <span>Mantenimiento General</span>
                  <span>Ventas de Repuestos</span>
                  <span>Cisternas Móviles</span>
                </div>
              </div>
              <div className="col">
                <div>
                  <span>Información Corporativa</span>
                  <span>Sobre Nosotros</span>
                  <span>Política de Privacidad</span>
                  <span>Términos y Condiciones</span>
                  <span>Ubicación</span>
                </div>
              </div>
            </div>
            <div className="row">
              <span>
                Meraki © Todos los derechos reservados. Derechos de autor 2024
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
