import styled from "styled-components";

export const ImageContainer = styled.div`
  display: flex;
  height: 630px;
  position: relative;
  margin-bottom: 70px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

export const Image = styled.img`
  object-fit: cover;
  width: 65%;
  @media (max-width: 872px) {
    width: 100%;
  }
`;

export const Imagetwo = styled.img`
  object-fit: cover;
  @media (max-width: 872px) {
    display: none;
  }
`;

export const TextOver = styled.p`
  position: absolute;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 55px;
  left: 150px;
  top: 50%;
  transform: translateY(-100%);
  color: #fff;
  text-shadow: 0px 0px 9px rgba(0, 0, 0, 0.62);
  line-height: 130%;
  @media (max-width: 872px) {
    font-size: 45px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  @media (max-width: 488px) {
    font-size: 35px;
  } ;
`;

export const TextSpan = styled.span`
  color: #cc984c;
`;
