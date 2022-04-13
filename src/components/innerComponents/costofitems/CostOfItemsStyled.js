import styled from "styled-components";

export const Box = styled.div`
  width: 30%;
`;

export const Title = styled.p`
  font-size: 22px;
  border-bottom: 0.4px solid #d9d9d9;
  padding-bottom: 20px;
`;

export const Diver = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 0.4px solid #d9d9d9;
  padding-bottom: 20px;
`;

export const Text = styled.p`
  font-weight: bold;
`;

export const Paragraph = styled.p`
  font-weight: 300;
  font-size: 18.5px;
`;

export const Images = styled.div`
  display: flex;
`;

export const Image = styled.img`
  width: 30px;
  height: auto;
  margin-right: 10px;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  cursor: pointer;
`;

export const BuyButton = styled.div`
  background-color: #5bbd5b;
  color: #fff;
  padding: 15px;
  justify-content: space-between;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  text-align: center;
  &: hover {
    background-color: #6ad46a;
  }
  margin: 20px 0;
`;
