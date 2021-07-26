import styled from 'styled-components'

export const Container = styled.div`
    display:grid;
    grid-template-columns:repeat(3,1fr);
    gap: 3rem;
    padding: 3rem 10rem;
    background: white;
    font-family: 'Poppins', sans-serif;
`;
export const Item = styled.div`
    display:flex;
    gap: 2rem;
    justify-content: center;
    & h3{
        margin: 1rem 0;
    }
    & p{
        color: #9b9b9b;
    }
    & img{
        width: 30px;
        height: 30px;
    }
`;
export const Icon = styled.div`
    border-radius:4px;
    background: rgb(161,119,255);
    background: linear-gradient(6deg, rgba(161,119,255,1) 27%, rgba(95,61,164,1) 86%);
    color:white;
    padding: .5rem;
    margin-top:.5rem;
    width: 5rem;
    height: 3rem
`;

