import React, { useRef } from "react";
import Flyer from "../components/Flyer";
import Mapa from "../components/Mapa";
import "../css/contacto.css";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";

const Contacto = () => {
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
          Swal.fire({
            icon: "success",
            title: "Mensaje enviado correctamente",
            text: "Recibimos tu información. Te contactaremos pronto.",
          });
          formRef.current.reset();
        },
        (error) => {
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
      <div className="container container-form-contacto">
        <div className="row">
          <div className="col">
            <form ref={formRef} onSubmit={handleSubmit}>
              <div className="row">
                <div className="col">
                  <input
                    type="text"
                    className="form-control input-text-contacto"
                    name="name"
                    placeholder="Nombre Completo"
                    required
                  />

                  <input
                    type="tel"
                    className="form-control input-text-contacto"
                    name="phone"
                    placeholder="Número de teléfono"
                    required
                  />
                </div>

                <div className="col">
                  <div className="mb-3">
                    <input
                      type="email"
                      className="form-control input-text-contacto"
                      name="email"
                      placeholder="Email"
                      required
                    />

                    <input
                      type="text"
                      className="form-control input-text-contacto"
                      name="address"
                      placeholder="Dirección"
                      required
                    />
                  </div>
                </div>
              </div>

              <textarea
                rows="4"
                name="message"
                className="form-control input-text-contacto"
                placeholder="Escribe tu mensaje aquí"
                required
              ></textarea>
              <button type="submit" className="boton-img-home mt-1">
                Contactanos
              </button>
            </form>
          </div>
        </div>
      </div>
      <Mapa />
    </div>
  );
};

export default Contacto;
