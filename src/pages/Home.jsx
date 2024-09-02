import React from "react";
import "../css/home.css";
import homeFlyer from "../assets/img/homeFlyer.png";

const Home = () => {
  return (
    <div>
      <div className=" fila-imagen-home">
        <img src={homeFlyer} alt="camioneta petroservi" />
      </div>
    </div>
  );
};

export default Home;
