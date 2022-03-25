import styled from "styled-components";
import { deviceSize } from "../../../static/data/styles";

export const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  color: #fff;
  width: 100%;
  height: 800px;
  @media (max-width: ${deviceSize.laptopL}) {
    height: 600px;
  }
  @media (max-width: ${deviceSize.tablet}) {
    height: 500px;
  }
  @media (max-width: ${deviceSize.mobileL}) {
    height: 350px;
  } ;
`;

export const SlideImage = styled.div`
  width: 100%;
  height: 100%;
  object-fit: cover;
  background-position: center;
  background-size: cover;
`;

export const Button = styled.div`
  background-color: #fafafa;
  color: #000;
  display: inline;
  padding: 13px 30px 10px 30px;
  font-size: 14px;
  font-weight: bold;
`;

export const OverlayTitle = styled.p`
  font-size: 25px;
  font-weight: bold;
  margin: 0;
`;

export const OverlayDesc = styled.p`
  margin-top: 10px;
  margin-bottom: 50px;
`;
