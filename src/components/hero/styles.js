import styled from 'styled-components';


export const Container = styled.section`
    width: 100%;
    height: 100vh;
    font-family: 'Poppins', sans-serif;

    & > .curtain{
        position: absolute;
        width: 100px;
        height: 100px;
    }
    &::before{
        content: "";
        position: fixed;
        z-index: -1;
        background-image: url(${props => props.img});
        background-color: #000;
        background-size:cover;
        width: 100%;
        height: 100%;
        filter: blur(1px) brightness(0.5);
    }
    & .contain{
        display: flex;
        justify-content: space-around;
        align-items: center;
        position: relative;
        top:35%;
        margin: 0 8rem;

        &__left{
            width: 40%;
            p,h1,a {
                color: white;
                font-size: 1.2rem;
            }
            h1 {
                font-size: 3.5rem;
                margin-bottom:2rem;
            }
            a{
                text-decoration: none;
                background-color:rgb(121, 55, 242);
                padding: .5rem 1.5rem;
                border-radius: 3rem;
                transition: all .3s;
            }
            a:hover{
                background-color:#8BB3F6;
            }
        }
        &__rigth{
            width: 60%;

            p {
                color: white;
                font-weight: 200;
                margin-bottom: 2rem;
            }
        }
    }
    & a{
        text-decoration: none;
    }
    & >a >div {
        color:white;
        text-align: center;
        position: relative;
        border:1px solid white;
        border-radius:30px;
        width: 30px;
        height: 65px;
        top: 25rem;
        left: 50%;
        font-size: 2rem;
    }
    & span{
        animation:3s slidein infinite;
        position: relative;

    }
    @keyframes slidein {
        from {
            top: -10px;
        }

        to {
            top: 10px;

        }
    }
`;
export const Img = styled.div`

	width: 150px;
    height: 50px;
    background-image: url(${props => props.url});
    background-size: cover;
`;