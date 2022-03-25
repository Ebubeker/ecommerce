import styled from "styled-components";
import { deviceSize } from "../../../static/data/styles";

export const Box = styled.div`
  margin-bottom: 70px;
`;

export const Title = styled.p`
  font-size: 38px;
  font-weight: 300;
  text-align: center;
  margin: 70px 0;
  color: #fff;
  @media (max-width: ${deviceSize.tablet}) {
    margin: 30px 0;
  }
`;

export const TestemonialsBox = styled.div`
  background-color: #0f1217;
  width: 100%;
  height: 600px;
  display: flex;
  @media (max-width: ${deviceSize.tablet}) {
    display: block;
  }
`;

export const Content = styled.div`
  width: 50%;
  @media (max-width: ${deviceSize.tablet}) {
    width: 100%;
    height: 300px;
    padding: 5px 0;
  }
`;

export const Image = styled.img`
  width: 50%;
  height: 100%;
  object-fit: cover;
  @media (max-width: ${deviceSize.tablet}) {
    width: 100%;
    height: 300px;
  }
`;

export const Testemony = styled.div`
  text-align: center;
  color: #eee;
  font-style: italic;
  width: 70%;
  margin: 0 auto;
`;

export const Text = styled.p`
  font-size: 25px;
  font-weight: 300;
  @media (max-width: ${deviceSize.tablet}) {
    font-size: 18px;
  }
`;

export const Author = styled.p`
  font-size: 13px;
  color: #bbb;
`;

export const ContentDescription = styled.p`
  width: 70%;
  color: #bbb;
  margin: 0 auto;
  text-align: justify;
  font-size: 19px;
  font-weight: 300;
  margin-top: 80px;
  @media (max-width: ${deviceSize.laptop}) {
    margin-top: 50px;
    font-size: 15px;
  }
  @media (max-width: ${deviceSize.mobileM}) {
    display: none;
  }
  @media (max-width: ${deviceSize.tablet}) {
    display: none;
  }
`;
