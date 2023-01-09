import React from 'react';
import { Container , Image ,ContainerItens ,H1 ,InputLabel,Input,Button } from './styles';
import Burger1 from './assets1/burger1.png'
function App() {
  return (
    <Container>
      <Image alt='burger1' src={Burger1}/>
      <ContainerItens>
        <H1>Faça seu pedido</H1>

        <InputLabel>Pedido</InputLabel> 
        <Input placeholder="Pedido"/>   

        <InputLabel>Nome do Cliente</InputLabel> 
        <Input placeholder="Nome do Cliente"/>

        <Button>Nvo Pedidoo</Button> 
      </ContainerItens>
    </Container>
  )
}

export default App;
