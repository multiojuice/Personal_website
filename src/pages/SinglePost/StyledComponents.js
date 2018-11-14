import styled from 'styled-components';
import {
  red,
  darkblue,
  white,
  purple,
  darkgrey,
  yellow
} from '../../content/colors'

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
  justify-content: flex-start;
  height: 20vh;
  width: 100%;
  background-color: ${red};
  margin-bottom: 120px;
`;

export const TitleWrapper = styled.div`
  font-size: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  background-color: ${purple};
  width: 80%;
  height: 40%;
  justify-content: center;
  border-radius: 3px;

  h1 {
    font-weight: 100;
    color: ${white};
    font-size: 52px;
    text-shadow: 1px 1px 1px ${darkblue};
  }

  h3 {
    font-weight: 100;
    font-size: 22px;
    margin-top: 0;
    color: ${white};
  }
`;

export const ContentWrapper = styled.div`
  background-color: ${white};
  margin: 0 15% 60px 15%;
  padding: 30px 40px;
  z-index: 1;
  border-radius: 3px;
  border-left: 40px solid ${darkblue};
  color: ${darkgrey};

  h5 {
    color: ${darkgrey};
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
    color: ${darkgrey};
    font-weight: 500;
  }

  p {
    font-family: 'monospace';
    color: inherit;
    font-style: inherit;
    font-size: 18px;
    line-height: 30px;
  }

  blockquote {
    color: ${yellow};
    font-style: italic !impo3rtant;
    background-color: ${darkgrey};
    padding: 20px;
    font-weight: 600;
    border-radius: 5px;
    border-left: 18px solid ${red};
    border-bottom: 24px solid ${red};
  }
`;