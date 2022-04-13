import React from 'react';
import {Box} from '@mui/material';
import {Overlay, SlideImage, Button, OverlayTitle, OverlayDesc} from './styleComponents';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const SlideShow = () => {

  const slideImages = [
    {
      url: 'https://i.pinimg.com/originals/fd/a5/ea/fda5ea974a0cbb78daa5b5df83c8c637.jpg',
      caption: 'Slide 1'
    },
    {
      url: 'https://i0.wp.com/blog.shanegraphique.com/wp-content/uploads/2015/05/HEADER-Rolex_Datejust_Turn-O-Graph.jpg?fit=1600%2C1024&ssl=1',
      caption: 'Slide 2'
    },
    {
      url: 'https://static.chrono24.com/cdn-cgi/image/f=auto,metadata=none,fit=cover,q=65,w=1200,h=600,dpr=2.0/magazine/wp-content/uploads/2021/11/Rolex-Datejust-2-1.jpg',
      caption: 'Slide 3'
    },
  ];

  return (
    <Box className='otherStyle'>
        <Slide>
          {slideImages.map((slid, i)=>(
            <SlideImage key={i} style={{backgroundImage: `url(${slid.url})`}}>
                <Overlay style={{width: "100%", display: "flex", alignItems: "flex-end", textAlign: "center", justifyContent: "center"}}>
                  <Box style={{marginBottom: "40px"}}>
                    <OverlayTitle>IT'S GO TIME</OverlayTitle>
                    <OverlayDesc>The next generation of adventure chronographs is here.</OverlayDesc>
                    <Button>SHOP HAVOC CHRONO</Button>
                  </Box>
                </Overlay>
            </SlideImage>
          ))}
        </Slide>
    </Box>
  )
}

export default SlideShow