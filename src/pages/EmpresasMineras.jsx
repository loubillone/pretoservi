import React from "react";
import Flyer from "../components/Flyer";
import "../css/empresasMineras.css";
import empMUno from "../assets/img/empresasMineras/empMUno.jpg";
import empMDos from "../assets/img/empresasMineras/empMDos.jpg";
import empMTres from "../assets/img/empresasMineras/empMTres.jpg";
import empMCuatro from "../assets/img/empresasMineras/empMCuatro.jpeg";

const EmpresasMineras = () => {
  return (
    <div>
      <Flyer />

      <div className="container contenedor-empMineras">
        <div className="row fila-empMineras">
          <div className="col">
            <h3 className="titulo-empMineras">
              Principales empresas mineras que confían en nuestros servicios.
            </h3>
          </div>

          <div className="col">
            <div className="grilla">
              <div className="grilla-empMineras">
                <div className="img-a">
                  <img src={empMUno} alt="empresa minera exar" />
                </div>

                <div className="texto-a">
                  <h6 className="titulo-grilla-empMineras">EXAR</h6>
                  <p className="parrafo-grilla-empMineras">
                    EXAR es una empresa argentina conformada por Ganfeng
                    Lithium, Lithium Argentina y Jujuy Energía y Minería
                    Sociedad del Estado (JEMSE), dedicada al desarrollo y
                    producción de carbonato de litio en el Salar Cauchari-Olaroz
                    (“Proyecto Cauchari-Olaroz”), en la provincia de Jujuy,
                    República Argentina.
                  </p>
                </div>

                <div className="img-b">
                  <img src={empMDos} alt="empresa minera posco" />
                </div>

                <div className="texto-b">
                  <h6 className="titulo-grilla-empMineras">POSCO</h6>
                  <p className="parrafo-grilla-empMineras">
                    POSCO se lanzó el 1 de Abril de 1968 con una misión para la
                    industrialización nacional en Corea del Sur. Como la primera
                    fábrica de acero integrada en Corea, Posco ha crecido para
                    producir 41 millones de toneladas de acero bruto al año, y
                    ha crecido hasta convertirse en un negocio global con
                    producción y ventas en 53 países del mundo.
                  </p>
                </div>

                <div className="img-c">
                  <img src={empMTres} alt="empresa minera pirquitas" />
                </div>

                <div className="texto-c">
                  <h6 className="titulo-grilla-empMineras">PIRQUITAS</h6>
                  <p className="parrafo-grilla-empMineras">
                    Mina Pirquitas está situada en la provincia de Jujuy, a una
                    altura promedio de 4300 msnm. Se ubica en el noroeste de la
                    provincia morfoestructural de Puna y en el sur de la Faja
                    Estannífera Boliviana. Es un yacimiento hidrotermal de
                    Ag-Sn-Zn de edad miocena emplazado en sedimentitas
                    ordovícicas pertenecientes a la Formación Acoite.
                  </p>
                </div>

                <div className="img-d">
                  <img src={empMCuatro} alt="empresa minera eramine" />
                </div>

                <div className="texto-d">
                  <h6 className="titulo-grilla-empMineras">ERAMINE</h6>
                  <p className="parrafo-grilla-empMineras">
                    Eramine Sudamérica SA es una subsidiaria de Eramet, un grupo
                    minero y metalúrgico global francés. Está ubicada en el
                    Salar Centenario Ratones, a 3.800 metros sobre el nivel del
                    mar, en el departamento de Los Andes, en la provincia de
                    Salta, Argentina.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmpresasMineras;
