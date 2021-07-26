import React from 'react'
import img from '../../images/deco_2.png'
import {Container,Title,Column,Item,BoxLeft,BoxRigth} from './styles'

const Mobil = () => {
    return (
        <Container>
            <Title>
                <p>Descubrir</p>
                <h3>Características más recientes</h3>
            </Title>
            <Column>
                <Item>
                    <BoxLeft>
                        <div>
                            <span>Nuevas Caracteristicas</span>
                            <p>Actualizaciones constantes</p>
                        </div>
                        <div className="caja">
                            <span>1</span>
                        </div>
                    </BoxLeft>
                    <BoxLeft>
                        <div>
                            <span>Mejora</span>
                            <p>Mejora continua</p>
                        </div>
                        <div className="caja">
                            <span>2</span>
                        </div>
                    </BoxLeft>
                    <BoxLeft>
                        <div>
                            <span>Tecnologias</span>
                            <p>HTML 5 y CSS 3</p>
                        </div>
                        <div className="caja">
                            <span>3</span>
                        </div>
                    </BoxLeft>
                </Item>
                <Item>
                    <img src={img} alt="" />
                </Item>
                <Item>
                    <BoxRigth>
                        <div className="caja">
                            <span>4</span>
                        </div>
                        <div>
                            <span>Nuevas Caracteristicas</span>
                            <p>Actualizaciones constantes</p>
                        </div>
                    </BoxRigth>
                    <BoxRigth>
                        <div className="caja">
                            <span>5</span>
                        </div>
                        <div>
                            <span>Mejora</span>
                            <p>Mejora continua</p>
                        </div>
                    </BoxRigth>
                    <BoxRigth>
                        <div className="caja">
                            <span>6</span>
                        </div>
                        <div>
                            <span>Tecnologias</span>
                            <p>HTML 5 y CSS 3</p>
                        </div>
                    </BoxRigth>
                </Item>
            </Column>
        </Container>
    )
}

export default Mobil
