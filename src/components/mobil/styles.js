import styled from 'styled-components'

export const Container = styled.div`
    background: #212121;
    font-family: 'Poppins', sans-serif;
    color:white;
    align-items: center;
`;


export const Title = styled.div`
    text-align: center;
    padding-top: 2rem;
    & h3{
        color:white
    }
`;

export const Column = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    gap: 3rem;
    padding: 4rem 0;
`;
export const Item = styled.div`
    & img{
        height: 30rem;
    }
`;

export const BoxLeft = styled.div`
    display:flex;
    justify-content: flex-end;
    align-items: center;
    text-align: end;
    margin: 1rem 0;
    & main{
        border-radius: 100rem;
        background: rgb(111, 46, 233);
        width:80px;
        height:80px;
        text-align: center;
    }
    & span{
        font-size: .8rem;
    }
    & .caja{
        width:50px;
        height:50px;
        background: rgb(111, 46, 233);
        border-radius: 100rem;
        display: flex;
        align-items: center;
        margin-left: 2rem;
        & span{
            margin: 0 auto;
            font-size: 1rem;
            font-weight: bold;
        }
    }
`;

export const BoxRigth = styled.div`
    display:flex;
    align-items: center;
    text-align: start;
    margin: 1rem 0;
    & main{
        border-radius: 100rem;
        background: rgb(111, 46, 233);
        width:80px;
        height:80px;
        text-align: center;
    }
    & span{
        font-size: .8rem;
    }
    & .caja{
        width:50px;
        height:50px;
        background: rgb(111, 46, 233);
        border-radius: 100rem;
        display: flex;
        align-items: center;
        margin-right: 2rem;
        & span{
            margin: 0 auto;
            font-size: 1rem;
            font-weight: bold;
        }
    }
`;
