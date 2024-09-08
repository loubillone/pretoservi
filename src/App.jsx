import React from "react";
import Navegador from "./components/Navegador";
import AppRouter from "./router/AppRouter";

const App = () => {
  return (
    <div>
      <Navegador />
      <AppRouter />
    </div>
  );
};

export default App;
