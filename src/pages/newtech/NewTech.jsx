import React from 'react';
import Filter from '../../components/innerComponents/filter/Filter';
import Catalogue from '../../components/innerComponents/catalogue/Catalogue';

const NewTech = () => {
  return (
    <div className='container'>
      <p className='otherStyle' style={{fontWeight: 'bolder', fontSize: "40px", textAlign: "center"}}>New Age Watches</p>
      <div style={{display: 'flex', margin: '40px 0'}}>
        <Filter/>
        <Catalogue/>
      </div>
    </div>
  )
}

export default NewTech