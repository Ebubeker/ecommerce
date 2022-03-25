import styled from "styled-components";
import { deviceSize } from "../../../static/data/styles";

export const BrandTitle = styled.p`
  font-weight: bolder;
  font-size: 34px;
  color: #cc984c;
  margin: 0;
  @media (max-width: ${deviceSize.tablet}) {
    font-size: 25px;
  }
  @media (max-width: ${deviceSize.mobileL}) {
    font-size: 20px;
  }
`;

export const Nav = styled.div`
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;
`;

export const NavItem = styled.p`
  margin: 0 15px;
  color: #bc984d;
  cursor: pointer;
  transition: all 0.3s ease-in;
  &: hover {
    color: #7c5908;
  }
`;

export const Icon = styled.img`
  width: 40px;
  height: 40px;
  object-fit: cover;
  cursor: pointer;
  @media (max-width: ${deviceSize.mobileL}) {
    width: 25px;
    height: 25px;
  }
`;

export const Avatar = styled.img`
  width: 38px;
  height: 38px;
  object-fit: cover;
  border-radius: 50%;
  margin-left: 45px;
  border: 2px solid #d8b35e;
  padding: 3px;
  cursor: pointer;
  @media (max-width: ${deviceSize.tablet}) {
    margin-left: 20px;
  }
  @media (max-width: ${deviceSize.mobileL}) {
    width: 25px;
    height: 25px;
  }
`;

export const Menu = styled.div`
  display: flex;
  align-itmes: center;
  @media (max-width: ${deviceSize.laptop}) {
    display: none;
  }
`;

export const Bars = styled.div`
  display: none;
  cursor: pointer;
  margin-left: 45px;
  z-index: 2;
  @media (max-width: ${deviceSize.laptop}) {
    display: block;
  }
  @media (max-width: ${deviceSize.tablet}) {
    margin-left: 20px;
  }
`;

export const StraightLine = styled.div`
  width: 30px;
  height: 3px;
  background-color: #d8b35e;
  margin-bottom: 5px;
  margin-top: 5px;
  @media (max-width: ${deviceSize.tablet}) {
    width: 25px;
  }
`;

export const OpenSideways = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 100vh;
  width: 100vw;
  background-color: #fffefa;
  z-index: 1;
`;

export const Title = styled.p`
  font-weight: bolder;
  font-size: 34px;
  color: #cc984c;
  margin: 0;
  text-align: center;
  border-bottom: 3px solid #cc984c;
  padding-bottom: 10px;
  margin-bottom: 20px;
`;

export const BarItem = styled.p`
  font-size: 20px;
  text-align: center;
  color: #bc984d;
  margin: 0;
  padding: 10px 0;
  transition: all 0.3s ease-in-out;
  &: hover {
    background-color: #f0f0f0;
  }
`;

export const SocialMedia = styled.div`
  display: flex;
  width: 150px;
  justify-content: space-between;
  margin: 0 auto;
  margin-top: 30px;
`;
