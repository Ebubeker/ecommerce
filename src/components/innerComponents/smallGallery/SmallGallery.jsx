import React from 'react';
import {Box, About, Pone, Icon, Image} from './SmallGalleryStyled';
import airplaneIcon from '../../../static/images/plane-icon.png';
import carIcon from '../../../static/images/car-icon.png';
import medalIcon from '../../../static/images/medal-icon.png';
import lockIcon from '../../../static/images/lock-icon.png';
import Carousel from 'react-elastic-carousel';

const SmallGallery = () => {

  const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
  ];

  return (
    <Box className='josefinSans'>
        <About>
            <Pone><Icon src={airplaneIcon}/>FREE SHIPPING WORLDWIDE</Pone>
            <Pone><Icon src={carIcon}/>FREE RETURNS WORLDWIDE</Pone>
            <Pone><Icon src={medalIcon}/>24 MONTH WARRANTY</Pone>
            <Pone><Icon src={lockIcon}/>100% SECURE CHECKOUT</Pone>
        </About>
        <Carousel breakPoints={breakPoints}>
          <Image src='https://www.mvmt.com/dw/image/v2/BDKZ_PRD/on/demandware.static/-/Sites-mgi-master/default/dw93294764/images/products/28000121_ss3m.jpg?sw=533&sh=533'/>
          <Image src='https://www.mvmt.com/dw/image/v2/BDKZ_PRD/on/demandware.static/-/Sites-mgi-master/default/dweffa5ae5/images/products/28000121_ss6m.jpg?sw=533&sh=533'/>
          <Image src='https://www.mvmt.com/dw/image/v2/BDKZ_PRD/on/demandware.static/-/Sites-mgi-master/default/dw02e39c21/images/products/28000121_ss4m.jpg?sw=533&sh=533'/>
          <Image src='https://www.mvmt.com/dw/image/v2/BDKZ_PRD/on/demandware.static/-/Sites-mgi-master/default/dw928839a0/images/products/28000121_ss1m.jpg?sw=533&sh=533'/>
          <Image src='https://www.mvmt.com/dw/image/v2/BDKZ_PRD/on/demandware.static/-/Sites-mgi-master/default/dw43340a55/images/products/28000121_ss2m.jpg?sw=533&sh=533'/>
        </Carousel>
    </Box>
  )
}

export default SmallGallery