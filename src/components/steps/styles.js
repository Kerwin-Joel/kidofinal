import styled from 'styled-components'

export const Container = styled.div`
    font-family: 'Poppins', sans-serif;
    display: flex;
    justify-content: space-around;
    padding: 5rem 8rem;
    position: relative;
    overflow: hidden;
    color: white;
    & h2{
        color:rgb(111, 46, 233);
    }
    & img{
        width: 50px;
        height: 50px;
    }
    & video{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
    }
`;
export const Item = styled.div`
    background: rgba( 255, 255, 255, 0.00 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 4px );
    -webkit-backdrop-filter: blur( 4px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    text-align: center;
    padding:3rem 4rem;
    z-index: 100;
`;


