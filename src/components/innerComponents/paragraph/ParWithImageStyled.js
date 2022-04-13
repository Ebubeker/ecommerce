import styled from "styled-components";

export const TextOver = styled.p`
  text-transform: uppercase;
  font-weight: 700;
  font-size: 55px;
  color: #000;
  //   text-shadow: 0px 0px 9px rgba(0, 0, 0, 0.62);
  line-height: 130%;
  text-align: center;
  width: 60%;
  margin: 30px auto;
  @media (max-width: 604px) {
    font-size: 35px;
  } ;
`;

export const TextSpan = styled.span`
  color: #cc984c;
`;

export const Image = styled.img`
  height: 750px;
  width: 100%;
  object-fit: cover;
`;

export const Paragraph = styled.p`
  width: 80%;
  margin: 30px auto;
  text-align: center;
  font-size: 18px;
  font-weight: 300;
  margin-bottom: 70px;
`;
