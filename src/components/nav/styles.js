import styled from 'styled-components'

export const Container = styled.div`
    display:flex;
    justify-content: space-around;
    align-items: center;
    position: fixed;
    width: 100%;
    z-index: 1000;
    background: rgba( 255, 255, 255, 0.65 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 11.5px );
    & h1{
        font-size: 4rem;
        font-family: 'Poppins', sans-serif;
        font-weight: 700;
        text-transform: uppercase;
        color:rgb(121,55,242);
        
    }
`;
export const List= styled.ul`
    display: flex;
    list-style: none;
    font-family: 'Poppins', sans-serif;
    & a{
        color:#6b6b6b;
        text-decoration: none;
        padding: 1rem .5rem;
        transition: all .5s;
    }
    & li{
        margin: 1rem .5rem;
    }
    & :hover{
        color:#7937F2;

    }
`;