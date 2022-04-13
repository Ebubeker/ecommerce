import React from 'react';
import {Box, ImageBox, DescriptionBox, Images, RoundImage, SingleImage, RoundImageActive, Title, Materials, Price, Description, BuyButton} from './OneProductStyled';

const OneProduct = () => {
  return (
    <Box className='josefinSans'>
        <ImageBox>
            <Images>
                <RoundImage src="https://www.mvmt.com/dw/image/v2/BDKZ_PRD/on/demandware.static/-/Sites-mgi-master/default/dw0cb9e78b/images/products/28000190_fr.jpg?sw=1660&sh=1660"/>
                <RoundImage src="https://www.mvmt.com/dw/image/v2/BDKZ_PRD/on/demandware.static/-/Sites-mgi-master/default/dw0cb9e78b/images/products/28000190_fr.jpg?sw=1660&sh=1660"/>
                <RoundImage src="https://www.mvmt.com/dw/image/v2/BDKZ_PRD/on/demandware.static/-/Sites-mgi-master/default/dw0cb9e78b/images/products/28000190_fr.jpg?sw=1660&sh=1660"/>
                <RoundImageActive src="https://www.mvmt.com/dw/image/v2/BDKZ_PRD/on/demandware.static/-/Sites-mgi-master/default/dw0cb9e78b/images/products/28000190_fr.jpg?sw=1660&sh=1660"/>
                <RoundImage src="https://www.mvmt.com/dw/image/v2/BDKZ_PRD/on/demandware.static/-/Sites-mgi-master/default/dw0cb9e78b/images/products/28000190_fr.jpg?sw=1660&sh=1660"/>
            </Images>
            <SingleImage src="https://www.mvmt.com/dw/image/v2/BDKZ_PRD/on/demandware.static/-/Sites-mgi-master/default/dw0cb9e78b/images/products/28000190_fr.jpg?sw=1660&sh=1660"/>
        </ImageBox>
        <DescriptionBox>
            <Title>Blacktop</Title>
            <Materials>Tropic Haze, 47 mm</Materials>
            <Price>L26,173.00</Price>
            <BuyButton><p>ADD TO CART</p> <Price>L26,173.00</Price></BuyButton>
            <Description>As bold as the open road. This oversized 47mm chronograph is inspired by 1960's auto culture, with double-domed glass and vintage dual dials. The Tropic Haze colorway is on island time with a lush green dial, refreshing silver steel and sunlit gold accents.</Description>
            <Description>As bold as the open road. This oversized 47mm chronograph is inspired by 1960's auto culture, with double-domed glass and vintage dual dials. The Tropic Haze colorway is on island time with a lush green dial, refreshing silver steel and sunlit gold accents.</Description>
        </DescriptionBox>
    </Box>
  )
}

export default OneProduct