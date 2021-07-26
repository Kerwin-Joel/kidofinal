import styled from 'styled-components'

export const Container = styled.div`
    display:flex;
    gap: 10rem;
    padding: 3rem 10rem;
    background: #212121;
    font-family: 'Poppins', sans-serif;
    color:white;
    align-items: center;
    & h1{
        margin: 1.5rem 0;
    }
`;
export const Info = styled.div`
    width: 80%;
    & h3{
        color: #6F2EE9;
    }
    & span{
        text-decoration: underline #6F2EE9;
    }
    & p{
        margin-bottom: 2rem;
    }
    & a{
        color: white;
        text-decoration: none;
        background-color:rgb(121, 55, 242);
        padding: .5rem 1.5rem;
        border-radius: 3rem;
        transition: all .3s;
    }
    & a:hover{
        background-color:#8BB3F6;
    }
    & h1{
        color:white;
    }
`;

