import styled from 'styled-components';

export const PageWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const WholePage = styled.div`
  height: 100vh;
  width: 100%;
`;

export const LargeContainer = styled.div`
  width: 80%;
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  background-image: ${({colors}) => `linear-gradient(to bottom right, ${colors[0]}, ${colors[1]})`};
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: box-shadow 1s;
  :hover {
    box-shadow: 0 12px 20px 0 rgba(0,0,0,0.2);
  }
  margin-bottom: 40px;
`;

export const LargeTitle = styled.h1`
  color: navy;
`;

export const MediumContainer = styled.div`
  width: 40%;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  background-image: ${({colors}) => colors ? `linear-gradient(to bottom right, ${colors[0]}, ${colors[1]})` : ''};
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  margin-bottom: 40px;
  transition: box-shadow 1s;
  
  :hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }
`;

export const MediumTitle = styled.h2`
  color: navy;
`;