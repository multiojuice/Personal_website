import styled from 'styled-components';

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  padding: 60px;
`;

export const PostWrapper = styled.div`
  margin-bottom: 40px;
  border-radius: 4px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  background-image: linear-gradient(#F5FAFA,#C1DAD6);
  flex-direction: ${({direction}) => (direction ? 'row' : 'row-reverse')}
`;

export const PhotoDiv = styled.div`
  height: 500px;
  width: 35%;
  background-color: #F5FAFA;
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
  color: #6D929B;
  background-color: #C1DAD6;
  width: 55%;
  position: relative;
`;

export const ReadMoreLink = styled.a`
  position: absolute;
  bottom: 40px;
  right: 50px;
  font-weight: bold;
  cursor: pointer;
  text-decoration: none;
  color: #6D929B;
  
  :hover {
    text-decoration: underline;
  }
`;