import styled from 'styled-components';
import Background from './assets1/background.png'

export const Container = styled.div`
    background:url("${Background}");
    width: 100%;
    display:flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
`;
export const Image = styled.img`
    margin-top: 11px;
`;
export const ContainerItens = styled.div`
   display: flex;
   flex-direction: column;
   height: 100vh;
   min-height: 100vh;
`;
export const H1 = styled.h1`
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 33px;
    text-align: center;
    color: #FFFFFF;
    margin: 25px 0 50px 0;
`;
export const InputLabel = styled.p`
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    letter-spacing: -0.408px;
    color: #EEEEEE;
    margin-left: 25px;
`;
export const Input = styled.input`
    background: rgba(255, 255, 255, 0.25);
    border-radius: 14px;
    outline: none;
    border: none;
    width: 342px;
    height: 58px;
    padding-left: 25px;
    margin-bottom: 42px;
    font-style: normal;
    font-weight: 300;
    font-size: 15px;
    line-height: 21px;
    color: #FFFFFF;
`;
export const Button = styled.button`
    width: 342px;
    height: 68px;
    background: #D93856;
    cursor: pointer;
    border:none;

    &:houver{
        opacity: 0.9;
    }
    &:active{
        opacity: 0.5;
    }
`;
export const Order = styled.li`
    width: 342px;
    height: 101px;
    background: rgba(255, 255, 255, 0.25);
    border-radius: 14px;
    margin-top: 25px;
    display: flex;
    align-items: center;
    justify-content: space-around;
   
    

    p{
        font-style: normal;
        font-weight: 300;
        font-size: 18px;
        line-height: 21px;
        color: #FFFFFF; 
        
        
    }
     
    button {
        background: none;
        border: none;
        cursor: pointer;
    }

`