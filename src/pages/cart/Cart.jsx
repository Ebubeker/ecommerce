import React from 'react';
import ItemsToBuy from '../../components/innerComponents/itemstobuy/ItemsToBuy';
import CostOfItems from '../../components/innerComponents/costofitems/CostOfItems';

const Cart = () => {
  return (
    <div className='container'>
        <div className='josefinSans' style={{display: "flex", margin: "50px 0", justifyContent: "space-between"}}>
            <ItemsToBuy/>
            <CostOfItems/>
        </div>
    </div>
  )
}

export default Cart