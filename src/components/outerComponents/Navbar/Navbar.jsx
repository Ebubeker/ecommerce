import React, {useState, useRef} from 'react';
import {Box, Container} from '@mui/material';
import { BrandTitle, Nav, NavItem, Icon, Avatar, Menu, Bars, StraightLine, OpenSideways, Title, BarItem, SocialMedia } from './NavbarStyled';
import cartIcon from '../../../static/images/shopping-cart.png';
import avatar from '../../../static/images/avatar.jpg';
import { NavbarLinks } from '../../../static/data/navbar';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faInstagram, faFacebook, faTiktok} from '@fortawesome/free-brands-svg-icons';

const Navbar = () => {

  const [barStatus, setBarStatus] = useState("none");
  const sidenOpen = useRef(null);

  const changeBarStatus = () => {
    if(barStatus === "none"){
      setBarStatus("block");
    }else{
      setBarStatus("none")
    }
  }

  return (
    <Nav>
      <Container maxWidth="xl">
        <Box sx={{display: "flex", alignItems: "center", justifyContent:"space-between", paddingTop: "10px", paddingBottom: "10px"}}>
          <div>
            <BrandTitle>GoldenTick</BrandTitle>
          </div>
          <Menu>
            {NavbarLinks.map((oneLink, i)=>(
              <Link style={{textDecoration: "none"}} key={i} to={oneLink.path}>
                <NavItem>{oneLink.menuOption}</NavItem>
              </Link>
            ))}
          </Menu>
          <OpenSideways ref={sidenOpen} style={{display: barStatus}}>
            <Box sx={{padding: "30px"}}>
              <Title>Menu</Title>
              {NavbarLinks.map((oneLink, i)=>(
                  <Link style={{textDecoration: "none"}} key={i} to={oneLink.path}>
                    <BarItem>{oneLink.menuOption}</BarItem>
                  </Link>
              ))}
              <SocialMedia>
                <FontAwesomeIcon style={{width: "30px", height: "auto", color: "#cc984c", cursor: "pointer"}} icon={faInstagram}/>
                <FontAwesomeIcon style={{width: "30px", height: "auto", color: "#cc984c", cursor: "pointer"}} icon={faFacebook}/>
                <FontAwesomeIcon style={{width: "30px", height: "auto", color: "#cc984c", cursor: "pointer"}} icon={faTiktok}/>
              </SocialMedia>
            </Box>
          </OpenSideways>
          <Box sx={{display: "flex",alignItems: "center"}}>
            <Icon src={cartIcon} alt="hello" />
            <Avatar src={avatar} alt="avatar"/>
            <Bars onClick={changeBarStatus}>
              <StraightLine></StraightLine>
              <StraightLine></StraightLine>
              <StraightLine></StraightLine>
            </Bars>
          </Box>
        </Box>
      </Container>
    </Nav>
  )
}

export default Navbar