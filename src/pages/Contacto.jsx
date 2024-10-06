import React, { useRef } from "react";
import Flyer from "../components/Flyer";
import Mapa from "../components/Mapa";
import "../css/contacto.css";
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2'; // Ensure you have this installed

const Contacto = () => {
  const formRef = useRef(); // Create a ref for the form

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission

    emailjs
      .sendForm("petroservi", "template_u82y3qb", formRef.current, "PKhKvnJcKT-OtLOyJ")
      .then(
        (result) => {
          console.log(result.text);
          Swal.fire({
            icon: "success",
            title: "Mensaje enviado correctamente",
            text: "Recibimos tu información. Te contactaremos pronto.",
          });
          formRef.current.reset(); // Reset the form after successful submission
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
      <div className="container container-form-contacto">
        <div className="row">
          <div className="col">
            <form ref={formRef} onSubmit={handleSubmit}>
              <div className="row">
                <div className="col">
                  <input
                    type="text"
                    className="form-control input-text-contacto"
                    name="name" // Add name attribute for EmailJS
                    placeholder="Nombre Completo"
                    required // Make it required
                  />

                  <input
                    type="tel" // Change type to "tel" for better validation
                    className="form-control input-text-contacto"
                    name="phone" // Add name attribute for EmailJS
                    placeholder="Número de teléfono"
                    required // Make it required
                  />
                </div>

                <div className="col">
                  <div className="mb-3">
                    <input
                      type="email"
                      className="form-control input-text-contacto"
                      name="email" // Add name attribute for EmailJS
                      placeholder="Email"
                      required // Make it required
                    />

                    <input
                      type="text"
                      className="form-control input-text-contacto"
                      name="address" // Add name attribute for EmailJS
                      placeholder="Dirección"
                      required // Make it required
                    />
                  </div>
                </div>
              </div>

              <textarea
                rows="4"
                name="message" // Add name attribute for EmailJS
                className="form-control input-text-contacto"
                placeholder="Escribe tu mensaje aquí"
                required // Make it required
              ></textarea>
              <button type="submit" className="boton-img-home mt-1">Contactanos</button>
            </form>
          </div>
        </div>
      </div>
      <Mapa />
    </div>
  );
};

export default Contacto;
