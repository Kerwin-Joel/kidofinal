import React,{useEffect, useState} from 'react'
import { Container,Formulario,Cuerpo } from './styles'
import {
    Elements,
    CardElement,
    useStripe,
    useElements,
} from "@stripe/react-stripe-js";
import cancel from '../../images/cancel.png'

import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
const stripePromise = loadStripe("pk_test_51JBwN6GcnXO3L2FUPeaVmyQQ8BBYV5J8AXicTtF9Q1Lix7FYiqvCDzCWYWOkBwyd1naLB99itrDJDIck1bfKmxLB00XeFph0BM");

const CheckoutForm = ({precio}) => {
    const stripe = useStripe();
    const elements = useElements();
    const [loading, setLoading] = useState(false);
    const handleSubmit = async (e) => {
        e.preventDefault();
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement),
        });
        setLoading(true);
        if (!error) {
        // console.log(paymentMethod)
            const { id } = paymentMethod;
            try {
            const { data } = await axios.post(
                "http://localhost:3001/api/checkout",
                {
                    id,
                    amount: precio * 100, //cents
                }
            );
            alert("!Pago Exitoso!")
    
            elements.getElement(CardElement).clear();
            } catch (error) {
            console.log(error);
            }
            setLoading(false);
        }
    };
    console.log(!stripe || loading);
    return (
        <form onSubmit={handleSubmit} className="espacio">
            <CardElement className="color__input"/>
            <button disabled={!stripe} className="btn btn-success">
                {loading ? (
                    <div className="spinner-border text-light" role="status">
                    <span className="sr-only">Loading...</span>
                    </div>
                ) : (
                    "Ir a Pagar"
                )}
            </button>
        </form>
    );
};

const PopUp = ({desplegar,servicio,precio,referencia}) => {
    const activador=() =>{
        referencia(false)
    }
    return (
            <Container ocultar={true} mostrar={desplegar}>
                <Formulario>
                    <img src={cancel} alt="" onClick={activador} />
                    <h2 className="titulo">
                        Kidosof
                    </h2>
                    <div>
                        <p><span>Servicio de {servicio}</span></p>
                        <p>Nombre :  <input className="input__name" type="text" /></p>
                        <p>Apellido :  <input className="input__name" type="text" /></p>
                        <p>Precio : <span>${precio}</span></p>
                        
                        <Elements stripe={stripePromise} className="card__elemet">
                            <CheckoutForm precio={precio} className="tarjetita" />
                        </Elements>
                    </div>
                </Formulario>
            </Container>
    )
}
export default PopUp
