import React from "react";
import Navegador from "./components/Navegador";
import AppRouter from "./router/AppRouter";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navegador />
      <AppRouter />
      {/* <Footer /> */}
    </div>
  );
};

export default App;
