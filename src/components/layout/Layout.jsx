import React from 'react';
import Navbar from '../outerComponents/Navbar/Navbar';
import Promotion from '../outerComponents/promotion/Promotion';
import Footer from '../outerComponents/Footer/Footer';

const Layout = ({children}) => {
  return (
    <>
      <Promotion/>
      <Navbar/>
      {children}
      <Footer/>
    </>
  )
}

export default Layout