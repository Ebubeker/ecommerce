import React from 'react';
import {Box} from './LuxuryStyled';
import Filter from '../../components/innerComponents/filter/Filter';
import Catalogue from '../../components/innerComponents/catalogue/Catalogue';

const Luxury = () => {
  return (
    <div className='container'>
      <p className='otherStyle' style={{fontWeight: 'bolder', fontSize: "40px", textAlign: "center"}}>Luxury Watches</p>
      <Box>
        <Filter/>
        <Catalogue/>
      </Box>
    </div>
  )
}

export default Luxury;