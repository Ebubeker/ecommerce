import styled from "styled-components";

export const Title = styled.p`
  font-size: 21px;
  font-weight: 600;
  margin: 10px 0;
`;

export const Box = styled.div`
  width: 20%;
  background-color: #e8e8e8;
  padding: 10px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  @media (max-width: 1356px) {
    width: 30%;
  }

  @media (max-width: 912px) {
    width: 40%;
  }

  @media (max-width: 600px) {
    width: 50%;
  } ;
`;

export const SearchBox = styled.div`
  width: 100%;
`;

export const Input = styled.input`
  padding: 5px;
  outline: none;
  width: calc(100% - 40px);
  border: none;
  font-size: 15px;
  color: #909090;
  border: 1px solid #a2a2a2;
  border-radius: 5px;
`;

export const Categories = styled.div``;

export const SectionName = styled.p``;

export const ItemList = styled.div`
  margin-left: 20px;
  color: #333;
  font-weight: 300;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  margin-bottom: 7px;
  &: hover {
    color: #6e7058;
  }
  @media (max-width: 600px) {
    font-size: 12px;
  }
`;
