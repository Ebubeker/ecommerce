import React from 'react';
import SlideShow from '../../components/innerComponents/slide show/SlideShow';
import Trending from '../../components/innerComponents/trending/Trending';
import Categories from '../../components/innerComponents/categories/Categories';
import Testemonials from '../../components/innerComponents/testemonials/Testemonials';

const Home = () => {
  return (
    <>
      <SlideShow/>
      <Trending/>
      <Categories/>
      <Testemonials/>
    </>
  )
}

export default Home