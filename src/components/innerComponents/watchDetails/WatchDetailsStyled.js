import styled from "styled-components";

export const Box = styled.div`
  margin: 30px 0;
`;

export const Details = styled.div``;

export const Specifications = styled.div``;

export const Title = styled.p`
  font-size: 25px;
`;

export const Contain = styled.div`
  display: flex;
`;

export const ImageContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
`;

export const Image = styled.img`
  height: 500px;
  width: auto;
  object-fit: cover;
`;

export const DetailDescription = styled.div`
  width: 50%;
`;

export const DetailTitle = styled.p`
  font-size: 1.5rem;
`;

export const Button = styled.div`
  display: inline-block;
  border: 2.5px solid black;
  padding: 10px 40px;
  font-size: 10px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &: hover {
    background-color: #000;
    color: #fff;
  }
  margin-bottom: 30px;
`;

export const Table = styled.div`
  display: flex;
  padding: 10px 20px;
  border-bottom: 1px solid #9c9c9c;
`;

export const Col = styled.p`
  font-size: 12px;
  width: 50%;
`;
