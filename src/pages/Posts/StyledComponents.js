import styled from 'styled-components';

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
`;

export const PostWrapper = styled.div`
  margin: 40px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  background-image: linear-gradient(white,black);
  flex-direction: ${({direction}) => ( direction ? 'row ': 'row-reverse')}
`;

export const PhotoDiv = styled.div`
  height: 500px;
  width: 35%;
  background-color: white;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const PostPhoto = styled.img`
  height: auto;
  width: 100%;
`;

export const TextDiv = styled.div`
  color: white;
  background-color: black;
  width: 55%;
`;