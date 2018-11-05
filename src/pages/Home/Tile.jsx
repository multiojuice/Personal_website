import React from 'react';

import {
  MediumContainer,
  MediumTitle
} from './StyledComponents';

export default ({navigatePage, title}) => {
  return (
    <MediumContainer onClick={navigatePage}>
      <MediumTitle>{title}</MediumTitle>
    </MediumContainer>
  );
}