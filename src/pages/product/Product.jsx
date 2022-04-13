import React from 'react';
import OneProduct from '../../components/innerComponents/product/OneProduct';
import SmallGallery from '../../components/innerComponents/smallGallery/SmallGallery';
import WatchDetails from '../../components/innerComponents/watchDetails/WatchDetails';

const Product = () => {
  return (
    <div className='container'>
        <OneProduct/>
        <SmallGallery/>
        <WatchDetails/>
    </div>
  )
}

export default Product