import styled from 'styled-components';

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 40vh;
`;

export const TitleWrapper = styled.div`
  position: fixed;
  font-size: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  h1 {font-size: 2em;}
`;

export const ContentWrapper = styled.div`
  background-color: #f7f7f7;
  margin: 0 15%;
  padding: 30px 40px;
  z-index: 1;
`;