import styled from "styled-components";

export const Box = styled.div`
  display: flex;
  margin: 50px 0;
  justify-content: space-between;
`;

export const ImageBox = styled.div`
  width: 70%;
  display: flex;
`;

export const DescriptionBox = styled.div`
  width: 23%;
`;

export const Images = styled.div`
  width: 90px;
`;

export const RoundImage = styled.img`
  height: 80px;
  width: 80px;
  object-fit: cover;
  border-radius: 50%;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  display: block;
  margin-bottom: 20px;
`;

export const RoundImageActive = styled.img`
  height: 80px;
  width: 80px;
  object-fit: cover;
  border-radius: 50%;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  border: 2px solid #000;
  display: block;
  margin-bottom: 10px;
`;

export const SingleImage = styled.img`
  width: 65%;
  margin: 0 auto;
`;

export const Title = styled.p`
  font-size: 30px;
  margin: none;
`;

export const Materials = styled.p`
  font-size: 23px;
  font-weight: 400;
  color: #1c1a1a;
`;

export const Price = styled.p`
  font-weight: 300;
  font-weight: 20px;
`;

export const Description = styled.p`
  font-weight: 300;
  font-weight: 21px;
`;

export const BuyButton = styled.div`
  background-color: #5bbd5b;
  color: #fff;
  padding: 10px 30px;
  display: flex;
  justify-content: space-between;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  &: hover {
    background-color: #6ad46a;
  }
`;
