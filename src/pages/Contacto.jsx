import React from "react";
import Flyer from "../components/Flyer";
import Mapa from "../components/Mapa";
import "../css/contacto.css";

const Contacto = () => {
  return (
    <div>
      <Flyer />
      <div className="container container-form-contacto">
        <div className="row">
          <div className="col">
            <form>
              <div className="row">
                <div className="col">
                  <input
                    type="text"
                    class="form-control input-text-contacto"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Nombre Completo"
                  />

                  <input
                    type="number"
                    class="form-control input-text-contacto"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Número de teléfono"
                  />
                </div>

                <div className="col">
                  <div class="mb-3">
                    <input
                      type="email"
                      class="form-control input-text-contacto"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Email"
                    />

                    <input
                      type="text"
                      class="form-control input-text-contacto"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Dirección"
                    />
                  </div>
                </div>
              </div>

              <textarea
                rows="4"
                name=""
                id=""
                class="form-control input-text-contacto"
                placeholder="Escribe tu mensaje aquí"
              ></textarea>
              <button className="boton-img-home mt-1">Contactanos</button>
            </form>
          </div>
        </div>
      </div>
      <Mapa />
    </div>
  );
};

export default Contacto;
