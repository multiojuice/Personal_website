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
  justify-content: flex-end;
  height: 40vh;
  width: 100%;
  background-color: #C23F38;
  margin-bottom: 120px;
`;

export const TitleWrapper = styled.div`
  font-size: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  background-color: #600473;
  width: 70%;
  height: 40%;
  justify-content: center;
  border-radius: 3px;

  h1 {
    font-weight: 100;
    color: #F5FAFA;
    font-size: 52px;
    text-shadow: 1px 1px 1px #6D929B;
  }

  h3 {
    font-weight: 100;
    font-size: 22px;
    margin-top: 0;
    color: #6D929B;
  }
`;

export const ContentWrapper = styled.div`
  background-color: #f7f7ff;
  margin: 0 15% 60px 15%;
  padding: 30px 40px;
  z-index: 1;
  border-radius: 3px;
  border-left: 40px solid #005995;

  h1, h2, h3, h4, h5, h6 {
    font-weight: 100;
    margin: 20px 0;
  }

  h5 {
    color: #005995;
    font-size: 18px;
    font-family: 'monospace';
    margin-top: 30px;
    
    :before {
      content: '::';
    }
  }

  h3 {
    font-family: "Segoe UI", Frutiger, "Frutiger Linotype", "Dejavu Sans", "Helvetica Neue", Arial, sans-serif;
    font-size: 24px;
    color: #005995;
  }

  p {
    font-family: 'monospace';
    color: #600473;
    font-style: inherit;
    font-size: 18px;
    line-height: 30px;
  }

  blockquote {
    font-style: italic !important;
  }
`;