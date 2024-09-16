import React from "react";
import "../css/footer.css";
import logoPetroBlanco from "../assets/img/home/logoPetroBlanco.png";

const Footer = () => {
  return (
    <div>
      <div className="container-fluid container-footer">
        <div className="row">
          <div className="col-5 columna-footer-uno">
            <div className="container-img-footer">
              <img src={logoPetroBlanco} alt="" />
            </div>

            <div className="contactanos-footer">
              <span className="texto-footerUno">CONTACTANOS</span>{" "}
              <span className="numero-footerUno">+54 0987 511-2864</span>
            </div>

            <div className="container-iconos-footer">
              <i class="fa fa-twitter" aria-hidden="true"></i>
              <i class="fa fa-facebook" aria-hidden="true"></i>
              <i class="fa fa-linkedin" aria-hidden="true"></i>
              <i class="fa fa-youtube-play" aria-hidden="true"></i>
            </div>

            <div>
              <span className="texto-footerUno-final">
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
