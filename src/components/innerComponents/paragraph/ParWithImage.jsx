import React from 'react';
import {TextOver, TextSpan, Image, Paragraph} from './ParWithImageStyled';

const ParWithImage = ({info}) => {
  return (
    <div>
        <TextOver>{info.title} <TextSpan>{info.title2}</TextSpan></TextOver>
        <Image src={info.image}/>
        <Paragraph>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et quasi saepe perferendis quo adipisci debitis, facilis, distinctio amet dicta perspiciatis neque tempore illo eaque aliquid.
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure perferendis ipsum nisi ipsa fugit sint alias numquam eum, error nobis obcaecati optio assumenda dicta, voluptates quam qui rerum necessitatibus placeat dolorum atque! Aperiam rerum ipsam laudantium minima rem inventore quae?
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati corporis quasi nulla et facilis hic ea laborum, suscipit numquam officiis quos voluptas, assumenda quod perspiciatis adipisci vero rerum architecto a beatae odit nostrum modi nisi!
        </Paragraph>
    </div>
  )
}

export default ParWithImage