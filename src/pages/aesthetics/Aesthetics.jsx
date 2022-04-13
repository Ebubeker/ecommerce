import React from 'react'
import Filter from '../../components/innerComponents/filter/Filter';
import Catalogue from '../../components/innerComponents/catalogue/Catalogue';

const Aesthetics = () => {
  return (
    <div className='container'>
      <p className='otherStyle' style={{fontWeight: 'bolder', fontSize: "40px", textAlign: "center"}}>Aesthetic Watches</p>
      <div style={{display: 'flex', margin: '40px 0'}}>
        <Filter/>
        <Catalogue/>
      </div>
    </div>
  )
}

export default Aesthetics