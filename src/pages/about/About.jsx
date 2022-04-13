import React from 'react';
import Hero from '../../components/innerComponents/hero/Hero';
import ParWithImage from '../../components/innerComponents/paragraph/ParWithImage';
import { AboutSection } from '../../static/data/about';

const About = () => {
  return (
    <div className='josefinSans'>
      <Hero/>
      {AboutSection.map((one)=>(
        <ParWithImage info={one}/>
      ))}
    </div>
  )
}

export default About