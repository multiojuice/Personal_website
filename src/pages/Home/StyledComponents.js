import styled from 'styled-components';

export const PageWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: ${({clear}) => clear ? '' : '#f7f7f7'}
  z-index: ${({ehh}) => ehh ? 1 : ''}
`;

export const WholePage = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const WholePageTitle = styled.h1`
  color: white;
  padding: 30px;
  font-size: 48px;
  position: fixed;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 15px;
  background-image: radial-gradient(black, transparent);`;

export const LargeContainer = styled.div`
  width: 100%;
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  background-color: #f7f7f7;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: box-shadow 1s;
  :hover {
    box-shadow: 0 12px 20px 0 rgba(0,0,0,0.2);
  }
`;

export const LargeTitle = styled.h1`
  color: navy;
`;

export const MediumContainer = styled.div`
  width: 50%;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f7f7f7;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: box-shadow 1s;
  :hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }
`;

export const MediumTitle = styled.h2`
  color: navy;
`;