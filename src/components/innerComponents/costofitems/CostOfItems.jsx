import React from 'react';
import {Box, Title, Diver, Text, Paragraph, Images, Image, BuyButton} from './CostOfItemsStyled';
import russia from '../../../static/images/russia.png';
import uk from '../../../static/images/uk.png';
import spain from '../../../static/images/spain.png';

const CostOfItems = () => {
  return (
    <Box>
        <Title>Cart Totals</Title>
        <Diver><Text>Subtotal</Text> <Text>250$</Text></Diver>
        <Diver><Text>Shipping</Text> <Text>
          <Text>Free Shipping +</Text>
          <Text>Flat rate: 10$</Text>
          <Text>Pickup: 10$</Text>
        </Text></Diver>
        <Diver><Text>Total</Text> <Text>260$</Text></Diver>
        <Paragraph>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem reprehenderit aliquid quos iure non incidunt est nostrum tempore neque omnis atque praesentium nemo nesciunt eum doloremque ab eveniet deleniti, optio dolorum culpa? Facere consequatur inventore minima laborum veniam reiciendis alias dicta asperiores, nihil iusto dolores aspernatur quia? Cumque laboriosam, non iste eveniet vitae voluptatem rem?</Paragraph>
        <Images>
          <Image src={russia}/>
          <Image src={uk}/>
          <Image src={spain}/>
        </Images>
        <BuyButton>Proceed to checkout</BuyButton>
    </Box>
  )
}

export default CostOfItems