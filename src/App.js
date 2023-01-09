import React from 'react';
import { Container , Image ,ContainerItens ,H1 ,InputLabel,Input,Button,Order } from './styles';
import Burger1 from './assets1/burger1.png';
import Trash from './assets1/trash.png';

function App() {

  const orders = [{id:Math.random(),pedidos:"x-salada",name:"joao"}]
  return (
    <Container>
      <Image alt='burger1' src={Burger1}/>
      <ContainerItens>
        <H1>Faça seu pedido</H1>

        <InputLabel>Pedido</InputLabel> 
        <Input placeholder="Pedido"/>   

        <InputLabel>Nome do Cliente</InputLabel> 
        <Input placeholder="Nome do Cliente"/>

        <Button>Novo Pedido</Button> 

        <ul>
          {
            orders.map(order => (
              <Order key={order.id}>
                <p>{order.pedidos}</p><p>{order.name}</p>
                <button><img alt='lixo' src={Trash}/></button>
              </Order>
            ))
          }
        </ul>
      </ContainerItens>
    </Container>
  )
}

export default App;
