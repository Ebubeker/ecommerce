import styled from "styled-components";
import { deviceSize } from "../../../static/data/styles";

export const Box = styled.div`
  margin: 70px 0;
`;

export const OneCategory = styled.div`
  width: 100%;
  height: 700px;
  margin-bottom: 40px;
  cursor: pointer;
`;

export const CategoryImg = styled.img`
  width: 100%;
  height: 93%;
  object-fit: cover;
  display: block;
  margin-bottom: 10px;
`;

export const CategoryName = styled.p`
  font-weight: bold;
  height: calc(7% - 10px);
  color: #fff;
  text-align: center;
  background-color: #000;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CategoryNameTwo = styled.p`
  font-weight: bold;
  height: calc(7%);
  color: #fff;
  text-align: center;
  background-color: #000;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TwoCategory = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: ${deviceSize.tablet}) {
    display: block;
  }
`;

export const SingleCat = styled.div`
  width: 49%;
  height: 500px;
  margin-bottom: 40px;
  cursor: pointer;
  @media (max-width: ${deviceSize.tablet}) {
    width: 100%;
  }
`;

export const FourCategory = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: ${deviceSize.tablet}) {
    display: block;
  }
`;

export const FourSingleCat = styled.div`
  width: 24%;
  height: 350px;
  cursor: pointer;
  margin-bottom: 40px;
  @media (max-width: ${deviceSize.tablet}) {
    width: 100%;
  }
`;
