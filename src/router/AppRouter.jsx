import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import SobreNosotros from "../pages/SobreNosotros";
import EmpresasMineras from "../pages/EmpresasMineras";
import Galeria from "../pages/Galeria";
import Contacto from "../pages/Contacto";
import Navegador from "../components/Navegador";

const AppRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <Navegador />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobreNosotros" element={<SobreNosotros />} />
          <Route path="/empresasMineras" element={<EmpresasMineras />} />
          <Route path="/galeria" element={<Galeria />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;
