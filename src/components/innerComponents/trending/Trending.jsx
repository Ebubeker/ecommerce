import React from 'react';
import { Container } from '@mui/material';
import { Box, Title, Card, CardTitle, CardPhoto, CardPrice } from './TrendingStyled';
import Carousel from 'react-elastic-carousel';

const Trending = () => {

  const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
  ];

  return (
    <Box className='otherStyle'>
        <Container maxWidth="xl">
            <Title>Trending Now</Title>
            <Carousel breakPoints={breakPoints}>
                <Card>
                    <CardPhoto src="https://d1rkccsb0jf1bk.cloudfront.net/products/100043607/main/large/VEZ300721.jpg"/>
                    <CardTitle>Luxury Watch</CardTitle>
                    <CardPrice>300000 ALL</CardPrice>
                </Card>
                <Card>
                    <CardPhoto src="https://d1rkccsb0jf1bk.cloudfront.net/products/100040025/main/large/VERE02120.jpg"/>
                    <CardTitle>Luxury Watch</CardTitle>
                    <CardPrice>600000 ALL</CardPrice>
                </Card>
                <Card>
                    <CardPhoto src="https://d1rkccsb0jf1bk.cloudfront.net/products/100032205/main/large/MeisterMEGAKl.Sekunde_058_4900_46.jpg"/>
                    <CardTitle>Luxury Watch</CardTitle>
                    <CardPrice>300000 ALL</CardPrice>
                </Card>
                <Card>
                    <CardPhoto src="https://d1rkccsb0jf1bk.cloudfront.net/products/100003133/main/large/98a166_1-1470297302-1299.jpg"/>
                    <CardTitle>Luxury Watch</CardTitle>
                    <CardPrice>300000 ALL</CardPrice>
                </Card>
                <Card>
                    <CardPhoto src="https://d1rkccsb0jf1bk.cloudfront.net/products/100043607/main/large/VEZ300721.jpg"/>
                    <CardTitle>Luxury Watch</CardTitle>
                    <CardPrice>300000 ALL</CardPrice>
                </Card>
            </Carousel>
        </Container>
    </Box>
  )
}

export default Trending