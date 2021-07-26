import React from 'react'
import {Container,Info} from './styles'

const Team = () => {
    return (
        <Container>
            <iframe width="860" height="315" src="https://www.youtube.com/embed/GDe24-dE5Bg?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <Info>
                <h3>Sobre Nosotros</h3>
                <h1>Kidosof hace <span>creativos</span> Trabajos. Estamos listos <br />para ayudarte.</h1>
                <p>Creemos que nuestro enfoque innovador para transformar organizaciones, combinado con nuestro compromiso con la sostenibilidad, nuestro talento diverso y global y nuestra cultura única, son los pilares que nos permiten soñar en grande y crear un mundo mejor..</p>
                <a href="google.com">Nuestro trabajo</a>
            </Info>
        </Container>
    )
}

export default Team
