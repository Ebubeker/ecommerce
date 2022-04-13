import React from 'react';
import {Box, Details, Title, Contain, DetailDescription, Button, DetailTitle, Table, Col, Image, ImageContainer, Specifications} from './WatchDetailsStyled';
import Trending from '../trending/Trending';

const WatchDetails = () => {
  return (
    <Box className='josefinSans'>
        <Details>
          <Title>Details</Title>
          <Contain>
            <ImageContainer>
              <Image src="https://www.mvmt.com/dw/image/v2/BDKZ_PRD/on/demandware.static/-/Sites-mgi-master/default/dw750bc1c6/images/products/28000198_fr.jpg?sw=533&sh=533"/>
            </ImageContainer>
            <DetailDescription>
              <DetailTitle>GET TO KNOW THE DYNAMO BLACK</DetailTitle>
              <Button>SEE THE FIT</Button>
              <Table><Col>CASE MATERIAL</Col><Col>Polished + Brushed Black Stainless Steel</Col></Table>
              <Table><Col>DIAL DETAILS</Col><Col>Red & Grey Accents</Col></Table>
              <Table><Col>DIAL COLOR</Col><Col>Black</Col></Table>
              <Table><Col>STRAP</Col><Col>Black Stainless Steel</Col></Table>
              <Table><Col>INTERCHANGEABLE STRAP</Col><Col>Yes</Col></Table>
              <Table><Col>SUBDIALS</Col><Col>60 Second Timer & 60 Minute Timer</Col></Table>
            </DetailDescription>
          </Contain>
        </Details>
        <Specifications>
          <Title>Specifications</Title>
          <Table><Col>CASE SIZE</Col><Col>44</Col></Table>
          <Table><Col>CASE THICKNESS</Col><Col>12.2mm</Col></Table>
          <Table><Col>STRAP WIDTH</Col><Col>22mm</Col></Table>
          <Table><Col>MOVEMENT TYPE</Col><Col>Battery Powered 5 Hand Quartz Chronograph</Col></Table>
          <Table><Col>GLASS TYPE</Col><Col>Hardened Mineral Crystal</Col></Table>
          <Table><Col>WATER RESISTANCE</Col><Col>10 ATM</Col></Table>
        </Specifications>
        <Trending/>
        <div style={{marginBottom: "50px"}}></div>
    </Box>
  )
}

export default WatchDetails;