import React from 'react';
import {Box, Title, Table, Image, Text, HeaderTab} from './ItemsToBuyStyled';

const ItemsToBuy = () => {
  return (
    <Box>
        <Title>Shopping Cart</Title>
        <Table>
            <tr style={{borderBottom: "1px solid #ddd"}}>
                <HeaderTab>Product</HeaderTab>
                <HeaderTab>Name</HeaderTab>
                <HeaderTab>Price</HeaderTab>
                <HeaderTab>Quantity</HeaderTab>
                <HeaderTab>Subtotal</HeaderTab>
            </tr>
            <tr style={{borderBottom: "1px solid #ddd"}}>
                <td><Image src="https://d1rkccsb0jf1bk.cloudfront.net/products/100032205/main/large/MeisterMEGAKl.Sekunde_058_4900_46.jpg"/></td>
                <Text>Watch</Text>
                <Text>12$</Text>
                <Text><input type="text" defaultValue="1" /></Text>
                <Text>12$</Text>
            </tr>
            <tr>
                <td><Image src="https://d1rkccsb0jf1bk.cloudfront.net/products/100032205/main/large/MeisterMEGAKl.Sekunde_058_4900_46.jpg"/></td>
                <Text>Watch</Text>
                <Text>12$</Text>
                <Text><input type="text" defaultValue="1" /></Text>
                <Text>12$</Text>
            </tr>
            <tr>
                <td><Image src="https://d1rkccsb0jf1bk.cloudfront.net/products/100032205/main/large/MeisterMEGAKl.Sekunde_058_4900_46.jpg"/></td>
                <Text>Watch</Text>
                <Text>12$</Text>
                <Text><input type="text" defaultValue="1" /></Text>
                <Text>12$</Text>
            </tr>
        </Table>
    </Box>
  )
}

export default ItemsToBuy