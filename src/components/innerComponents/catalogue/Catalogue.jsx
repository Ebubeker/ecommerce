import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import {Box, Container, Card, CardPhoto, CardTitle, CardPrice, ButtonBuy, Switcher, ButtonLeft, Numbers, ButtonRight, Item} from './CatalogueStyled';
import {faCaretLeft, faCaretRight} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Catalogue = () => {
  return (
    <Box className='otherStyle'>
      <Container>
        <Card>
          <Link to="/product" style={{textDecoration: 'none', color: "#000"}}>
            <CardPhoto src="https://d1rkccsb0jf1bk.cloudfront.net/products/100032205/main/large/MeisterMEGAKl.Sekunde_058_4900_46.jpg"/>
            <CardTitle>Luxury Watch</CardTitle>
            <CardPrice>300000 ALL</CardPrice>
            <ButtonBuy>Buy It</ButtonBuy>
          </Link>
        </Card>
        <Card>
          <CardPhoto src="https://d1rkccsb0jf1bk.cloudfront.net/products/100032205/main/large/MeisterMEGAKl.Sekunde_058_4900_46.jpg"/>
          <CardTitle>Luxury Watch</CardTitle>
          <CardPrice>300000 ALL</CardPrice>
          <ButtonBuy>Buy It</ButtonBuy>
        </Card>
        <Card>
          <CardPhoto src="https://d1rkccsb0jf1bk.cloudfront.net/products/100032205/main/large/MeisterMEGAKl.Sekunde_058_4900_46.jpg"/>
          <CardTitle>Luxury Watch</CardTitle>
          <CardPrice>300000 ALL</CardPrice>
          <ButtonBuy>Buy It</ButtonBuy>
        </Card>
        <Card>
          <CardPhoto src="https://d1rkccsb0jf1bk.cloudfront.net/products/100032205/main/large/MeisterMEGAKl.Sekunde_058_4900_46.jpg"/>
          <CardTitle>Luxury Watch</CardTitle>
          <CardPrice>300000 ALL</CardPrice>
          <ButtonBuy>Buy It</ButtonBuy>
        </Card>
        <Card>
          <CardPhoto src="https://d1rkccsb0jf1bk.cloudfront.net/products/100032205/main/large/MeisterMEGAKl.Sekunde_058_4900_46.jpg"/>
          <CardTitle>Luxury Watch</CardTitle>
          <CardPrice>300000 ALL</CardPrice>
          <ButtonBuy>Buy It</ButtonBuy>
        </Card>
        <Card>
          <CardPhoto src="https://d1rkccsb0jf1bk.cloudfront.net/products/100032205/main/large/MeisterMEGAKl.Sekunde_058_4900_46.jpg"/>
          <CardTitle>Luxury Watch</CardTitle>
          <CardPrice>300000 ALL</CardPrice>
          <ButtonBuy>Buy It</ButtonBuy>
        </Card>
        <Card>
          <CardPhoto src="https://d1rkccsb0jf1bk.cloudfront.net/products/100032205/main/large/MeisterMEGAKl.Sekunde_058_4900_46.jpg"/>
          <CardTitle>Luxury Watch</CardTitle>
          <CardPrice>300000 ALL</CardPrice>
          <ButtonBuy>Buy It</ButtonBuy>
        </Card>
        <Card>
          <CardPhoto src="https://d1rkccsb0jf1bk.cloudfront.net/products/100032205/main/large/MeisterMEGAKl.Sekunde_058_4900_46.jpg"/>
          <CardTitle>Luxury Watch</CardTitle>
          <CardPrice>300000 ALL</CardPrice>
          <ButtonBuy>Buy It</ButtonBuy>
        </Card>
        <Card>
          <CardPhoto src="https://d1rkccsb0jf1bk.cloudfront.net/products/100032205/main/large/MeisterMEGAKl.Sekunde_058_4900_46.jpg"/>
          <CardTitle>Luxury Watch</CardTitle>
          <CardPrice>300000 ALL</CardPrice>
          <ButtonBuy>Buy It</ButtonBuy>
        </Card>
      </Container>
      <Switcher>
        <ButtonLeft><FontAwesomeIcon icon={faCaretLeft}/></ButtonLeft>
        <Numbers>
          <Item>1</Item>
          <Item>2</Item>
          <Item>3</Item>
          <Item>4</Item>
        </Numbers>
        <ButtonRight><FontAwesomeIcon icon={faCaretRight}/></ButtonRight>
      </Switcher>
    </Box>
  )
}

export default Catalogue;