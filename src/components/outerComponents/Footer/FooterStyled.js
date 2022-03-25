import styled from "styled-components";
import { deviceSize } from "../../../static/data/styles";

export const FooterF = styled.div`
  border-top: 10px solid #000;
`;

export const Box = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 30px 0;
  @media (max-width: ${deviceSize.laptop}) {
    display: block;
  }
`;

export const Brand = styled.div`
  width: 25%;
  @media (max-width: ${deviceSize.laptop}) {
    margin: 10px auto;
    text-align: center;
  }
  @media (max-width: ${deviceSize.tablet}) {
    width: 250px;
  }
`;

export const Menu = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
  @media (max-width: ${deviceSize.laptop}) {
    width: 100%;
  }
`;

export const BrandLogo = styled.p`
  font-weight: bolder;
  font-size: 27px;
  color: #111;
  margin: 0;
`;

export const BrandEmail = styled.p`
  font-weight: 400;
  font-size: 13px;
  color: #242424;
`;

export const Social = styled.div`
  display: flex;
  width: 50%;
  justify-content: space-between;
  margin-top: 20px;
  @media (max-width: ${deviceSize.laptop}) {
    justify-content: space-between;
    margin: 20px auto;
  }
`;

export const ListRow = styled.div``;

export const Link = styled.p`
  cursor: pointer;
  font-weight: 400;
  color: #242424;
  &: hover {
    color: #000;
  }
  @media (max-width: ${deviceSize.tablet}) {
    text-align: center;
  }
`;

export const Title = styled.p``;

export const Input = styled.input`
  padding: 5px;
  outline: none;
  display: block;
  width: calc(100% - 14px);
  border: none;
  font-size: 15px;
  color: #909090;
  border: 1px solid #a2a2a2;
  border-radius: 5px;
`;

export const Button = styled.div`
  background-color: #242424;
  color: #fff;
  width: calc(100% - 42px);
  margin-top: 15px;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &: hover {
    background-color: #2f2f2f;
  }
`;

export const Newsletter = styled.div`
  width: 25%;
  width: 250px;
  text-align: center;
  margin: 0 auto;
`;
