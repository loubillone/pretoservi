import React, { useRef } from "react";
import "../css/sobreNosotros.css";
import Flyer from "../components/Flyer";
import sobreN from "../assets/img/sobreNosotros/sobreN.png";
import sobreNdos from "../assets/img/sobreNosotros/sobreNdos.png";
import mano from "../assets/img/home/mano.png";
import shape from "../assets/img/home/shape.png";
import tanque from "../assets/img/home/tanque.png";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";

const SobreNosotros = () => {
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "petroservi",
        "template_u82y3qb",
        formRef.current,
        "PKhKvnJcKT-OtLOyJ"
      )
      .then(
        (result) => {
          console.log(result.text);
          Swal.fire({
            icon: "success",
            title: "Mensaje enviado correctamente",
            text: "Recibimos tu solicitud de cotización. Te contactaremos pronto.",
          });
          formRef.current.reset();
        },
        (error) => {
          console.log(error.text);
          Swal.fire({
            icon: "error",
            title: "Error al enviar el mensaje",
            text: "Hubo un problema al enviar tu mensaje. Inténtalo de nuevo más tarde.",
          });
        }
      );
  };

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
                <h2 className="subtitulo-sobreN">
                  Estamos brindando el mejor servicio al cliente.
                </h2>
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
                <a
                  href="https://wa.me/5493875112864"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="boton-img-home">Contactanos</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="fila-imagen-sobreNdos">
        <img
          src={sobreNdos}
          alt="vista tanques"
          className="img-pages-sobreNdos"
        />
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
              <a
                href="https://wa.me/5493875112864"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="boton-img-home">Contactanos</button>
              </a>
            </div>
          </div>
        </div>

        <div className="container cajas-sobreN">
          <div className="row fila-cajas-numero">
            <div className="col caja-numeros-sobreN">
              <div className="cajaNumSobre">
                <span>01</span>
              </div>
              <div className="caja-texto-sobreN">
                <span className="titulo-caja-imagenNos">
                  Asesoramiento Profesional
                </span>
                <span className="texto-caja-imagenNos">
                  Soluciones a medida y efectivas
                </span>
              </div>
            </div>
            <div className="col caja-numeros-sobreN ">
              <div className="cajaNumSobre">
                <span>02</span>
              </div>
              <div className="caja-texto-sobreN">
                <span className="titulo-caja-imagenNos">
                  Instalaciones Seguras
                </span>
                <span className="texto-caja-imagenNos">
                  Servicios de instalación confiables
                </span>
              </div>
            </div>
            <div className="col caja-numeros-sobreN ">
              <div className="cajaNumSobre">
                <span>03</span>
              </div>
              <div className="caja-texto-sobreN">
                <span className="titulo-caja-imagenNos">Soporte Completo</span>
                <span className="texto-caja-imagenNos">
                  Mantenimiento y repuestos sin interrupciones
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container caja-form-instalacion">
        <div className="row fila-form-instalacion">
          <div className="col">
            <div>
              <span className="titulo-sobreN">CONSULTANOS</span>
              <h3 className="subtitulo-sobreN-form">
                Solicitar una Cotización
              </h3>
            </div>
            <form ref={formRef} onSubmit={handleSubmit}>
              <div className="row">
                <div className="col">
                  <input
                    type="text"
                    className="form-control input-text"
                    name="name"
                    placeholder="Nombre Completo"
                    required
                  />

                  <input
                    type="tel"
                    className="form-control input-text"
                    name="phone"
                    placeholder="Número de teléfono"
                    required
                  />
                </div>

                <div className="col">
                  <div className="mb-3">
                    <input
                      type="email"
                      className="form-control input-text"
                      name="email"
                      placeholder="Email"
                      required
                    />

                    <input
                      type="text"
                      className="form-control input-text"
                      name="service"
                      placeholder="Servicio"
                      required
                    />
                  </div>
                </div>
              </div>

              <textarea
                rows="4"
                name="message"
                className="form-control input-text"
                placeholder="Mensaje"
                required
              ></textarea>
              <button type="submit" className="boton-img-home mt-1">
                Enviar
              </button>
            </form>
          </div>
          <div className="col">
            <div>
              <div className="boxInstalacion">
                <div className="container-data">
                  <div className="box-data">
                    <div>
                      <img src={tanque} alt="icono tanque" />
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
                      <img src={shape} alt="icono shape" />
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
                      <img src={mano} alt="icono mano" />
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
        </div>
      </div>
    </div>
  );
};

export default SobreNosotros;
