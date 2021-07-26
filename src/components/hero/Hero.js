import React from 'react'
import {Container,Img} from './styles'
import imagen from '../../images/21.jpg'
import img1 from '../../images/1.png'
import img2 from '../../images/2.png'
import img3 from '../../images/3.png'
import img4 from '../../images/4.png'
import img5 from '../../images/5.png'
import img6 from '../../images/6.png'
import img7 from '../../images/7.png'

import Slider from 'infinite-react-carousel';
console.log(img1)
const Hero = () => {
    const settings =  {
        arrows: false,
        arrowsBlock: false,
        duration: 100,
        autoplay: true,
        slidesToShow: 4
    };
    return (
        <Container img={imagen}>
            <div className="contain">
                <div className="contain__left">
                    <p>Nosotros Somos</p>
                    <h1>Consultora de software</h1>
                    <a href="google.com">Contáctanos</a>
                </div>
                <div className="contain__rigth">
                    <p>
                    En Kidosof creamos soluciones innovadoras que cambian las organizaciones y mejoran la vida de millones de personas. El futuro nos desafía. Nuestro espíritu en Kidosof exige que creemos un cambio real. Queremos transformar nuestra realidad y hacer del mundo un lugar mejor.
                    </p>
                    <Slider { ...settings}>
                        <div>
                            <Img url={img1}></Img>
                        </div>
                        <div>
                            <Img url={img2}></Img>
                        </div>
                        <div>
                            <Img url={img3}></Img>
                        </div>
                        <div>
                            <Img url={img4}></Img>
                        </div>
                        <div>
                            <Img url={img5}></Img>
                        </div>
                        <div>
                            <Img url={img6}></Img>
                        </div>
                        <div>
                            <Img url={img7}></Img>
                        </div>
                    </Slider>
                </div>
            </div>
            <a href="#div" >
                <div>
                    <span>.</span>
                </div>
            </a>
        </Container>
    )
}

export default Hero
