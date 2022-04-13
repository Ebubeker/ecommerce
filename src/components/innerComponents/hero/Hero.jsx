import React from 'react';
import {ImageContainer, Image, Imagetwo, TextOver, TextSpan} from './HeroStyled';

const Hero = () => {
  return (
    <ImageContainer>
        <TextOver>Join <br /><TextSpan>GoldenTick</TextSpan></TextOver>
        <Image style={{boxShadow: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px'}} src='https://images.unsplash.com/photo-1437419764061-2473afe69fc2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80'/>
        <Imagetwo style={{width: '35%', }} src='https://images.unsplash.com/photo-1620625515032-6ed0c1790c75?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80'/>
    </ImageContainer>
  )
}

export default Hero