import React from 'react';
import {Container} from '@mui/material';
import {FooterF, Box, Brand, Menu, Newsletter, BrandLogo, BrandEmail, Social, ListRow, Link, Title, Input, Button} from './FooterStyled';
import {faInstagram, faFacebook, faTiktok} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
  return (
    <FooterF className="otherStyle">
        <Container maxWidth="xl">
          <Box>
            <Brand>
              <BrandLogo className='logo'>GoldenTick</BrandLogo>
              <BrandEmail>goldentick@gmail.com</BrandEmail>
              <Social>
                <FontAwesomeIcon style={{fontSize: "20px",color: "#242424" }} icon={faInstagram}/>
                <FontAwesomeIcon style={{fontSize: "20px",color: "#242424"}} icon={faFacebook}/>
                <FontAwesomeIcon style={{fontSize: "20px",color: "#242424"}} icon={faTiktok}/>
              </Social>
            </Brand>
            <Menu>
              <ListRow>
                <Link>Home</Link>
                <Link>About</Link>
                <Link>Contact</Link>
                <Link>Location</Link>
                <Link>Commercial</Link>
                <Link>Work with us</Link>
              </ListRow>
              <ListRow>
                <Link>Home</Link>
                <Link>About</Link>
                <Link>Contact</Link>
                <Link>Location</Link>
                <Link>Commercial</Link>
                <Link>Work with us</Link>
              </ListRow>
              <ListRow>
                <Link>Home</Link>
                <Link>About</Link>
                <Link>Contact</Link>
                <Link>Location</Link>
                <Link>Commercial</Link>
                <Link>Work with us</Link>
              </ListRow>
            </Menu>
            <Newsletter className='otherStyle'>
              <Title>Sing Up For Newsletter</Title>
              <Input type="text" placeholder="Subscribe..."/>
              <Button>Subscribe</Button>
            </Newsletter>
          </Box>
        </Container>
    </FooterF>
  )
}

export default Footer