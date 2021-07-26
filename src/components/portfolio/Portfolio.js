import React from 'react'
import Slider from 'infinite-react-carousel';
import img1 from '../../images/tutti.png';
import img2 from '../../images/digita.png';
import img3 from '../../images/kerwin.png';
import {Container} from './styles';


const Portfolio = () => {
    const settings =  {
        arrows: false,
        arrowsBlock: false,
        autoplay: true,
        centerMode: true,
        centerPadding: 90,
        duration: 100,
        overScan: 1,
        pauseOnHover: false,
        swipe: false
    };

    return (
        <Container>
            <p>Lo hicimos</p>
            <h2>Proyectos realizados</h2>
            <Slider { ...settings }>
                <div>
                    <img src={img1} alt="" />
                </div>
                <div>
                    <img src={img2} alt="" />
                </div>
                <div>
                    <img src={img3} alt="" />
                </div>
            </Slider>
        </Container>
    )
}

export default Portfolio
