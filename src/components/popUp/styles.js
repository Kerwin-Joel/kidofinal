import styled from 'styled-components'
export const Cuerpo = styled.div`
    ${props => props.ocultar == true ? "display: none" : "display: block"};
`;

export const Container = styled.div`
    background: rgba( 126, 124, 124, 0.22 );
    backdrop-filter: blur( 10.0px );
    -webkit-backdrop-filter: blur( 10.0px );
    border-radius: 3px;
    position: fixed;
    z-index:10000;
    width: 100vw;
    height: 100vh;
    ${props => props.mostrar ? "display: flex" : "display: none"};
    justify-content:center;
    align-items: center;
`
export const Formulario = styled.form`
    background: rgba( 255, 255, 255, 0.60 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 5.5px );
    -webkit-backdrop-filter: blur( 5.5px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    padding:70px 80px;
    color:white;
    & img{
        width: 30px;
        position: absolute;
        top: 30px;
        right: 30px;
    }
    & p{
        color: #616161;
        display:flex;
        justify-content: space-between;
    }
    & .input__name{
        border: none;
        border-radius:10px;
        width:65%;
        background: rgba( 255, 255, 255, 0.60 );
    }
    & span{
        color: rgb(121,55,242);
    }
`;