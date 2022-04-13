import styled from "styled-components";

export const Box = styled.div`
  padding: 10px 45px;
  width: 80%;
  @media (max-width: 1356px) {
    width: 70%;
  }

  @media (max-width: 912px) {
    width: 60%;
  }

  @media (max-width: 600px) {
    width: 50%;
    padding: 10px 30px;
  } ;
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto auto;
  gap: 50px;
  @media (max-width: 1356px) {
    grid-template-columns: auto auto auto;
  }

  @media (max-width: 912px) {
    grid-template-columns: auto auto;
  }

  @media (max-width: 600px) {
    grid-template-columns: auto;
  } ;
`;

export const Card = styled.div`
  cursor: pointer;
`;

export const CardPhoto = styled.img`
  width: 100%;
  height: 200px;
  margin: 0 auto;
  object-fit: cover;
  @media (max-width: 600px) {
    height: 150px;
  }
`;

export const CardTitle = styled.p`
  color: #374991;
  text-align: center;
  font-weight: bold;
  font-size: 14px;
  margin: 10px 0;
`;

export const CardPrice = styled.p`
  text-align: center;
  font-size: 15px;
  margin: 0;
`;

export const ButtonBuy = styled.p`
  background-color: #374991;
  padding: 7px;
  text-align: center;
  border-radius: 5px;
  font-weight: bold;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  color: #eee;
  &: hover {
    background-color: #5c76e0;
  }
`;

export const Switcher = styled.div`
  width: 300px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px auto;
  @media (max-width: 912px) {
    width: 100%;
  }
`;

export const ButtonLeft = styled.p`
  background: #e6e6e6;
  padding: 10px 13px;
  border-radius: 5px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &: hover {
    background-color: #d4d4d4;
  }
`;

export const Numbers = styled.div`
  display: flex;
`;

export const ButtonRight = styled.p`
  background: #e6e6e6;
  padding: 10px 13px;
  border-radius: 5px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &: hover {
    background-color: #d4d4d4;
  }
`;

export const Item = styled.p`
  margin: 0 5px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &: hover {
    color: #5c5c5c;
  }
`;
