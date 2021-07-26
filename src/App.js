import React, { useState } from "react";
import "./App.css";
import Nav from "./components/nav/Nav"
import Hero from "./components/hero/Hero"
import Servicios from "./components/servicios/Servicios"
import Team from "./components/team/Team"
import Portfolio from "./components/portfolio/Portfolio"
import Steps from "./components/steps/Steps"
import Mobil from "./components/mobil/Mobil"
import "bootswatch/dist/lux/bootstrap.min.css";
import {
  Elements,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PopUp from "./components/popUp/PopUp";
import img1 from "./images/phone.png"
import img2 from "./images/user.png"
import img3 from "./images/world.png"

const stripePromise = loadStripe("pk_test_51JBwN6GcnXO3L2FUPeaVmyQQ8BBYV5J8AXicTtF9Q1Lix7FYiqvCDzCWYWOkBwyd1naLB99itrDJDIck1bfKmxLB00XeFph0BM");

const CheckoutForm = ({referencia,up}) => {
  const activador=() =>{
    referencia(true);
    up(1);
  }

  return (

    <div className="card card-body">
      <img alt="dsa" className="dasimg img-fluid" src={img3}/>
      <h1 className="h1">Servicio web</h1>
      <p className="titulo">Servicio de apliaciones web</p>
      <ul className="list">
        <li>🚀 Dominio</li>
        <li>🤖 Diseño personalizado</li>
        <li>🚀 E-commerce</li>
        <li>🤖 C-panel</li>
      </ul>
      <h3 className="text-center my-2 precio">Precio: $130</h3>
      <button className="btn btn-success" onClick={activador}>Pagar $130</button>
    </div>
    
  );
};
const CheckoutForm2 = ({referencia,up}) => {
  const activador=() =>{
    referencia(true);
    up(2);
  }

  return (
    <div className="card card-body" >
      {/* Product Information */}
      <img alt="dsa" className="dasimg img-fluid" src={img1}/>
      <h1 className="h1">Servicio Movil</h1>
      <p className="titulo">Servicio de apliaciones mobiles</p>
      <ul className="list">
        <li>🚀 Subida de aplicacion</li>
        <li>🤖 IOS - Android</li>
        <li>🚀 Mantenimiento</li>
        <li>🤖 Soporte</li>
      </ul>
      <h3 className="text-center my-2 precio">Precio: $180</h3>
      <button className="btn btn-success" onClick={activador}>Pagar $180</button>
    </div>
  );
};

const CheckoutForm3 = ({referencia,up}) => {
  const activador=() =>{
    referencia(true)
    up(3);
  }
  return (
    <div className="card card-body">
      {/* Product Information */}
      <img alt="dsa" className=" dasimg img-fluid dasimg" src={img2} />
      <h1 className="h1">Consultoria</h1>
      <p className="titulo">Servicio de consultoria especial</p>
      <ul className="list">
        <li>🚀 Mantenimiento</li>
        <li>🤖 Presupuestos</li>
        <li>🚀 Arquitectura</li>
        <li>🤖 Servidores</li>
      </ul>
      <h3 className="text-center my-2 precio">Precio: $200</h3>
      <button className="btn btn-success" onClick={activador}>Pagar $200</button>
    </div>
  );
};


function App() {
  const [mostrar, setMostrar] = useState(false);
  const [popUp, setPopUp] = useState(0);
  
  return (
    <>
      {popUp === 1 ?
        <PopUp desplegar={mostrar} referencia={setMostrar}  servicio="aplicaciones web" precio={130}/>
        :
        popUp === 2 ?
        <PopUp desplegar={mostrar} referencia={setMostrar} servicio="aplicaciones mobiles" precio={180}/>
        :
        popUp === 3 ?
        <PopUp desplegar={mostrar} referencia={setMostrar} servicio="consultoria especial" precio={200}/>
        :
        ""
      }
      <Nav/>
      <Hero/>
      <Servicios/>
      <Team/>
      <Portfolio/>
      <Steps/>
      <Mobil/>
      <div className="cards">
        <Elements stripe={stripePromise}>
          <div className="container">
            <div className="row ">
              <div className=" h-100">
                <CheckoutForm  referencia={setMostrar} up={setPopUp}/>
              </div>
            </div>
          </div>
        </Elements>
        <Elements stripe={stripePromise}>
          <div className="container">
            <div className="row ">
              <div className=" h-100">
                <CheckoutForm2  referencia={setMostrar} up={setPopUp}/>
              </div>
            </div>
          </div>
        </Elements>
        <Elements stripe={stripePromise}>
          <div className="container">
            <div className="row ">
              <div className=" h-100">
                <CheckoutForm3  referencia={setMostrar} up={setPopUp}/>
              </div>
            </div>
          </div>
        </Elements>
      </div>
    </>
  );
}

export default App;
